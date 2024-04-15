import {Route, Routes} from "react-router-dom";
import './App.css';
import Intro from './componentes/intro/Intro.jsx';
import Footer from "./componentes/footer/Footer.jsx"
function App() {
  return (
    <div className="App">

<Routes>
<Route path='/' element={<Intro/>}/>
 </Routes>
 <Footer />
    </div>
  );
}

export default App;