import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import request from './request';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { useEffect } from 'react';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [array, setArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [forButtonloader, setForButtonloader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [alreadyMount, setAlreadyMount] = useState(false);
  const requestCover = (query, page) => {
    request(query, page)
      .then(galerry => {
        setArray(prev => [...prev, ...galerry.hits]);
        setForButtonloader(true);
        setLoader(false);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    if (alreadyMount) {
      requestCover(query, page);
    } else {
      setAlreadyMount(true);
    }
  }, [query, page]);

  const nextPage = () => {
    setPage(prev => prev + 1);
    setForButtonloader(false);
    setLoader(true);
  };

  const callYouLater = word => {
    setQuery(word);
    setArray([]);
    setPage(1);
    setLoader(true);
  };

  const openModal = imageURL => {
    setModalOpen(prev => !prev);
    setImageURL(imageURL);
  };

  return (
    <>
      <Searchbar callYouLater={callYouLater} />
      <ImageGallery obj={array} openModal={openModal} />
      {forButtonloader && array.length > 11 && <LoadMore nextPage={nextPage} />}
      {loader && <Loader />}
      {array.length > 0 && modalOpen && (
        <Modal img={imageURL} closeModal={openModal} />
      )}
    </>
  );
}
