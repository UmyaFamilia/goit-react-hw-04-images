import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = props => {
  const show = ({ target }) => {
    if (target.tagName === 'IMG') {
      props.openModal(target.dataset.largeimg);
    }
  };

  return (
    <ul className="ImageGallery" onClick={show}>
      {props.obj.map(a => {
        return <ImageGalleryItem obj={a} key={a.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
