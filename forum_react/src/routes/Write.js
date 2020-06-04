import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import './Write.css';


class Write extends Component {
    state = {
        title:"",
        text:"",
        date:"2020-06-04",
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    } 
    handleChange2 = (e) => {
        this.setState({
            text: e.target.value
        })
    } 
    render(){
        
        return(
            <div className = "write-wrapper">
                <div className = "write-title">
                    <input placeholder = "title"
                    value = {this.state.title}
                    onChange= {this.handleChange}
                    >

                    </input>
                </div>
                <div className = "write-body">
                    <input placeholder = "body"
                        value = {this.state.text}
                        onChange = {this.handleChange2}>
                        
                    </input>

                </div>
                <div className = "write-tail">
                    <div className = "write-button"
                        onClick = {() => this.props.onCreate(this.state)}>POST!</div>
                </div>
            </div>
        )
    }

      
}

export default Write;
