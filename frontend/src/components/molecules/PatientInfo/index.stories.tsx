import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PatientInfo from ".";
export default {
  title: "Molecules/PatientInfo",
  component: PatientInfo,
} as ComponentMeta<typeof PatientInfo>;
const Template: ComponentStory<typeof PatientInfo> = (args) => (
  <PatientInfo {...args} />
);

export const Patrick = Template.bind({});
Patrick.args = {
  age: 30,
  gender: "M",
  patientName: "Patrick Smith",
  relation: "Self",
  testCost: 3000,
  testName: "COVID RT-PCR Test",
};
