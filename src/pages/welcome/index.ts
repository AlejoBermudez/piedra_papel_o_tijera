import "../../router"
export function initHomePage(params){
   const div = document.createElement("div");
   const style = document.createElement("style");
   style.innerHTML = `
   .moves-container{
      display:flex;
      width:100%;
      position: fixed;
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
   
   <my-button class="empezar" text="Empezar"></my-button>
   <div class="moves-container">
   <the-move move="tijera"></the-move>
   <the-move move="papel"></the-move>
   <the-move move="piedra"></the-move>
   </div>
   `;

   div.querySelector(".empezar").addEventListener("click",()=>{
      params.goTo("/instructions")
   })
   div.appendChild(style);
   return div
}
