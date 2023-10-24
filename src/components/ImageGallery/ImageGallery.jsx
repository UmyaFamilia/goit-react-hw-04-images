import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ openModal, obj }) => {
  const show = ({ target }) => {
    if (target.tagName === 'IMG') {
      openModal(target.dataset.largeimg);
    }
  };

  return (
    <ul className="ImageGallery" onClick={show}>
      {obj.map(a => {
        return <ImageGalleryItem obj={a} key={a.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
