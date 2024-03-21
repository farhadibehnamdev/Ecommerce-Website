import { PhoneIcon } from "@heroicons/react/24/outline";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const GeneralTabInfo = function () {
  return (
    <div>
      <div className="text-zinc-700  mt-10 ">
        <div className="mb-3">
          <div className="flex justify-self-end text-sm">
            <PhoneIcon className="w-5 h-5 mb-2" />
            <span className="text-zinc-800 ml-2">Phone</span>
          </div>

          <p className="ml-7">+9812345678</p>
        </div>
        <div className="mb-3">
          <div className="flex justify-self-end text-sm">
            <HiOutlineMailOpen className="w-5 h-5 mb-2" />
            <span className="text-zinc-800 ml-2">Email</span>
          </div>
          <p className="ml-7">benfar@gmail.com</p>
        </div>
      </div>

      <div className="text-zinc-700  mt-10">
        <div className="mb-3">
          <div className="flex justify-self-end text-sm">
            <AiOutlineFacebook className="w-5 h-5 mb-2" />
            <span className="text-zinc-800 ml-2">Facebook</span>
          </div>
          <p className="ml-7">benfar</p>
        </div>
        <div className="mb-3">
          <div className="flex justify-start text-sm">
            <AiOutlineInstagram className="w-5 h-5 mb-2" />
            <span className="text-zinc-800 ml-2">Instagram</span>
          </div>
          <p className="ml-7">benfar</p>
        </div>
      </div>
      <div className="text-zinc-700  mt-10">
        <div className="w-full text-center">
          <div className="flex justify-start text-sm">
            <FaRegAddressCard className="w-5 h-5 mb-2" />
            <span className="text-zinc-800 ml-2">Address</span>
          </div>
          <p>2404 Wisconsin Ave NW, Washington DC, DC 20007-1845</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralTabInfo;
