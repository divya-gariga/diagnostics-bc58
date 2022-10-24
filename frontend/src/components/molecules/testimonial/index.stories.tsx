import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Testimonial from ".";
import avatarImage from "../../../assets/icons/avatarImage.svg";

export default {
    title: "Molecules/Testimonial",
    component: Testimonial,
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => {
    return (
        <Testimonial {...args} />
    );
};

export const Default = Template.bind({});

Default.args = {
    avatar: avatarImage,
    name: "Abby",
    location: "San Jose, CA",
    comment: "Very friendly and professional. Loved the follow-up and progress calls"
}