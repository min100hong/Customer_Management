import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <div>
                <CustomerProfile
                    id={this.props.id}
                    name={this.props.name}
                    image={this.props.image}
                />
                <CustomerInfo 
                    gender={this.props.gender}
                    birthday={this.props.birthday}
                    job={this.props.job}
                />
            </div>
        )
    }
}

class CustomerProfile extends Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="Profile"/>
                <h2>{this.props.name}({this.props.id})</h2>            
            </div>
        );
    }
}

class CustomerInfo extends Component {
    render() {
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>           
        )
    }
}
