import { useEffect, useRef } from "react";
import imageIco from "../../../assets/svg/imageIco.svg";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import PasswordInput from "../../Shared/PasswordInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import errorico from "../../../assets/svg/error.svg";
import { privatePatch } from "../../../utilities/apiCaller";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../services/userSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "../../../utilities/toast";


const UserProfile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    getValues,

    formState: { errors },
  } = useForm();
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const [type,setType]=useState('');
  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
    setPhoto(user?.avatar);
    if(user?.hotel) {
      setValue('hotel',user?.hotel.id);
    }
    else if(user?.agency) {
      setValue('agency',user?.agency.id);
    }
  }, []);

  //   Image Upload to ImgBB
  const handleFileChange = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          key: "a8f83831f3e714703a0b98d00fcf8f8a",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setPhoto(res?.data?.data?.url);
        } else {
          console.log(" Image upload unsuccessfull");
        }
      });
  };

  const onSubmit = (data) => {
    if (photo !== "") {
      data.avatar = photo;
    }

    if (data?.password !== "" && data?.newPassword === "") {
      setError("newPassword", { message: "This field is required" });
    } else if (data?.password !== "" && data?.confirmPassword === "") {
      setError("confirmPassword", { message: "This field is required" });
    } else if (
      (data?.newPassword !== "" || data?.confirmPassword !== "") &&
      data?.password === ""
    ) {
      setError("password", { message: "This field is required" });
    } else if (data?.newPassword !== data?.confirmPassword) {
      setError("confirmPassword", {
        message: "Confirm password does not match",
      });
    } else {
      if (data?.password !== "") {
        delete data.confirmPassword;
      } else {
        delete data.password;
        delete data.newPassword;
        delete data.confirmPassword;
      }
      privatePatch("/api/user/me", data).then((res) => {
        if (res.status === 200) {
          dispatch(setUser(res?.data));
          if(type==='next') navigate('additionalinfo');
          else toast.success('Success')  
        } else {
          toast.error(res?.data || "Something wents wrong")
        }
      });
    }
  };

  const resetHandler = ()=>{
    const emailValue= getValues('email')
    reset();
    setValue('email', user?.email)

  }

  return (
   <div className="">
    <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center"> <button className="border px-2  py-2 mr-5 rounded" onClick={()=>navigate(-1)}><IoIosArrowBack/></button> Profile</div>
     <div className="pl-20 pr-5 py-10">
      <div className="flex gap-10">
        <h1 className="text-blue-100 font-[600]">Photo : </h1>
        {photo === "" ? (
          <div
            className="w-[100px] h-[100px] bg-slate-300 rounded-lg flex justify-center items-center "
            onClick={() => fileInputRef.current.click()}
          >
            <img className="h-[60px] w-[60px]" src={imageIco} alt="" />
          </div>
        ) : (
          <img
            className="w-[100px] h-[100px] bg-slate-300 rounded-lg"
            src={photo}
            alt=""
            onClick={() => fileInputRef.current.click()}
          />
        )}
        <ul className="text-slate-400 justify-center flex flex-col list-disc">
          <li>The image must be clear and recent</li>
          <li>Size must be 4*4</li>
          <li>Size must not exceed 5mb</li>
        </ul>
        <input
          className="hidden"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-10 w-full flex flex-col gap-5 max-w-[600px] ">
          <h1 className="font-[600] text-xl text-blue-200">
            General Information
          </h1>
          <Input
            label="Full Name"
            placeholder="Full name"
            register={() =>
              register("fullName", { required: "Name is required" })
            }
            errors={errors["fullName"]}
          />
          <div>
            <div className="flex items-center gap-5">
              <p className="text-blue-100 font-[600]">Gender</p>
              <span>
                <input
                  className="mr-2"
                  type="radio"
                  value="male"
                  {...register("gender", { required: "Gender is required" })}
                />
                Male
              </span>
              <span>
                {" "}
                <input
                  className="mr-2"
                  type="radio"
                  value="female"
                  {...register("gender")}
                />
                Female
              </span>
              <span>
                {" "}
                <input
                  className="mr-2"
                  type="radio"
                  value="other"
                  {...register("gender")}
                />
                Other
              </span>
            </div>
            {errors["gender"] ? (
              <p className="text-red-400  flex items-center gap-2 font-[400] text-sm pt-1">
                <img src={errorico} alt="" />
                <span>{errors["gender"].message}</span>
              </p>
            ) : (
              <></>
            )}
          </div>

          <Input
            type="phone"
            label="Phone"
            placeholder="+880"
            register={() =>
              register("phone", {
                required: "Phone is required",
                minLength: {
                  value: 4,
                  message: "Minimum length is 4",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length is 15",
                },
              })
            }
            errors={errors["phone"]}
          />

          <Input
            label="NID"
            placeholder="National id"
            register={() =>
              register("nid", {
                required: "NID number is required",
                minLength: {
                  value: 10,
                  message: "Invalid nid number",
                },
              })
            }
            errors={errors["nid"]}
          />

          <h1 className="font-[600] text-xl text-blue-200">Address</h1>
          <Input
            label="Street/ Village"
            placeholder="street"
            register={() =>
              register("street", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Minimum length is 5 charecter",
                },
              })
            }
            errors={errors["street"]}
          />
          <Input
            label="City"
            placeholder="city"
            register={() => register("city", { required: "City is required" })}
            errors={errors["city"]}
          />
          <Input
            label="Zip"
            placeholder="zip"
            register={() =>
              register("zip", { required: "Zip code is required" })
            }
            errors={errors["zip"]}
          />

          <h1 className="font-[600] text-xl text-blue-200">
            Account Information
          </h1>

          <Input
            label="Email"
            type="email"
            placeholder="example@example.com"
            disabled={true}
            register={() =>
              register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })
            }
            errors={errors["email"]}
          />
          <PasswordInput
            label="Current Password"
            placeholder="Current password"
            register={() =>
              register("password", {
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,16}$/,
                  message: "Password must meet the criteria",
                },
              })
            }
            errors={errors["password"]}
          />
          <PasswordInput
            label="New Password"
            placeholder="New password"
            register={() =>
              register("newPassword", {
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,16}$/,
                  message: "Password must meet the criteria",
                },
              })
            }
            errors={errors["newPassword"]}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            register={() =>
              register("confirmPassword", {
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,16}$/,
                  message: "Password must meet the criteria",
                },
              })
            }
            errors={errors["confirmPassword"]}
          />
        </div>

        <div className="flex items-center justify-center gap-3 pt-10">
          <Button
            className={`${user?.role==='user'?'bg-blue-200':'bg-blue-300'} text-white w-[80px]`}
            onClick={() => resetHandler()}
          >
            Reset
          </Button>
          <Button type="submit" className={`${user?.role==='user'?'btn-primary':'bg-blue-200 text-white'}  w-[80px]`}>
            Save
          </Button>
          <Button type="submit" className={`${user?.role==='user'?'hidden':'block'} btn-primary text-white  w-[80px]`} onClick={()=>setType('next')}>
            Next
          </Button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default UserProfile;
