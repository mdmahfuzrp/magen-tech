import React from 'react';
import FootersTop from './FootersTop';
import FootersBottom from './FootersBottom';

const Footers = () => {
    return (
        <div className="bg-gray-200">
            <div className="max-w-[1500px] px-5 sm:px-8">
                <FootersTop />
                <FootersBottom />
            </div>
        </div>
    );
};

export default Footers;