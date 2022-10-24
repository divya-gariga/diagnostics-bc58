import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestDetailCard from ".";
import bodyTest from '../../../assets/illustrations/bodyTest.svg'
import cardiac from '../../../assets/illustrations/cardiac.svg'

export default {
  title: "Molecules/TestDetailCard",
  component: TestDetailCard,
} as ComponentMeta<typeof TestDetailCard>;

const Template: ComponentStory<typeof TestDetailCard> = (args) => <TestDetailCard {...args} />;

export const TestDetailCard1 = Template.bind({});
export const TestDetailCard2 = Template.bind({});
TestDetailCard1.args={
  text:"Full Body CheckUp",
  iconIllustation:bodyTest
}
TestDetailCard2.args={
  text:"Cardiac Assessment",
  iconIllustation:cardiac
}