import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const handleClick = () => {
      document.getElementById('#select').click()
  }

  return (
    <Wrapper onClick={handleClick}>
        <div>{displayedValue}</div>
        <IconWrapper>
            <Icon id="chevron-down" size={16} />
        </IconWrapper>
        <SelectElement name={label} id="#select" value={value} onChange={onChange}>
            {children}
        </SelectElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  width: fit-content;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 18px;
  height: 16px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`

const SelectElement = styled.select`
  opacity: 0;
  position: absolute;
`
export default Select;
