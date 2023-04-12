import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler() {
    console.log("Ye raha",courseGoals);
  setCourseGoals([...courseGoals, enteredGoalText]);
  //setCourseGoals(currentCourseGoals => [...currentCourseGoals,enteredGoalText ]);
  //setCourseGoals([...courseGoals, []]);
  }



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput}
          placeholder="Your course goal here"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add goals" onPress={addGoalHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom:55
  }
 
});
