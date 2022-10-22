import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({galleryItems, getPics}){


    return(
        <>
            {galleryItems.map(galleryItem => {
                return <GalleryItem 
                        galleryItem={galleryItem}
                        key={galleryItem.id}
                        getPics={getPics}
                        />
            })}
        </>
    );
}

export default GalleryList;