import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Order = ({ medicine, onDelete }) => {
  console.log('Order medicine:', medicine);
  if (!medicine || !medicine.img) {
    return <div>Ошибка отображения товара</div>;
  }
  return (
    <div className='medicine'>
      <img src={"./img/" + medicine.img} alt={medicine.name} />
      <h2>{medicine.name}</h2>
      <b>{medicine.price} руб.</b>
      <FaTrash className='delete-icon' onClick={() => onDelete(medicine.id)} />
    </div>
  );
};

export default Order;
