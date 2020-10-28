<?php
namespace GDO\JQueryAutocomplete;

use GDO\Core\GDO_Module;
use GDO\Core\Module_Core;
use GDO\DB\GDT_Checkbox;

/**
 * EasyAutocomplete wrapper module.
 * 
 * @author gizmore
 * @version 6.10
 * @since 6.10
 */
final class Module_JQueryAutocomplete extends GDO_Module
{
    public $module_priority = 15;
    
    public function getDependencies() { return ['JQuery']; }
    
//     public function getConfig()
//     {
//         return array(
//             GDT_Checkbox::make('use_easy_autocomplete')->initial('1'),
//         );
//     }
//     public function cfgEasyComplete() { return $this->getConfigValue('use_easy_autocomplete'); }
    
    public function onIncludeScripts()
    {
        $min = Module_Core::instance()->cfgMinifyJS() === 'no' ? '' : '.min';
//         if ($this->cfgEasyComplete())
//         {
            $this->addCSS("EasyAutocomplete/dist/easy-autocomplete{$min}.css");
            $this->addCSS("EasyAutocomplete/dist/easy-autocomplete.themes{$min}.css");
            $this->addJavascript("EasyAutocomplete/dist/jquery.easy-autocomplete{$min}.js");
            $this->addJavascript("js/gdo6-easy-autocomplete.js");
//         }
    }
    
}
