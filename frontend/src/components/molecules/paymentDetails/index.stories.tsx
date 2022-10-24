import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PaymentDetails from ".";
import { paymentOptions } from "../../utils/Constant";

export default {
    title: "Molecules/PaymentDetails",
    component: PaymentDetails,
} as ComponentMeta<typeof PaymentDetails>;

const Template: ComponentStory<typeof PaymentDetails> = (args) => {
    return (
        <PaymentDetails {...args}></PaymentDetails>
    );
};

export const Default = Template.bind({});

Default.args = {
    cardHolder: "Yessie",
    cardNumber: "1244 1234 1345 3255",
    expiryDate: "02/25",
    paymentOptions: paymentOptions,
}