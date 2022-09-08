import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Recipe =() =>{

  const [recipeList, setRecipeListItems] = useState([]);
  const [open, setOpen ] = useState({item: null, state : false});
  console.log(open)

  //fetch all recipes
  useEffect( ()=>{
    const getAllRecipes = async () => {
      try{
        const res = await axios.get('http://localhost:5500/api/recipes')
        setRecipeListItems(res.data);
      }catch(err){

      }
    }
    getAllRecipes()
  } ,[])

  //deletes a certain recipe with given id
  const deleteRecipe = async (id) =>{
    try{
      const res = await axios.delete(`http://localhost:5500/api/recipe/${id}`)
      const newRecipeList = recipeList.filter( item => item._id !== id );
      setRecipeListItems(newRecipeList);

    }catch(err){
      console.log(err)
    }finally{
      setOpen({item : null, state : false})
    }
  }
  return (
    <div>
      {
        <Modal show={open.state} onHide={ ()=> setOpen({item : null, state : false})}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setOpen({item : null, state : false})}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>deleteRecipe(open.item?._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      }
      {
        recipeList.map( item => ( <>
          <div className="card">
              {/* add image <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.ingredients}</h6>
                  <p className="card-text">{item.description}</p>
                  <BsTrashFill onClick={() => {setOpen({item : item, state : true})} }/>
                  <Link to={`/editrecipe/${item._id}`} state={{data : item}}>Edit recipe</Link>
                </div>

          </div>

        </>
        ) )
      }
    </div>
  )
}

export default Recipe