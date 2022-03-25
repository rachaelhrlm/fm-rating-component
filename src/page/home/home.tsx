import React, { FunctionComponent, useState } from 'react';
import { Card, RatingButton, StarIcon, Text, Title } from '../../component';

export const Home: FunctionComponent = () => {
    const [rating, setRating] = useState<number>();
    return (
        <main className="bg-dark-blue-600 w-screen h-screen flex place-content-center place-items-center">
            <Card>
                <StarIcon />
                <Title>How did we do?</Title>
                <Text>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </Text>
                <section className="flex justify-between py-[15px]">
                    <RatingButton onClick={(value: number) => setRating(value)} selected={rating} value={1} />
                    <RatingButton onClick={(value: number) => setRating(value)} selected={rating} value={2} />
                    <RatingButton onClick={(value: number) => setRating(value)} selected={rating} value={3} />
                    <RatingButton onClick={(value: number) => setRating(value)} selected={rating} value={4} />
                    <RatingButton onClick={(value: number) => setRating(value)} selected={rating} value={5} />
                </section>
            </Card>
        </main>
    );
};
