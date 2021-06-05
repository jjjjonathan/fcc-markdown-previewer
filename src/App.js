import React from 'react';
import TextEntry from './components/TextEntry';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  return (
    <Container text>
      <Header as="h1">Markdown Preview!</Header>
      <TextEntry />
    </Container>
  );
};

export default App;
