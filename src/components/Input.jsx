import React from "react";
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width:100%;
`;

const Label = styled.div`
  font-size:20px;
  color:var(--grayish-cyan);

`;

const InputContainer = styled.div`
  position: relative;
  width:100%;

  & > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
  }
`;

const InputValue = styled.input`
  font-size:24px;
  color:var(--very-dark-cyan);
  background:var(--very-ligh-grayish-cyan);
  border:0;
  border-radius:8px;
  text-align:right;
  padding: 0 20px;
`;

const Input = ({ title, imgType, onChange, value }) => {
  var ImgPath;

  if (imgType === "dollar")
    ImgPath = "/images/icon-dollar.svg";
  else if (imgType === "person")
    ImgPath = "/images/icon-person.svg";

  return (
    <Wrapper>
      <Label>{title}</Label>

      <InputContainer>
        <img src={ImgPath} />
        <InputValue
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </InputContainer>
    </Wrapper>
  );
}

export default Input;

