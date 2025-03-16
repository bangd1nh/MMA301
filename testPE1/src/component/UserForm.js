import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const UserForm = ({ callback, isEdit, callbackEdit }) => {
    const [user, setUser] = useState({
        id: Math.floor(Math.random() * 10000000) + 1,
        userName: "",
        email: "",
        password: "",
        type: "ADD_USER",
    });

    useEffect(() => {
        if (Object.keys(isEdit).length !== 0) {
            setUser({
                id: isEdit.id,
                userName: isEdit.userName,
                email: isEdit.email,
                password: isEdit.password,
                type: "EDIT_USER",
            });
        }
    }, [isEdit]);

    const handleCallBack = (u) => {
        if (Object.keys(isEdit).length === 0) {
            callback(user);
            console.log(user);
            setUser({
                id: Math.floor(Math.random() * 10000000) + 1,
                userName: "",
                email: "",
                password: "",
                type: "ADD_USER",
            });
        } else {
            console.log(user);
            callbackEdit(user);
        }
    };

    return (
        <View
            style={{
                margin: 20,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 20,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                {isEdit ? "Edit User" : "Add user"}
            </Text>
            <View>
                <TextInput
                    placeholder="Enter Name"
                    style={style.textInput}
                    onChangeText={(text) =>
                        setUser({ ...user, userName: text })
                    }
                    value={user.userName}
                />
                <TextInput
                    placeholder="Enter email"
                    style={style.textInput}
                    onChangeText={(text) => setUser({ ...user, email: text })}
                    value={user.email}
                />
                <TextInput
                    placeholder="Enter password"
                    style={style.textInput}
                    onChangeText={(text) =>
                        setUser({ ...user, password: text })
                    }
                    value={user.password}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    handleCallBack(user);
                }}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    {Object.keys(isEdit).length !== 0 ? "Confirm" : "add user"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15,
        borderColor: "gray",
    },
    btn: {
        backgroundColor: "green",
        marginVertical: 10,
        paddingVertical: 5,
    },
});

export default UserForm;
