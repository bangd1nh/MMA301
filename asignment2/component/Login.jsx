import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Touchable,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Welcome to Little Lemon
                </Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                    Login to continue
                </Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="email" />
                <TextInput style={styles.input} placeholder="password" />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "orange",
                        borderRadius: 30,
                        paddingHorizontal: 40,
                        paddingVertical: 15,
                    }}
                    onPress={() => {
                        navigation.navigate("welcome");
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
    },
    header: {
        alignItems: "center",
        padding: 50,
    },
    input: {
        width: "auto",
        borderWidth: 1,
        backgroundColor: "white",
        margin: 10,
        height: 40,
        padding: 10,
    },
});

export default Login;
