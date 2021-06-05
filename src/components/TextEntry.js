import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const TextEntry = () => (
  <Form>
    <TextArea placeholder="Enter Markdown Here" id="editor" rows={8} />
  </Form>
);

export default TextEntry;
