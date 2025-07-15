// onscroll logic
const nav = document.querySelector('.navbar')
window.onscroll = function(){
  if(document.documentElement.scrollTop > 20 ){
    nav.classList.add('headerScrolled')
  } else if (document.documentElement.scrollTop < 20){
    nav.classList.remove('headerScrolled')
  }
}

// toggler buttons bg control
const toggleBtn = document.querySelector("button.navbar-toggler")
toggleBtn.addEventListener("click",function(){
  nav.classList.remove('headerScrolled')
  nav.classList.add('bg-white')
})

// close the nav on click on link
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
    nav.classList.remove('bg-white')
    nav.classList.add('headerScrolled')
  })
})