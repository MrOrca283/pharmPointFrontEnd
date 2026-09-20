import React from 'react';

const Types = ({ chooseTypes }) => {
  const typesList = [
    { key: 'all', name: 'Все типы' },
    { key: 'sedative', name: 'Седативное' },
    { key: 'painkiller', name: 'Обезбаливающее' },
    { key: 'Special med', name: 'Специализированный препарат' }
  ];

  return (
    <div className='types'>
      {typesList.map(el => (
        <div key={el.key} onClick={() => chooseTypes(el.name)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Types;