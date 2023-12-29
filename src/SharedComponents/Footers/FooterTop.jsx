import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const FooterTop = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative cursor-pointer col-span-full md:col-span-1 w-full">
            <img
              src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/banner/banner-1.jpg"
              alt=""
              className=" "
            />
            <div className="absolute w-full h-full hover:bg-[#ffffff33] top-0 left-0 right-0 bottom-0"></div>
          </div>
          <div className="col-span-full md:col-span-2 relative">
            <img
              src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/bg-social-footer.jpg"
              alt=""
              className=""
            />

            <div className="absolute top-0 left-0 bottom-0 w-full right-0 flex items-center justify-center gap-[14px] p-5">
              <h1 className="text-[18px] uppercase font-semibold text-white">
                follow social
              </h1>
              <ul className="flex gap-2">
                <li className="p-3 hover:bg-special duration-100 rounded-md cursor-pointer text-[18px] text-white bg-opacity bg-opacity-60">
                  <FaFacebookF />
                </li>
                <li className="p-3 hover:bg-special duration-100 rounded-md cursor-pointer text-[18px] text-white bg-opacity bg-opacity-60">
                  <FaTwitter />
                </li>
                <li className="p-3 hover:bg-special duration-100 rounded-md cursor-pointer text-[18px] text-white bg-opacity bg-opacity-60">
                  <FaGooglePlusG />
                </li>
                <li className="p-3 hover:bg-special duration-100 rounded-md cursor-pointer text-[18px] text-white bg-opacity bg-opacity-60">
                  <FaLinkedinIn />
                </li>
                <li className="p-3 hover:bg-special duration-100 rounded-md cursor-pointer text-[18px] text-white bg-opacity bg-opacity-60">
                  <FaPinterest />
                </li>
              </ul>
            </div>
          </div>

          <div className="relative cursor-pointer col-span-full md:col-span-1">
            <img
              className="col-span-full md:col-span-1"
              src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/banner/banner-2.jpg"
              alt=""
            />
            <div className="absolute w-full h-full hover:bg-[#ffffff33] top-0 left-0 right-0 bottom-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
