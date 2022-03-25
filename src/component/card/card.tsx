import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface CardProps {
    extraClasses?: string;
}

export const Card: FunctionComponent<CardProps> = ({ children, extraClasses }) => {
    return (
        <section
            className={classNames(
                'bg-gradient-to-b from-black-500 to-black-600 w-[327px] h-[360px] rounded-2xl p-[24px] grid grid-cols-1 place-content-between 2xl:w-[412px] 2xl:h-[416px] 2xl:p-[36px]',
                extraClasses,
            )}>
            {children}
        </section>
    );
};
