import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestDetailMolecule from ".";

export default {
  title: "Molecules/TestDetailMolecule",
  component: TestDetailMolecule,
} as ComponentMeta<typeof TestDetailMolecule>;

const Template: ComponentStory<typeof TestDetailMolecule> = (args) => <TestDetailMolecule />;

export const Faq = Template.bind({});
