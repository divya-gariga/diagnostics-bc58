import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LabDetailsCard from ".";
import labIcon from "../../../assets/icons/altos.svg";

export default {
    title: "Molecules/LabDetailsCard",
    component: LabDetailsCard,
} as ComponentMeta<typeof LabDetailsCard>;

const Template: ComponentStory<typeof LabDetailsCard> = (args) => {
    return (
        <LabDetailsCard {...args} />
    );
};

export const Default = Template.bind({});

Default.args = {
    labIcon: labIcon,
    labName: "Los Altos Center Lab",
    time: "24 hrs",
    cost: "$1200",
    selected: true,
    rating: "4.3",
    slots: 4
}