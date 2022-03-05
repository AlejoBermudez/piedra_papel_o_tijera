
const piedra = require("url:../../img/piedra.png");
const papel = require("url:../../img/papel.png");
const tijera = require("url:../../img/tijera.png");

class Moves extends HTMLElement {
  shadow: ShadowRoot = this.attachShadow({ mode: "open" });
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.classList.add("move");
  }

  returnImage(theMove) {
    if (theMove == "piedra") {
      return piedra;
    } else if (theMove == "papel") {
      return papel;
    } else {
      return tijera;
    }
  }

  render() {
    this.classList.add("move");
    const move = this.getAttribute("move");
    const div = document.createElement("div");
    const style = document.createElement("style");
    const playState = this.getAttribute("state") || "out-of-game";
    style.innerHTML = `
    
    .hand{
      height:95px;
      cursor:pointer;
    }
    .hand:hover{
      height:140px;
    }
    
    @media (min-width: 769px){
      .hand{
        height:125px;
        
      }
      .hand:hover{
        height:170px;
      }

    }
      `;

    div.innerHTML = 
    `
    <img class="hand ${playState}" src="${this.returnImage(move)}"/>`;

    this.shadow.appendChild(div);
    this.shadow.appendChild(style);
    this.classList.add(move);
   
  }
}
customElements.define("the-move", Moves);