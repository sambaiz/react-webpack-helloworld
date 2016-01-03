import React from 'react'
import { render } from 'react-dom'
import Hello from './components/Hello'

render(
  <div>
    <Hello say="hello" />
  </div>,
  document.getElementById('example')
);
