import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddAdress from ".";

export default {
  title: "Organisms/AddAdress",
  component: AddAdress,
} as ComponentMeta<typeof AddAdress>;

const Template: ComponentStory<typeof AddAdress> = (args) => <AddAdress />;

export const address = Template.bind({});
