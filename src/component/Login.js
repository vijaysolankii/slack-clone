import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    // const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider).catch(error => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
        <h1>Sign in to VijaySolanki</h1>
        <p>vijaysolanki.slack.com</p>
        <Button onClick={signIn}>
          Sign In with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  background-color: #f7f7f7;
  display: grid;
  place-items: center;
  height: 100vh;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > h1 {

  }
  > p {
    margin-top:5px;
  }
  > Button {
      margin-top:50px;
      text-transform: uppercase;
      background-color: #0a8d48;
      color: #fff;
      padding: 10px 20px;
      :hover{
          background-color: #36c5f1;
          
      }
  }
`;
