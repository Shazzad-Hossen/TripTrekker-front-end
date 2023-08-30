import React, { useEffect, useState } from "react";
import PlaceCard from "../Shared/PlaceCard";
import SectionTitle from "../Shared/SectionTitle";
import { divisions, places } from "../../dummyData/dummyData";



const PlanTour = () => {
  const [component, setComponent] = useState(true);
  const divisionHandler =(id)=>{
    setComponent(false);
  }

  return (
    <main className="pt-36">
      <SectionTitle title={"Plan a tour"} />

      {
        component && <div className="pt-28 grid grid-cols-1 md:grid-cols-4 gap-5">
        {divisions.map((division, index) => (
          <PlaceCard data={division} key={index} onClick={divisionHandler} />
        ))}
      </div>
      }
      {
        !component && <div className="pt-28 grid grid-cols-1 md:grid-cols-4 gap-5">
        {places.map((place, index) => (
          <PlaceCard data={place} key={index} />
        ))}
      </div>
      }
    </main>
  );
};

export default PlanTour;
