import React, { Component } from 'react'
import axios from "axios"
import Menu from "../components/Menu"
import "./Home.css"

export default class App extends Component {

  state = {
    loading: true,
    foodState:[]
  }

  

  getCooking = async () => {
    axios.get("http://openapi.foodsafetykorea.go.kr/api/51602b3f540e4599bd76/COOKRCP01/json/1/4")
    .then(({data}) => {
      this.setState({
        foodState: data.COOKRCP01.row,
        loading: false
      });
    })
  };

  async componentDidMount(){
    this.getCooking();
  }

  

  render() {
    const {loading,foodState} = this.state;
    console.log(foodState,loading);
   
   
    return (
    <section className="container">
        {loading ? (
            <div className="loader">
                <span className="loader_text">Loading...</span>
            </div>
        ):(
            <div className="foods">
                {foodState.map(food => {
                    return(
                        <Menu
                        key={food.RCP_SEQ}
                        name={food.RCP_NM}
                        image={food.ATT_FILE_NO_MK}
                        calorie={food.INFO_ENG}
                        carbohydrate={food.INFO_CAR}
                        protein={food.INFO_PRO}
                        fat={food.INFO_FAT}
                        salt={food.INFO_NA}
                        ingredients={food.RCP_PARTS_DTLS}
                        howMake={food.RCP_WAY2}
                        foodStyle={food.RCP_PAT2}
                        manual_1={food.MANUAL01}
                        manual_1_img={food.MANUAL_IMG01}
                        manual_2={food.MANUAL02}
                        manual_2_img={food.MANUAL_IMG02}
                        manual_3={food.MANUAL03}
                        manual_3_img={food.MANUAL_IMG03}
                        manual_4={food.MANUAL04}
                        manual_4_img={food.MANUAL_IMG04}
                        manual_5={food.MANUAL05}
                        manual_5_img={food.MANUAL_IMG05}
                        manual_6={food.MANUAL06}
                        manual_6_img={food.MANUAL_IMG06}
                        manual_7={food.MANUAL07}
                        manual_7_img={food.MANUAL_IMG07}
                        manual_8={food.MANUAL08}
                        manual_8_img={food.MANUAL_IMG08}
                        manual_9={food.MANUAL09}
                        manual_9_img={food.MANUAL_IMG09}
                        manual_10={food.MANUAL10}
                        manual_10_img={food.MANUAL_IMG10}
                        manual_11={food.MANUAL11}
                        manual_11_img={food.MANUAL_IMG11}
                        manual_12={food.MANUAL12}
                        manual_12_img={food.MANUAL_IMG12}
                        manual_13={food.MANUAL13}
                        manual_13_img={food.MANUAL_IMG13}
                        manual_14={food.MANUAL14}
                        manual_14_img={food.MANUAL_IMG14}
                        manual_15={food.MANUAL15}
                        manual_15_img={food.MANUAL_IMG15}
                        manual_16={food.MANUAL16}
                        manual_16_img={food.MANUAL_IMG16}
                        manual_17={food.MANUAL17}
                        manual_17_img={food.MANUAL_IMG17}
                        manual_18={food.MANUAL18}
                        manual_18_img={food.MANUAL_IMG18}
                        manual_19={food.MANUAL19}
                        manual_19_img={food.MANUAL_IMG19}
                        manual_20={food.MANUAL20}
                        manual_20_img={food.MANUAL_IMG20}
                  
                        />
                    );       
                })}
                
            </div>
        )}
    </section>
    
    
   
    );
    
  }
}

