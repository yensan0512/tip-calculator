import { useState } from 'react';
import styled from 'styled-components/macro';
import Button from './components/Button';
import Input from './components/Input';
import TipGroup from './components/TipGroup';
import TotalAmount from './components/TotalAmount';

const Wrapper = styled.div`
  position:relative;
  background: var(--light-grayish-cyan);
  height:100vh;
`;

const Title = styled.div`
  position:absolute;
  width:100%;
  height:20%;
  top:0;
  left:0;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  & > p {
    font-size:30px;
    letter-spacing:10px;
    color:var(--very-dark-cyan);
  }

`;

const Container = styled.div`
  position:absolute;
  width:100%;
  height:80%;
  bottom:0;
  left:0;
  background:white;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius:0px;
  border-bottom-right-radius:0px;
  padding:25px;

  display:flex;
  flex-direction:column;
  align-item:center;
  justify-content:space-between;
`;




function App() {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tipPercent, setTipPercent] = useState(5);

  let tipAmount = 0;
  let total = 0;
  let tipAmountString = "0";
  let totalString = "0";


  if (bill && person) {
    tipAmount = bill / person * (tipPercent / 100);
    tipAmountString = tipAmount.toFixed(2);

    total = (bill / person) + tipAmount;
    totalString = total.toFixed(2);
  }

  const handleReset = () => {
    setBill("");
    setPerson("");

  }


  return (
    <Wrapper>
      <Title>
        <p>SPLI</p>
        <p>TIER</p>
      </Title>
      <Container>

        <Input
          title={"Bill"}
          imgType={"dollar"}
          value={bill}
          onChange={setBill}
        />

        <TipGroup
          value={tipPercent}
          onChange={(tipPercent) => setTipPercent(tipPercent)}
        />

        <Input
          title={"Number of People"}
          imgType={"person"}
          value={person}
          onChange={setPerson}
        />

        <TotalAmount
          tip={tipAmountString}
          total={totalString}
          onReset={handleReset}
        />


      </Container>
    </Wrapper>

  );
}

export default App;
