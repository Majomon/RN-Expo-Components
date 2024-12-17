import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads"

import { allRoutes } from "@/constants/Routes";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

import "../global.css";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView
        style={{ flex: 1, backgroundColor: backgroundColor }}
      >
        <ThemeChangerProvider>
          {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
          <Stack
            screenOptions={{
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: backgroundColor,
              },
              headerStyle: {
                backgroundColor: backgroundColor,
              },
            }}
          >
            <Stack.Screen name="index" options={{ title: "" }} />
            {allRoutes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                  headerShown: !route.title.includes("Slides"),
                }}
              />
            ))}
          </Stack>
          <StatusBar style="auto" />
          {/* </ThemeProvider> */}
        </ThemeChangerProvider>
      </GestureHandlerRootView>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
          networkExtras: {
            collapsible: "bottom"
          }
        }}
      />
    </>
  );
}
