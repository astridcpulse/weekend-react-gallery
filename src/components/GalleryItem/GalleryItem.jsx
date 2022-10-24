import axios from 'axios';
import { useState } from 'react'
import './GalleryItem.css';

function GalleryItem ({galleryItem, getPics}){
    const [active, setActive] = useState(true);

    const handleActive = () => {
        setActive((previousStatus) => {
          return !previousStatus;
        });
      };

    const likeFunc = (evt) => {
        
        let picId = evt.target.id;
        console.log('picId', picId)
        axios.put(`/gallery/like/${picId}`)
        .then((response) => {
            console.log('likefunc response', response)
            getPics();
        })
    }

    

    return(
        <>
        <section className="picBlock">
            
            {active ? (
                <div className="active">
                <img
                    
                    src={galleryItem.path}
                    onClick={() => handleActive()}
                />
                </div>
                ) : (

                <div
                    className="inactive"
                    onClick={() => handleActive()}
                > 
                <h2>{galleryItem.description}</h2>
                </div>
            )}

            <div className="likeCnt">
                <p>{galleryItem.likes} people like this!</p>
                <button 
                    className="likeBtn"
                    onClick={likeFunc}
                    id={galleryItem.id}
                    ><i className="fa fa-heart"></i>LOVE</button>
            </div>
        </section>
        </>
    );
}

export default GalleryItem;