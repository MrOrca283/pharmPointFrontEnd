import React from 'react';

function ShowMedicineInfo({ medicine, onShowInfo, onAdd }) {
  return (
    <div className='medicine-info'>
      <div>
        <p className='close-info' onClick={() => onShowInfo(medicine)}>x</p>
        <img src={"./img/" + medicine.img} alt={medicine.name} />
        <h2>{medicine.name}</h2>
        <p>Годен до: {medicine.date} </p>  
        <p>Тип: {medicine.types}</p>
        <p>Назначение: {medicine.purpose}</p>
        <p>Производитель: {medicine.manufactory}</p>
        <p>{medicine.desc}</p>
        <b>{medicine.price} руб.</b>
        <div className='add-to-cart' onClick={() => onAdd(medicine)}>+</div>
      </div>
    </div>
  );
}

export default ShowMedicineInfo;