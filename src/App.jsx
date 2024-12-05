import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Inicio from './Pages/Inicio/Inicio.jsx';
import Doados from './Pages/Doados/Doados.jsx';
import QueroDoar from './Pages/QueroDoar/QueroDoar.jsx';
import "./Style/global-style.module.scss";


function App() {
  return(
    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/livros-doados" element={<Doados/>}/>
      <Route path="/quero-doar" element={<QueroDoar/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
  )

    
}

export default App
