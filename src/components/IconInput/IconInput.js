import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const ICON_SIZES = {
    small: 12,
    large: 20,
  };
  const SIZE_VARIANT_VARIABLES = {
    small: {
      "--height": "24px",
      "--font-size": "14px",
      "--icon-label-size": "24px",
    },
    large: {
      "--height": "40px",
      "--font-size": "18px",
      "--icon-label-size": "34px",
    },
  };

  return (
    <Wrapper
      style={{
        ...SIZE_VARIANT_VARIABLES[size],
        "--width": width + "px",
      }}
    >
      <LayoutWrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconLabel>
          <IconWrapper size={ICON_SIZES[size]}>
            <Icon id={icon} size={ICON_SIZES[size]} />
          </IconWrapper>
        </IconLabel>
        <Input placeholder={placeholder} />
      </LayoutWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--width);
  height: var(--height);
  position: relative;
  color: ${COLORS.gray500};
  font-size: var(--font-size);
  font-weight: 700;

  &:focus {
    outline: 1px solid ${COLORS.primary};
    outline-offset: 3px;
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const LayoutWrapper = styled.div`
  border-bottom: 1px solid currentColor;
  width: 100%;
  height: 100%;
`;

const IconLabel = styled.label.attrs({ for: "input" })`
  display: inline-block;
  width: var(--icon-label-size);
  height: 100%;
  position: relative;
`;

const IconWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  position: absolute;
  top: 0;
  bottom: 0;
`;

const Input = styled.input.attrs(({ placeholder }) => ({
  placeholder: placeholder || "Search..",
  id: "input",
}))`
  border: none;
  width: calc(100% - var(--icon-label-size));
  height: calc(100% - 1px);
  position: absolute;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  outline: none;

  &::placeholder {
    font-weight: 400;
  }
`;

export default IconInput;
