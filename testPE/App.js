import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListUser from "./src/ListUser";
import AddUser from "./src/AddUser";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./src/reducer";

const Stack = createStackNavigator();
export default function App() {
    const callBackFn = (item) => {};
    const [users, dispatch] = useReducer(reducer, initialState);

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    });

    const addCallBackFn = (data) => {
        dispatch({ type: "ADD_NEWUSER", user: data });
        console.log(data);
    };

    // useEffect(() => {
    //     setUser(initialState);
    // });

    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="List" component={ListUser} />
        //         <Stack.Screen name="Add" component={AddUser} />
        //         {/* <Stack.Screen name="Edit" component={EditUser} /> */}
        //     </Stack.Navigator>
        // </NavigationContainer>

        <SafeAreaView>
            <View style={styles.container}>
                <AddUser callBack={addCallBackFn} />
                <ListUser callBack={callBackFn} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        justifyContent: "center",
    },
});
