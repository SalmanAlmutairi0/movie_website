import React, { useState } from 'react'

export default function ScrollArrows({Ref,arrow}) {
  const [visibleArrow, setVisibleArrow] = useState({left: false, right: true});
    const handleScroll = (direction) => {
        const container = Ref.current;
    
        if (container) {
          const scrollAmount = 1200; 
          const currentScroll = container.scrollLeft;
          // scrollWidth is the total width of the content
          // clientWidth is the visible width of the content
          const maxScroll = container.scrollWidth - container.clientWidth
    
          if (direction === 'left') {
            // check if the user scrolled to the end of the content 
            if(currentScroll - scrollAmount < 0) {
                setVisibleArrow({left: false, right: true});
            }else{
                setVisibleArrow({left: true, right: true});
            }
            // container.scrollLeft = currentScroll - scrollAmount
            container.scrollLeft = Math.max(0, currentScroll - scrollAmount);


          } else if(direction === 'right') {
            // check if the user scrolled to the start of the content 

            if(currentScroll + scrollAmount > maxScroll) {
                setVisibleArrow({left: true, right: false});
            }else{
                setVisibleArrow({left: true, right: true});

            }
            container.scrollLeft = currentScroll + scrollAmount;
          }
        }
      };



  return (
    <>
    <div className="arrow-icon-right" style={{display: visibleArrow.right ? 'block' :  'none'}}
            onClick={() => handleScroll('right')}>
            <img src={arrow} alt="arrow right" />
          </div>

          <div className="arrow-icon-left" style={{display: visibleArrow.left ? 'block' :  'none'}}
              onClick={() => handleScroll('left')}>
            <img src={arrow} alt="arrow right" />
          </div>
    </>
  )
}
