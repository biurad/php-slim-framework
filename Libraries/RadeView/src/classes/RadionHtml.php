<?php


 // Get Site Address Dynamically
$site_addr = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['SCRIPT_NAME']);
	
 //Must end with /
$site_addr = rtrim($site_addr, "/\\") . "/"; 
 
 // Can Be Set Manually Like "http://localhost/mysite/".
define('SITE_ADDR', $site_addr);


/**
 * Html Helper Class
 * -----------------
 * Use To Display Customisable Html Page Component.
 * @category  View Helper
 */

class Html
{
    /** @var string PHP tag. You could use <?php or <? (if shorttag is active in php.ini) */
    public $phpTag = '<?php ';

    /**
     * Doctype Html
     * ------------
     * Use To Display The Doctype in Php, Phtml, or tpl.
     * USE IT LIKE THIS:  Html :: doctype();
     * 
     * To Add Custom Names To It.
     * -------------------------
     * USE IT LIKE THIS:  Html :: doctype('PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"');
     * @return Html
     */
    public static function doctype($expression = null)
    {
        ?>
         <!Doctype Html <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
         <?php

    }

    /**
     * Html Dom Tag
     * ------------
     * Use To Display The Html tag in Php, Phtml, or tpl.
     * USE IT LIKE: Html::domTag();
     * 
     * It will print out <html>
     * To Add Custom Names To It.
     * -------------------------
     * USE IT LIKE THIS: Html :: domTag($type='div', $id='IDNAME', $class='CLASSNAME');
     * @return Html
     */
    public static function dom($type = "html", $id = null, $class = null, $expression = null)
    {
        if($type == "html") {
            ?>
            <html <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "body") {
         ?>
         <body <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
         <?php
        }
        elseif($type == "div") {
            ?>
            <div <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "article") {
            ?>
            <article <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "section") {
            ?>
            <section <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "main") {
            ?>
            <main <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "footer") {
            ?>
            <footer <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "p") {
            ?>
            <p <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "param") {
            ?>
            <param <?php echo ($id != null ? 'name="' . $id . '"' : null) ?> <?php echo ($class != null ? 'value="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "embed") {
            ?>
            <embed <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php
        }
        elseif($type == "script") {
            ?>
            <script type="text/javascript">
            <?php
        }
        elseif ($type == "style") {
            ?>
            <style type="text/css">
            <?php
        }
        elseif ($type == "span") {
            ?>
            <span>
            <?php
        }
        elseif ($type == "comment") {
            ?>
            <!-- <?php echo ($id != null ? ''. $id .'' : null) ?> -->
            <?php
            
        }
        elseif ($type == "br") {
            ?>
            <br />
            <?php  
        }
        elseif ($type == "noscript") {
            ?>
            <noscript>
            <?php  
        }
        elseif ($type == "nav") {
            ?>
            <nav <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "aside") {
            ?>
            <aside <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "li") {
            ?>
            <li <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "ol") {
            ?>
            <ol <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "ul") {
            ?>
            <ul <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "dl") {
            ?>
            <dl <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "dt") {
            ?>
            <dt <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "dd") {
            ?>
            <dd <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "table") {
            ?>
            <table <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "header") {
            ?>
            <header <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php  
        }
        elseif ($type == "head") {
            ?>
            <head <?php echo ($id != null ? 'src="' . $id . '"' : null) ?> <?php echo ($class != null ? 'type="' . $class . '"' : null) ?>>
            <?php   
        }
        elseif ($type == "hr") {
            ?>
            <hr />
            <?php  
        }
        elseif ($type == "svg") {
            ?>
            <svg>
            <?php  
        }
    }

    public static function a($href=null, $target=null, $rel=null) {
        ?>
        <a <?php echo ($href != null ? 'href="' . $href . '"' : null) ?> <?php echo ($target != null ? 'target="' . $target . '"' : null) ?> <?php echo ($rel != null ? '' . $rel . '' : null) ?>>
        <?php
    }

        /**
         * Path Html
         * ------------
         * Use To Display The Path Tag in Php, Phtml, or tpl.
         * USE IT LIKE THIS:  Html :: path($type="file");
         * 
         * To Add Custom Names To It.
         * -------------------------
         * USE IT LIKE THIS:  Html :: path($type="meta", $value='Author', $expression="BiuStudio");
         * @return Html
         */
        public static function path($type = "", $value = null, $expression = null)
        {
            if ($type == "css") {
                ?>
            <link rel="stylesheet" <?php echo ($value != null ? 'href="' . $value . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?> />
            <?php

        } elseif ($type == "javascript") {
            ?>
            <script type="text/javascript" <?php echo ($value != null ? 'src="' . $value . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>></script>
            <?php

        } elseif ($type == "favicon") {
            ?>
            <link rel="icon" type="image/png" <?php echo ($value != null ? 'href="' . $value . '"' : null) ?>>
            <?php

        } elseif ($type == "meta") {
            ?>
            <meta name="<?php echo ($value != null ? '' . $value . '' : null) ?>" content="<?php echo ($expression != null ? '' . $expression . '' : null) ?>" />
            <?php

        } elseif ($type == "file") {
            ?>
             <?php echo ($value != null ? '' . $value . '' : null) ?>
             <?php

        }
    }

    public static function img($type = "", $src = null, $alt = null, $w = null, $h = null, $id = null, $class = null)
    {
        if ($type == "raw") {
            ?>
             <img <?php echo ($src != null ? 'src="' . $src . '"' : null) ?> <?php echo ($alt != null ? 'alt="' . $alt . '"' : null) ?> <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($w != null ? 'width="' . $w . '"' : null) ?> <?php echo ($h != null ? 'height="' . $h . '"' : null) ?>>
             <?php

        } elseif ($type == "rendered") {
            $arrsrc = explode(",", $src);
            foreach ($arrsrc as $src) {
                $preview = SITE_ADDR . $src;
                $src = SITE_ADDR . "assets.php?src=$preview";
                $src .= ($h != null ? "&h=$h" : null);
                $src .= ($w != null ? "&w=$w" : null);
                ?>
                <img <?php echo ($src != null ? 'src="' . $src . '"' : null) ?> <?php echo ($alt != null ? 'alt="' . $alt . '"' : null) ?> <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?>>
                <?php

            }
        }
    }

    public static function heading($type = "", $id = null, $class = null, $expression = null)
    {
        if ($type == "h1") {
            ?>
            <h1 <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php

        } elseif ($type == "h2") {
            ?>
            <h2 <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php

        } elseif ($type == "h3") {
            ?>
            <h3 <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php

        } elseif ($type == "h4") {
            ?>
            <h4 <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php

        } elseif ($type == "h5") {
            ?>
            <h5 <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php

        } elseif ($type == "h6") {
            ?>
            <h6 <?php echo ($id != null ? 'id="' . $id . '"' : null) ?> <?php echo ($class != null ? 'class="' . $class . '"' : null) ?> <?php echo ($expression != null ? '' . $expression . '' : null) ?>>
            <?php

        }
    }

    public static function closure($type="") {
        if ($type == "body") {
            ?>
            </body>
            <?php

        } elseif ($type == "div") {
            ?>
            </div>
            <?php

        } elseif ($type == "main") {
            ?>
            </main>
            <?php

        } elseif ($type == "article") {
            ?>
            </article>
            <?php
            
        } elseif ($type == "section") {
            ?>
            </section>
            <?php
            
        } elseif ($type == "footer") {
            ?>
            </footer>
            <?php
            
        } elseif ($type == "p") {
            ?>
            </p>
            <?php
            
        } elseif ($type == "span") {
            ?>
            </span>
            <?php
            
        } elseif ($type == "li") {
            ?>
            </li>
            <?php
            
        } elseif ($type == "html") {
            ?>
            </html>
            <?php
            
        } elseif ($type == "ol") {
            ?>
            </ol>
            <?php
            
        } elseif ($type == "ul") {
            ?>
            </ul>
            <?php
            
        } elseif ($type == "h1") {
            ?>
            </h1>
            <?php
            
        } elseif ($type == "h2") {
            ?>
            </h2>
            <?php
            
        } elseif ($type == "h3") {
            ?>
            </h3>
            <?php
            
        } elseif ($type == "h4") {
            ?>
            </h4>
            <?php
            
        } elseif ($type == "h5") {
            ?>
            </h5>
            <?php
            
        } elseif ($type == "h6") {
            ?>
            </h6>
            <?php
            
        } elseif ($type == "style") {
            ?>
            </style>
            <?php
            
        } elseif ($type == "script") {
            ?>
            </script>
            <?php
            
        } elseif ($type == "nav") {
            ?>
            </nav>
            <?php
            
        } elseif ($type == "aside") {
            ?>
            </aside>
            <?php
            
        } elseif ($type == "table") {
            ?>
            </table>
            <?php
            
        } elseif ($type == "header") {
            ?>
            </header>
            <?php
            
        } elseif ($type == "head") {
            ?>
            </head>
            <?php
            
        } elseif ($type == "svg") {
            ?>
            </svg>
            <?php
            
        }
    }
}