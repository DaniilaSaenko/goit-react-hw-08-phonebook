import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Item = styled.p`
  width: 350px;
  height: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  font-size: 18px;
`;

export const Button = styled.button`
  align-items: center;
  margin-left: 8px;
  display: block;
  height: 25px;
  border-radius: 4px;
  border: none;
  background: #4169E1;
  font-size: 14px;
  font-weight: normal;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
   &:hover, &:focus {
        color: white;
        background: #4169E1;
        outline: transparent;
        };
`;
