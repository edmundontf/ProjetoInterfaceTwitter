/*

PASSO A PASSO 

1 - CAPTURAR A TEXT AREA PARA CRIAR TWEET
2 - CONSTRUIR O TWEET
3 - IMPRIMIR O TWEET
*/

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__list')

function PegarTweet(event) {
    event.preventDefault();

    const tweetTextArea = textarea.value;
    crirarTweet(tweetTextArea)


}
tweetar.addEventListener('click', PegarTweet);

//Criar Tweet/Texto do Tweet/Nome/Foto/ Nome usuario/ Horario
function crirarTweet(tweetTexto) {
    console.log(tweetTexto);
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    const tweet = {
        nome: "Edmundo  ",
        foto: "/maratona-twitter-main/assets/img/ProfilePic.png",
        usuario: "@edmundofaria",
        texto: tweetTexto,
        tempo: (`${hora}:${minutos}m`)
    }
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet) {
    
    const {nome, foto, usuario, texto, tempo} = tweet
    
    //criar elementos para listar no template
    let li = document.createElement('li');
    li.classList.add("conteudoPrincipal__tweet");
    let img = document.createElement('img');
    img.src = foto
    img.classList.add("tweet__fotoPerfil");

    let div = document.createElement('div');
    div.classList.add("tweet__conteudo")
    let h2 = document.createElement('h2');
    h2.innerText = ( nome)

    let span = document.createElement('span'); 
    span.innerText = (`${usuario}- ${tempo}`);

    let p = document.createElement('p');
    p.innerText = texto

     // o appendChild pega os elementos criados e agrupa-o dentro de outro exeplo li recebe img 
    
    //adicionando elementos dentro de li
     li.appendChild(img);
     li.appendChild(div);
    // adicionando elementos dentro da div
     div.appendChild(h2);
     div.appendChild(span);
     div.appendChild(p);
     feed.appendChild(li)
     textarea.value = ""
     
}
