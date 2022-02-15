
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
export const Heading = styled.h1`
font-family: 'Lato', sans-serif;
color: #FFF;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;
&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color:#66A2FE;
  display: block;
  margin: 10px auto 0 auto;
}
`
export const CriptoIcons = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

`
export const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }

`
export const InputSelect = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }

`
export const SelectStyle = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  text-align: center;
 
  
`
export const SelectCurrencies = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 30px;
`

export const Error = styled.p`
  width: 100%;
  font-size: 24px;
  color: red;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
`

export const Prints = styled.div`
  color: #FFF;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;
`

export const Icon = styled.img`
  display:block;
  width: 125px;

`
