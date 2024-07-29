import React from "react";
import { Link } from "react-router-dom";
import "../components/chatList.css"


const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD </span>

      <Link to="/dashboard"> Create a new chat </Link>
      <Link to="/"> Explore Lama AI </Link>
      <Link to="/"> Contact </Link>

      <hr />
      <span title="title">  RECENT CHATS </span>
      <div className="list">
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
        <Link>My chat title </Link>
      </div>

      <hr />

<div className="upgrade">

    <img src="/logo" alt="" />

    <div className="texts">

        <span>Upgrade to Lama AI pro</span>
        <span>Get Unlimited Access to all features</span>



    </div>


</div>


    </div>
  );
};

export default ChatList;
