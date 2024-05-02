import { StyleSheet } from "react-native";
import { colors } from "../../styles/themes/colors";
import { fonts } from "../../styles/themes/fonts";

export const styles = StyleSheet.create({
  containerTasks: {
    marginTop: 40,
    maxWidth: 320,
    flexDirection: "row",
    marginHorizontal: 24,
    justifyContent: "space-between",
  },
  CompletedandCreatedTasks: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  taskText: {
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  TaskTextCreated: {
    marginLeft: 4,
    color: colors.blue,
  },
  TaskTextCompleted: {
    color: colors.purple,
  },
  CompletedLeft: {
    marginLeft: 140,
  },
  CircleTask: {
    backgroundColor: colors.gray400,
    width: 25,
    height: 19,
    borderRadius: 999,
  },
  numberTask: {
    textAlign: "center",
    color: colors.gray100,
    fontFamily: fonts.bold,
  },
  grayBar: {
    maxWidth: 340,
    height: 2,
    backgroundColor: colors.gray400,
    marginLeft: 30,
    marginTop: 20,
  },
});
