import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import RenderHTML from "react-native-render-html";
import { useDispatch } from "react-redux";


const { width } = Dimensions.get("screen");

const imageW = width / 15;

function JobDetail({ route }) {
    const dispatch = useDispatch();
    const { job } = route.params;

    const handleAddFavorite = () => {
        dispatch({ type: 'ADD_FAVORITE', payload: { favoritedJob: job } })
    }


    return (
        <>
            <ScrollView>

                <View style={styles.title_container}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#37474f' }}>{job?.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#ef5350', fontWeight: 'bold' }}>Locations: </Text>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>{job?.locations[0]?.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#ef5350', fontWeight: 'bold' }}>Job Level: </Text>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>{job?.levels[0]?.name}</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#37474f' }}>Job Detail</Text>
                </View>
                <View style={styles.content}>

                    <RenderHTML contentWidth={width} source={{ html: `${job?.contents}` }} />
                </View>
            </ScrollView>

            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button} onPress={() => null}>
                    <Image style={styles.icons} source={require("../../assets/images/submit.png")} />
                    <Text style={styles.button_title}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleAddFavorite()}>
                    <Image style={styles.icons} source={require("../../assets/images/favorite.png")} />
                    <Text style={styles.button_title}>Favotite Job</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default JobDetail;

const styles = StyleSheet.create({
    title_container: {
        padding: 10,
        borderColor: 'gray',
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        borderWidth: 0.5,
        borderColor: 'rgba(187, 187, 182, 0.5)',
        padding: 10
    },
    button: {
        backgroundColor: '#ef5350',
        borderRadius: 5,
        margin: 10,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    icons: {
        tintColor: 'white',
        width: imageW,
        height: imageW,
        margin: 3,
    }
});