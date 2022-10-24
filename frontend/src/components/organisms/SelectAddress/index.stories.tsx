import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAddress from ".";
import { addressData } from "../../../utils/constant";
import { action } from "@storybook/addon-actions";
export default {
  title: "Organisms/SelectAddress",
  component: SelectAddress,
} as ComponentMeta<typeof SelectAddress>;

const Template: ComponentStory<typeof SelectAddress> = (args) => <SelectAddress {...args}/>;

export const selectAddressOrganism = Template.bind({});
selectAddressOrganism.args={
  addressData:addressData,
  onAddAddressClick:action("Clicked on Add Address"),
  onCompleteClick:action("Clicked on Complete Order")
}