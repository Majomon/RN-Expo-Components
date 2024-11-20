import { ThemeButton } from "@/presentation/shared/ThemeButton";
import { ThemeView } from "@/presentation/shared/ThemeView";
import { useRef } from "react";
import { Animated, Easing, View } from "react-native";

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      // easing: Easing.elastic(6),
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      // }).start(() => animatedTop.setValue(-100));
    }).start(() => animatedTop.resetAnimation());
  };

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
      <ThemeButton className="my-5" onPress={fadeIn}>
        FadeIn
      </ThemeButton>
      <ThemeButton className="my-5" onPress={fadeOut}>
        FadeOut
      </ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
