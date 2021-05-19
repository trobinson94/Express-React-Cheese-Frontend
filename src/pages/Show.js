import { useState } from "react"

function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const aCheese = cheese.find(p => p._id === id)

    const [editForm, setEditForm] = useState(aCheese)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateCheese(editForm)
        props.history.push("/") 
    }

    const removeCheese = () => {
        props.deleteCheese(aCheese._id)
        props.history.push("/")
    }
  
    return (
      <div className="aCheese">
        <h1>{aCheese.name}</h1>
        <h2>{aCheese.title}</h2>
        <img src={aCheese.image} alt={aCheese.name} />
        <button id="delete" onClick={removeCheese}>
            DELETE
        </button>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="Country of Origin"
            onChange={handleChange}
            />
            <input type="submit" value="Update Cheese" />
        </form>
      </div>
    )
  }
  
  export default Show