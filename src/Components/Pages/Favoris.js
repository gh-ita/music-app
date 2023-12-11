import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FavoriteCard from '../FavoriteCard.tsx';
import { useState, useEffect } from 'react';
import '../../Style/Music.css'

function Favoris(){
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
          document.body.style.height = '100vh';
    }
  }, []);
    const keys = Object.keys(localStorage);
    const items = [];
    keys.forEach(key =>{
        const item = localStorage.getItem(key);
        const parsedItem = JSON.parse(item);
        items.push(parsedItem);
    })
    return(
        <div className="musique" style={{marginTop: '10px'}}>
        {items.map(song => (
        <FavoriteCard song={song}/>
        ))}
        </div>
    );
}
export default Favoris;