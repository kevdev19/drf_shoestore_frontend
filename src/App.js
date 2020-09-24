import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoes: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoes/")
      .then((response) => response.json())
      .then((data) => this.setState({ shoes: data }));
  }
  render() {
    return (
      <div>
        <h1>Shoes</h1>
        <ul>
          {this.state.shoes.map((shoe) => (
            <li key={shoe.toString()}>
              <p>
                <strong>Brand Name: </strong>
                {shoe.brand_name}
              </p>
              <p>
                <strong>Shoe Color: </strong>
                {shoe.shoe_color}
              </p>
              <p>
                <strong>Fasten Type: </strong>
                {shoe.fasten_type}
              </p>
              <p>
                <strong>Manufacturer: </strong>
                {shoe.manufacturer}
              </p>
              <p>
                <strong>Material: </strong>
                {shoe.material}
              </p>
              <p>
                <strong>Shoe Type: </strong>
                {shoe.shoe_type}
              </p>
              <p>
                <strong>Size: </strong>
                {shoe.size}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
