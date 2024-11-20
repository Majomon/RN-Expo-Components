import React from "react";
import { Platform, Pressable, Switch, Text, View } from "react-native";
import { ThemeText } from "./ThemeText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

export const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange,
}: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");
  return (
    <Pressable
      className={`flex flex-row mx-2 justify-between items-center active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemeText type="h2">{text}</ThemeText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "gray",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};
