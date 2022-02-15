import * as React from 'react';
import { Heading, CriptoIcons, Container} from'../helpers/usefullThings';
import CriptoImg from '../img/imagen-criptos.png';
import { Form } from '../Components/Imput';
import { useState, useEffect } from 'react';
import Print from'../Components/Print'
import {Quote} from './Print'

export interface PieceProps{
  criptos: string;
  currency: string;
};

export function Header () {

  const [piece, setPiece] = useState<PieceProps | null>(null);
  const [quote, setQuote] = useState<Quote>();
  
  useEffect(() => {
    if(piece !== null){
      const {currency, criptos} = piece
      const quoteCripto = async function (){
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptos}&tsyms=${currency}`;
          const response = await fetch(url);
          const result = await response.json();
          setQuote(result.DISPLAY[criptos][currency]);
      }
      quoteCripto();
    }
  }, [piece])
  return (
    <Container>
      <CriptoIcons
        src={CriptoImg}
        alt='cripto image'
      />
      <div>
        <Heading>Trade Cryptocurrencies Instantly</Heading>

        <Form
          setPiece={setPiece}
        /> 
        {quote && <Print quote={quote}/>}
      </div>    
    </Container>
  );
};

