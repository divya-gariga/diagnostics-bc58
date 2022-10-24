import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SelectAndAddPatient from ".";
import { patientDetails } from "../../../utils/constant";
export default {
  title: "molecules/Select and Add Patient",
  component: SelectAndAddPatient,
} as ComponentMeta<typeof SelectAndAddPatient>;
const Template: ComponentStory<typeof SelectAndAddPatient> = (args) => (
  <SelectAndAddPatient {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  patientDetails: patientDetails,
};
