import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const AddUser = ({ data, callBack }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    });

    // useEffect(() => {
    //     if (data) {
    //         setUser({
    //             email: data.email,
    //             name: data.name,
    //             password: data.password,
    //         });
    //     }
    // }, []);

    const handleAdd = (e) => {
        e.preventDefault();
        callBack(user);
    };

    const handleEdit = () => {
        dispatch({ type: "EDIT_USER", user: user });
    };

    return (
        <View style={{ padding: 20, backgroundColor: "white" }}>
            <Text
                style={{
                    textAlign: "center",
                    marginBottom: 10,
                    fontWeight: "bold",
                }}
            >
                {data ? "EDIT USER" : "ADD USER"}
            </Text>
            <View style={{}}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        width: "full",
                        padding: 10,
                        borderColor: "gray",
                    }}
                    placeholder="Enter Email"
                    onChangeText={(text) => setUser({ ...user, email: text })}
                    value={user.email}
                    // editable={route.params ? false : true}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        width: "full",
                        padding: 10,
                        borderColor: "gray",
                    }}
                    onChangeText={(text) =>
                        setUser({ ...user, password: text })
                    }
                    placeholder="Enter password"
                    value={user.password}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <TextInput
                    style={{
                        borderWidth: 1,
                        width: "full",
                        borderColor: "gray",
                        padding: 10,
                    }}
                    onChangeText={(text) => setUser({ ...user, name: text })}
                    placeholder="Enter Name"
                    value={user.name}
                />
            </View>
            {data ? (
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        backgroundColor: "blue",
                        margin: 20,
                        alignItems: "center",
                        borderRadius: 30,
                    }}
                    onPress={() => handleEdit()}
                >
                    <Text style={{ color: "white" }}>Confirm edit user</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            backgroundColor: "blue",
                            margin: 20,
                            alignItems: "center",
                            borderRadius: 30,
                        }}
                        onPress={(e) => handleAdd(e)}
                    >
                        <Text style={{ color: "white" }}>Add new user</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default AddUser;
