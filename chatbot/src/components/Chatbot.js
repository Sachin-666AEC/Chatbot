import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import { analyze } from '../utils';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: 'Hi, may i have your name?'
    }
  ])

  const [text, setText] = useState('');

  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];    
    } else {
      list = [
        ...list,
        {
          message: 'Hi, ${text}',
        },
        {
          message: 'How can i help you?',
        },
      ];
    }
    setMessages(list)
    setText('')
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    }, 1);

  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="
          alt="logo"
          height={200}
          width={200}
        />
        <h2 className='text-primary'>Chatbot</h2>
      </div>
      <div className='chat-message'>
        {messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)}
        <div className='d-flex mt-2'>
          <input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
          <Button type='primary' className='ms-3' onClick={onSend}>
            Send
          </Button>
        </div>
        <div id='copyright' className="mt-3">
          Copyright reserved malayalam SkillHub
        </div>
      </div>
    </div>
  );
}


