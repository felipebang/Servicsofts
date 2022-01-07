import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Border from "./componentes/Borde/Border";
import Navbbar from "./componentes/Navbbar/Navbbar";
import { Routes, Route} from "react-router-dom";
import Footer  from "./componentes/Footer/Footer";

function App() {
  return (
    <div>
       
       <Navbbar />
    
      <Routes>
        <Route path="Border" element={<Border />} />
      </Routes>

      <Footer />
      
 
     
     
      
      
    </div>
  );
}

export default App;
