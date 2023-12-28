import React from 'react';

const CallUs = () => {
    return (
        <div className='mt-[50px] border rounded-[7px] rounded-b-none w-full'>
            <div className='w-full'>
                <img className='w-full' src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/banner/call-us.jpg" alt="" />
            </div>

            <div className='px-6'>
                <div className='flex border-b py-5 items-center justify-start gap-3'>
                    <img className='' src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/icon/icon-1.png" alt="" />
                    <div>
                        <h1 className='text-[12px] font-semibold text-primary'>FREE DELIVERY</h1>
                        <p className='text-[12px] text-opacity'>On Order Over $49.86</p>
                    </div>
                </div>
                <div className='flex border-b py-5 items-center justify-start gap-3'>
                    <img className='' src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/icon/icon-2.png" alt="" />
                    <div>
                        <h1 className='text-[12px] font-semibold text-primary'>ORDER PROTECTION</h1>
                        <p className='text-[12px] text-opacity'>Secured Information</p>
                    </div>
                </div>
                <div className='flex border-b py-5 items-center justify-start gap-3'>
                    <img className='' src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/icon/icon-3.png" alt="" />
                    <div>
                        <h1 className='text-[12px] font-semibold text-primary'>PROMOTION GIFT</h1>
                        <p className='text-[12px] text-opacity'>Special Offers!</p>
                    </div>
                </div>
                <div className='flex py-5 items-center justify-start gap-3'>
                    <img className='' src="http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/icon/icon-4.png" alt="" />
                    <div>
                        <h1 className='text-[12px] font-semibold text-primary'>MONEY BACK</h1>
                        <p className='text-[12px] text-opacity'>Return over 30 Days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallUs;