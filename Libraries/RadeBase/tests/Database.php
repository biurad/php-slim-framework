<?php

define('BR_PATH', realpath(dirname(__FILE__)) .'/');
require('../src/RadeBaseLib.php');
require('../vendor/autoload.php');

use Librabries\RadeBase;
use Radion\Debugger;

Radion\Config::setEnv();
Debugger::start();
$db = new RadeBase();
$db->connect();


$rows=<<<TAG
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Chocolate', 'cupcake1.jpg', '20', 'Chocolate');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Cupcake Normal', 'cupcake2.jpg', '30', 'Cupcake Normal');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Gourmet', 'cupcake3.jpg', '35.5', 'Gourmet');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Apple Pie', 'cupcake4.jpg', '43.3', 'Apple Pie');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Sprinkles', 'cupcake5.jpg', '24.3', 'Sprinkles');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Butter', 'cupcake6.jpg', '32.2', 'Butter');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Lemon', 'cupcake7.jpg', '22.3', 'Lemon');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Brownies', 'cupcake8.jpg', '32.2', 'Brownies');
INSERT INTO `cupcakes`.`cupcakes` (`Name`, `Image`, `Price`, `Description`) VALUES ('Bubbly', 'cupcake9.jpg', '33.2', 'Bubbly');
TAG;

$db->runMultipleRawQuery($rows);