import React from "react";
import {IoLocationOutline,IoMailOpenOutline, IoAlarmOutline } from 'react-icons/io5';
import {BiSupport } from 'react-icons/bi';
import {CgEditBlackPoint} from 'react-icons/cg';
const FooterMid = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-7 border-b pb-8 ">
        <ul className="flex flex-col gap-5 xl:col-span-2">
          <li>
            <img
              src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/footer/logo-footer.png"
              alt=""
            />
          </li>
          <li className="flex items-center gap-2">
            <span><IoLocationOutline size={25} /></span>
            <span className="text-[12px] font-medium text-opacity">San Luis Potosis Centro Historico, 78000 San Luis Potosis, SLP, Mexico</span>
          </li>
          <li className="flex items-center gap-2">
            <span><BiSupport size={24} /></span>
            <span className="text-[12px] font-medium text-opacity">(+0214)0 315 215 - (+0214)0 315 215</span>
          </li>
          <li className="flex items-center gap-2">
            <span><IoMailOpenOutline size={24} /></span>
            <span className="text-[12px] font-medium text-opacity">Support_emarket@domain.com</span>
          </li>
          <li className="flex items-center gap-2">
            <span><IoAlarmOutline size={24} /></span>
            <span className="text-[12px] font-medium text-opacity">Open time: 8:00AM - 16:PM</span>
          </li>
        </ul>

        <ul className="flex flex-col gap-[10px] xl:col-span-1">
          <li className="relative font-bold uppercase mb-[5px]">
            Our Service
            <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-special"></span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">My Account</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Track Your Order</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Wishlist</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Customer Service</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Returns / Exchange</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Faq?</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Support</span>
          </li>
        </ul>

        <ul className="flex flex-col gap-[10px] xl:col-span-1">
          <li className="relative font-bold uppercase mb-[5px]">
            Categories
            <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-special"></span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">My Account</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Track Your Order</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Wishlist</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Customer Service</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Returns / Exchange</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Faq?</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Support</span>
          </li>
        </ul>

        <ul className="flex flex-col gap-[10px] xl:col-span-1">
          <li className="relative font-bold uppercase mb-[5px]">
            Categories
            <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-special"></span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">My Account</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Track Your Order</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Wishlist</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Customer Service</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Returns / Exchange</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Faq?</span>
          </li>
          <li className="flex items-center gap-2 hover:text-special duration-100 cursor-pointer">
            <span><CgEditBlackPoint size={10} /></span>
            <span className="text-[12px] font-medium text-opacity hover:text-special duration-100">Support</span>
          </li>
        </ul>

        <ul className="flex flex-col gap-[10px] xl:col-span-2">
          <li className="relative font-bold uppercase mb-[5px]">
            News Letter
            <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-special"></span>
          </li>
          <li className="flex items-center gap-2 duration-100 cursor-pointer">
            <span className="text-[12px] font-medium text-opacity duration-100">Shopping - Delivering the latest product trends and industry news straight to your inbox.</span>
          </li>
          <li className="flex relative items-center gap-2 duration-100 py-2 bg-white cursor-pointer w-full mt-1">
            <input type="text" placeholder="Your email address" className="w-full px-3 border-none outline-none text-[12px] font-medium pr-[100px]" />
            <button className="bg-primary top-0 bottom-0 right-0 absolute uppercase hover:bg-special text-white px-3 text-[12px]">Subscribe</button>
          </li>
          <li className="flex items-center gap-2 mt-2 duration-100 py-2  cursor-pointer w-full ">
            <img src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/footer/app-1.jpg" alt="" />
            <img src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/footer/app-2.jpg" alt="" />
          </li>
        </ul>
      </div>

      <div className="pt-10">
        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-3">Online Shopping in UAE, Dubai & Abu Dhabi. Shopping.com is offering the lowest prices in UAE to offer the best online shopping experience in UAE.</p>

        
        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-3"><span className="font-bold text-opacity-100 text-primary">About Us:</span> With the idea of creating the ideal destination for online shopping in UAE, Shopping.com was created back in 2013 with catalog of all electronic gadgets. It branched out to one-stop shop for products of all categories. Shopping.com makes it easy for you to shop easily from the comfort of your home. Shopping online at Shopping.com is simple, fast, secure and easy.</p>

        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-3"><span className="font-bold text-opacity-100 text-primary">Products:</span> From mobiles to tablets, laptops to electronics, jewellery to cosmetics, watches to sunglasses, television to gaming consoles we pride ourselves on selling all the products that are hip, trend and are valuable to our customers at Shopping.com. We sell plethora of items from the brands you love to shop from including but not limited to Adidas, Apple, CK (Calvin Klein), HP (Hewlett-Packard), Microsoft and more.</p>

        
        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-3"><span className="font-bold text-opacity-100 text-primary">Offers:</span> Shopping.com is one of the preferred stores for online shopping in UAE and for all the right reasons such as convenience, cost-effective, product quality and personalized service. We have wide range of offers available which provides you with an opportunity to buy always at low prices. We provided thousands of deals every day along with bundle of products to provide you even more savings. Payment & Shipping: We at ShopyMall.com make best effort for your shopping experience to be as hassle free and smooth as possible. We provide you multiple payment methods including cash on delivery and online payments. We also run our own logistics to make sure your purchased item(s) reaches you as quick as possible in the best possible condition.</p>

        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-1"><span className="font-bold text-opacity-100 text-primary">ALL OFFERS IN UAE:</span> Special offers/Daily Deals/Bundle offers</p>

        
        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-1"><span className="font-bold text-opacity-100 text-primary">MOBILES & ACCESSORIES IN UAE:</span> Mobile Phones/Mobiles Accessories/Mobile Cases & Covers/Mobile Power Banks/Mobile Memory Cards</p>

        
        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-1"><span className="font-bold text-opacity-100 text-primary">TABLETS & ACCESSORIES IN UAE:</span> Tablets/Tablet Accessories/Tablet Cases & Covers/Tablet Power Banks/Tablet Memory Cards</p>
        
        <p className="text-primary text-opacity-80 text-[12px] font-medium mb-1"><span className="font-bold text-opacity-100 text-primary">HOME & KITCHEN APPLIANCES IN UAE:</span> Blenders/Food Processors/Irons/Kettle/Kitchen Ware/Meat Grinders/Mincers/Microwave Ovens/Other Home Appliances/Cooker</p>
      </div>
    </div>
  );
};

export default FooterMid;
