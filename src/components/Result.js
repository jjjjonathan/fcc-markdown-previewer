import React from 'react';
import { Segment } from 'semantic-ui-react';

import marked from 'marked';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const Result = ({ text }) => {
  marked.setOptions({ breaks: true, gfm: true });

  const result = () => parse(DOMPurify.sanitize(marked(text)));

  return (
    <Segment className="md-result" id="preview">
      {result()}
    </Segment>
  );
};

export default Result;
