import Input from  './Components/Input';
import Button from './Components/Button'
import './App.css';
import { Container, Content, Row,} from './styles';
import { useState } from 'react';

function App() {

  // variavel segundo numero
  const [currentNumber, setCurrentNumber] = useState('0');

  // variavel primeiro numero
  const [firstNumber, setFirstNumber] = useState('0')

  // variavel operação
  const [operation, setOperation] = useState('0')

  // função de limpar a tela
  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('0')
  }

  // função de setar numero
  const handleNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '': prev}${number}`)
  }

  // função de somar
  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
      setFirstNumber('0')
    }

  }

  //Função de diminuir
  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const min = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(min));
      setOperation('')
      setFirstNumber('0')
    }
  }

  //Função de multiplicar
  const handleMultiplyNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('')
      setFirstNumber('0')
    }
  }

  //Função de dividir
  const handleDivisionNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('')
      setFirstNumber('0')
    }
  }

  //função do igual
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case 'x':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDivisionNumbers()
          break;
        default:
          break
      }
    }

  }


  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers}/>
          <Button  label="÷" onClick={handleDivisionNumbers}/>
          <Button  label="." onClick={() => handleNumber('.')}/>
          <Button label="C" onClick={handleClear}/>
        </Row>

        <Row>
          <Button label="7" onClick={() => handleNumber('7')}/>
          <Button label="8" onClick={() => handleNumber('8')}/>
          <Button label="9" onClick={() => handleNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        
        <Row>
          <Button label="4" onClick={() => handleNumber('4')}/>
          <Button label="5" onClick={() => handleNumber('5')}/>
          <Button label="6" onClick={() => handleNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleNumber('1')}/>
          <Button label="2" onClick={() => handleNumber('2')}/>
          <Button label="3" onClick={() => handleNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleNumber('0')}/>

        </Row>
      </Content>
    </Container>
  );
}

export default App;
