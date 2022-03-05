export function initButton(){
    class Button extends HTMLElement{
        constructor(){
            super();
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"});
            const div = document.createElement("div");
            const innerText = this.getAttribute("text")
            const style = document.createElement("style");
            style.innerHTML= `
           
            .custom-button{
            font-family: "Amatic SC";
            font-size: 32px;
            height:60px;
            border:solid 5px blue;
            border-radius:4px;
            background-color:#9CBBE9;
            text-align:center;
            width:100%;
            margin-top:10px;
            }
            @media (min-width: 769px){
                .custom-button{
                    font-size: 38px;
                    height:75px
                }
            }
            .container-button{
                max-width:300px;
                margin:auto;
            }
            @media (min-width: 769px){
                .container-button{
                    max-width:500px
                }
            }
            `;

            div.innerHTML = `
            <div class="container-button">
            <button class="custom-button">
            ${innerText}
            </buttom>
            </div>
        `;
        shadow.appendChild(div)
        shadow.appendChild(style)
        }
    }
    customElements.define("my-button", Button);
}