import React, { useState } from 'react';
import TextEntry from './components/TextEntry';
import Result from './components/Result';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  const defaultText =
    "# Header 1! \n## Now header 2 \nHere's the [link](https://www.freecodecamp.com)" +
    ' and `{ inlineCode }` \n```\nmultiLineCode()\nreturn null;\n```\n' +
    '- and\n- you\n- gotta\n- have\n- lists\n\n> and be **utterly quotable**\n\n' +
    '![Rando img](https://picsum.photos/200)';

  const [text, setText] = useState(defaultText);

  return (
    <Container text className="main-container">
      <Header as="h1" textAlign="center" className="system-header">
        Markdown Preview!
      </Header>
      <TextEntry text={text} setText={setText} />
      <Header as="h2" textAlign="center" className="system-header">
        Result:
      </Header>
      <Result text={text} />
    </Container>
  );
};

export default App;
