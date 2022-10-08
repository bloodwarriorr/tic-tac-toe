import "./css/app.css";
import { Route,Routes} from 'react-router-dom'
import Game from "./Game"
import Menu from "./Menu";
function App() {
    return (
    <Routes>
    <Route path="/" element={<Menu/>}></Route>
    <Route path="/game" element={<Game/>}></Route>
    </Routes>
    
    );
}
  
export default App;