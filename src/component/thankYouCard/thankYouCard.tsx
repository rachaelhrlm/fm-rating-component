import React, { FunctionComponent } from 'react';
import { Card, Text, Title } from '../';
import { ReactComponent as ThankYouImage } from '../../svg/illustration-thank-you.svg';

export interface ThankYouCardProps {
    rating?: number;
}

export const ThankYouCard: FunctionComponent<ThankYouCardProps> = ({ rating }) => {
    return (
        <Card extraClasses="justify-items-center text-center py-[30px]">
            <ThankYouImage />
            <p className="text-orange-500 bg-dark-blue-500 rounded-full text-[14px] px-[12px] py-[5px] 2xl:text-[15px] 2xl:px-[20px] 2xl:py-[4px] 2xl:mb-[20px]">
                You selected {rating} out of 5
            </p>
            <Title>Thank you!</Title>
            <Text>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</Text>
        </Card>
    );
};
