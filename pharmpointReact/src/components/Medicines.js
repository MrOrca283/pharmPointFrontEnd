import React from 'react';
import Medicine from './Medicine';

const Medicines = ({ medicines, onShowInfo, onAdd }) => {
  return (
    <main>
      {medicines.map(el => (<Medicine key={el.id} medicine={el} onShowInfo={onShowInfo} onAdd={onAdd} />))}
    </main>
  );
};

export default Medicines;