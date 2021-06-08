import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ModeButtonsProps {
  onLayoutMode: (mode: string) => void;
}

export function ModeButtons({ onLayoutMode }: ModeButtonsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.lightButton}
        onPress={() => onLayoutMode("light")}
      >
        <Text style={styles.lightText}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.darkButton}
        onPress={() => onLayoutMode("dark")}
      >
        <Text style={styles.darkText}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  lightButton: {
    paddingLeft: 6,
    paddingRight: 4,
    paddingVertical: 4,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  darkButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: "#191D3A",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  lightText: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#191932",
  },
  darkText: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#FFF",
  },
});
