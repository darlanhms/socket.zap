import React, { Component } from "react";
import { SceneView } from "@react-navigation/core";
import { Link } from "@react-navigation/web";
import { Navbar, Nav } from 'react-bootstrap';
import './index.css'

export default class AppView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div id='main'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">zap.socket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-home">
            <Link routeName={"Login"} navigation={navigation}>
              Login
            </Link>
            <Link routeName={"Chat"} navigation={navigation}>
              Converse
            </Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <SceneView
          navigation={descriptor.navigation}
          component={descriptor.getComponent()}
        />
      </div>
    );
  }
}