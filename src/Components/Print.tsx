import * as React from 'react';
import { Prints, Icon } from '../helpers/usefullThings'

interface ResultProps {
    quote: Quote
};
export interface Quote {
    PRICE: number;
    CHANGEPCT24HOUR: number;
    LOWDAY: number;
    HIGHDAY: number;
    LASTUPDATE: string;
    IMAGEURL: string;
}

function Print({ quote }: ResultProps) {
    const { PRICE, CHANGEPCT24HOUR, LOWDAY, HIGHDAY, LASTUPDATE, IMAGEURL } = quote

    return (
        <Prints>
            <Icon src={`https://cryptocompare.com/${IMAGEURL}`} alt='Cripto Img' />
            <div>
                <p>The price was: {PRICE}</p>
                <p>The high price of the day: {HIGHDAY}</p>
                <p>The lower price of the day: {LOWDAY}</p>
                <p>Price variation in the last 24 hours : {CHANGEPCT24HOUR}</p>
                <p>Last update: {LASTUPDATE}</p>
            </div>

        </Prints>
    );
}

export default Print;