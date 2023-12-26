import { IoIosArrowDown } from "react-icons/io";
const TopSettings = () => {
  return (
    <div className="border-b border-opacity-15 py-2">
      <div className="container flex items-center justify-between">
        <div className="flex relative items-center gap-8">
          <div id="language" className="flex bg-black py-ful
           items-center gap-[2.5rem]">
            <div className="flex cursor-pointer gap-1 items-center justify-center">
              <img
                src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_default.png"
                alt=""
              />
              <p className="text-[12px] uppercase text-opacity font-medium">
                English
              </p>
              <span className="text-opacity ml-[1px] text-[14px]">
                <IoIosArrowDown />
              </span>
            </div>

            <ul
              id="language-item"
              className="hidden flex-col w-full items-start gap-[6px] absolute bg-white top-[29px] py-3 px-3 shadow-basic"
            >
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_french.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  French
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_german.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  German
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_argentina.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  Argentina
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_belgium.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  Belgium
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_honduras.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  Honduras
                </p>
              </li>
            </ul>
          </div>
          
          <div className="line absolute left-[108px] w-[1px] h-[10px] bg-slate-300"></div>

          <div id="language" className="flex items-center gap-[2.5rem]">
            <div className="flex cursor-pointer gap-1 items-center justify-center">
              <p className="text-[12px] uppercase text-opacity font-medium">
                USD 
              </p>
              <span className="text-opacity ml-[1px] text-[14px]">
                <IoIosArrowDown />
              </span>
            </div>

            <ul
              id="language-item"
              className="hidden flex-col w-full items-start gap-[6px] absolute bg-white top-[29px] py-3 px-3 shadow-basic"
            >
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_french.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  French
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_german.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  German
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_argentina.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  Argentina
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_belgium.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  Belgium
                </p>
              </li>
              <li className="flex cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_honduras.png"
                  alt=""
                />
                <p className="text-[12px] uppercase text-opacity font-medium">
                  Honduras
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
            <img
              src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_default.png"
              alt=""
            />
            <p>English</p>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
      </div>
    </div>
  );
};

export default TopSettings;
