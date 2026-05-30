const title = document.getElementById("title");
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const gambar = document.getElementById("gambar");
const audio = document.getElementById("audio");
const gif = document.getElementById("gif");


button.addEventListener("click", function (){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    title.textContent = "Kicau Mania Dulu Ga Seh🤪";
    gambar.src = "https://media.tenor.com/OoG1CF2T3QIAAAAj/kucing-scuba-scuba-cat.gif";
    audio.play();
    gif.src = "kucing.gif";
    gif.style.display = "block";

    

});

button2.addEventListener("click", ()=>{
    if (document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
})
