import React from 'react'
import Message from '../components/Message'

function MessageList(props){
    // console.log(props)
    
        return (
            <>
                <div className='messanger__header'>
                    <h2 className='heading-secondary'> Latest Jabber</h2> 
                </div>
                    <div className='message-list'> 
                        <div className='message-list__box'>
                            <ul>
                                {props.messages.map(message => <Message content={message.content} username={message.username} id={message.id} key={message.id}/>)}
                            </ul>
                        </div>
                    </div>
            </>
        )
    
}

export default MessageList
