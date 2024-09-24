django.jQuery(function sortableChangelist($) {

	// hide the position column
	$('#result_list th:contains("Position")').hide();
	$('#result_list input[id$="position"]').closest('td').hide();
	$('#result_list tbody tr').css('cursor', 'move');

	$('#result_list tbody').sortable({
		axis: 'y',
		items: 'tr',
		cancel: 'input,textarea,button,select,option,.sortable-cancel',
		cursor: 'move',
		update: function (event, ui) {
			items = $(this).find('tr').get();
			$(items).each(function (i) {
				$('input[id$=position]', this).val(i + 1);
			});

			// Update row classes
			$(this).find('tr').removeClass('row1').removeClass('row2');
			$(this).find('tr:even').addClass('row1');
			$(this).find('tr:odd').addClass('row2');
		}
	});
});
