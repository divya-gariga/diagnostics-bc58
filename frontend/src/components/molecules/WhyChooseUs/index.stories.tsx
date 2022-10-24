import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WhyChooseUs from ".";


export default {
  title: "Molecules/WhyChooseUs",
  component: WhyChooseUs,
} as ComponentMeta<typeof WhyChooseUs>;

const Template: ComponentStory<typeof WhyChooseUs> = (args) => (
  <WhyChooseUs />
);

export const IconwithText1 = Template.bind({});

