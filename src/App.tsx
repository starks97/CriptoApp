import './App.css';
import { Header } from './Components/Header';
import Preloader from './Components/Preloader';
import {useState} from'react'


function App() {
  const [preloader, setPreloader] = useState<Boolean>(false);
  
  return (
    <div >
      {preloader ? <Header/> : <Preloader preloader={preloader} setPreloader={setPreloader}/>}
      
    </div>
  )
}

export default App
