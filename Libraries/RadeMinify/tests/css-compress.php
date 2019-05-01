<?php

header('Content-type: text/css');
ob_start('compress_css');

function compress_css($buffer)
{
    /* remove comments in css file */
    $buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
    /* also remove tabs, spaces, newlines, etc. */
    $buffer = str_replace(["\r", "\n", "\r\n", "\t", '  ', '    ', '    '], '', $buffer);

    return $buffer;
}

/* a list of your css files */
include 'style.css';
include 'css/menu.css';
include 'css/typography.css';
include 'css/print.css';
include 'inc/css/footer.css';

ob_end_flush();
