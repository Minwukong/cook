// import { nullLiteral } from '@babel/types';
import React, { Component } from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "./Detail.css"

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

            const rowData = [
                {칼로리: location.state.calorie, 
                탄수화물: location.state.carbohydrate,
                단백질: location.state.protein,
                지방: location.state.fat,
                나트륨: location.state.salt},
            ];

            return (
                <span className="main">
                    <img src={location.state.image } alt="menu_img" ></img>
                    <h3>{location.state.name}</h3>

                        <div className="ag-theme-alpine" style={{height: 110, width: 900}}>
                            <AgGridReact
                                rowData={rowData}>
                                <AgGridColumn field="칼로리"></AgGridColumn>
                                <AgGridColumn field="탄수화물"></AgGridColumn>
                                <AgGridColumn field="단백질"></AgGridColumn>
                                <AgGridColumn field="지방"></AgGridColumn>
                                <AgGridColumn field="나트륨"></AgGridColumn>

                            </AgGridReact>
                        </div>


                </span>
            )
        }else{
           return null; 
        }  
    }
}
