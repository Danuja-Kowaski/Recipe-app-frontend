import React from 'react'
import axios from 'axios';


const NewRecipe = () => {
    //add new recipe to DB
    const addRecipe = async (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        try {
            const res = await axios.post('http://localhost:5500/api/recipe', {title : form.get('title'), ingredients : form.get('ingredients'), description : form.get('description')})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        {/* Add validation */}
        <form id='form-id' onSubmit={addRecipe}>
        <div class="form-group">
            <label for="exampleInputEmail1">Recipe Name</label>
            <input class="form-control form-control-lg" name="title" type="text" placeholder="Recipe Name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Recipe Ingredients</label>
            <input class="form-control form-control-lg" name="ingredients" type="text" placeholder="Recipe Ingredients"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Recipe Description</label>
            <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
  )
}

export default NewRecipe