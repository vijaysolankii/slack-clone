import { addDoc, collection, serverTimestamp, doc } from "@firebase/firestore";
import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db,auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function ChatInput({channelId, channelName}) {

  const [input,setInput] = useState('');
  const [user, loading] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault();
    if(!channelId){ return false } 
    
    addDoc(collection(db,'rooms',channelId,"messages"), { 
        message: input,
        timestamp: serverTimestamp(),
        user:user.displayName,
        userImage:user.photoURL,
    });

    // chatRef.current.scrollIntoView({ behavior: "smooth" });

    setInput('')
  };
  return (
    <ChatInputContainer>
      <form>
        <input value={input} onChange={e => setInput(e.target.value)}  placeholder={` Message #${channelName} `}   />
        <Button hidden type="submit" onClick={sendMessage}>
          Send Message
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      outline: none;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
    }
    > button {
      display: none !important;
    }
  }
`;
