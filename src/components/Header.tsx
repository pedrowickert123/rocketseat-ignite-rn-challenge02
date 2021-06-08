import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { ColorPalette } from "../pages/Home";

interface HeaderProps {
  onLayoutMode: (mode: string) => void;
  colorPalette: ColorPalette;
}

export function Header({ onLayoutMode, colorPalette }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
