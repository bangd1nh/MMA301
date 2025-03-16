import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { useNavigation } from "@react-navigation/native";

const ListUser = ({ callBack }) => {
    const handleCallBack = (item) => {
        callBack(item);
    };

    const Item = ({ item }) => {
        return (
            <View
                style={{
                    // alignItems: "center",
                    backgroundColor: "gray",
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 15,
                }}
            >
                <View style={{}}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 20 }}>{item.email}</Text>
                    </View>
                </View>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <TouchableOpacity
                        onPress={() =>
                            dispatch({
                                type: "REMOVE_USER",
                                email: item.email,
                            })
                        }
                        style={{ width: 60 }}
                    >
                        <Text
                            style={{
                                color: "white",
                                backgroundColor: "red",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Delete
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: "green", width: 60 }}
                        onPress={(item) => handleCallBack(item)}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const [users, dispatch] = useReducer(reducer, initialState);
    // console.log(users);
    return (
        <View style={{ backgroundColor: "white" }}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <>
                        <Item item={item}></Item>
                    </>
                )}
                // keyExtractor={(item) => item.email}
            />
        </View>
    );
};

export default ListUser;
