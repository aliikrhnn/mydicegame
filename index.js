var randomNumber1  ;

randomNumber1 = Math.floor(Math.random() * 6 ) + 1; 

if (randomNumber1 === 1) {
    document.getElementById("img1").src = "images/dice1.png";
    
} else if (randomNumber1 === 2) {
    document.getElementById("img1").src = "images/dice2.png";
    
} else if (randomNumber1 === 3) {
    document.getElementById("img1").src = "images/dice3.png";
    
} else if (randomNumber1 === 4) {
    document.getElementById("img1").src = "images/dice4.png";
    
} else if (randomNumber1 === 5) {
    document.getElementById("img1").src = "images/dice5.png";
    
} else if (randomNumber1 === 6) {
    document.getElementById("img1").src = "images/dice6.png";
    
} 

var randomNumber2  ;

randomNumber2 = Math.floor(Math.random() * 6 ) + 1; 

if (randomNumber2 === 1) {
    document.getElementById("img2").src = "images/dice1.png";
    
} else if (randomNumber2 === 2) {
    document.getElementById("img2").src = "images/dice2.png";
    
} else if (randomNumber2 === 3) {
    document.getElementById("img2").src = "images/dice3.png";
    
} else if (randomNumber1 === 4) {
    document.getElementById("img2").src = "images/dice4.png";
    
} else if (randomNumber2 === 5) {
    document.getElementById("img2").src = "images/dice5.png";
    
} else if (randomNumber2 === 6) {
    document.getElementById("img2").src = "images/dice6.png";
    
} 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Oyuncu 1 Kazandı!"
    
}else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Berabere!"
        
     
}else {
    document.querySelector("h1").innerHTML = "Oyuncu 2 Kazandı!"
}