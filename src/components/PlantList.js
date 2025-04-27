import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, searchQuery }) {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, [setPlants]);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;