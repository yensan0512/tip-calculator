import React from "react";
import styled from "styled-components/macro";
import Button from "./Button";
import Input, {InputContainer,InputValue} from "./Input";

const Wrapper = styled.div`
  width:100%;

  display:flex;
  flex-direction:column;
  gap:10px;
`;

const Label = styled.div`
  font-size:20px;
  color:var(--grayish-cyan);
`;

const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:10px;

  ${InputContainer} {
    height:100%;
  }

  ${InputValue} {
    height:100%;
  }

  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default ({ value, onChange }) => {


  return (
    <Wrapper>
      <Label>
        Select Tip %
      </Label>
      <Container>
        <Button
          buttonType={value === 5 ? "inactive" : "active"}
          onClick={() => onChange(5)}

        >
          5%
        </Button>
        <Button
          buttonType={value === 10 ? "inactive" : "active"}
          onClick={() => onChange(10)}
        >
          10 %
        </Button>
        <Button
          buttonType={value === 15 ? "inactive" : "active"}
          onClick={() => onChange(15)}
        >
          15%
        </Button>
        <Button
          buttonType={value === 20 ? "inactive" : "active"}
          onClick={() => onChange(20)}
        >
          20%
        </Button>
        <Button
          buttonType={value === 25 ? "inactive" : "active"}
          onClick={() => onChange(25)}
        >
          25%
        </Button>
        <Input 
        placeholder={"Custom"}
        onChange={(x) => onChange(x)}/>

      </Container>
    </Wrapper >
  );
}