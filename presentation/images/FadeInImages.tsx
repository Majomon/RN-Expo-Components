import { useAnimation } from "@/hooks/useAnimation";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

export const FadeInImages = ({ uri, style }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { fadeIn, animatedOpacity } = useAnimation();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color="grey"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({ duration: 2000 });
          setIsLoading(false);
        }}
      />
      {/* <Text>FadeInImages</Text> */}
    </View>
  );
};
