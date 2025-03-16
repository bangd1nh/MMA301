import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserManagement from "./src/screen/UserManagement";
import UserDetail from "./src/screen/UserDetail";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="UserManagement"
                    component={UserManagement}
                />
                <Stack.Screen name="Profile" component={UserDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
