// import { nullLiteral } from '@babel/types';
import React, { Component } from 'react'

export default class Detail extends Component {
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
                    <img src={location.state.image } alt="menu_img"></img>
                    {location.state.name}
                    <hr/>
                    칼로리: {location.state.calorie}
                    탄수화물: {location.state.carbohydrate}
                    단백질: {location.state.protein}                    
                    지방: {location.state.fat}
                    나트륨: {location.state.salt}


                </span>
            )
        }else{
           return null; 
        }  
    }
}
