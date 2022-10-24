import { Story } from "@storybook/react";
import React from "react";
import FooterMedia from ".";

export default {
    title: 'Molecules/FooterMedia',
    component: FooterMedia
}

let Template: Story = () => <FooterMedia />

export const FooterMediaStory = Template.bind({})