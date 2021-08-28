import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          moedaA_value: '',
          moedaB_value: 0,
        }

        this.Converter = this.Converter.bind(this)
    
      }

    Converter(){
        let depara = `${this.props.moedaA}-${this.props.moedaB}`
        let url = `https://economia.awesomeapi.com.br/json/last/${depara}`
        let locationurl = `${this.props.moedaA}${this.props.moedaB}`

        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{
            let cotacao = json[locationurl].high;
            let moedaB_value = parseFloat((this.state.moedaA_value * cotacao)).toFixed(2)
            this.setState({moedaB_value})
        })
    }
    
    render() {
    return (
      <div className="conversor">
          <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
          <input type='text' onChange={(event)=>{this.setState({moedaA_value:event.target.value})}}></input>
          <input type='button' value='Converter' onClick= { this.Converter }></input>
          <h2>{this.state.moedaB_value}</h2>
      </div>
    )
}
}

