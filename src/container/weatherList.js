import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
   
    render() {
        let arr = [...this.props.weather];
        let resArrCountry = [],resArrTemp=[],resPressure=[],reshumidity=[];
        if (arr !='' ){
            for (let i = 0;i<arr.length;i++){
                console.log(arr[i]);
                resArrCountry.push(<p key={`${arr[i].name}${i}`}>{arr[i].name}</p>);
                for (let j in arr[i])
                {
                    if (j==='main')
                    {
                        for (let k in arr[i][j]){
                            if (k==='temp'){
                                resArrTemp.push(<p key={`${arr[i][j][k]}${k}`}>{arr[i][j][k]}</p>)
                            }
                            if(k==='pressure'){
                                resPressure.push(<p key={`${arr[i][j][k]}${k}`}>{arr[i][j][k]}</p>)
                            }
                            if(k==='humidity'){
                                reshumidity.push(<p key={`${arr[i][j][k]}${k}`}>{arr[i][j][k]}</p>)
                            }
                        }
                    }
                }
                
            }
        }
        if(this.props.weather !== []){
        return (
            <table>
                <thead>
                <tr>
                    <th>City Name:</th>
                    <th>City Temperature:</th>
                    <th>City Pressure:</th>
                    <th>City Humidity:</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{resArrCountry}</td>
                        <td>{resArrTemp}</td>
                        <td>{resPressure}</td>
                        <td>{reshumidity}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
else{
    return <div></div>
}
}
}
function mapStateToProps(state) {
    return { weather:state.weather}
}

export default connect(mapStateToProps, null)(WeatherList);