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
		    maxNumberOfElements: 10,
		    template: {
		        type: "custom",
		        method: function(value, item) {
		        	return item.display;
		        }
		      },
		};
		$this.easyAutocomplete(options);
	});
});
