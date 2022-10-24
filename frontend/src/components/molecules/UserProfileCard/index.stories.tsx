import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserProfileCard from ".";
import homeImg from '../../../assets/userprofileIcons/home.svg'

export default {
  title: "Molecules/UserProfileCard",
  component: UserProfileCard,
} as ComponentMeta<typeof UserProfileCard>;

const Template: ComponentStory<typeof UserProfileCard> = (args) => <UserProfileCard {...args}/>;

export const UserProfilecard = Template.bind({});
UserProfilecard.args={
  icon:homeImg,
  heading:"Manage Address",
  subtext:"2235 calfornia"
}