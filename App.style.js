import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 10,
    backgroundColor: "#FAFAFA",
  },
  header: {
    flex: 1,
    justifyContent: "center",
  },
  body: {
    flex: 5,
  },
  footer: {
    backgroundColor: "white",
    height: 70,
  },
});
