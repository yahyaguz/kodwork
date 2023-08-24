import React from "react";
import { View, Text, FlatList } from "react-native";
import JobCard from "../../components/JobCard";
import { useSelector } from "react-redux";
function Favorites({ navigation }) {

    const renderJob = ({ item }) => {
        const handleSelectJob = () => {
            navigation.navigate("Job Detail", { screen: 'Job Detail',initial:false, job: item })
        }
        return (<JobCard removeOnPress={() => null} job={item} onPress={handleSelectJob} />)
    }

    const favorites = useSelector(f => f.favoriteList)
    //console.log("favorites:",favorites)

    return (
        <View>
            <FlatList
                data={favorites}
                keyExtractor={item => item.id}
                renderItem={renderJob}

            />
        </View>
    )
}

export default Favorites;