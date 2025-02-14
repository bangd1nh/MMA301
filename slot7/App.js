import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShoppingCart from "./screen/shoppingcart.js";
import { data } from "./constant/data.js";

export default function App() {
    return (
        <View style={styles.container}>
            <ShoppingCart data={data}></ShoppingCart>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6e6",
        justifyContent: "space-between",
    },
});
