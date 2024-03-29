<?php
namespace GDO\JQueryAutocomplete;

use GDO\Core\GDO_Module;
use GDO\Core\GDT_Array;
use GDO\Javascript\Module_Javascript;

/**
 * EasyAutocomplete wrapper module.
 * 
 * @link https://github.com/pawelczak/EasyAutocomplete
 * 
 * @author gizmore
 * @version 6.10.1
 * @since 6.10.0
 */
final class Module_JQueryAutocomplete extends GDO_Module
{
    public $module_priority = 45;
    
    public function getDependencies() { return ['JQuery']; }
    
    public function thirdPartyFolders() { return ['/EasyAutocomplete/']; }
    
    public function onIncludeScripts()
    {
        $min = Module_Javascript::instance()->cfgMinAppend();

        $this->addCSS("EasyAutocomplete/dist/easy-autocomplete{$min}.css");
        $this->addCSS("EasyAutocomplete/dist/easy-autocomplete.themes{$min}.css");
        $this->addJS("EasyAutocomplete/dist/jquery.easy-autocomplete{$min}.js");
        $this->addJS("js/gdo6-easy-autocomplete.js");
    }
    
    public function hookIgnoreDocsFiles(GDT_Array $ignore)
    {
        $ignore->data[] = 'GDO/JQueryAutocomplete/EasyAutocomplete/**/*';
    }

}
