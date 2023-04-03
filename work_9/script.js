const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')
menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
})
const bgImages = ['./img1.jpg','./img3.jpg','./img4.jpg','./img5.jpg','./img7.jpg','./img6.jpg','./img8.jpg']
var i = 0;
function bgImg(){
    setTimeout("bgImg()",3000);
    document.getElementById("head").style.backgroundImage =`url(${bgImages[i]})`;
    i++;
    if (i==7) i=0;
}