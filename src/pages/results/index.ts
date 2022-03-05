import { state } from "../../state";

export function initResults(params){
   const div = document.createElement("div");
   div.innerHTML=`
   
   `;
   params.appendChild(div);
   return params
}
