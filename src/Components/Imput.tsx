import * as React from 'react';
import { InputSubmit } from '../helpers/usefullThings'
import useSelect from '../hooks/useSelect';
import { CriptoProps, data } from '../helpers/Interfaces';
import { useEffect, useState } from 'react';
import {GenericProps} from '../helpers/Interfaces';
import ErrorMessage from'../Components/error';
import {PieceProps} from'./Header'

export interface BaseProps  {
  setPiece: React.Dispatch<React.SetStateAction<PieceProps | null>>;
};

export function Form ({setPiece}:BaseProps) {

  const [cripto, setCripto] = useState<CriptoProps[]>([]);
  //error message
  const [error, setError] = useState<boolean>(false);

  const [currency, SelectCurrency] = useSelect('Select your currency', data);
  const [criptos, SelectCripto] = useSelect('Select your cripto', cripto);

useEffect(() => {
    const apiUrl = async function () {
      const response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
      const result = await response.json();

      const getCriptos = result.Data.map((item: any) => {
        const criptoData: GenericProps = {
          id: item.CoinInfo.Name,
          name: item.CoinInfo.FullName
        }
        return criptoData
      });
      setCripto(getCriptos);
    };
    apiUrl();
  }, []);

  function handleSubmit(elem: React.FormEvent<HTMLFormElement>) {
    elem.preventDefault();
    
    if([currency, criptos].includes('')){
      setError(true);
      setTimeout(() => {
        setError(false);
      },4000);
      return;
    };
    setPiece({
      currency,
      criptos
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      {error && <ErrorMessage></ErrorMessage>}
      <SelectCurrency />
      <SelectCripto/>
      {currency}
      <InputSubmit
        type="submit"
        value="Quote"
      />
    </form>

  );
}
