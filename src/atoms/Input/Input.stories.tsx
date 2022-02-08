import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      message: { control: { type: "string" } },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: undefined,
  disabled: false,
};

export const onError = Template.bind({});
onError.args = {
  disabled: false,
  error: { message: "Esto es un mensaje de error" },
};
