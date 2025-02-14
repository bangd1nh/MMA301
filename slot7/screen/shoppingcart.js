import React, { useEffect, useState } from "react";
import {
    BackHandler,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

function ShoppingCart({ data }) {
    const [items, setItems] = useState(data);
    const [selectedItems, setSelectedItems] = useState(
        new Array(items.length).fill(false)
    );

    const toggleSelection = (index) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = !newSelectedItems[index];
        setSelectedItems(newSelectedItems);
        console.log(newSelectedItems);
    };

    const handleDelete = () => {
        console.log(selectedItems);
        setItems((prevItems) => {
            const updatedItems = prevItems.filter(
                (_, index) => !selectedItems[index]
            );
            setSelectedItems(new Array(updatedItems.length).fill(false));
            return updatedItems;
        });
    };

    // useEffect(() => {
    //     setSelectedItems(new Array(items.length).fill(false));
    //     console.log("Updated selectedItems:", selectedItems);
    // }, [items]);

    return (
        <View style={style.container}>
            <View style={style.bar}>
                <Text style={style.title}>Shopping Cart</Text>
                <TouchableOpacity style={style.btn} onPress={handleDelete}>
                    <Text style={{ color: "white", fontSize: 18 }}>Delete</Text>
                </TouchableOpacity>
            </View>
            <View style={style.cart}>
                {items.map((e, index) => {
                    return (
                        <View style={style.item} key={index}>
                            <Image source={e.img} style={style.image} />
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "space-between",
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 16, flexShrink: 1 }}
                                    >
                                        {e.name}
                                    </Text>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons
                                            name={`${
                                                selectedItems[index]
                                                    ? "checkbox-outline"
                                                    : "checkbox-blank-outline"
                                            }`}
                                            size={24}
                                            color="blue"
                                            onPress={() =>
                                                toggleSelection(index)
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ color: "grey", flexShrink: 1 }}>
                                    {e.description}
                                </Text>
                                <View style={style.itemfooter}>
                                    <Text style={style.font}>{e.price}</Text>
                                    <View
                                        style={{
                                            justifyContent: "space-evenly",
                                            flexDirection: "row",
                                            gap: 10,
                                        }}
                                    >
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="minuscircleo"
                                                size={24}
                                                color="grey"
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 16 }}>1</Text>
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="pluscircleo"
                                                size={24}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={style.total}>
                <Text style={{ fontWeight: "", fontSize: 20 }}>Total</Text>
                <Text style={style.font}>
                    {items.reduce((accumulator, currentValue) => {
                        return (
                            accumulator +
                            parseFloat(currentValue.price.replace("$", ""))
                        );
                    }, 0)}
                    $
                </Text>
            </View>
            <View style={{ margin: 10, marginBottom: 30 }}>
                <TouchableOpacity style={style.btn}>
                    <Text style={{ textAlign: "center", color: "white" }}>
                        Checkout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ShoppingCart;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 30,
    },
    btn: {
        paddingVertical: 10,
        backgroundColor: "#414afa",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    bar: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 0,
        backgroundColor: "#e6e6e6",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 30,
    },
    cart: {
        backgroundColor: "white",
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexGrow: 1,
    },
    item: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 10,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        maxWidth: "auto",
    },
    itemfooter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    total: {
        margin: 20,
        borderRadius: 14,
        backgroundColor: "#9a9a9c",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    font: {
        fontSize: 16,
        color: "#bd1e1e",
    },
});
