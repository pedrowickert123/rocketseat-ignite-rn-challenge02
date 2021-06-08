import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";
import { ColorPalette } from "../pages/Home";

interface FlatListHeaderComponentProps {
  colorPalette: ColorPalette;
}

function FlatListHeaderComponent({
  colorPalette,
}: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={[styles.header, { color: colorPalette.title }]}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  colorPalette: ColorPalette;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  colorPalette,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done
                ? [
                    styles.taskButtonDone,
                    { backgroundColor: colorPalette.taskButtonDone },
                  ]
                : styles.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? [
                      styles.taskMarkerDone,
                      { backgroundColor: colorPalette.primary },
                    ]
                  : [
                      styles.taskMarker,
                      {
                        borderColor: colorPalette.secondary,
                      },
                    ]
              }
            />
            <Text
              style={
                item.done
                  ? [styles.taskTextDone, { color: colorPalette.placeholder }]
                  : { color: colorPalette.text }
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent colorPalette={colorPalette} />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
  },
});
