import React from 'react'
import styled from 'styled-components'

export const TransparentButton = styled.button`
  border-radius: 50px;
  background-color: transparent;
  align-self: flex-start;
  padding: 15px 60px;
  margin: 60px 0 0 0;
  border: 2px solid #fe6d20;
  color: white;
  text-transform: uppercase;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  font: 12px 'Lato';
  &:hover,
  &:focus {
    border: 3px solid inset #fe6d20;
    box-shadow: 0 0 5px #fe6d20, inset 0 0 5px #fe6d20;
  }
  &:active {
    color: #fe6d20;
    border: 3px solid inset #fe6d20;
    box-shadow: 0 0 2px #fe6d20, inset 0 0 2px #fe6d20;
    outline: none;
  }
  &:visited,
  &:focus-visible {
    outline: none;
  }
`
