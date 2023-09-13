import React, { useState } from "react";
import DatePicker from "../Shared/DatePicker";
import { MdAdd, MdMinimize } from "react-icons/md";

const PackageDetails = ({ data }) => {
  const [person,setPerson]=useState(1);
  return (
    <div className="pt-[100px] container px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:h-[500px] gap-2 mb-7">
        <div className="h-full">
          <img
            className="object-cover w-full h-full"
            src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg"
            alt=""
          />
        </div>

        <div className=" grid grid-cols-2 gap-2">
          <div className="h-[149px] sm:h-[249px] bg-slate-500">
            <img
              className="object-cover w-full h-full"
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg"
              alt=""
            />
          </div>

          <div className="h-[149px] sm:h-[249px] bg-slate-500">
            <img
              className="object-cover w-full h-full"
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg"
              alt=""
            />
          </div>

          <div className="h-[149px] sm:h-[249px] bg-slate-500">
            <img
              className="object-cover w-full h-full"
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg"
              alt=""
            />
          </div>

          <div className="h-[149px] sm:h-[249px] bg-slate-500 relative">
            <img
              className="object-cover w-full h-full"
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg"
              alt=""
            />
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 flex justify-center items-center text-white text-3xl">
              +2
            </div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-12 gap-2">
        <div className="border shadow-md col-span-12 md:col-span-8  p-5 rounded">
         <h1 className="font-chakra text-4xl font-semibold text-[#505050]">Saint Martin Island Long Tour</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis vero natus voluptate aut consequuntur, ipsum nam, maxime beatae, et autem explicabo commodi modi vel eius veniam quisquam blanditiis. Sapiente, nihil repellat. Quidem officia corporis iure id deleniti et officiis sapiente, illo est eaque. Tempore aperiam, quibusdam officia autem accusantium vitae consequuntur necessitatibus unde ipsam, cupiditate aliquam laboriosam, rerum temporibus excepturi eos eum. Magnam ea molestiae rerum voluptate itaque deserunt delectus optio id omnis quaerat reiciendis fugit impedit eligendi quasi odit ipsa perferendis cumque aliquid, dignissimos harum quas at! Sit corrupti voluptatibus debitis velit odio voluptatem quibusdam unde voluptas ullam a, cum aspernatur dolor iusto, numquam dicta illo, enim iure temporibus eaque neque autem dignissimos. Ex possimus pariatur explicabo cum eos incidunt modi optio repudiandae fuga ab, quae, obcaecati aut repellendus deserunt enim veritatis labore animi eveniet excepturi quod praesentium expedita ipsum. Quos deserunt autem qui enim delectus amet aut error aliquam id ex repellendus illum quibusdam dicta consectetur incidunt consequatur illo, commodi odio vero adipisci mollitia impedit maxime. Voluptatem adipisci officiis sint dolores. Recusandae eos, non quos amet unde doloremque repellendus dolores in, aliquid cupiditate officiis vero sapiente ullam saepe tempore minus labore nemo at reprehenderit sint quidem esse harum. Illo, deleniti iste, tempora sunt, necessitatibus esse quaerat voluptatem beatae fuga amet assumenda nobis reprehenderit nisi in non eligendi praesentium consequatur earum consequuntur. Provident quisquam aperiam vel amet consectetur magnam cum, animi reprehenderit. Doloremque cumque ipsum maxime magnam mollitia nam. Fuga quibusdam illo et illum placeat, repudiandae doloribus impedit laborum aspernatur. Illum eum repudiandae modi ut porro perspiciatis quidem id fuga nobis molestias recusandae veritatis architecto nisi dignissimos, unde iusto eos expedita? Obcaecati voluptatibus, expedita aperiam laborum, fugiat odio necessitatibus esse praesentium sit vel adipisci provident! Culpa consequuntur iste eligendi veniam voluptates asperiores ut amet ea iure dolorem maxime similique, vero praesentium incidunt necessitatibus quo in modi at accusantium sint rerum nulla excepturi, itaque totam. Autem laudantium suscipit laboriosam tempore accusamus maxime impedit ad maiores, necessitatibus id quos non hic nostrum labore praesentium dignissimos dolorem cumque ipsum asperiores vel possimus sint. Unde repellendus delectus corrupti fuga amet minus ex cupiditate fugiat vero? Asperiores, sequi reiciendis assumenda autem aut laboriosam. Possimus illo ab esse iste incidunt earum nostrum, vel porro molestias nesciunt iure totam atque. Praesentium est odit fuga sequi optio, modi id pariatur iusto, dignissimos libero voluptatum suscipit accusamus nisi at dicta nemo ipsam maiores. Ratione pariatur rem ab repellat porro beatae, facere ad voluptate similique qui fuga, cumque excepturi velit debitis. Culpa dolorem deleniti saepe eligendi facilis doloribus quis omnis. Voluptates quaerat, pariatur illo repellat harum accusantium itaque sequi fuga voluptatem culpa ducimus corrupti? Repellendus accusantium provident ipsa debitis animi aspernatur qui odit ab autem illum. Quis at voluptate tempora expedita quam illum rem quia? Dolorum, pariatur nisi quam optio ipsa impedit eaque possimus ea porro, deleniti reprehenderit tempore? Quasi error, odit, officia accusamus nihil sunt voluptates reiciendis hic ipsa dolorem repellat ipsam doloribus, maiores debitis? Beatae recusandae facilis tenetur obcaecati mollitia, quidem nobis! Nisi earum tempore esse.</p>
        </div>
        <div className="border shadow-md col-span-12 md:col-span-4  rounded p-5 h-[430px] sticky top-[75px] flex flex-col gap-2">
            <h1 className="text-2xl  font-semibold text-[#333333] uppercase font-chakra drop-shadow-lg mb-5 ">Summary</h1>

            <h2 className="text-xl">Place: Saint Martin Island</h2>

            <h2 className="text-lg">Duration: 3 days 4 night</h2>
            <h1 className="  text-md  drop-shadow-lg">Cost : ৳ 5999 TK </h1>
            <div className=""><h2 className="text-md pb-2">Start Date</h2>
            <DatePicker/></div>
            <div className=""><h2 className="text-md pb-2">Person</h2>
            <div className="flex items-center gap-3">
              <button className="bg-slate-200 w-10 h-8 border rounded flex justify-center hover:bg-green-700 hover:text-white active:scale-95 " disabled={person<2}><MdMinimize className="relative top-[2px]" onClick={()=>setPerson(prev=>prev-1)}/></button>
              <button className="border-slate-200 w-10 h-8 border rounded flex justify-center  text-sm items-center">{person}</button>
              <button className="bg-slate-200 w-10 h-8 border rounded flex justify-center items-center hover:bg-green-700 hover:text-white active:scale-95" onClick={()=>setPerson(prev=>prev+1)}><MdAdd/></button>

            </div>
            </div>

            <button className="bg-green-700 text-white p-2 rounded w-full active:scale-95 transform duration-300 shadow-xl border my-5  font-semibold ">Book Now</button>

        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
