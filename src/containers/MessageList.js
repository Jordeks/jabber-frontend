import React from 'react'
import Message from '../components/Message'
import MessageForm from '../components/MessageForm'

function MessageList(props){
    // console.log(props)
    
        return (
            <>
                <div className='messanger__header'>
                    <h2 className='heading-secondary'> Latest Jabber</h2> 
                </div>
                    <div className='message-list'> 
                        <div className='message-list__box'>
                            <ul className='message-list__ul'>
                                {props.messages.map(message => <Message content={message.content} username={message.username} id={message.id} key={message.id}/>)}
                            </ul>
                        </div>
                    </div>
                    <a href="#popup">New Message</a>
                <MessageForm />
            </>
        )
    
}

export default MessageList
