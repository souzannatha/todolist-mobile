import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <>
      <Home />
    </>
  );
}
