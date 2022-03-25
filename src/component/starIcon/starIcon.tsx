import React, { FunctionComponent } from 'react';
import { ReactComponent as Star } from '../../svg/icon-star.svg';

export const StarIcon: FunctionComponent = () => {
    return (
        <div
            className={
                'bg-dark-blue-500 text-grey-500 h-[42px] w-[42px] rounded-full font-sans text-[14px] flex place-content-center place-items-center leading-[0] cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 mb-[15px]'
            }>
            <Star />
        </div>
    );
};
