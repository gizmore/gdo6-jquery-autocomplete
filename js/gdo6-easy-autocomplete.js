"use strict"
$(function(){
	$('.gdo-autocomplete-input').each(function(){
		var $this = $(this);
		var config  = $this.attr('data-config');
		config = JSON.parse(config);
		var hiddenID = 'completion-'+config.name;
		var $hidden = $('#'+hiddenID);
		// if this input has a name, we need to switch names with the hidden input that holds the selected ID.
		var name = $this.attr('name');
		if (name) { 
			$this.attr('name', '');
			$hidden.attr('name', name);
		}
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
			requestDelay: 700,
			placeholder: $(this).attr('placeholder'),
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
		            $this.focus();
		        },
		    }
		};
	
		/**
		 * On enter, check if the list is closed. if it is closed, submit the form.
		 */
		$this.keydown(function(event) {
			if (event.keyCode === 13) {
				var $eaccul = $('#eac-container-'+config.id+' ul');
				if ($eaccul.css('display') === 'none') {
	        		$this.closest('form').find('input[type=submit]:first').click();
				}
				else {
					event.preventDefault();
				}
			}
			
			if (config.combobox) {
				setTimeout(function(){
					$hidden.val($this.val());
				});
			}
		});
		
		$this.easyAutocomplete(options);
		
		$this.parent().css('width', 'auto'); // fix bad width patch from lib.
	});
});
