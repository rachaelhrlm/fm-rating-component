import React, { FunctionComponent } from 'react';

export const Text: FunctionComponent = ({ children }) => {
    return <p className="text-grey-500 font-sans text-[14px] leading-[22px] 2xl:text-[15px] 2xl:leading-[24px]">{children}</p>;
};
