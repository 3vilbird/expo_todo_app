import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddmode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // console.log();
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddmode(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log("the goal id is", goalId);

    setCourseGoals((currentGoals) => {
      // loops entire array and returns new array
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoalAddition = () => {
    setIsAddmode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddmode(true)} />
      <GoalInput
        visiblity={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddition}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          // key should be always to  be at hte root element.
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
