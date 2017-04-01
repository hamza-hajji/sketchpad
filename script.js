$(document).ready(function init() {
	// build the grid
	let WIDTH = 700, // board size = 700x700
		pixels = 16
	function buildBoard(pixels) {
		for(let i = 0; i < pixels; i++) {
			for(let j = 0; j < pixels; j++) {
				let $div = $('<div>').addClass('pixel').css({
					width: WIDTH / pixels + 'px',
					height: WIDTH / pixels + 'px'
				})
				$('.board').append($div)
			}
		}
	}
	function paint(e) {
		console.log($('.rgb-switch').prop('checked'))
		if ($('.rgb-switch').prop('checked')) {
			let rand1 = Math.floor(Math.random() * 256),
				rand2 = Math.floor(Math.random() * 256),
				rand3 = Math.floor(Math.random() * 256)
			console.log(rand1, rand2, rand3)
			let color = 'rgb( ' + rand1 + ', ' + rand2 + ', ' + rand3 + ')'
			$(this).css('background-color', color)
		} else {
			$(this).css('background-color', '#000')
		}
		$(this).unbind('mouseenter mouseleave')
	}

	// initial board
	buildBoard(pixels)

	$('.pixel').hover(paint)

	// clear and ask for pixels
	$('.clear').click(function askForPixels(e) {
		$('.pixel').removeClass('painted') // remove paint from every "pixel" div
		let new_pixels = prompt('enter the size of the new board (initial size is 16x16)')

		$('.board').html('')
		buildBoard(new_pixels)
		$('.pixel').hover(paint)
	})
})