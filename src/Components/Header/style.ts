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
    justifyContent: "center", // Adicionando esta linha para centralizar horizontalmente
    marginHorizontal: 24,
    flex: 1,
  },
  input: {
    padding: 16,
    maxWidth: 300,
    flex: 1,
    height: 54,
    borderColor: colors.gray700,
    backgroundColor: colors.gray500,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.gray300,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  focused: {
    borderWidth: 1,
    flex: 1,
    borderColor: colors.purple,
    borderRadius: 6,
  },
  symbol: {
    width: 20,
    height: 20,
  },
});
