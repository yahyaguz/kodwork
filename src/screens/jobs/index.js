import React from "react";
import { View,Text } from "react-native";
import JobCard from "../../components/JobCard";

function Jobs({navigation})
    {
    return(
        <View>
            <JobCard onPress={()=>navigation.navigate("Job Detail")}/>
        </View>
    )
}

export default Jobs;