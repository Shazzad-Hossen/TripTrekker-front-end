import React, { useEffect, useState } from "react";
import { publicGet } from "../../utilities/apiCaller";
import { useParams } from "react-router-dom";
import { toast } from "../../utilities/toast";
import Loading from "../Shared/Loading";

const Offers = () => {
  const [loading, setLoading] = useState(true);
  const [offer, setOffer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    publicGet(`/api/promotion/${id}`).then((res) => {
      setLoading(false);
      if (res?.status === 200) setOffer(res?.data);
      else toast.error(res?.data);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <div>
      <main>
        <div className="flex justify-center items-center px-5">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/api/${offer?.image}`}
            alt="Offer Image"
            className="max-w-[300px] w-full rounded-md"
          />
        </div>
        <div className=" py-10">
          <div dangerouslySetInnerHTML={{ __html: offer?.description }} />
        </div>
      </main>
    </div>
  );
};

export default Offers;
