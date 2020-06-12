import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.verticalButtons}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    verticalButtons: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-evenly',
    },
    button: {
        width: '40%'
    }
})

export default GoalInput