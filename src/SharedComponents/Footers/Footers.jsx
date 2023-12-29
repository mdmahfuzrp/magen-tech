import React from 'react';
import FooterMid from './FooterMid';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footers = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-[1500px] px-5 py-10 pt-14 sm:px-8">
                <FooterTop />
                <FooterMid />
            </div>
            <FooterBottom />
        </div>
    );
};

export default Footers;