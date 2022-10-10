import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const InputContainer = styled.div`
  position: relative;

  & > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
  }
`;

const InputValue = styled.input`
  font-size:20px;
  color:var(--very-dark-cyan);
  background:var(--very-ligh-grayish-cyan:);
  border:0;
  border-radius:2px;
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
      <p style={{ fontSize: "12px" }}>{title}</p>

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

