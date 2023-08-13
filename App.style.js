import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 0,
    backgroundColor: "#FAFAFA",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  body: {
    flex: 5,
    padding: 0,
    backgroundColor: "#FAFAFA",
  },
  footer: {
    backgroundColor: "white",
    height: 70,
  },
  item: {
    marginHorizontal: 12,
    marginVertical: 7,
  },
});
