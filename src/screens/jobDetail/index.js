import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";

function JobDetail() {
    return (
        <View >
            <View style={styles.title_container}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#37474f' }}>Implementation Consultant</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, color: '#ef5350', fontWeight: 'bold' }}>Locations: </Text>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Paris, France </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, color: '#ef5350', fontWeight: 'bold' }}>Job Level: </Text>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Mid Level </Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#37474f' }}>Job Detail</Text>
            </View>

            <Text style={styles.content}>Content Coming</Text>
            <View style={styles.buttonContainer}>
                <CustomButton title="Submit" />
                <CustomButton title="Favorite Job" />
            </View>
        </View>
    )
}

export default JobDetail;

const styles = StyleSheet.create({
    title_container: {
        padding: 5,
        borderColor: 'gray'

    },
    buttonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 5,
        width: '100%'
    },
    content: {
        borderWidth: 0.5,

    }
});