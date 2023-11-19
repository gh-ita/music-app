import React from 'react';
import {useState} from 'react';
import Filtre from './Filtre.tsx'
import '../Style/Music.css'
import Carte from './Carte.tsx'

function Music() {
    const [titre, setTitre] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    return(
        <>
        <div className="filtreBar">
            <Filtre value = {titre} setValue = {setTitre} placeholder ={"entrez un titre"}/>
            <Filtre value = {album} setValue = {setAlbum} placeholder ={"entrez un album"}/>
            <Filtre value = {genre} setValue = {setGenre} placeholder ={"entrez un genre"}/>
        </div>
        <div className="musique">
        <Carte/>
        </div>
        </>

    );

}

export default Music;