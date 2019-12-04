import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="2518108111807119">
        <Page href="https://www.facebook.com/AngelsintheAtticFloydVa/" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}
