(function(){
	let showContacts_phone= document.querySelectorAll('.show-contacts_phone');
	let funShowContacts_phone= (event)=>{
		for(let i= 0; showContacts_phone.length > i; i++){
			showContacts_phone[i].addEventListener(event, function(e){
				e.target.parentNode.classList.toggle('active');
			});
		}
	}

	funShowContacts_phone('click');
	funShowContacts_phone('touch');
})();