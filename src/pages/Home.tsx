import React, { useState, useMemo } from "react";

import { View } from "react-native";
import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  background: string;
  headerBackground: string;
  placeholder: string;
  inputContainer: string;
  checkColor: string;
  taskButtonDone: string;
  title: string;
  text: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [layoutMode, setLayoutMode] = useState("light");

  const colorPalette = useMemo<ColorPalette>(() => {
    if (layoutMode === "light") {
      return {
        primary: "#273FAD",
        secondary: "#3D3D4D",
        background: "#FFF",
        headerBackground: "#273FAD",
        placeholder: "#A09CB1",
        inputContainer: "#F5F4F8",
        checkColor: "#3FAD27",
        taskButtonDone: "rgba(25, 61, 223, 0.1)",
        title: "#3D3D4D",
        text: "#3D3D4D",
      };
    }

    return {
      primary: "#565BFF",
      secondary: "#565BFF",
      background: "#10101E",
      headerBackground: "#191932",
      placeholder: "#E1E1E6",
      inputContainer: "#212136",
      checkColor: "#565BFF",
      taskButtonDone: "rgba(33, 33, 54, 0.3)",
      title: "#565BFF",
      text: "#FFF",
    };
  }, [layoutMode]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === "") {
      return;
    }

    const task: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldState) => [...oldState, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((oldState) =>
      oldState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }

        return item;
      })
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }

  function handleLayoutMode(mode: string) {
    setLayoutMode(mode);
  }

  return (
    <View style={{ flex: 1, backgroundColor: colorPalette.background }}>
      <Header onLayoutMode={handleLayoutMode} colorPalette={colorPalette} />

      <TodoInput addTask={handleAddTask} colorPalette={colorPalette} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        colorPalette={colorPalette}
      />
    </View>
  );
}
