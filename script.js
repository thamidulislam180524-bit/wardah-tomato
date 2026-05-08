const text = "A small place on the internet that belongs to us.";

let index = 0;

function typeText(){

  if(index < text.length){

    document.getElementById("typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText,60);
  }

}

window.onload = typeText;


function startExperience(){

  const music = document.getElementById("bgMusic");

  music.play();

  document.querySelector(".counter-section")
  .scrollIntoView({
    behavior:"smooth"
  });

}


function createHearts(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left = Math.random()*100 + "vw";

  heart.style.fontSize = Math.random()*20 + 10 + "px";

  heart.style.animationDuration = Math.random()*5 + 5 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },10000);

}

setInterval(createHearts,600);


const startDate = new Date("2023-10-09T00:00:00");

function updateCounter(){

  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").innerText = days;

  document.getElementById("hours").innerText = hours;

  document.getElementById("minutes").innerText = minutes;

}

setInterval(updateCounter,1000);

updateCounter();


function openSadMessage(){

  document.getElementById("popup").style.display = "flex";

}

function closePopup(){

  document.getElementById("popup").style.display = "none";

}


const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll",()=>{

  fadeElements.forEach((element)=>{

    const position = element.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){

      element.classList.add("show");

    }

  });

});
window.dispatchEvent(new Event("scroll"));
