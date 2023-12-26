import React, { useEffect, useState } from 'react'
import Trending from './trending/trending';
import Popular from './popular/Popular';

export default function DisplayMovies() {
 
  return (
    <main>
      <Trending />
      <Popular />
      
    </main>
  )
}
