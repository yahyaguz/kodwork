import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";


const JobCard = ({ onPress, job, removeOnPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{job?.name}</Text>
            <Text style={styles.a}>{job?.company?.name}</Text>
            <Text style={styles.location}> {job?.locations[0]?.name}</Text>
            <Text style={styles.level}>{job?.levels[0]?.name}</Text>

            {
                removeOnPress &&
                <TouchableOpacity style={styles.button} onPress={removeOnPress}>
                    <Text style={styles.button_title}>Remove</Text>
                </TouchableOpacity>
            }

        </TouchableOpacity>
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
    button: {
        backgroundColor: '#ef5350',
        borderRadius: 5,
        margin: 10,
    },
    button_title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    }
});