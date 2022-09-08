import React from 'react'
import { BsArrowCounterclockwise } from "react-icons/bs"; 
import { Link } from "react-router-dom";
const Navbar = () => {
  const refreshPage =() =>{
    window.location.reload(false);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <BsArrowCounterclockwise onClick={refreshPage}/>
            <Link to="/addrecipe">Add new recipe</Link>
            <form className="d-flex">
            </form>
        </div>
        </nav>
    </div>
  )
}

export default Navbar