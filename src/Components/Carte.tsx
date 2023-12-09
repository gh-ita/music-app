import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import { FaHeart } from "react-icons/fa";
import CarteInterface from './CarteInterface';
import '../Style/Carte.css'
import NewModal from './Modal.js';

function Carte({song}:CarteInterface) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  function handleClick(){
    const songInfo = {
      id: song.id,
      album_image: song.album_image,
      name: song.name,
      artist_name: song.artist_name,
    }
    const informationString = JSON.stringify(songInfo);
    localStorage.setItem('savedInformation'+song.id, informationString);
    alert('Song '+song.name+' saved to favoris!');
  };
    return(
      <>
        <div className="card" style={{width: '15rem',height : '25rem'}} >
            <div className="card-body">
              <li key={song.id} style = {{listStyle : "none"}}>
                <img className="card-img-top" src = {song.album_image} alt="album image" style = {{marginBottom : '9px'}} onClick ={openModal}></img>
                <div className="card-body">
                  <h5 className="card-title">{song.name}</h5>
                  <div className ="songArt">
                  <p className="card-text">Artiste : {song.artist_name}</p>
                  <a onClick={handleClick}><FaHeart className='icon'/></a>
                  </div>
                </div>
              </li>
  
            </div>
        </div>
        <NewModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={<div className="content"><img className="" src = {song.album_image} 
        alt="album image" style = {{marginBottom : '9px'}}></img>
                  <div className ="songArt">
                  <h5 >{song.name}</h5>
                  <p className="">Artiste : {song.artist_name}</p>
                  <p className="">Album : {song.album_name}</p>
                  <p className="">Date de sortie : {song.releasedate}</p>
                  <p className="">Lien : {song.shorturl}</p>
                  </div>
        </div>}
       />
      </>
    );
}


export default Carte;