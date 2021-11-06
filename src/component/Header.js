import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon  from "@material-ui/icons/AccessTime";

import SearchIcon  from "@material-ui/icons/Search";
import HelpOutlineIcon  from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()} src={user?.photoURL} alt={user?.displayName}/>
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search Channels" />
        </HeaderSearch>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width   : 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: #fff;
    background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display:flex;
    align-items: center;
    margin-left: 20px;
    justify-content: space-between;
    > .MultiSvgIcon-root, > .MuiSvgIcon-root{
        margin: 0 30px 0 auto;
    }
`;

const HeaderAvatar = styled(Avatar) `
    cursor: pointer;transition: 0.5s ease all;
    :hover{
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input{
        background-color: transparent;
        border: none;
        outline: 0;
        text-align: center;
        min-width: 30vw;
        color: #fff;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display:flex;
    align-items: flex-end;
    
    > .MuiSvgIcon-root{
        margin: 0 20px 0 auto;
    }
`;
