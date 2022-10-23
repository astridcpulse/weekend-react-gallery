import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({galleryItems, getPics}){


    return(
        <>
        <section className="picBoard">
            {galleryItems.map(galleryItem => {
                return <GalleryItem 
                        galleryItem={galleryItem}
                        key={galleryItem.id}
                        getPics={getPics}
                        />
            })}
        </section>
        </>
    );
}

export default GalleryList;