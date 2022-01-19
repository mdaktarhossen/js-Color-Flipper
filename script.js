const colors=["#46B2E0", "#B4161B", "#6AC47E", "#242B2E", "#0D0D0D", "#120E43"];
const btn=document.getElementById('btn');
let color=document.querySelector('#color');

btn.addEventListener("click",()=>{
  const randomNumber=Math.floor(Math.random()*colors.length);
  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent=colors[randomNumber];
})