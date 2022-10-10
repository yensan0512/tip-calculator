import { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';

const Wrapper = styled.div`
  background: red;
`;


function App() {

  const [bill, setBill] = useState("");

  return (
    <Wrapper>hi
      <Button buttonType={"custom"} onClick={() => console.log("123")}>
        15%
      </Button>

      <Input
        title={"Bill"}
        imgType={"person"}
        value={bill}
        onChange={setBill}
      />
    </Wrapper>
  );
}

export default App;
