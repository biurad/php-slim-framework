<?php

namespace Rlis\RadeView;

/**
 * Its an example of a custom set of functions for RadeView.
 * in examples/TestCustom.php there is a working example.
 */
trait RadeCustom
{
    public $customItem = []; // indicates the type of the current tag. such as select/selectgroup/etc.

    //<editor-fold desc="compile function">

    /**
     * Usage @panel('title',true,true).....@endpanel().
     *
     * @param $expression
     *
     * @return string
     */
    protected function compilePanel($expression)
    {
        array_push($this->customItem, 'Panel');

        return $this->phpTag."echo \$this->panel{$expression}; ?>";
    }

    protected function compileEndPanel()
    {
        $r = @array_pop($this->customItem);
        if (is_null($r)) {
            $this->showError('@endpanel', 'Missing @compilepanel or so many @compilepanel', true);
        }

        return ' </div></section><!-- end panel -->'; // we don't need to create a function for this.
    }

    //</editor-fold>

    //<editor-fold desc="used function">
    public function panel($title = '', $toggle = true, $dismiss = true)
    {
        return "<section class='panel'>
                <header class='panel-heading'>
                    <div class='panel-actions'>
                        ".(($toggle) ? "<a href='#' class='panel-action panel-action-toggle' data-panel-toggle></a>" : '').'
                        '.(($dismiss) ? "<a href='#' class='panel-action panel-action-dismiss' data-panel-dismiss></a>" : '')."
                    </div>
    
                    <h2 class='panel-title'>$title</h2>
                </header>
                <div class='panel-body'>";
    }

    protected function compileHtml($expression)
    {
        return $this->phpTag."echo \$this->html{$expression}; ?>";
    }

    public function html($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<html id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndHtml()
    {
        return $this->phpTag.'echo </html>; ?>';
    }

    protected function compileDiv($expression)
    {
        return $this->phpTag."echo \$this->div{$expression}; ?>";
    }

    public function div($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<div id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileSec($expression)
    {
        return $this->phpTag."echo \$this->__sectio{$expression}; ?>";
    }

    public function __sectio($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<section id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndSec()
    {
        return $this->phpTag.'echo </section>; ?>';
    }

    protected function compileArticle($expression)
    {
        return $this->phpTag."echo \$this->article{$expression}; ?>";
    }

    public function article($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<article id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndArticle()
    {
        return $this->phpTag.'echo </article>; ?>';
    }

    protected function compileMain($expression)
    {
        return $this->phpTag."echo \$this->main{$expression}; ?>";
    }

    public function main($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<main id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndMain()
    {
        return $this->phpTag.'echo </main>; ?>';
    }

    protected function compileFooter($expression)
    {
        return $this->phpTag."echo \$this->footer{$expression}; ?>";
    }

    public function footer($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<footer id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndFooter()
    {
        return $this->phpTag.'echo </footer>; ?>';
    }

    protected function compileBody($expression)
    {
        return $this->phpTag."echo \$this->body{$expression}; ?>";
    }

    public function body($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<body id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndBody()
    {
        return $this->phpTag.'echo </body>; ?>';
    }

    protected function compileHead($expression)
    {
        return $this->phpTag."echo \$this->_head{$expression}; ?>";
    }

    public function _head($id, $class, $extra = '')
    {
        if ($id || $class) {
            return $this->phpTag."echo <head id='".static::e($id);
            "' class='".static::e($class);
            "' $extra> ?>";
        } else {
            return '<head>';
        }
    }

    protected function compileEndHead()
    {
        return $this->phpTag.'echo </head>; ?>';
    }

    protected function compileNav($expression)
    {
        return $this->phpTag."echo \$this->nav{$expression}; ?>";
    }

    public function nav($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<nav id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndNav()
    {
        return $this->phpTag.'echo </nav>; ?>';
    }

    protected function compileParagraph($expression)
    {
        return $this->phpTag."echo \$this->paragragh{$expression}; ?>";
    }

    public function paragraph($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<p id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndParagragh()
    {
        return $this->phpTag.'echo </p>; ?>';
    }

    protected function compileParam($expression)
    {
        return $this->phpTag."echo \$this->param{$expression}; ?>";
    }

    protected function compileEndParam()
    {
        return $this->phpTag.'echo </param>; ?>';
    }

    protected function compileNoscript($expression)
    {
        return $this->phpTag."echo \$this->noscript{$expression}; ?>";
    }

    public function noscript()
    {
        return '<noscript>';
    }

    protected function compileEndNoscript()
    {
        return $this->phpTag.'echo </noscript>; ?>';
    }

    protected function compileAside($expression)
    {
        return $this->phpTag."echo \$this->aside{$expression}; ?>";
    }

    public function aside($id, $class, $extra = '')
    {
        if ($id != null && $class != null) {
            return "<aside id='".static::e($id)."' class='".static::e($class)."' $extra>";
        } else {
            return;
        }
    }

    protected function compileEndAside()
    {
        return $this->phpTag.'echo </aside>; ?>';
    }

    //</editor-fold>
}
