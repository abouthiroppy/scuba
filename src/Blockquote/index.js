import React from 'react';
import styles from './styles';
import classnames from 'classnames';

const Blockquote = (props) => (
  <pre
    style={Object.assign({}, styles.pre, props.style)}
    className={classnames('blockquote', props.className)}
  >
    {props.children}
  </pre>
);

export default Blockquote;
