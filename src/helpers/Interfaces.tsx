
export interface GenericProps{
    id: string;
    name: string;
}

export const data: Currencyprops[] = [
    { id: 'USD', name: 'Dolar' },
    { id: 'EUR', name: 'Euro' },
    { id: 'MXN', name: 'Mexican Peso' },
    { id: 'GBP', name: 'Pound Sterling' },
];

export interface CriptoProps extends GenericProps{};
export interface Currencyprops extends GenericProps {};





