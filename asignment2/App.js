import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./component/Login.jsx";
import Welcome from "./component/Welcome.jsx";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <View
                style={{
                    padding: 50,
                    backgroundColor: "orange",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 30 }}>Little lemon</Text>
            </View>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="welcome" component={Welcome} />
            </Stack.Navigator>
            <View
                style={{
                    backgroundColor: "orange",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <Text>All right reseve by Little lemom,2022</Text>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
