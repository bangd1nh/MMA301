import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                }}
            >
                <Image
                    source={require("../assets/219006809431_grande.webp")}
                    style={{ height: 100, width: 100 }}
                />
                <Text style={{ fontSize: 30, marginStart: 20, color: "white" }}>
                    Little Lemon
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 20,
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse natus iusto, aliquid tempore nam perferendis similique.
                    Atque fugit laboriosam ullam beatae rerum, sequi ea rem hic.
                    Quisquam accusamus sint voluptatem.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flex: 1,
    },
});

export default Welcome;
