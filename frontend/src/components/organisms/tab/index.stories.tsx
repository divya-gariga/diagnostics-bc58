import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicTabs from "./index";
import { Typography } from "@mui/material";
export default {
  title: "Organisms/BasicTabs",
  component: BasicTabs,
} as ComponentMeta<typeof BasicTabs>;

const Template: ComponentStory<typeof BasicTabs> = (args) => (
  <BasicTabs {...args} />
);

export const Tabs = Template.bind({});

Tabs.args = {
  tabNames: ["Home", "Reports","My Appointements"],
  tabValues: [<Typography>Home</Typography>, <Typography>Reports</Typography>,<Typography>My Appointements</Typography>],
};
