import React, { useState, useEffect } from 'react';
import Filtre from '../Filtre.tsx'
import '../../Style/Music.css'
import Carte from '../Carte.tsx'
import MusicJson from '../MusicJson.tsx';

function Music() {
    const [titre, setTitre] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [musicInfo, setMusicInfo] = useState<MusicJson[]>([]);
    const apiUrl = 'https://api.jamendo.com/v3.0/tracks/?client_id=a151305a&format=jsonpretty&limit=9';
    function filter({titre,album,genre}){
        const url = 'https://api.jamendo.com/v3.0/tracks/?client_id=a151305a&format=jsonpretty&limit=9&name='+titre+'&album_name='+album+'&search='+genre;
        fetch(url)
          .then(response => response.json())
          .then(data => setMusicInfo(data.results as MusicJson[])) 
          .catch(error => console.error('Error fetching data:', error));
    }
    useEffect(() => {
        // Using fetch
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => setMusicInfo(data.results as MusicJson[])) 
          .catch(error => console.error('Error fetching data:', error));
      }, [apiUrl]);
      const handleFilterChange = (titre,album,genre) => {
        filter({titre,album,genre});
      };
      
    return(
        <>
        <div className="filtreBar">
            <Filtre value = {titre} setValue={(value) => { setTitre(value); handleFilterChange(value,album,genre); }}  placeholder ={"entrez un titre"} />
            <Filtre value = {album} setValue={(value) => { setAlbum(value); handleFilterChange(titre,value,genre); }} placeholder ={"entrez un album"}/>
            <Filtre value = {genre} setValue={(value) => { setGenre(value); handleFilterChange(titre,album,value); }} placeholder ={"entrez un genre"}/>
        </div>
        <div className="musique">
        {musicInfo.map(song => (
        <Carte key={song.id} song={song} />
        ))}
        </div>
        </>

    );

}

export default Music;