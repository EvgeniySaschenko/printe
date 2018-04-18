(function(){
	let listProductType__icon= document.querySelectorAll('.list-product-type__icon');

	for(let i= 0; listProductType__icon.length > i; i++){
		listProductType__icon[i].classList.add('animated');

		let waypoint = new Waypoint({
			element: listProductType__icon[i],
			handler: function(direction) {
				this.element.classList.add('flipInX');
				this.element.classList.add('visible');
			},
			offset: '50%'
		})
	}
})();