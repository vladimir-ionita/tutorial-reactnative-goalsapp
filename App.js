import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    // setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalUid => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid !== goalUid)
    })
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            uid={itemData.item.uid}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
