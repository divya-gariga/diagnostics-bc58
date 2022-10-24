import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FAQs from ".";

export default {
  title: "Molecules/FaqMolecule",
  component: FAQs,
} as ComponentMeta<typeof FAQs>;

const Template: ComponentStory<typeof FAQs> = (args) => <FAQs />;

export const Faq = Template.bind({});
