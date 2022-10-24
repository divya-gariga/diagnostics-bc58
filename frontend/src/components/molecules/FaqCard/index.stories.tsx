import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FaqCard from ".";


export default {
  title: "Molecules/Faq",
  component: FaqCard,
} as ComponentMeta<typeof FaqCard>;

const Template: ComponentStory<typeof FaqCard> = (args) => (
  <FaqCard {...args} />
);

export const FaqCard1 = Template.bind({});
FaqCard1.args={
  text:"How Soon Can I get the Report?"
}
