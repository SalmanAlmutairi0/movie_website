import React, { useEffect, useState } from 'react'
import './loadingScreen.css'
export default function LoadingScreen() {
    const [visibleText, setVisibleText] = useState('');
    const [completed, setCompleted] = useState(false);
    const loadingText = "Welcome to movies website 🎥";
    console.log(loadingText.length)
    
    useEffect(() => {

        let index = 0;

        const interval = setInterval(() => {
                setVisibleText(loadingText.slice(0,index++));
                if(index > loadingText.length) {
                    
                    setTimeout(() => {
                        setCompleted(true);
                    },2000)
                }
            },100)
            
        return () => clearInterval(interval)
            
    },[loadingText])




  return (
    <>
    {/* {!completed && */}

        <div className="loader-container">
            <div className="loader">
                <h1>{visibleText}</h1>            
            </div>
        </div>
{/* } */}
    
    </>
  )
}
