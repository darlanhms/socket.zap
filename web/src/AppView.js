import React, { Component } from "reactn";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";
import { Navbar, Nav } from 'react-bootstrap';
import './index.css'

export default class AppView extends Component {
  render() {
    console.log(this.global.currentUser);
    
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div id='main'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">zap.socket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
        <SceneView
          navigation={descriptor.navigation}
          component={descriptor.getComponent()}
        />
      </div>
    );
  }
}