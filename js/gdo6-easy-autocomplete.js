"use strict"
$(function(){
	$('.gdo-autocomplete').each(function(){
		var $this = $(this);
		var config  = JSON.parse($this.attr('data-config'));
		var options = {
			url: function (query) {
				return config.completionHref + '&fmt=json&query=' + query;
			},
			getValue: 'text',
		    template: {
		        type: "custom",
		        method: function(value, item) {
		        	return item.display;
		        }
		    },
		    list: {
		    	onChooseEvent: function() {
		            var selectedItemValue = $this.getSelectedItemData().id;
		            $('#completion-'+config.name).val(selectedItemValue);
		        },
		    }
		};
		$this.easyAutocomplete(options);
	});

	$('.gdo-autocomplete-enum').each(function(){
		var $this = $(this);
		var config  = JSON.parse($this.attr('data-config'));
		console.log(config);
		var options = {
			
		};
		
	});
});
