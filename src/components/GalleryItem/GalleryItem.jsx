import axios from 'axios';

function GalleryItem ({galleryItem, getPics}){


    const likeFunc = (evt) => {
        
        let picId = evt.target.id;
        console.log('asdkfj', picId)
        axios.put(`/gallery/like/${picId}`)
        .then((response) => {
            console.log('likefunc response', response)
            getPics();
        })
    }

    return(
        <>
            <img src={galleryItem.path}/> 
            <section className="likeCnt">
                {galleryItem.likes}
                <button 
                    className="likeBtn"
                    onClick={likeFunc}
                    id={galleryItem.id}
                    >LIKE</button>
            </section>

            </>
    );
}

export default GalleryItem;