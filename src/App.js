import React, { useState } from 'react';
import TextEntry from './components/TextEntry';
import Result from './components/Result';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  const [text, setText] = useState('');

  return (
    <Container text className="main-container">
      <Header as="h1" textAlign="center">
        Markdown Preview!
      </Header>
      <TextEntry text={text} setText={setText} />
      <Header as="h2" textAlign="center">
        Result:
      </Header>
      <Result text={text} />
    </Container>
  );
};

export default App;
