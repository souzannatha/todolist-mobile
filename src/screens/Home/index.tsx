import { View } from "react-native";
import { Header } from "../../Components/Header";
import { Tasks } from "../../Components/tasks";
import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.home}>
      <Header />
      <Tasks />
    </View>
  );
}
