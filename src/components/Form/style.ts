import { Input, Select } from "@material-ui/core";
import styled from "styled-components";

export const CustomSelect = styled(Select)`
  && {
    width: 100%;
    margin: 10px 0px;
 
    .MuiOutlinedInput-notchedOutline {
      border: none;
      border-bottom: 2px solid rgba(187, 184, 217, 1);
      border-radius: 0;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #3f51b5;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #3f51b5;
    }
  }

  @media(max-width: 650px){
    && {
    width: 70%;
    margin: 10px 20px;
    font-size: 10px;

    .MuiInputBase-input {
      padding: 10px;
      border-bottom: none; 
    }
  }
  }
`;

export const CustomInput = styled(Input)`
   && {
    width: 100%;
    margin: 10px 0px;

    .MuiInputBase-input {
      padding: 10px;
      border-bottom: none; /* Remove qualquer borda inline */
    }

    &:before {
      border-bottom: 2px solid rgba(187, 184, 217, 1); /* Cor da borda padrão */
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: 2px solid #3f51b5; /* Cor da borda ao passar o mouse */
    }

    &:after {
      border-bottom: 2px solid #3f51b5; /* Cor da borda ao focar */
    }
  }

  @media(max-width: 650px){
    && {
    width: 70%;
    margin: 10px 20px;
    font-size: 10px;

    .MuiInputBase-input {
      padding: 10px;
      border-bottom: none; 
    }
  }
  }
`;

export const Container = styled.div`
  margin: 40px auto;
  background-color: white;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px 30px 40px 30px;

  h3 {
    padding: 10px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
  }

  span {
    color: black;
    padding-left: 5px;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
    margin-top: 10px;
    line-height: 0.5;
  }

  @media(max-width: 650px){
    padding: 20px 15px 20px 15px;
    max-width: 250px;

    h3 {
    padding: 10px;
    font-size: 15px;
  }
  form {
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 10px;
    display: flex;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 8px;
    margin-top: 5px;
  }

    }
`;

export const AddressBox = styled.div`
  padding: 25px 10px;
`;
