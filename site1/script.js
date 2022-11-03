let navBar = document.querySelector("nav");
let myNav = document.getElementById("nav-bar");
let navLinks = myNav.querySelectorAll("li");
// console.log(navBar,myNav,navLinks);
let hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", () => {
    myNav.classList.toggle("active");
    hamMenu.classList.toggle("fa-times");
});

navLinks.forEach((navLink) =>{
    navLink.addEventListener("click", ()=>{
        myNav.classList.remove("active");
        hamMenu.classList.toggle("fa-times");
    });
});

window.onscroll = function ()  {
    let pos = document.documentElement.scrollTop;
    let calHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scroll = (pos * 100) / calHeight;
    document.getElementById("progress").style.width  =  `${scroll}%`;

    let scrollTopBtn = document.getElementById("scroll-top-btn");
    if (pos > 300){
        scrollTopBtn.style.display = "grid";
    }
    else{
        scrollTopBtn.style.display = "none";
    }

    scrollTopBtn.addEventListener( "click",  () =>
    {
        document.documentElement.scrollTop = 0;
    });

    if(pos > 0){
        navBar.classList.add("sticky");
    }
    else{
        navBar.classList.remove("sticky");

    }


}
