import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Tags from ".";
export default {
    title:"atoms/tags",
    component:Tags
}as ComponentMeta<typeof Tags>;

const Template:ComponentStory<typeof Tags>=(args)=><Tags {...args} />

export const Primary = Template.bind({})
Primary.args={
    focused:true,
    text:"Patrick"
}
export const Secondary = Template.bind({})
Secondary.args={
    focused:false,
    text:"Patrick"
}