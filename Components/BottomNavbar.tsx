"use client";
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { Chats, Heart, UserCircle, UsersThree } from "phosphor-react";
import { useState } from "react";

interface Props {}

const BottomNavbar: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [currentTab, setCurrentTab] = useState("contact");
  return (
    <div className="fixed bottom-0 bg-white py-5 w-full flex justify-around">
      {/* <Heart color="#AE2983" weight="fill" size={32} /> */}
      <Link href="/contacts">
        <UsersThree
          onClick={() => {
            setCurrentTab("contact");
          }}
          size={32}
          color={`${currentTab === "contact" ? "rgb(126 34 206)" : "#000"}`}
        />
      </Link>
      <Link href="/">
        <Chats
          onClick={() => {
            setCurrentTab("chat");
          }}
          size={32}
          color={`${currentTab === "chat" ? "rgb(126 34 206)" : "#000"}`}
        />
      </Link>
      <Link href="/profile">
        <UserCircle
          onClick={() => {
            setCurrentTab("profile");
          }}
          size={32}
          color={`${currentTab === "profile" ? "rgb(126 34 206)" : "#000"}`}
        />
      </Link>
    </div>
  );
};

export default BottomNavbar;
