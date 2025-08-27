import { MD3LightTheme as DefaultTheme, MD3Theme } from "react-native-paper";

// You can customize the theme here
export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgba(13, 71, 161, 1)", // Navy Blue
    onPrimary: "rgba(255, 255, 255, 1)",
    primaryContainer: "rgba(66, 165, 245, 1)",
    onPrimaryContainer: "rgba(13, 71, 161, 1)",
    secondary: "rgba(21, 101, 192, 1)",
    onSecondary: "rgba(255, 255, 255, 1)",
    secondaryContainer: "rgba(144, 202, 249, 1)",
    onSecondaryContainer: "rgba(21, 101, 192, 1)",
    tertiary: "rgba(25, 118, 210, 1)",
    onTertiary: "rgba(255, 255, 255, 1)",
    tertiaryContainer: "rgba(187, 222, 251, 1)",
    onTertiaryContainer: "rgba(25, 118, 210, 1)",
    background: "rgba(255, 255, 255, 1)", // White background
    onBackground: "rgba(33, 33, 33, 1)", // Dark text on white background
    surface: "rgba(255, 255, 255, 1)",
    onSurface: "rgba(33, 33, 33, 1)",
    surfaceVariant: "rgba(224, 224, 224, 1)",
    onSurfaceVariant: "rgba(66, 66, 66, 1)",
    outline: "rgba(189, 189, 189, 1)",
    error: "rgba(176, 0, 32, 1)",
    onError: "rgba(255, 255, 255, 1)",
    errorContainer: "rgba(252, 228, 236, 1)",
    onErrorContainer: "rgba(176, 0, 32, 1)",
    surfaceDisabled: "rgba(189, 189, 189, 1)",
    onSurfaceDisabled: "rgba(117, 117, 117, 1)",
    shadow: "rgba(0, 0, 0, 1)",
    inverseOnSurface: "rgba(245, 245, 245, 1)",
    inverseSurface: "rgba(48, 48, 48, 1)",
    inversePrimary: "rgba(66, 165, 245, 1)",
    backdrop: "rgba(66, 66, 66, 1)",
  },
};
