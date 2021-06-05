import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const TextEntry = ({ text, setText }) => (
  <Form>
    <TextArea
      placeholder="Enter Markdown Here"
      value={text}
      onChange={({ target }) => setText(target.value)}
      id="editor"
      rows={8}
    />
  </Form>
);

export default TextEntry;
