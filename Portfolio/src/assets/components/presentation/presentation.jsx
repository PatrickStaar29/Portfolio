import React, { useEffect } from 'react';

function Presentation(){
    useEffect(() => {
        const numStars = 250
    
        const starsContainer = document.querySelector(".background__stars")
    
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement("div");
          star.classList.add("star");
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 8}s`; 
          starsContainer.appendChild(star);
        }
      }, []);
    return(
        <section className="background">
            <span className="background__stars"></span>
            <h1 className='presentation'>Développeur front-end</h1>
        </section>
    )
}
export default Presentation