import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from ".";
import GooglePlay from '../../../assets/socialmediaIcons/playstore.svg'

export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image imgSrc={GooglePlay} imgAlt="image" />;

export const ImageStory = Template.bind({});
