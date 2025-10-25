const faBarsBtn=document.querySelector(".fa-bars")
const mobileMenuDiv = document.querySelector(".mobile-menu")
const faXmarkBtn=document.querySelector(".fa-xmark")
// maus hadiseleri: click, dblclick, mouseover, mouseenter, mouseleave
// klaviatura hadiseleri: onkeydown, onkeyup, onkeypress
// hadise dinleyicilerinde anonim funksiyalardan istifade olunur
faBarsBtn.addEventListener("click", function(){
    mobileMenuDiv.classList.add("active")
})
faXmarkBtn.addEventListener("click", function(){
    mobileMenuDiv.classList.remove("active")
})
