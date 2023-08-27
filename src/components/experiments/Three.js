import React, {Component } from 'react';
// import './App.css';
import styled from 'styled-components';
import ThreeEntryPoint from "./ThreeEntryPoint";



class Threejs extends Component {

    componentDidMount() {
    ThreeEntryPoint(this.threeRootElement);
    }

    render () {

      const Big = styled.div`
      height: 100vh;
      width: 100vw;
      `;
        return (
          <div>
            <Big className="header-header" ref={element => this.threeRootElement = element}></Big>
          </div>
        );
    }
}


export default Threejs;