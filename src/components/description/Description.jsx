// @flow

import React from 'react';
import styled from 'styled-components';
import DescriptionOptionsContainer from './DescriptionOptionsContainer';

type Props = {
    isShownOptions: boolean,
    count: number
};


const Item = styled.div`
 padding: 10px 15px;
    background-color: gray;
    display: flex;
    justify-content: space-between;
`;

const Description = (props: Props) => {
  const { isShownOptions, count } = props;
  return (
    <Item>
      <span>{count} items found</span>
      {isShownOptions && <DescriptionOptionsContainer />}
    </Item>
  );
}
export default Description;
