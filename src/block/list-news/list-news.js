(function(){
	let listNews= document.querySelector('.list-news');
	
	listNews.classList.add('animated');
	let waypoint = new Waypoint({
		element: listNews,
		handler: function(direction) {
			this.element.classList.add('slideInUp')
		},
		offset: '70%'
	})
})();