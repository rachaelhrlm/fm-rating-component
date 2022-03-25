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
                'h-11 w-11 rounded-full font-sans font-bold text-sm flex place-items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 2xl:h-14 2xl:w-14 2xl:text-base',
                { 'bg-gray-600 text-white': isSelected },
                { 'bg-dark-blue-500 text-grey-500': !isSelected },
            )}>
            {value}
        </button>
    );
};
