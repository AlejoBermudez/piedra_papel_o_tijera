import { state } from "./state"
import { initHomePage } from "./pages/welcome"
import  { initButton } from "./components/button"
import  "./components/rps"
import { initRoute } from "./router"

(function (){
    const rootEl = document.querySelector(".root")
    initHomePage(rootEl);
    initRoute(rootEl);
    initButton();
    
})()