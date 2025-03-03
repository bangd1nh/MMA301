import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Touchable,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const InputForm = ({ callbackFn }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        callbackFn(todo);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter todo"
                onChangeText={(text) => {
                    console.log(text);
                    setTodo(text);
                }}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={(e) => handleSubmit(e)}
            >
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Add todo
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
    },
    btn: {
        backgroundColor: "blue",
        marginTop: 20,
        padding: 10,
    },
});

export default InputForm;
