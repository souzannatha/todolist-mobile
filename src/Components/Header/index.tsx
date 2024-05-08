import { View, Image } from "react-native";
import { styles } from "./style";
import { Input } from "../Input";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.img}>
        <Image source={require("../../images/Logo.png")} />
      </View>
      <Input />
    </View>
  );
}
