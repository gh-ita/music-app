import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState} from 'react';
import { FaTimes } from "react-icons/fa";
import CarteInterface from './CarteInterface';
import '../Style/Carte.css'

function FavoriteCard({song}:CarteInterface) {
    const [isVisible, setIsVisible] = useState(true);
  function handleClick(){
    setIsVisible(false);
    localStorage.removeItem('savedInformation'+song.id);
  };
    return(
        <>
        {isVisible && (
        <div className="card" style={{width: '15rem',height : '25rem'}}>
            <div className="card-body">
            <a onClick={handleClick}><FaTimes className='icon'/></a>
              <li key={song.id} style = {{listStyle : "none"}}>
              
                <img className="card-img-top" src = {song.album_image} alt="album image" style = {{marginBottom : '9px'}}></img>
                <div className="card-body">
                  <h5 className="card-title">{song.name}</h5>
                  <div className ="songArt">
                  <p className="card-text">Artiste : {song.artist_name}</p>
                  </div>
                </div>
              </li>
  
            </div>
        </div>)}
        </>
    );
}


export default FavoriteCard;