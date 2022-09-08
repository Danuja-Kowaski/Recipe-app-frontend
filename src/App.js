import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import NewRecipe from './components/NewRecipe';
import UpdateRecipe from './components/UpdateRecipe';


function App() {

  return (
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Recipe />} />
            <Route path="/addrecipe" element={<NewRecipe />} />
            <Route path="/editrecipe/:id" element={<UpdateRecipe />} />
          </Routes>
        </div>
  );
}

export default App;
