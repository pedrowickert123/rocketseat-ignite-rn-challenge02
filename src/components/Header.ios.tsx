import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { ModeButtons } from "./ModeButtons";
import { ColorPalette } from "../pages/Home";

interface HeaderProps {
  onLayoutMode: (mode: string) => void;
  colorPalette: ColorPalette;
}

export function Header({ onLayoutMode, colorPalette }: HeaderProps) {
  return (
    <SafeAreaView style={{ backgroundColor: colorPalette.headerBackground }}>
      <View
        style={[
          styles.header,
          { backgroundColor: colorPalette.headerBackground },
        ]}
      >
        <View />
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>to.</Text>
          <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
            do
          </Text>
        </View>
        <ModeButtons onLayoutMode={onLayoutMode} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
    paddingHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerTitle: {
    flexDirection: "row",
    marginLeft: 44,
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
