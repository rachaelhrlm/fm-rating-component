import React, { FunctionComponent } from 'react';
import { Button, Card, RatingButton, StarIcon, Text, Title } from '../';

interface RatingCardProps {
    onRatingClick: (value: number) => void;
    onSubmit: () => void;
    rating?: number;
}

export const RatingCard: FunctionComponent<RatingCardProps> = ({ onRatingClick, onSubmit, rating }) => {
    return (
        <Card>
            <StarIcon />
            <Title>How did we do?</Title>
            <Text>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text>
            <div className="flex justify-between py-[10px] 2xl:py-[0px]">
                <RatingButton onClick={onRatingClick} selected={rating} value={1} />
                <RatingButton onClick={onRatingClick} selected={rating} value={2} />
                <RatingButton onClick={onRatingClick} selected={rating} value={3} />
                <RatingButton onClick={onRatingClick} selected={rating} value={4} />
                <RatingButton onClick={onRatingClick} selected={rating} value={5} />
            </div>
            <Button onClick={onSubmit}>Submit</Button>
        </Card>
    );
};
