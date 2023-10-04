import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { publicGet } from "../../utilities/apiCaller";
import { useState } from "react";
import PlaceCard from "../Shared/PlaceCard";

const DivisionsPage = () => {
  const { id } = useParams();
  const [places, setPlaces] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    publicGet(`/api/place?division=${id}`).then((res) => {
      if (res.status === 200) setPlaces(res?.data);
      else {
        console.log("Error");
      }
    });
  }, []);

  return (
    <main>
      <h1 className="font-roboto font-[500] text-blue-100 text-[1.5rem]">
        Select Place
      </h1>
      <h2 className="pb-10">Select places where you want to visit</h2>

     <div className="flex justify-center">
     <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-5">
        {places?.docs?.map((item, index) => (
          <PlaceCard onClick={(id)=>navigate(`/places/${id}`)}
            key={index}
            data={{
              thumbnail: item?.thumbnails[0],
              name: item?.name,
              id: item?.id,
            }}
          />
        ))}
      </div>
     </div>
    </main>
  );
};

export default DivisionsPage;
