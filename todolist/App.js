import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import HeaderCom from "./component/header";
import InputForm from "./component/inputform";
import Todo from "./component/Todo";
import { useEffect, useState } from "react";
import { data } from "./constant/data";

export default function App() {
    const [todos, setTodos] = useState([]);
    const handleAdd = (data) => {
        setTodos([...todos, data]);
        console.log(data);
    };

    const handleRemove = (data) => {
        const newData = todos.filter((_, index) => data !== index);
        setTodos(newData);
    };

    useEffect(() => {
        setTodos(data);
    }, []);
    return (
        <View style={styles.container}>
            <HeaderCom></HeaderCom>
            <InputForm callbackFn={handleAdd} />
            <Todo data={todos} callbackFn={handleRemove} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
