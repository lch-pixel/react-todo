import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.size || "1.5em"};
  color: ${props => props.color || "white"};
  background-color: ${props => props.bc || null};
  padding: ${props => props.padding || "3px"};
  width: 1em !important;
  height: 1em !important;
  margin: 3px;
`;

export const CheckIcon = props => <StyledIcon icon={faCheck} bc={props.bc} />;
export const TimesIcon = props => <StyledIcon icon={faTimes} bc={props.bc} />;
