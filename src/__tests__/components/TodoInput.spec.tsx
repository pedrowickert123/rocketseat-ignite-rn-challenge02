import React from "react";
import { TodoInput } from "../../components/TodoInput";
import { fireEvent, render } from "@testing-library/react-native";

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

describe("TodoInput", () => {
  it('should be able to submit the input text by "submitEditing" event', async () => {
    const mockTodoTask = jest.fn();

    const { getByPlaceholderText } = render(
      <TodoInput addTask={mockTodoTask} colorPalette={colorPalette} />
    );
    const inputText = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputText, "Primeira task");
    fireEvent(inputText, "submitEditing");

    expect(mockTodoTask).toHaveBeenCalledWith("Primeira task");
    expect(inputText).toHaveProp("value", "");
  });
  it("should be able to submit the input text by addButton", () => {
    const mockTodoTask = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <TodoInput addTask={mockTodoTask} colorPalette={colorPalette} />
    );
    const inputText = getByPlaceholderText("Adicionar novo todo...");
    const addButton = getByTestId("add-new-task-button");

    fireEvent.changeText(inputText, "Primeira task");
    fireEvent.press(addButton);

    expect(mockTodoTask).toHaveBeenCalledWith("Primeira task");
    expect(inputText).toHaveProp("value", "");
  });
});
