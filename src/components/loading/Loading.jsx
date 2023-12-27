import React from 'react'
import './loading.css'
import loadingIcon from '../../img/loading.png'
export default function Loading() {
  return (
    <div className="loading-container">
        <div className="loading">
            <div className="img-container">

            <img src={loadingIcon} alt="" />
            </div>
        </div>

    </div>
  )
}
