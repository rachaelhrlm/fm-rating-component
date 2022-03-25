import React, { FunctionComponent } from 'react';

export const Title: FunctionComponent = ({ children }) => {
    return <h1 className="font-bold font-sans text-white text-[24px] leading-[0px] 2xl:text-[28px]">{children}</h1>;
};
