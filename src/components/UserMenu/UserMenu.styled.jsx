import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const Button = styled.button`
  align-items: center;
  margin-left: 8px;
  width: 100px;
  height: 35px;
  border-radius: 4px;
  border: none;
  background: #4169E1;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
   &:hover, &:focus {
        color: white;
        background: #4169E1;
        outline: transparent;
        };
`;