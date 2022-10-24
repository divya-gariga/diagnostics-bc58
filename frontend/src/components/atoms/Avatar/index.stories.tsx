import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";
import React from "react";
import UserImage from "../../../assets/icons/avatarImage.svg";
export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const avatar = Template.bind({});
avatar.args = {
  src: UserImage,
};
