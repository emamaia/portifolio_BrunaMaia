// ===========================LOGOS==================

let lista_logos = [
    "./assets/Logos/logo_18.png",
    "./assets/Logos/logo_19.png",
    "./assets/Logos/logo_3.png",
    "./assets/Logos/logo_4.png",
    "./assets/Logos/logo_5.png",
    "./assets/Logos/logo_6.png",
    "./assets/Logos/logo_7.png",
    "./assets/Logos/logo_8.png",
    "./assets/Logos/logo_9.png",
    "./assets/Logos/logo_10.png",
    "./assets/Logos/logo_11.png",
    "./assets/Logos/logo_12.png",
    "./assets/Logos/logo_13.png",
    "./assets/Logos/logo_14.png",
    "./assets/Logos/logo_15.png",
    "./assets/Logos/logo_16.png",
    "./assets/Logos/logo_11.png",

]

let div_modal = document.getElementById("modal_logos")


lista_logos.forEach(function(logo) {
    
    let div_logos = document.createElement("li");    
    div_modal.appendChild(div_logos);

    div_logos.classList.add('li_logos')
    
    div_logos.innerHTML= `<li> <img class="imagem_logos" src="${logo}"></li>`
    
});


