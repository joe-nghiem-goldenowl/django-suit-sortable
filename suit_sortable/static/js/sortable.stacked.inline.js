django.jQuery(function sortableStackedInline() {

	// restrain jQuery context to `SortableStackedInline` elements
	var $context = window.$('.suit-sortable-stacked');
	var $ = $context.find.bind($context);
	
	// hide the position column
	$('th:contains("Position"), td.field-position').hide();

	if($('.inline-group').find('input[name$=-INITIAL_FORMS]').val() <= 1){
		return;
	}

	$('.inline-related:not(.last-related) h3').css('cursor', 'move');

	$('.inline-group h2:first').append('<span class="description">Note: Drag &amp; drop rows to reorder. Save new inline row first</span>')

	$('.inline-group').sortable({
		axis: 'y',
		items: '.inline-related:not(.last-related)',
		cancel: 'input,textarea,button,select,option,.sortable-cancel',
		cursor: 'move',
		update: function (event, ui) {
			$('.inline-related:not(.last-related)').each(function (i) {
				window.$('input[id$=position]', this).val(i + 1);
			});
		},
	});
});

