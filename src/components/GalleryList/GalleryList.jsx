import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({galleryItems}){


    return(
        <>
            {galleryItems.map(galleryItem => {
                return <GalleryItem 
                        galleryItem={galleryItem}
                        key={galleryItem.id}
                        />
            })}
        </>
    );
}

export default GalleryList;