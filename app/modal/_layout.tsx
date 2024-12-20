import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="modal-window-2"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
