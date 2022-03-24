import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface RatingButtonProps {
    onClick: (value: number) => void;
    selected?: number;
    value: number;
}

export const RatingButton: FunctionComponent<RatingButtonProps> = ({ onClick, selected, value }) => {
    const isSelected = selected === value;
    return (
        <button
            onClick={() => onClick(value)}
            className={classNames(
                'h-[42px] w-[42px] rounded-full font-sans text-[14px] flex place-content-center place-items-center leading-[0] cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300',
                { 'bg-gray-600 text-white': isSelected },
                { 'bg-dark-blue-500 text-grey-500': !isSelected },
            )}>
            {value}
        </button>
    );
};
