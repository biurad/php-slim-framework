<?php

use Radion\Debugger;

class Logger
{
    /** @var string full filename of the log file. If it's empty then it doesn't store a log file. The log file is limited to 1mb */
    var $logFile = "";
    /** @var int 0=no log (but error), 1=normal,2=verbose */
    public $logLevel=2;

      /** @var string last query executed */
    var $lastQuery;
    var $lastParam=[];
      /**
	 * Text date format
	 * @var string 
	 * @see https://secure.php.net/manual/en/function.date.php
	 */
    public static $dateFormat = 'Y-m-d';
    /**
	 * Text datetime format
	 * @var string
	 * @see https://secure.php.net/manual/en/function.date.php
	 */
    public static $dateTimeFormat = 'Y-m-d\TH:i:s\Z';
    /**
	 * Text datetime format with microseconds
	 * @var string
	 * @see https://secure.php.net/manual/en/function.date.php
	 */
    public static $dateTimeMicroFormat = 'Y-m-d\TH:i:s.u\Z';
    /** @var string|null Static date (when the date is empty) */
    static $dateEpoch = "2000-01-01 00:00:00.00000";
    //<editor-fold desc="server fields">
    var $nodeId=1;
    /** @var bool If true (default), then it throws an error if happens an error. If false, then the execution continues */
    var $throwOnError=true;

    public function __construct()
    {
        $this->logFile = BR_PATH.'Resources/' . Config::get('theme','storage_path');
    }
    /**
	 * Write a log line for debug, clean the command chain then throw an error (if throwOnError==true)
	 * @param $txt
	 * @throws Debugger
	 */
	function throwError($txt)
	{
		if ($this->getMessages()===null) {
			$this->debugFile($txt,'ERROR');
		} else {
			//$this->getMessages()->addItem($txt);
			$this->debugFile($txt,'ERROR');
		}

		if ($this->throwOnError) throw Debugger::display('wrong',$txt);
    }
    
    /**
	 * Injects a Message Container.
	 * @return MessageList|null
	 * @test equals null,this(),'this is not a message container'
	 */
	public function getMessages() {
		if (function_exists('messages')) {
			return messages();
		}
		return null;
    }
    
	/**
	 * Write a log line for debug, clean the command chain then throw an error (if throwOnError==true)
	 * @param $txt
	 * @throws Debugger
	 */
	function storeInfo($txt)
	{
		if ($this->getMessages()===null) {
			$this->debugFile($txt,'INFO');
		} else {
			//$this->getMessages()->addItem($txt,"info");
			$this->debugFile($txt,'INFO');
		}
    }
    
	function debugFile($txt,$level='INFO') {
		if ($this->logFile == '') {
			return; // debug file is disabled.
		}
		$fz = @filesize($this->logFile);

		if (is_object($txt) || is_array($txt)) {
			$txtW = print_r($txt, true);
		} else {
			$txtW = $txt;
		}
		if ($fz > 10000000) {
			// mas de 10mb = reducirlo a cero.
			$fp = @fopen($this->logFile, 'w');
		} else {
			$fp = @fopen($this->logFile, 'a');
		}
		if ($this->logLevel==2) {
			$txtW.=" param:".json_encode($this->lastParam);
		}

		$txtW = str_replace("\r\n", " ", $txtW);
		$txtW = str_replace("\n", " ", $txtW);
		$now = new \DateTime();
		@fwrite($fp, $now->format('c')."\t".$level."\t".$txtW . "\n");
		@fclose($fp);
	}
}