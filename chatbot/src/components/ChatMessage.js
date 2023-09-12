import React from 'react'
import { ChatDots,Justify, Person } from 'react-bootstrap-icons';

export default function ChatMessage(props) {
    return (
      <div className={`d-flex ${props.user && 'justify-content-end'}`}>
    {props.user ? (
        <span className='message-right'>
            <span className='message-text'>{props.ChatMessage}</span>
            <Person className='message-icons' />
        </span>
    ) : (
        <span className='message-left'>
            <ChatDots className='message-icon' />
            <spam className='message-text'>{props.message}</spam>
        </span>
    )}
    </div>
    );
}

   