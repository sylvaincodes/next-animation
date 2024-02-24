import { useEffect } from "react";

function App() {

  // SCROLL REVEALD
  const handleScroll = function () {
    const revealElements = document.querySelectorAll("[data-reveal]");
  
    for (let index = 0; index < revealElements.length; index++) {
        
        const elementIsInScreen = revealElements[index].getBoundingClientRect().top < window.innerHeight /1.15;
  
        if (elementIsInScreen) {
            revealElements[index].classList.add("revealed")
        }
        else{
            revealElements[index].classList.remove("revealed");
        }   
    }
  }
  
   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
    
     <div>  
      <h1>Next animation</h1>
     </div>
      
    </>
  )
}

export default App
