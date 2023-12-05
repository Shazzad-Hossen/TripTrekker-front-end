import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "../Shared/OtpInput";
import { useState } from "react";
import Button from "../Shared/Button";
import { toast } from "../../utilities/toast";
import { publicPost } from "../../utilities/apiCaller";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const { email, token } = location.state;
  const handleOtp = () => {
    if (otp.join("").length !== 4) return toast.error("Invalid Otp");
    // console.log(Number(otp.join("")));
    if (!email || !token) {
      toast.error("Something wents wrong");
      navigate(-1);
    }
    else {
        publicPost('/api/user/verifyotp', {
            email, token, otp: Number(otp.join(""))
        }).then(res=> {
            if(res.status===200) {
                navigate('/resetpassword', { state: { email, token: res?.data}});
            } else {
                toast.error(res?.data);
            }
        })
    }
  };

  return (
    <div className="px-5 min-h-[calc(100vh-474px)]">
      <div className="border-2 max-w-[600px] mx-auto rounded-lg  my-24 py-10 shadow-md min-h-[250px] px-16">
        <h1 className="font-chakra text-2xl font-[600] text-center pb-10 text-blue-100">
          Verify Otp
        </h1>
        <div className="flex flex-col gap-10 justify-center items-center">
          <OtpInput otp={otp} setOtp={setOtp} />
          <Button
            className="bg-blue-100 text-white w-[290px]"
            type="submit"
            onClick={handleOtp}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
