import React from "react";
import RadioButton from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Atoms/RadioButton",
    component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => {
    return (
        <RadioButton></RadioButton>
    );
};

export const Default = Template.bind({});