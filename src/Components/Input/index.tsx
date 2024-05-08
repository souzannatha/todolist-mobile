import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { styles } from "./style";

export function Input() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={[styles.input, isFocused && styles.focused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.button}>
        <Image source={require("../../images/plus.png")} />
      </TouchableOpacity>
    </View>
  );
}
