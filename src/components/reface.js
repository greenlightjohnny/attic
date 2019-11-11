import React, { Component } from 'react';
const { FacebookProvider, Page } = require('react-facebook')
 
export default class Example extends Component {

    componentDidMount(){
        window.FB.XFBML.parse();
     }
  render() {
    return (
      <FacebookProvider appId="2518108111807119">
        <Page href="https://www.facebook.com/AngelsintheAtticFloydVa/" className tabs="timeline" />
      </FacebookProvider>    
    );
  }
}