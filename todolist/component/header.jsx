import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HeaderCom = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo List Task</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingStart: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default HeaderCom;
