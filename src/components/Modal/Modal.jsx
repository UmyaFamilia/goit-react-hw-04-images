import { useEffect } from 'react';

export default function Modal({ closeModal, img }) {
  useEffect(() => {
    window.addEventListener('keydown', closeEscape);
    return () => {
      window.removeEventListener('keydown', closeEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  const backDropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="overlay" onClick={backDropClose}>
      <div className="modal">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
