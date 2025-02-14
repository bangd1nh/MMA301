import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View,
} from "react-native";
import FlatListComponent from "./component/FlatListComponent";

export default function App() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    paddingTop: 33,
                    textAlign: "center",
                    backgroundColor: "#f55894",
                    fontSize: 20,
                }}
            >
                Little Lemon
            </Text>
            <View style={{ flex: 1 }}>
                <FlatListComponent />
            </View>
            <Text
                style={{
                    textAlign: "center",
                    backgroundColor: "#f55894",
                    alignContent: "center",
                    fontSize: 14,
                    fontStyle: "italic",
                }}
            >
                All right reserve by little lemon, 2022
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
        justifyContent: "space-between",
        // alignItems: "center",
        // justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 40,
        color: "red",
    },
    btn: {
        marginTop: 12,
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "black",
        padding: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        color: "white",
        fontSize: 16,
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        width: "50%",
    },
});
