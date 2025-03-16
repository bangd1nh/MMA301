import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const UserDetail = ({ route }) => {
    const { user } = route.params;
    const navigation = useNavigation();

    console.log(user);
    return (
        <View
            style={{
                backgroundColor: "white",
                margin: 20,
                padding: 20,
                borderRadius: 20,
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                UserDetail
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                }}
            >
                <Text>Name: </Text>
                <Text style={{ fontWeight: "bold" }}>{user.userName} </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                }}
            >
                <Text>Email: </Text>
                <Text style={{ fontWeight: "bold" }}>{user.email} </Text>
            </View>
            <TouchableOpacity
                style={{
                    marginHorizontal: "auto",
                    marginTop: 10,
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 10,
                }}
                onPress={() => navigation.navigate("UserManagement")}
            >
                <Text style={{ color: "white" }}>Go back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserDetail;
