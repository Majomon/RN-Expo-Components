import { ThemedText } from "@/presentation/shared/ThemedText";
import { ThemedView } from "@/presentation/shared/ThemedView";
import React from "react";

const Modal = () => {
  return (
    <ThemedView
      className="flex-1 justify-center items-center"
      bgColor="#A52182"
    >
      <ThemedText>Soy un modal</ThemedText>
    </ThemedView>
  );
};

export default Modal;
