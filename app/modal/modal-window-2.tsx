import { ThemedButton } from "@/presentation/shared/ThemedButton";
import { ThemedText } from "@/presentation/shared/ThemedText";
import { ThemedView } from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const Modal = () => {
  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText>Soy otro modal</ThemedText>

      <ThemedButton onPress={() => router.dismiss()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default Modal;
