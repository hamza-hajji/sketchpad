$(document).ready(function init() {
	// build the grid
	let WIDTH = 700, // board size = 700x700
		pixels = 16

	for(let i = 0; i < 100; i++) {
		for(let j = 0; j < 100; j++) {
			let $div = $('<div>').addClass('pixel').css({
				width: WIDTH / pixels + 'px',
				height: WIDTH / pixels + 'px'
			})
			$('.board').append($div)
		}
	}

	// paint the div(pixel) on hover
	$('.pixel').hover(function paint(e) {
		$(this).addClass('painted')
	})
}) 