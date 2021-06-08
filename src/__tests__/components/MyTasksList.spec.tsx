import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { MyTasksList } from "../../components/MyTasksList";

let tasks: {
  id: number;
  title: string;
  done: boolean;
}[] = [];

let mockedOnLongPress: jest.Mock;
let mockedOnPress: jest.Mock;

const colorPalette = {
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

describe("MyTasksList", () => {
  beforeAll(() => {
    tasks = [
      {
        id: new Date().getTime(),
        title: "Primeiro todo",
        done: false,
      },
      {
        id: new Date().getTime() + 1,
        title: "Segundo todo",
        done: false,
      },
      {
        id: new Date().getTime() + 2,
        title: "Terceiro todo",
        done: true,
      },
    ];

    mockedOnLongPress = jest.fn();
    mockedOnPress = jest.fn();
  });

  it("should be able to render all tasks", () => {
    const { getByText } = render(
      <MyTasksList
        tasks={tasks}
        onLongPress={mockedOnLongPress}
        onPress={mockedOnPress}
        colorPalette={colorPalette}
      />
    );

    getByText("Primeiro todo");
    getByText("Segundo todo");
    getByText("Terceiro todo");
  });

  it('should be able to handle "longPress" event', () => {
    const { getByText } = render(
      <MyTasksList
        tasks={tasks}
        onLongPress={mockedOnLongPress}
        onPress={mockedOnPress}
        colorPalette={colorPalette}
      />
    );
    const firstTask = getByText("Primeiro todo");

    fireEvent(firstTask, "longPress");

    expect(mockedOnLongPress).toHaveBeenCalledWith(tasks[0].id);
  });

  it('should be able to handle "press" event', () => {
    const { getByText } = render(
      <MyTasksList
        tasks={tasks}
        onLongPress={mockedOnLongPress}
        onPress={mockedOnPress}
        colorPalette={colorPalette}
      />
    );
    const secondTask = getByText("Segundo todo");

    fireEvent.press(secondTask);

    expect(mockedOnPress).toHaveBeenCalledWith(tasks[1].id);
  });
});
