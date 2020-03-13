import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '민백홍',
  'birthday': '960121',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '조수은',
    'birthday': '960121',
    'gender': '여자',
    'job': '주부'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '민수빈',
    'birthday': '960121',
    'gender': '여자',
    'job': '메이크업아티스트'
  },
  {
    'id': 4,
    'image': 'https://placeimg.com/64/64/any',
    'name': '민은빈',
    'birthday': '960121',
    'gender': '여자',
    'job': '대학생'
  },
]
export default class App extends Component {
  render() {
    return (
      <div className="gray-background">
        { customers.map(customer => {
          return (
            <Customer
              key={customer.id} 
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.jopb}
            />
          )
        })
      }
      </div>
    )
  }
}