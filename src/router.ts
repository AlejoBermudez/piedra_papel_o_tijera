import { initHomePage } from "./pages/welcome"
import { initInstructions } from "./pages/instructions"
import { initPlay } from "./pages/play"
import { initResults } from "./pages/results"

const routes = [
    {
        path:/\/welcome/,
        component: initHomePage
            
    },
    {
        path:/\/instructions/,
        component: initInstructions
            
    },
    {
        path:/\/play/,
        component: initPlay
            
    },
    {
        path:/\/results/,
        component: initResults
            
    },
   
]


  function isGithubPages() {
    return location.host.includes("github.io");
  }
  
  export function initRoute(container: Element) {
    const BASE_PATH = "/rock-paper-scissor";
    function handleRoute(route) {
      for (let r of routes) {
        if (r.path.test(route)) {
          const el: any = r.component({ goTo: goTo });
          container.firstChild?.remove();
          container.appendChild(el);
        }
      }
    }
  
    function goTo(path) {
      const completePath = isGithubPages() ? BASE_PATH + path : path;
      history.pushState({}, "", completePath);
      handleRoute(completePath);
    }
    
    if (location.host.includes("github.io")) {
      goTo("/welcome");
    }
  
    window.onpopstate = () => {
      handleRoute(location.pathname);
    };
  
  }
  