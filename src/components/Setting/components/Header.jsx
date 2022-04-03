import React from 'react';
import styled from "styled-components"

const Header = () => {
    return (
        <div>
          <header className="App-header">
          <Title>Recipe Search</Title>
        </header>  
        </div>
    );
};

export default Header;

const Title = styled.h1`
color: yellow; 
font-size: 1.5em;
`