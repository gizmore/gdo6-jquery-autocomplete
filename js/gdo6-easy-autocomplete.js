"use strict"
$(function(){
	$('.gdo-autocomplete').each(function(){
		var $this = $(this);
		var config  = JSON.parse($this.attr('data-config'));
		console.log(config);
		var $hidden = $('#completion-'+config.name);
		var name = $this.attr('name');
		$this.attr('name', '');
		$hidden.attr('name', name);
		$this.attr('placeholder', config.emptyLabel);
		$hidden.val(config.selected.id);
		if (config.selected) {
			if (config.multiple) {
				console.error('MULTUPLE COMPLETION NOT SUPPORTED YET.');
			} else {
				if (config.selected.id !== config.emptyValue) {
					$this.val(config.selected.text);
				} else {
					$this.val('');
				}
			}
		}
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
//		    theme: 'round',
		    list: {
				maxNumberOfElements: 20,
				onChooseEvent: function() {
		            var selectedItemValue = $this.getSelectedItemData().id;
		            $hidden.val(selectedItemValue);
		        },
		    }
		};
		$this.easyAutocomplete(options);
	});

});
