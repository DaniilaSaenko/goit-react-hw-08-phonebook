import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:  auto;

  width: 400px;
  height: 300px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 20px;
  border: solid 1px #A9A9A9;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  :not(:first-child) {
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  display: flex;
  margin-top: 3px;
  padding: 5px 15px;
  border: 1px solid #A9A9A9;
  height: 35px;
  border-radius: 4px;
`;

export const Button = styled.button`
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-top: 25px;
    display: flex;
    border-radius: 4px;
    width: 100px;
    height: 45px;
    border: none;
  background: #4169E1;
  text-align: center;
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