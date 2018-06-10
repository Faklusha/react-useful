import React from 'react';
import styled from 'styled-components';

const FooterItem = styled.div`
    width: 100%;
    height: 50px;
    background-color: #131306;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
`;

const Footer = () => (
  <FooterItem>
    <span>netflixroulette</span>
  </FooterItem>
);

export default Footer;
