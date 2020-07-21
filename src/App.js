import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar  from './Component/navbar/NavBar'
import Search from './Component/search/Search'

class App extends Component{
  render(){
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
       
      </div>
    </MuiThemeProvider>
  );
}
}

export default App;
