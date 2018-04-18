(function(){
	let nav__item= document.querySelectorAll('.nav_header .nav__item');

	let funActiveNav__item= (event)=>{
		for(let i= 0; nav__item.length > i; i++){
			nav__item[i].addEventListener(event, function(e){
				for(let j= 0; nav__item.length > j; j++){
					nav__item[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	}

	funActiveNav__item('click');
	funActiveNav__item('touch');

	document.getElementById('nav__btn-burger_header').addEventListener('click', ()=>{
		document.getElementById('nav-list_header').classList.toggle('active');
	})

})();