import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Medicines from "./components/Medicines";
import Types from "./components/Types";
import ShowMedicineInfo from "./components/ShowMedicineInfo";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showMedicineInfo, setShowMedicineInfo] = useState(false);
  const [medicineInfo, setMedicineInfo] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/medicines')
      .then(response => response.json())
      .then(data => {
        const medicinesArray = data.medicines || data;
        setMedicines(medicinesArray);
        setFilteredMedicines(medicinesArray);
      })
      .catch(error => {
        console.error('Ошибка загрузки:', error);
      });
  }, []);

  const addOrder = (medicine) => {
    const inAlready = orders.some(el => el.id === medicine.id);
    if (!inAlready) {
      setOrders([...orders, medicine]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const chooseTypes = (types) => {
    if (types === 'Все типы') {
      setFilteredMedicines(medicines);
      return;
    }
    setFilteredMedicines(medicines.filter(el => el.types === types));
  };

  const onShowInfo = (medicine) => {
    setMedicineInfo(medicine);
    setShowMedicineInfo(!showMedicineInfo);
  };

  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOrder} />

      <Types chooseTypes={chooseTypes} />

      <Medicines onShowInfo={onShowInfo} medicines={filteredMedicines} onAdd={addOrder} />

      {showMedicineInfo && (
        <ShowMedicineInfo onAdd={addOrder} onShowInfo={onShowInfo} medicine={medicineInfo} />
      )}

      <Footer />
    </div>
  );
}

export default App;