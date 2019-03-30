<?php

namespace Controller;

use Config;
use Viewer;

class Web
{
    public function handle() {
        Viewer::file('frontend.web');
    }

    static function ClearCache() {
        $path = BR_PATH.'Resources/' . Config::get('theme','storage_path').'/framework';
        if ($handle = opendir($path)) {
            while (false !== ($file = readdir($handle))) {
                if (strripos($file, '.rade') !== false) {
                    @unlink($path . '/' . $file);
                }
            }
        }
    }
}