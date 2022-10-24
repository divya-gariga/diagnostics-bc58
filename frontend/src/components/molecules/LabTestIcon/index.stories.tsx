import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LabTextIcon from ".";
import { Props } from ".";
import Body from "../../../assets/icons/body.svg";
import Kidney from "../../../assets/icons/kidney.svg";

export default {
  title: "Molecules/LabTest",
  component: LabTextIcon,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof LabTextIcon>;

const Template: ComponentStory<typeof LabTextIcon> = (args) => (
  <LabTextIcon {...args} />
);

export const BodyCheck = Template.bind({});
BodyCheck.args = {
  logo: Body,
  testName: "Full Body Check",
  clickable: true,
};
export const KidneyTest = Template.bind({});
KidneyTest.args = {
  logo: Kidney,
  testName: "Kidney Check",
  clickable: false,
};
