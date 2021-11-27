const toggle=document.getElementById('toggle-me')
toggle.addEventListener('click',classToggle)

function classToggle(){
    console.log("clicked");
    const links= document.querySelectorAll('.nav-item');
    links.forEach((item)=>{
     console.log(item);
     item.classList.toggle('nav-link')
    })
}