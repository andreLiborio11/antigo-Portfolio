// abre e fecha menu mobile//
const menumobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menumobile.addEventListener('click', () =>{
    menumobile.classList.contains("bi-list")
    ? menumobile.classList.replace("bi-list", "bi-x")
    : menumobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")

});

// fecha menu quando clica//

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item =>{
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-acvtive")
            menumobile.classList.replace("bi-x", "bi-list")
        }
    })
})

// anima item data-anime//

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.70;
   
    item.forEach ((Element) => {
        if(windowTop > Element.offsetTop){
            Element.classList.add("animate");
        }
        else{
            Element.classList.remove("animate");
        }
    }
    )    
}

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})

// botoes enviar//

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')


btnEnviar.addEventListener("click", ()=> {
  btnEnviarLoader.style.display = "block";
  btnEnviar.style.display = "none"
})