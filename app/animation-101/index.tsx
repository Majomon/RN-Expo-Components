import { useAnimation } from "@/hooks/useAnimation";
import { ThemeButton } from "@/presentation/shared/ThemeButton";
import { ThemeView } from "@/presentation/shared/ThemeView";
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
    <ThemeView margin className="flex-1 justify-center items-center">
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
      <ThemeButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovieTopPosition({
            easing: Easing.bounce,
          });
        }}
      >
        FadeIn
      </ThemeButton>
      <ThemeButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
