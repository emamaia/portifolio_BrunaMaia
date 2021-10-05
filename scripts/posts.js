// ==================POSTS/CARDS=======================

let lista_posts = [
    "./assets/cards_posts/posts_1.png",
    "./assets/cards_posts/posts_2.png",
    "./assets/cards_posts/posts_3.png",
    "./assets/cards_posts/posts_4.png",
    "./assets/cards_posts/posts_5.png",
    "./assets/cards_posts/posts_6.png",
    "./assets/cards_posts/posts_7.png",
    "./assets/cards_posts/posts_8.png",
    "./assets/cards_posts/posts_9.png",
    "./assets/cards_posts/posts_10.png",
    "./assets/cards_posts/posts_11.png",
]

let div_posts = document.getElementById("modal_posts")


lista_posts.forEach(function(post) {
    
    let posts = document.createElement("li");    
    div_posts.appendChild(posts);

    div_posts.classList.add('li_logos')
    
    posts.innerHTML= `<div class="div_posts"><li class="li_posts"> <img class="imagem_posts" src="${post}"></li></div>`
    
});

