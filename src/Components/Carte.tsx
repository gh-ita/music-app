import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
interface ArtistInfo {
    id: string;
    name: string;
    website: string;
    joindate: string;
    image: string;
    shorturl: string;
    shareurl: string;
  }
  
 

function Carte() {
    const [artistInfo, setArtistInfo] = useState<ArtistInfo[]>([]);
    const apiUrl = 'https://api.jamendo.com/v3.0/artists/?client_id=a151305a&format=jsonpretty&name=we+are+fm';
    useEffect(() => {
        // Using fetch
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => setArtistInfo(data.results as ArtistInfo[])) // Specify the type here
          .catch(error => console.error('Error fetching data:', error));
      }, [apiUrl]);
    return(
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-text"></p>
                <ul>
          {artistInfo.map(artist => (
            <li key={artist.id}>
              <strong>{artist.name}</strong>
              <p>Website: {artist.website}</p>
              <p>Join Date: {artist.joindate}</p>
              {/* Add more information as needed */}
            </li>
          ))}
        </ul>
            </div>
        </div>
    );
}


export default Carte;