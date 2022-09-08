import React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const UpdateRecipe = () => {
    //add new recipe to DB
    const {state} = useLocation()
    console.log(state.data)
    const hanldeUpdateRecipe = async (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        try {
            const res = await axios.put(`http://localhost:5500/api/recipe/${state.data._id}`, {title : form.get('title'), ingredients : form.get('ingredients'), description : form.get('description')})
            console.log(res.data)
        
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        {/* Add validation */}
        <form id='form-id' onSubmit={hanldeUpdateRecipe}>
        <div class="form-group">
            <label for="exampleInputEmail1">Recipe Name</label>
            <input class="form-control form-control-lg" defaultValue={state.data?.title} name="title" type="text" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Recipe Ingredients</label>
            <input class="form-control form-control-lg" defaultValue={state.data?.ingredients} name="ingredients" type="text" />
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Recipe Description</label>
            <textarea class="form-control" defaultValue={state.data?.description} name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
  )
}

export default UpdateRecipe