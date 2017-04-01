$(document).ready(function init() {
	for(let i = 0; i < 16; i++) {
		for(let j = 0; j < 16; i++) {
			let $div = $('<div>').addClass('pixel')
			$('.board').append($div)
		}
	}
})