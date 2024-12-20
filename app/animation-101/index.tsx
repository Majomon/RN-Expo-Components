import { useAnimation } from "@/hooks/useAnimation";
import { ThemedButton } from "@/presentation/shared/ThemedButton";
import { ThemedView } from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated, Easing, View } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovieTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="flex-1 justify-center items-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />
      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovieTopPosition({
            easing: Easing.bounce,
          });
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
