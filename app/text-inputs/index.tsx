import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedText } from "@/presentation/shared/ThemedText";
import { ThemedTextInput } from "@/presentation/shared/ThemedTextInput";
import { ThemedView } from "@/presentation/shared/ThemedView";
import { useState } from "react";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <ThemedView margin>
      <ThemedCard>
        <ThemedTextInput
          placeholder="Nombre completo"
          autoCapitalize={"words"}
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemedCard>

      <ThemedCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
