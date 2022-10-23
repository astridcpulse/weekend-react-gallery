import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect} from 'react';

function App() {
  const [picList, setPicList] = useState([]);


  useEffect(() => {
    getPics()
    
  }, [])

  
  const getPics = () => {
    axios.get('/gallery')
    .then(response => {
      console.log('the response is', response)
      setPicList(response.data);
    })
    .catch(error => {
      console.log('GETting failed', error);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Astrid's photos</h1>
        </header>
        <GalleryList 
          galleryItems={picList}
          getPics={getPics}
          
        />
      </div>
    );
}

export default App;
