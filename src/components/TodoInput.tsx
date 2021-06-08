import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";
import { ColorPalette } from "../pages/Home";

interface TodoInputProps {
  addTask: (task: string) => void;
  colorPalette: ColorPalette;
}

export function TodoInput({ addTask, colorPalette }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    addTask(task);
    setTask("");
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
        { backgroundColor: colorPalette.inputContainer },
      ]}
    >
      <TextInput
        style={[styles.input, { backgroundColor: colorPalette.inputContainer }]}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={colorPalette.placeholder}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: colorPalette.checkColor }]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
