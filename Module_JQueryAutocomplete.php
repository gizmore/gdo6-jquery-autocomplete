<?php
namespace GDO\JQueryAutocomplete;

use GDO\Core\GDO_Module;
use GDO\Core\GDT_Array;
use GDO\Core\Module_Core;

/**
 * EasyAutocomplete wrapper module.
 * 
 * @author gizmore
 * @version 6.10
 * @since 6.10
 */
final class Module_JQueryAutocomplete extends GDO_Module
{
    public $module_priority = 45;
    
    public function getDependencies() { return ['JQuery']; }
    
    public function thirdPartyFolders() { return ['/EasyAutocomplete/']; }
    
    public function onIncludeScripts()
    {
        $min = Module_Core::instance()->cfgMinifyJS() === 'no' ? '' : '.min';

        $this->addCSS("EasyAutocomplete/dist/easy-autocomplete{$min}.css");
        $this->addCSS("EasyAutocomplete/dist/easy-autocomplete.themes{$min}.css");
        $this->addJavascript("EasyAutocomplete/dist/jquery.easy-autocomplete{$min}.js");
        $this->addJavascript("js/gdo6-easy-autocomplete.js");
    }
    
    public function hookIgnoreDocsFiles(GDT_Array $ignore)
    {
        $ignore->data[] = 'GDO/JQueryAutocomplete/EasyAutocomplete/**/*';
    }

}
