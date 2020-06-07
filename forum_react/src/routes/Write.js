import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import './Write.css';
import {useHistory} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Write extends Component {
    state = {
        title:"",
        body:"",
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    } 
    handleChange2 = (e) => {
        this.setState({
            body: e.target.value
        })
    } 
    render(){
        
        return(
            <div className = "write-wrapper">
                <div >
                    <input className = "write-title"
                    placeholder = "title"
                    value = {this.state.title}
                    onChange= {this.handleChange}
                    >

                    </input>
                </div>
                <div className = "ab">
                    <textarea className = "write-body" rows ="30"
                    placeholder = "body"
                        value = {this.state.body}
                        onChange = {this.handleChange2}>
                        
                    </textarea>

                </div>
                <div className = "write-tail">
                    <Link to= "/posts"
                    className = "write-button"
                        onClick = {() => {this.props.onCreate(this.state); } }>POST!</Link>
                        
                </div>
            </div>
            
        )

    }

      
}

export default Write;
