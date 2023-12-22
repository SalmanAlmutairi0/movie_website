import React from 'react'
import './hero.css'
import '../../index.css'

import spiderManImg from '../../img/spider_man.png'
import posterMovie from '../../img/image 23.png'
import playIcon from '../../img/playIcon.png'

function Hero() {
  return (
    <div className="hero">
            <div className="left-side">
                <div className="content">
                    <h3>FIND MOVIES</h3>
                    <h1>TV SHOWS AND MORE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam, odio consequuntur quis corrupti asperiores qui cumque totam fuga consectetur quia ut reprehenderit! Officiis quae soluta ipsum tempora ipsam laudantium!</p>
                </div>

                <button>
                    <img src={playIcon} alt="playIcon" />
                    Watch Tutorial
                </button>
            </div>
            <div className="right-side">
                <img src={posterMovie} alt="" />
                <div className="back-img">
                <img src={spiderManImg} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Hero