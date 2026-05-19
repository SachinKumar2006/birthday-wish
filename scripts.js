const heroPage = document.querySelector(".hero");
const memoriesSection = document.querySelector(".memories-section");
const wishSection = document.querySelector(".wish-section");
const finalSection = document.querySelector(".final-section");

heroPage.style.display = "none";
memoriesSection.style.display = "none";
wishSection.style.display = "none";
finalSection.style.display = "none";

window.onload = () => {
openBirthdayPopup();
};

// MUSIC

const musicBtn = document.querySelector(".music-btn");
const music = document.getElementById("bgMusic");

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();
musicBtn.innerHTML = "⏸ Pause Music";

}else{

music.pause();
musicBtn.innerHTML = "🎵 Music";

}

});

// POPUP

function openBirthdayPopup(){

const popup = document.createElement("div");

popup.classList.add("birthday-popup");

popup.innerHTML = `

<div class="popup-content">

<div class="popup-emoji popup-emoji1">✨</div>
<div class="popup-emoji popup-emoji2">🎂</div>
<div class="popup-emoji popup-emoji3">🚀</div>
<div class="popup-emoji popup-emoji4">💙</div>

<div class="popup-countdown">

<div class="count-box">
<h3 id="d">00</h3>
<p>DAYS</p>
</div>

<div class="count-box">
<h3 id="h">00</h3>
<p>HOURS</p>
</div>

<div class="count-box">
<h3 id="m">00</h3>
<p>MINS</p>
</div>

<div class="count-box">
<h3 id="s">00</h3>
<p>SECS</p>
</div>

</div>

<h1>🎉 HAPPY BIRTHDAY 🎂</h1>

<h2>SACHIN</h2>

<p>

Wishing you happiness,
success and unforgettable memories ✨

</p>

<button id="enterSiteBtn">
Celebrate 💙
</button>

</div>

`;

document.body.appendChild(popup);

const targetDate =
new Date("June 3, 2026 00:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate - now;

document.getElementById("d").innerHTML =
Math.floor(distance/(1000*60*60*24));

document.getElementById("h").innerHTML =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("m").innerHTML =
Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("s").innerHTML =
Math.floor((distance%(1000*60))/1000);

},1000);

document.getElementById("enterSiteBtn")
.addEventListener("click",()=>{

popup.style.opacity = "0";

setTimeout(()=>{

popup.remove();

heroPage.style.display = "flex";
memoriesSection.style.display = "block";
wishSection.style.display = "block";
finalSection.style.display = "flex";

confetti({
particleCount:300,
spread:180,
origin:{y:0.6}
});

},700);

});

}

// CAKE

const celebrateBtn =
document.getElementById("celebrateBtn");

const cake =
document.getElementById("cake");

const knife =
document.getElementById("knife");

celebrateBtn.addEventListener("click",()=>{

cake.classList.add("cut");
knife.classList.add("cut");

confetti({
particleCount:500,
spread:220,
origin:{y:0.6}
});

const message =
document.createElement("div");

message.classList.add("cut-message");

message.innerHTML = `

💛 The cake is cut...<br>
Another beautiful year begins ✨

`;

document.body.appendChild(message);

setTimeout(()=>{
message.style.opacity = "0";
},3000);

setTimeout(()=>{
message.remove();
},4000);

setTimeout(()=>{

knife.classList.remove("cut");
cake.classList.remove("cut");

},1800);

});

// WISH

const wishBtn =
document.getElementById("wishBtn");

const wishInput =
document.getElementById("wishInput");

const wishContainer =
document.getElementById("wishContainer");

wishBtn.addEventListener("click",()=>{

const wish =
wishInput.value.trim();

if(wish==="") return;

const card =
document.createElement("div");

card.classList.add("wish-card");

card.innerHTML = `

<h3>🎉 Birthday Wish</h3>

<p>${wish}</p>

`;

wishContainer.prepend(card);

wishInput.value = "";

});

// CURSOR

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left =
e.clientX + "px";

cursorGlow.style.top =
e.clientY + "px";

});

// FLOATING EMOJIS

const emojis =
["✨","🎂","🚀","💙","🎉","🪐","💫","🎈"];

function createFloatingEmoji(){

const emoji =
document.createElement("div");

emoji.classList.add("floating-emoji");

emoji.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.left =
Math.random()*100 + "vw";

emoji.style.top =
Math.random()*100 + "vh";

emoji.style.fontSize =
(20 + Math.random()*25) + "px";

document.body.appendChild(emoji);

setTimeout(()=>{
emoji.remove();
},15000);

}

setInterval(createFloatingEmoji,1200);