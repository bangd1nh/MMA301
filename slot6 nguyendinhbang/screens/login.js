import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";

function Login() {
    const [showpass, setShowpass] = useState(true);
    const [checked, setChecked] = useState(false);
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.header}>Welcome Back</Text>
                <Image
                    source={require("../assets/a.jpg")}
                    style={styles.image}
                ></Image>
                <View style={styles.input}>
                    <Ionicons name="mail-outline" size={24} color="black" />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Email"
                    ></TextInput>
                </View>
                <View style={styles.input}>
                    <Ionicons
                        name="lock-closed-outline"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        style={styles.textinput}
                        secureTextEntry={showpass}
                        placeholder="Password"
                    ></TextInput>
                    <TouchableOpacity onPress={() => setShowpass(!showpass)}>
                        <Ionicons
                            name={showpass ? "eye-outline" : "eye-off-outline"}
                            size={24}
                            style={{
                                marginEnd: 10,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginStart: 40,
                        gap: 15,
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                        <MaterialCommunityIcons
                            name={
                                checked
                                    ? "checkbox-blank-outline"
                                    : "checkbox-outline"
                            }
                            size={24}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: "grey", fontSize: 18 }}>
                        Remember Password
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 15,
                        marginTop: 20,
                    }}
                >
                    <TouchableOpacity style={styles.buttonlogin}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncancel}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 30,
                        color: "blue",
                    }}
                >
                    Dont have an account? Sign up
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: "100%",
    },
    header: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    input: {
        borderWidth: 2,
        marginBottom: 10,
        marginHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 10,
        paddingStart: 10,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "grey",
    },
    textinput: {
        flex: 1,
        paddingHorizontal: 10,
    },
    buttonlogin: {
        backgroundColor: "#545DDD",
        paddingVertical: 12,
        alignItems: "center",
        paddingHorizontal: 70,
        borderRadius: 10,
    },
    buttoncancel: {
        backgroundColor: "red",
        paddingVertical: 12,
        alignItems: "center",
        paddingHorizontal: 70,
        borderRadius: 10,
    },
});

export default Login;
