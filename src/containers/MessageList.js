import React from 'react'
import Message from '../components/Message'

function MessageList(props){
    // console.log(props)
    
        return (
            <>
                <h2 className='heading-secondary'> Latest Jabber</h2> 
                    <div className='message-list'> 
                        <div className='message-list__box'>
                            <ul>
                                {props.messages.map(message => <Message content={message.content} username={message.username} key={message.id}/>)}
                            </ul>
                        </div>
                    </div>
            </>
        )
    
}

export default MessageList
