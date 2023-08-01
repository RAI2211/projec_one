import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const CAR_LIST = [
           {
            id: 1,
            make: "Mitsubishi",
            model: "Lancer",
            type: "Used"
          },
          { id: 2, make: "Honda", model: "Vezel", type: "New" },
          { id: 3, make: "Honda", model: "Civic", type: "Used" },
          { id: 4, make: "Audi", model: "A3", type: "New" },
          { id: 5, make: "Audi", model: "A4", type: "Used" },
          { id: 6, make: "Audi", model: "A7", type: "New" },
          { id: 7, make: "BMW", model: "i8", type: "Used" }
         ]

const PRICE_LIST = [
    { car_id: 1, price: 1000000 },
    { car_id: 2, price: 2000000 },
    { car_id: 3, price: 3000000 },
    { car_id: 4, price: 4000000 },
    { car_id: 5, price: 5000000 },
    { car_id: 6, price: 6000000 },
    { car_id: 7, price: 7000000 }
];

const CarTable = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCars = CAR_LIST.filter((car) =>
    car.model.toLowerCase().includes(searchQuery.toLowerCase())||
    car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.type.toLowerCase().includes(searchQuery.toLowerCase()) 
    // car.model.toLowerCase().includes(searchQuery.toLowerCase())

  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by model..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.map((car) => {
            const carPrice = PRICE_LIST.find((price) => price.car_id === car.id);
            return (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.type}</td>
                <td>{carPrice ? carPrice.price : 'N/A'}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CarTable;





