import React, { Component } from 'react'
import axios from "axios"


export default class App extends Component {

  state = {
    loading: false,
    foodState:[]
  }

  

  getCooking = async () => {
    axios.get("https://api.odcloud.kr/api/15050910/v1/uddi:69d46184-9441-4d4d-9c3f-e4de66a49643_201909261053?page=1&perPage=10&serviceKey=3K3JWhwch2og6I%2BumJnY5OQ7Kgt8ZIyo1HzJqRe%2Fj81fKBo%2BGn3R%2BGJHOhO0hTzmDBK2yy%2FuVXJm7i6mL58E0Q%3D%3D")
    .then(({data}) => {
      this.setState({
        loading: true,
        foodState: data.data
      });
    })
    .catch(e => {
      console.error(e);
      this.setState({
        loading: false
      });
    });
  
  };

  async componentDidMount(){
    this.getCooking();
  }

  render() {
    const {foodState} = this.state;
    console.log(foodState);
   
 

    return (
      <div>
        
        {foodState.map(food => {
          return(
            <div key = {food.제목}>
              <h4>{food.제목}</h4>
              <h4>{food.메뉴명}</h4>
              <h4>{food.등록일}</h4>
              {food.내용}
             

              <p align></p>
             
            </div>
            
          )
          
        })}
      </div>
    )
  }
}
