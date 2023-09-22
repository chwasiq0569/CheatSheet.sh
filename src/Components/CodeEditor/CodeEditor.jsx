import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css'; // Importing dark theme

const code = `function add(a, b) {
    return a + b;
  }`;

const CodeEditor = () => {
    return (
        <Editor
            value={code}
            onValueChange={() => { }}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                backgroundColor: '#282c34', // Dark background color
                color: '#f8f8f2' // Light text color
            }}
            readOnly
        />
    );
};

export default CodeEditor;