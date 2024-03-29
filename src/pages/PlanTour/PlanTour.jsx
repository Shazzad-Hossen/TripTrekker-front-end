import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicGet } from "../../utilities/apiCaller";
import PlaceCard from "../Shared/PlaceCard";
import Loading from "../Shared/Loading";

const PlanTour = () => {
  const [division, setDivision] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    publicGet("/api/division?paginate=true").then((res) => {
      res.status === 200 ? setDivision(res?.data) : "";
      setLoading(false);
    }
      
    );
  }, []);

if(loading) return <Loading />
  return (
    <main className="pt-10">
      <h1 className="font-roboto font-[500] text-blue-100 text-[1.5rem]">
        Select Division
      </h1>
      <h2 className="pb-10">Select places where you want to visit</h2>

      
        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-5">
          {division?.docs?.map((division, index) =><Link key={index} to={`${division?.id}`}> <PlaceCard
              data={division}
            /></Link>)}
        </div>
        </div>
      
     
    </main>
  );
};

export default PlanTour;
