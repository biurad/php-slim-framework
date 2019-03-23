<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex,nofollow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>No Error Found</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            <?php include('Resources/Themes/assets/css/error.css');
            ?>
        </style>
        </head>
        <body>
        <aside class="error-view">
            <header>
            <?php
                if(Radion\Request::get('code') === '403'){
                    ?> <script>document.title = 'Something Went Wrong';</script> <?php
                    ?> <span id="err-404">Error: </span><span id="message">403 Access Forbidden</span> <?php
                }else if(Radion\Request::get('code') === '401'){
                    ?> <script>document.title = 'Something Went Wrong';</script> <?php
                    ?> <span id="err-404">Error: </span><span id="message">401</span> <?php
                } else if(Radion\Request::get('code') === 'corrupted') {
                    ?> <script>document.title = 'Something Went Wrong';</script> <?php
                    ?> <span id="err-404">Error: </span><span id="message">Html Check Failed</span> <?php
                } else {
                    ?> <span id="err-404">Error: </span><span id="message">None</span> <?php
                }
            ?>
            </header>
            <div class="error-msg">
            <?php
                if(Radion\Request::get('code') === '403'){
                    ?> <span id='err-msg'>You don't have permission to access this area on this server.</span> <?php
                }else if(Radion\Request::get('code') === '401'){
                    ?> <span id='err-msg'>You don't have permission to access this area on this server.</span><?php
                } else if(Radion\Request::get('code') === 'corrupted') {
                    ?> <span id='err-msg'>"info.phtml" is corrupted, please reinstall biurad using composer.</span> <?php
                } else {
                    ?> <span id='err-msg'>Congrats, We found no error</span> <?php
                }
            ?>
            </div>
        </aside>
        </body>
        </html>
        