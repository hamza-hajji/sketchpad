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
				}).hover(function paint(e) {
					$(this).addClass('painted')
				})
				$('.board').append($div)
			}
		}
	}

	// initial board
	buildBoard(pixels)

	// clear and ask for pixels
	$('.clear').click(function askForPixels(e) {
		$('.pixel').removeClass('painted') // remove paint from every "pixel" div
		let new_pixels = prompt('enter the size of the new board (initial size is 16x16)')

		$('.board').html('')
		buildBoard(new_pixels)
	})
})