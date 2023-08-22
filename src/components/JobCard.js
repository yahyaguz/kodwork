import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";


const JobCard = ({ removeButton = true }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consultant,Managed Services</Text>
            <Text style={styles.a}>Spinklr</Text>
            <Text style={styles.location}> Bengaluru, India</Text>
            <Text style={styles.level}>Mid Level</Text>

            {removeButton && <CustomButton title="Remove" />}
        </View>
    );
};
export default JobCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#aaaaaa',
        margin: 5,
        padding: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'black'
    },
    a: {
        fontSize: 16,
        color: 'black',
        marginVertical: 2,
    },
    location: {
        fontWeight: "bold",
        fontSize: 16,
        color: 'white',
        backgroundColor: '#ef5350',
        borderRadius: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingBottom: 1,
    },
    level: {
        fontWeight: "500",
        fontSize: 16,
        color: '#ef5350',
        alignSelf: 'flex-end',
    },
});