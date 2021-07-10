/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MAX_VALUE = 100;

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      '--border-radius': '4px',
      '--padding': '0',
      '--height': '8px'
    },
    medium: {
      '--border-radius': '4px',
      '--padding': '0',
      '--height': '12px'
    },
    large: {
      '--border-radius': '8px',
      '--padding': '4px',
      '--height': '24px'
    }
  }
  return <Wrapper value={value} size={size} style={SIZES[size]}><Bar value={value} size={size} /></Wrapper>;
};

const Wrapper = styled.div.attrs(({ value, size }) => ({
  role: 'progressbar',
  'aria-valuemin': '0',
  'aria-valuemax': `${MAX_VALUE}`,
  'aria-valuenow': value,
}))`
  border-radius: var(--border-radius);
  padding: var(--padding);
  height: var(--height);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.div`
  height: 100%;
  clip-path: inset(0 ${({ value }) => MAX_VALUE - value}% 0 0);
  background-color: ${COLORS.primary};
  border-radius: ${({ value, size }) => value === MAX_VALUE && size === 'large' ? '4px' : null};
`

export default ProgressBar;
