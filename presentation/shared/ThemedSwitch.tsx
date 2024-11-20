import React from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { ThemeText } from "./ThemeText";

interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}

export const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange,
}: Props) => {
  return (
    <Pressable
      className={`flex flex-row justify-between items-center active:opacity-80 ${className}`}
    >
      {text && <ThemeText type="h2">{text}</ThemeText>}
      <Switch value={value} onValueChange={onValueChange} />
    </Pressable>
  );
};
