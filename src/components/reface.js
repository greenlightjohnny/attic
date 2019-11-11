import React, { Component } from 'react';
const { FacebookProvider, Page } = require('react-facebook')
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="2518108111807119">
        <Page href="https://www.facebook.com/testingapitesting/" className tabs="timeline" />
      </FacebookProvider>    
    );
  }
}