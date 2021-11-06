import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SidebarOptions from "./SidebarOptions";

import { db } from "../firebase";
import { useCollection } from 'react-firebase-hooks/firestore'
import { addDoc, collection } from "@firebase/firestore";

function Sidebar() {
  const [channels,loading,errors] = useCollection(collection(db,"rooms"))


  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Genaration</h2>
          <h3>
            <FiberManualRecordIcon />
            Vijay Solanki
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" /> 
      <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" /> 
      <SidebarOptions Icon={DraftsIcon} title="Saved Items" /> 
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" /> 
      <SidebarOptions Icon={FileCopyIcon} title="People & User Groups" /> 
      <SidebarOptions Icon={PeopleAltIcon} title="Apps" /> 
      <SidebarOptions Icon={AppsIcon} title="File Browser" /> 
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" /> 
      <hr /> <SidebarOptions Icon={ExpandMoreIcon} title="Show Less" />  <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" /> 
      {
        channels?.docs.map((doc) => (
          <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} /> 
          ))
      }
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: #fff;
  background-color: var(--slack-color);
  flex: 0.3;
  max-width: 260px;
  margin-top: 60px;
  border-bottom: 1px solid #49272b;

  > hr {
      margin: 10px 0;
      border-top: 1px solid #f7f7f700;
      border-bottom: 1px solid #f7f7f7;
      opacity: 0.6;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49272b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    border-radius: 999px;
    background-color: #fff;
  }
`;
const SidebarInfo = styled.div`
    flex:1;
    > h2{font-size: 15px;font-weight: 900;margin-bottom: 05px;}
    > h3{display: flex;font-size: 13px;font-weight: 400;align-items: center; > .MuiSvgIcon-root {font-size:14px;margin-top:1px;margin-right:2px;color:green;}}
`;
