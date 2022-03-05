import "../../router"
export function initInstructions(params){
   const div = document.createElement("div");
   div.classList.add("main-container")
   const style = document.createElement("style");
   style.innerHTML = `
   .main-container {
     height: 100vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
  .instrucciones{
    padding:20px
  }
  .h2-title {
    font-size:50px;
    text-align:center
  }
   .moves-container{
      display:flex;
      width:100%;
      
      height: 150px;
      justify-content: space-around;
      margin-top:20px;
   }
   @media (min-width: 769px){
      .moves-container{
         margin-top:40px
      }
   }
   `
   div.innerHTML=`
   <div class="instrucciones">
   <h2 class="h2-title"> Presiona jugar
   y elige: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
   <my-button class="empezar" text="Jugar"></my-button>
   <div class="moves-container">
   <the-move move="tijera"></the-move>
   <the-move move="papel"></the-move>
   <the-move move="piedra"></the-move>
   </div>
   </div>
   `;

   div.querySelector(".empezar").addEventListener("click",()=>{
      params.goTo("/play")
   })
   div.appendChild(style);
   return div
}
