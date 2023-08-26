import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions, FlatList, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import JobCard from "../../components/JobCard";
import axios from "axios";

const { height } = Dimensions.get('screen')

function Jobs({ navigation }) {

    let listViewRef;
    const [currentPage, setCurrentPage] = useState(0);
    const [arrowStatus, setArrowStatus] = useState(false);
    const [loading, setLoading] = useState(null);
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
    }

    const topButtonHandler = () => {
        listViewRef.scrollToOffset({ offset: 0 })
    }
    return (
        <View>

            <FlatList
                data={jobs}
                keyExtractor={item => { `job-${item.id}` }}
                renderItem={renderJob}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
                onScroll={a => {

                    if (a?.nativeEvent?.contentOffset?.y > height) {
                        setArrowStatus(true)
                    }else{
                        setArrowStatus(false)

                    }
                }}
                ref={(ref) => {
                    listViewRef = ref;
                }}
            />
            {arrowStatus ? <TouchableOpacity onPress={topButtonHandler} style={{ backgroundColor: 'rgba(21,76,121,0.3)', borderRadius: 30, position: 'absolute', right: 15, bottom: 30 }}>
                <Image tintColor="#ef5350" source={require("../../assets/images/up-arrow.png")} />
            </TouchableOpacity> : null}

        </View>
    )
}

export default Jobs;