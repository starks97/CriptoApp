import * as React from 'react';
import { useState} from'react';
import { SelectStyle, SelectCurrencies } from '../helpers/usefullThings';
import { GenericProps} from '../helpers/Interfaces';

export default function useSelect(option: string, data: GenericProps[]):[string, React.FunctionComponent]{

    const [state, setState] = useState<string>('');
    
    const SelectCurrency = () => {
        return (
            <>
                <SelectStyle>{option}</SelectStyle>
                <SelectCurrencies
                    value={state}
                    onChange={e => setState(e.target.value)}
                >
                    <option value="">Select</option>
                    {data.map(item =>
                        <option
                            key={item.id}
                            value={item.id}
                        >{item.name}</option>
                    )}
                </SelectCurrencies>
            </>
        )
    };
    return [state, SelectCurrency];
};







