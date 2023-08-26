import React from "react";
import { View, Text, FlatList } from "react-native";
import JobCard from "../../components/JobCard";
import { useSelector, useDispatch } from "react-redux";

function Favorites({ navigation }) {

    const dispatch = useDispatch();
    const favorites = useSelector(f => f.favoriteList)

    const renderJob = ({ item }) => {

        const handleSelectJob = () => {
            navigation.navigate("Job Detail", { screen: 'Job Detail', job: item })
        }

        const handleRemoveButton = () => {
            dispatch({ type: 'REMOVE_FAVORITE', payload: { favoritedJob: item } })
        }

        return (<JobCard removeOnPress={handleRemoveButton} job={item} onPress={handleSelectJob} />)
    }

    return (
        <View>
            <FlatList
                data={favorites}
                keyExtractor={item => `favorited-job-${item.id}`}
                renderItem={renderJob}
                ListEmptyComponent={<Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>Favorite Not Found</Text>}
            />
        </View>
    )
}

export default Favorites;