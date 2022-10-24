import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from ".";

export default {
    title:"molecules/ProgressBar",
    component:ProgressBar
}as ComponentMeta<typeof ProgressBar>

const Template:ComponentStory<typeof ProgressBar> =(args)=><ProgressBar {...args} />

export const Primary = Template.bind({})

Primary.args={
    currentIndex:0,
    values:["Lab test","Select Appointment","Add address", "Review order"]
}