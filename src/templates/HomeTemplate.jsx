import React, { Component } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header';

export default class HomeTemplate extends Component {
  render() {
    return (
     <>
     <Header />
     <main id='body' style={{minHeight:650}}>
        <Outlet />
      </main>
     </>
    )
  }
}
