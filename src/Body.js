import React from 'react';
import { useCarousel } from './useCarousel';



function Body() {
  const slidesCount = 2;
  const [activeIndex, changeSlide] = useCarousel(slidesCount);

  return (
    
    <div>
      
      
      <div className="experience">
        <div className="carousel">
          <div className={`carousel-slide ${activeIndex === 0 ? 'active' : ''}`}>
            <img src="images\IMG_8600.JPG" alt="Experience 1-1" />
          </div>
          <div className={`carousel-slide ${activeIndex === 1 ? 'active' : ''}`}>
            <img src="images\IMG_8614.JPG" alt="Experience 1-2" />
          </div>
        </div>
        <button className="carousel-button prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={() => changeSlide(1)}>
          &#10095;
        </button>

        <div className="experience-text">
          <h3>Software Engineer Intern @ UHC</h3>
          <p>
            Interned at UnitedHealth Care over the 2022 Summer. Not only did I
            have the
            <br /> chance to absorb the great weather, but I gained full-stack
            experience. However, the best part
            <br /> of this experience was the friends I made along the way.
          </p>
        </div>
      </div>

    <div className="experience">
        
        <div className="experience-text2" >
            <h3>Technology Intern @ PCI</h3>
            <p>My first ever internship. My first initial initiation of getting into the tech scene. Had a great team, and 
            <br/>learned how technology plays a role in a company. Learned agile, SQL and much more.
            </p>
        </div>
        
        <div className="carousel">
            <div className="carousel-slide active">
                <img src="images\IMG_7461.PNG" alt="Experience 2-1"/>
            </div>
            
        </div>
    </div>
    </div>
    
  );
}

export default Body;
