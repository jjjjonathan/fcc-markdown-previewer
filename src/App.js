import React from 'react';
import TextEntry from './components/TextEntry';
import Result from './components/Result';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  return (
    <Container text className="main-container">
      <Header as="h1" textAlign="center">
        Markdown Preview!
      </Header>
      <TextEntry />
      <Header as="h2" textAlign="center">
        Result:
      </Header>
      <Result />
    </Container>
  );
};

export default App;
