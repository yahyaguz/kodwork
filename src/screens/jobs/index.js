import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import JobCard from "../../components/JobCard";
import axios from "axios";



function Jobs({ navigation }) {

    let listViewRef;
    const [currentPage, setCurrentPage] = useState(0);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, [currentPage]);

    const getJobs = () => {
        axios.get(`https://www.themuse.com/api/public/jobs?page=${currentPage}`)
            .then(res => {
                setJobs([...jobs, ...res?.data?.results])
            })
    }
    const renderJob = ({ item }) => {
        const handleSelectJob = () => {
            navigation.navigate("Job Detail", { job: item })
        }
        return (<JobCard job={item} onPress={handleSelectJob} />)
    }
    const renderLoader = () => {
        return (
            <ActivityIndicator size="large" color="#ef5350" />
        )
    }

    const loadMoreItem = () => {
        setCurrentPage(a => a + 1)
        console.log("yazıyoo", currentPage)
    }
    const topButtonHandler = () => {
        listViewRef.scrollToOffset({ offset: 0, animated: true })
    }

    return (
        <View>
            <TouchableOpacity onPress={topButtonHandler}>
                <Text>Go Top</Text>
            </TouchableOpacity>

            <FlatList
                data={jobs}
                keyExtractor={item => item.id}
                renderItem={renderJob}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
                ref={(ref) => {
                    listViewRef = ref;
                }}
            />

        </View>
    )
}

export default Jobs;