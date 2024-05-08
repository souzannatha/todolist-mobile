import { StyleSheet } from "react-native";
import { colors } from "../../styles/themes/colors";
import { fonts } from "../../styles/themes/fonts";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.gray700,
    width: "100%",
    height: 170,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    marginTop: 24,
  },
  containerInput: {
    position: "absolute",
    bottom: -25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    flex: 1,
  },
});
