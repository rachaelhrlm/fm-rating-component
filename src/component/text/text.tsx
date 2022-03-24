import React, { FunctionComponent } from 'react';

export const Text: FunctionComponent = ({ children }) => {
    return <p className="text-grey-500 font-sans text-[14px] leading-relaxed">{children}</p>;
};
