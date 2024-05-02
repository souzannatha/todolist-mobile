import { View, Text } from "react-native";
import { styles } from "./style";

export function Tasks() {
  return (
    <View>
      <View style={styles.containerTasks}>
        <View style={styles.CompletedandCreatedTasks}>
          <Text style={[styles.taskText, styles.TaskTextCreated]}>Criadas</Text>
          <View style={styles.CircleTask}>
            <Text style={styles.numberTask}>0</Text>
          </View>
        </View>
        <View style={[styles.CompletedandCreatedTasks, styles.CompletedLeft]}>
          <Text style={[styles.taskText, styles.TaskTextCompleted]}>
            Concluídas
          </Text>
          <View style={styles.CircleTask}>
            <Text style={styles.numberTask}>0</Text>
          </View>
        </View>
      </View>
      <View style={styles.grayBar}></View>
    </View>
  );
}
