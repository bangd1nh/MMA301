import { StyleSheet, View } from "react-native";
import Login from "./screens/login";

export default function App() {
    return (
        <View style={styles.container}>
            <Login />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
    },
});
