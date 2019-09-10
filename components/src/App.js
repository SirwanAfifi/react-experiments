import React from 'react';
import { Message } from './Message';
import { Summary } from './Summary';

export default () => {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Hello Sirwan
    </h1>
      <Message greeting="Hello" name="Sirwan" />
      <Message greeting="Hello" name="Behzad" />
      <Message greeting="Hello" name="Shaho" />
      <Summary />
    </div>
  )
}