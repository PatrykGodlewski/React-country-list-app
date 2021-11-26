import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "./header";

export default {
  component: Header,
  title: "header",
} as Meta;

const Template: Story<any> = (args) => {
  return <Header {...args}> some Header to check </Header>;
};

export const Primary = Template.bind({});
Primary.args = { variant: "extraBold" };
