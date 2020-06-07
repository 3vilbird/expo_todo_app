import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ title, id, onDelete }) => (
  <TouchableOpacity onPress={onDelete.bind(this, id)}>
    <View style={styles.outItem}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
