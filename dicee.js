document.querySelector("h2").addEventListener("click", function(){ 
    document.querySelector("h2").innerHTML = "Play Again";

    var rnum1 = Math.floor(Math.random() * 6 ) + 1;
    var rdicesrc1 = "images/dice" + rnum1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",rdicesrc1);

    var rnum2 = Math.floor(Math.random() * 6 ) + 1;
    var rdicesrc2 = "images/dice" + rnum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",rdicesrc2);

    if(rnum1 > rnum2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    }
    else if(rnum1<rnum2){
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!!";
    }
});
