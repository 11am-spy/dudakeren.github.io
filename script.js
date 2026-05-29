const title = document.getElementById("title");
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const gambar = document.getElementById("gambar");


button.addEventListener("click", function (){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    title.textContent = "Kamu Tertipu bangsuyyyy🤪";
    gambar.src = "https://i.scdn.co/image/ab67616d0000b273c189ea3132793eec3fb32d85";

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
