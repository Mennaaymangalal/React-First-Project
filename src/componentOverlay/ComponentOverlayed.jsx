import React from 'react';
import './ComponentOverlayed.css';
import LineBlue from '../LineBlue/LineBlue';

export default function ComponentOverlayed({ image, title, disc, close }) {
  const handleOverlayClick = (e) => {
       if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div className="modelOverlay" onClick={handleOverlayClick}>
      <div className="modelContent">
        <span onClick={close}>
          <i className="fa-solid fa-x icon"></i>
        </span>
        <h3 className="title text-center fw-bold fs-1">{title}</h3>
        <div className="pb-4">
          <LineBlue />
        </div>
        <img src={image} alt={title} className="mb-4" />
        <p className="desc">{disc}</p>
        <button onClick={close} className="btn btn-outline-dark">
          Close
        </button>
      </div>
    </div>
  );
}
