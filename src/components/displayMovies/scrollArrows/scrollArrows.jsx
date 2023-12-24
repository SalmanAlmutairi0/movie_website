import React from 'react'

export default function ScrollArrows({Ref,arrow}) {
    const handleScroll = (direction) => {
        const container = Ref.current;
    
        if (container) {
          const scrollAmount = 1100; 
          const currentScroll = container.scrollLeft;
          console.log(container.scrollLeft);
    
          if (direction === 'left') {
            container.scrollLeft = currentScroll - scrollAmount;
          } else {
            container.scrollLeft = currentScroll + scrollAmount;
          }
        }
      };



  return (
    <>
    <div className="arrow-icon-right" onClick={() => handleScroll('right')}>
            <img src={arrow} alt="arrow right" />
          </div>

          <div className="arrow-icon-left" onClick={() => handleScroll('left')}>
            <img src={arrow} alt="arrow right" />
          </div>
    </>
  )
}
