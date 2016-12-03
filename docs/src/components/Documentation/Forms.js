import React from 'react';
import {TextField, TextArea} from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import {TextField, TextArea} from 'scuba';

<label style={{marginBottom: '.5rem'}}>textField</label>
<TextField placeholder="placeholder 😎" />
<label style={{margin: '1.2rem 0 .5rem 0'}}>textArea</label>
<TextArea placeholder="😊" />
`;

const Forms = () => (
  <div>
    <h2 id="forms">Forms</h2>
    <p>Forms are changed border color by theme.</p>
    <label style={{marginBottom: '.5rem'}}>textField</label>
    <TextField placeholder="placeholder 😎" />
    <label style={{margin: '1.2rem 0 .5rem 0'}}>textArea</label>
    <TextArea placeholder="😊" />
    <p>Forms have no custom props.</p>
    {generateCodeTemplate(sampleCode)}
  </div>
);

export default Forms;