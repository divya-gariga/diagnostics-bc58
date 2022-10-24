import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PatientCard from ".";
import { patientDetails } from "../../../utils/constant";
export default {
  title: "molecules/PatientCard",
  component: PatientCard,
} as ComponentMeta<typeof PatientCard>;

const Template: ComponentStory<typeof PatientCard> = (args) => (
  <PatientCard {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...patientDetails[0],
};
