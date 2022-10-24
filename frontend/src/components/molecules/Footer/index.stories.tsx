import { Story } from "@storybook/react";
import React from "react";
import Footer from ".";

export default {
    title: 'Molecules/Footer',
    component: Footer
}

let Template: Story = () => <Footer />

export const FooterComponent = Template.bind({})