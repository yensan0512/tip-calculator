import React from "react";
import styled from "styled-components/macro";
import Button, { Wrapper as $Button } from "./Button";

const Wrapper = styled.div`
  width:100%;
  background:var(--very-dark-cyan);
  border-radius:8px;
  padding:10px;

  ${$Button} {
    width:100%;
  }
`;

const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:10px;
`;

const FlexContainer = styled.div`
  padding:10px;

  display:flex;
  flex-direction:column;
`;

const Label = styled.div`
  color:white;

`;

const InnerLabel = styled.div`
  color:var(--grayish-cyan);
`;

const Text = styled.div`
  color:var(--strong-cyan);
  font-size:30px;
  text-align:right;
  padding:10px 20px;

  display:flex;
  justify-content:flex-end;
`;


export default ({ tip, total, onReset }) => {

  return (
    <Wrapper>
      <Container>
        <FlexContainer>
          <Label>
            Tip Amount
          </Label>
          <InnerLabel>
            /person
          </InnerLabel>
        </FlexContainer>
        <Text>
          ${tip}
        </Text>
        <FlexContainer>
          <Label>
            Total
          </Label>
          <InnerLabel>
            /person
          </InnerLabel>
        </FlexContainer>
        <Text>
          ${total}
        </Text>
      </Container>
      <Button buttonType={"inactive"} onClick={onReset}>
        RESET
      </Button>
    </Wrapper>

  );
}