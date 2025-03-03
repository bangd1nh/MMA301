import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Todo = ({ data, callbackFn }) => {
    const [todo, setTodo] = useState(data);
    useEffect(() => {
        setTodo(data);
    }, [data]);
    const handleRemove = (index) => {
        callbackFn(index);
    };
    return (
        <View style={styles.container}>
            {todo.map((t, index) => {
                return (
                    <View style={styles.todoContainer} key={index}>
                        <View>
                            <Text style={{ fontSize: 20 }}>{t}</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => handleRemove(index)}
                                style={{ backgroundColor: "blue", padding: 10 }}
                            >
                                <Text style={{ fontSize: 20, color: "white" }}>
                                    REMOVE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    todoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        borderBottomWidth: 1,
        padding: 5,
    },
});

export default Todo;
