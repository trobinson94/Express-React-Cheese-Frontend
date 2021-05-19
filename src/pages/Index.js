import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {

    const [newForm, setNewForm] = useState({
        name: "",
        countryOfOrigin: "",
        image: ""
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCheese(newForm);
        setNewForm({
            name: "",
            countryOfOrigin: "",
            image: ""
        });
    };

  // loaded function
  const loaded = () => {
    return props.cheese.map((aCheese) => (
        <div key={aCheese._id} className="aCheese">
            <Link to={`/cheese/${aCheese._id}`}>
                <h1>{aCheese.name}</h1>
            </Link>
            <h3>{aCheese.countryOfOrigin}</h3>
            <img src={aCheese.image} alt={aCheese.name} />
        </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input type="submit" value="Add Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );


}

export default Index;