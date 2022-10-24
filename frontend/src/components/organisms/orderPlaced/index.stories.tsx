import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrderPlaced from ".";

export default {
    title: "Organisms/OrderPlaced",
    component: OrderPlaced,
} as ComponentMeta<typeof OrderPlaced>;

const Template: ComponentStory<typeof OrderPlaced> = (args) => {
    return(
        <OrderPlaced {...args}></OrderPlaced>
    );
};

export const Default = Template.bind({});

Default.args = {
    instructions: "Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment.",
    onClickTrack: action("Track your order button clicked"),
    onClickHome: action("Back to home button clicked"),
}