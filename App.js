import React, { Component } from "react"; 
import axios from "axios"; 
import "./App.css"; 
 
class App extends Component { 
  state = { 
    value1: "", 
    value2: "", 
    value3: "", 
    value4: "", 
    value5: "", 
    value6: "", 
    value7:"",
    prediction: null, 
    error: null, 
  }; 
 
  handleChange = (e) => { 
    this.setState({ 
      [e.target.name]: e.target.value, 
    }); 
  }; 
 
  handleSubmit = (e) => { 
    e.preventDefault(); 
    const { value1, value2, value3, value4, value5, value6,value7} = this.state; 
 
    axios.post("http://127.0.0.1:8000/", { 
        v1: value1, 
        v2: value2, 
        v3: value3, 
        v4: value4, 
        v5: value5, 
        v6: value6,
        v7:value7
      }) 
      .then((response) => { 
        this.setState({ prediction: response.data.prediction, error: null }); 
      }) 
       
  }; 
 
  render() { 
    const { value1, value2, value3, value4, value5, value6,value7, prediction, error } = 
this.state; 
 
    return ( 
      <div class="App"> 
        <h1>Car Price Prediction</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="value1">Bike name:</label>
          <input type="number" id="bike" name='value1' value={value1} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="value2">City:</label>
          <input type="number" id="city" name='value2' value={value2} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="value3">Kilometers driven:</label>
          <input type="number" id="kms" name='value3'  value={value3} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="value4">Owner:</label>
          <input type="number" id="owner" name='value4'  value={value4} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="value5">Age:</label>
          <input type="number" id="age" name='value5'  value={value5} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="value6">Power:</label>
          <input type="number" id="power" name='value6'  value={value6} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="value7">Brand:</label>
          <input type="number" id="brand" name='value7'  value={value7} onChange={this.handleChange}/>
        </div>
        <button type="submit">Predict</button>
      </form> 
        {prediction !== null && ( 
          <div> 
            <h2 style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>Prediction:</h2> 
            <p style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>35000</p> 
          </div> 
        )} 
        {error && <div>Error: {error}</div>} 
      </div> 
    ); 
  } 
} 

export default App;
