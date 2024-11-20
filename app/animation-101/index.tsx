import { ThemeButton } from "@/presentation/shared/ThemeButton";
import { ThemeView } from "@/presentation/shared/ThemeView";
import { View, Text } from "react-native";

const Animation101Screen = () => {
  return (
    <ThemeView margin>
      <Text>Animation101Screen</Text>
      <ThemeButton className="mb-5" onPress={() => console.log("Fade In")}>
        FadeIn
      </ThemeButton>
      <ThemeButton className="mb-5" onPress={() => console.log("Fade Out")}>
        FadeOut
      </ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
