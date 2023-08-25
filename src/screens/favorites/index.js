import React from "react";
import { View, Text, FlatList } from "react-native";
import JobCard from "../../components/JobCard";
import { useSelector,useDispatch } from "react-redux";
function Favorites({ navigation }) {
    const dispatch = useDispatch();

   
    
    const renderJob = ({ item }) => {
        const handleSelectJob = () => {
            navigation.navigate("Job Detail", { screen: 'Job Detail', initial: false, job: item })
        }
        const handleRemoveButton=()=>{
            dispatch({type:'REMOVE_FAVORITE',payload:{ favoritedJob: item }})
        }
        return (<JobCard removeOnPress={handleRemoveButton} job={item} onPress={handleSelectJob} />)
    }

    const favorites = useSelector(f => f.favoriteList)
    console.log("favoritessssssssss geldi:", favorites)

    return (
        <View>
            <FlatList
                data={favorites}
                keyExtractor={item => { `favorited-job-${item.id}` }}
                renderItem={renderJob}

            />
        </View>
    )
}

export default Favorites;