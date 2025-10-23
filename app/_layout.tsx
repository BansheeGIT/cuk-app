// app/_layout.tsx
import "../global.css"; // подключаем tailwind/nativewind пресеты один раз

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// Если раньше использовал unstable_settings/anchor — убираем.
// Expo Router v3 это больше не требует.

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <Stack screenOptions={{ headerShown: false }}>
                {/* Корневой таб-стек */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* Модалка */}
                <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
            </Stack>
        </ThemeProvider>
    );
}
