import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ListUser = ({ data, callback }) => {
    const navigation = useNavigation();
    // console.log(data);
    const handleCallBackDelete = (user) => {
        const data = { ...user, type: "DELETE_USER" };
        callback(data);
    };
    const handleCallBackEdit = (user) => {
        const data = { ...user, type: "EDIT_USER" };
        callback(data);
    };
    return (
        <View style={{ padding: 20 }}>
            {data.map((user) => {
                return (
                    <View
                        key={user.id}
                        style={{
                            backgroundColor: "white",
                            margin: 10,
                            padding: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            borderRadius: 10,
                            shadowColor: "black",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                    >
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Profile", {
                                        user: user,
                                    });
                                }}
                            >
                                <Text style={{ fontWeight: "bold" }}>
                                    {user.userName}
                                </Text>
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontWeight: "ultralight",
                                    fontSize: 12,
                                }}
                            >
                                {user.email}
                            </Text>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "green",
                                    width: "full",
                                    paddingVertical: 2,
                                }}
                                onPress={() => handleCallBackEdit(user)}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        textAlign: "center",
                                    }}
                                >
                                    EDIT
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "red",
                                    width: "full",
                                    paddingVertical: 2,
                                }}
                                onPress={() => {
                                    handleCallBackDelete(user);
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        textAlign: "center",
                                    }}
                                >
                                    DELETE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({});

export default ListUser;
