import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className='bg-primary py-5'>
            <div className='max-w-[1500px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-center w-full md:justify-between'>
                <p className='text-[13px] text-white'>SM Shopping © 2023 Demo Store. All Rights Reserved. Code by <Link className='text-special hover:underline'>Md Mahfuz RP</Link></p>
                <img className='' src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/footer/payment-footer.png" alt="" />
            </div>
        </div>
    );
};

export default FooterBottom;