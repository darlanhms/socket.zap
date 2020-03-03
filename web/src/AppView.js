import React, { Component } from "reactn";
import { SceneView } from "@react-navigation/core";
import { Navbar, Button, Dropdown } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa'
import './index.css'

export default class AppView extends Component {

  handlePressQuitSession = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  render() {    
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div id='main'>
        <Navbar collapseOnSelect bg="light" variant="light">
          <Navbar.Brand href="/">zap.socket</Navbar.Brand>
          {localStorage.getItem('token') ?
          <Dropdown className='buttonNav'>
            <Dropdown.Toggle style={{fontSize: 23}} variant="light" id="dropdown-nav">
              <FaCog/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handlePressQuitSession()}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> : <></>
          }
          {/* <Button variant='light' className='buttonNav'><FaCog style={{fontSize: 23}}/></Button> */}
        </Navbar>
        <SceneView
          navigation={descriptor.navigation}
          component={descriptor.getComponent()}
        />
      </div>
    );
  }
}