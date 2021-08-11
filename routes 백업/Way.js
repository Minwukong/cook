// import { nullLiteral } from '@babel/types';
import React, { Component } from 'react'

export default class Way extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        
        if (location.state){
            return (
                <span>
                    <img src={location.state.image} alt="menu_img"></img>
                    {location.state.name}
                    <hr/>
                    재료정보: {location.state.ingredients} <hr/>

                        {location.state.manual_1} <br /> <img src={location.state.manual_1_img} alt=""></img> <br />
                        {location.state.manual_2} <br /> <img src={location.state.manual_2_img} alt=""></img> <br />
                        {location.state.manual_3} <br /> <img src={location.state.manual_3_img} alt=""></img> <br />
                        {location.state.manual_4} <br /> <img src={location.state.manual_4_img} alt=""></img> <br />
                        {location.state.manual_5} <br /> <img src={location.state.manual_5_img} alt=""></img> <br />
                        {location.state.manual_6} <br /> <img src={location.state.manual_6_img} alt=""></img> <br />
                        {location.state.manual_7} <br /> <img src={location.state.manual_7_img} alt=""></img> <br />
                        {location.state.manual_8} <br /> <img src={location.state.manual_8_img} alt=""></img> <br />
                        {location.state.manual_9} <br /> <img src={location.state.manual_9_img} alt=""></img> <br />
                        {location.state.manual_10} <br /> <img src={location.state.manual_10_img} alt=""></img> <br />
                        {location.state.manual_11} <br /> <img src={location.state.manual_11_img} alt=""></img> <br />
                        {location.state.manual_12} <br /> <img src={location.state.manual_12_img} alt=""></img> <br />
                        {location.state.manual_13} <br /> <img src={location.state.manual_13_img} alt=""></img> <br />
                        {location.state.manual_14} <br /> <img src={location.state.manual_14_img} alt=""></img> <br />
                        {location.state.manual_15} <br /> <img src={location.state.manual_15_img} alt=""></img> <br />
                        {location.state.manual_16} <br /> <img src={location.state.manual_16_img} alt=""></img> <br />
                        {location.state.manual_17} <br /> <img src={location.state.manual_17_img} alt=""></img> <br />
                        {location.state.manual_18} <br /> <img src={location.state.manual_18_img} alt=""></img> <br />
                        {location.state.manual_19} <br /> <img src={location.state.manual_19_img} alt=""></img> <br />
                        {location.state.manual_20} <br /> <img src={location.state.manual_20_img} alt=""></img> <br />

                
                
                  


                </span>
            )
        }else{
           return null; 
        }  
    }
}
