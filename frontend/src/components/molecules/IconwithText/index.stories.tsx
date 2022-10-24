import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconwithText from ".";
import labIcon from '../../../assets/icons/labIcon.svg'
import labIcon2 from '../../../assets/icons/labIcon2.svg'


export default {
  title: "Molecules/IconwithText",
  component: IconwithText,
} as ComponentMeta<typeof IconwithText>;

const Template: ComponentStory<typeof IconwithText> = (args) => (
  <IconwithText {...args}/>
);

export const IconwithText1 = Template.bind({});
export const IconwithText2 = Template.bind({});

IconwithText1.args={
    text:"1600+ Tests",
    icon:labIcon
}
IconwithText2.args={
    text:"At Home Services",
    icon:labIcon2
}
