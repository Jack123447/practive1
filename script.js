const ClickHamburger = document.querySelector("#Hamburger-Icon");
const MobileNavbar = document.querySelector(".nav-menu");

ClickHamburger.addEventListener("click", function(){

 	ClickHamburger.classList.toggle("delete-icon");
	MobileNavbar.classList.toggle("mobile-navbar");
})





 