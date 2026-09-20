import React from 'react';

const Medicine = ({ medicine, onShowInfo, onAdd }) => {
  return (
    <div className='medicine'>
      <img src={"./img/" + medicine.img} alt={medicine.name} onClick={() => onShowInfo(medicine)} />
      <h2>{medicine.name}</h2>
      <p>{medicine.types}</p>
      <b>{medicine.price} руб.</b>
      <div className='add-to-cart' onClick={(e) => {onAdd(medicine);}}>
        +
      </div>
    </div>
  );
};

export default Medicine;