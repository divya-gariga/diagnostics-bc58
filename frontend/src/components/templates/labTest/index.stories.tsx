import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import LabTest from ".";


export default {
  title: "Templates/LabTest",
  component: LabTest,
} as ComponentMeta<typeof LabTest>;

const Template: ComponentStory<typeof LabTest> = (args) => {
  return (
    <LabTest {...args}/>
  );
};

export const Default = Template.bind({});
