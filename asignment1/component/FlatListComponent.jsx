import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
    SectionList,
} from "react-native";
import React from "react";
import { menuItemToDisplay } from "../constant/data";

const DATA = [
    { id: 1, title: "item 1" },
    { id: 2, title: "item 2" },
    { id: 3, title: "item 3" },
    { id: 4, title: "item 4" },
    { id: 5, title: "item 5" },
    { id: 6, title: "item 6" },
    { id: 7, title: "item 6" },
    { id: 8, title: "item 6" },
    { id: 9, title: "item 6" },
];

const Item = ({ item }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 30,
            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    color: "#F4CE14",
                }}
            >
                {item.name}
            </Text>
            <Text style={{ color: "#F4CE14", fontSize: 15 }}>{item.price}</Text>
        </View>
    );
};

const FlatListComponent = () => {
    return (
        <View>
            <SectionList
                sections={menuItemToDisplay}
                renderItem={({ item }) => {
                    return <Item item={item} />;
                }}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { title } }) => (
                    <Text
                        style={{
                            textAlign: "center",
                            backgroundColor: "#F4CE14",
                            fontSize: 20,
                        }}
                    >
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default FlatListComponent;
