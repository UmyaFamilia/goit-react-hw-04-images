import { useEffect } from 'react';

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', closeEscape);
    return () => {
      window.removeEventListener('keydown', closeEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentDidMount() {
  //   window.addEventListener('keydown', this.closeEscape);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.closeEscape);
  // }
  const closeEscape = e => {
    if (e.code === 'Escape') {
      props.closeModal();
    }
  };
  const backDropClose = e => {
    if (e.target === e.currentTarget) {
      props.closeModal();
    }
  };

  return (
    <div className="overlay" onClick={backDropClose}>
      <div className="modal">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
