import React, { useState, useEffect } from "react";
import { View, Dimensions, FlatList, ActivityIndicator, TouchableOpacity, Image, Alert, StyleSheet } from "react-native";
import JobCard from "../../components/JobCard";
import axios from "axios";

const { height } = Dimensions.get('window')

function Jobs({ navigation }) {

    let listViewRef;
    const [currentPage, setCurrentPage] = useState(0);
    const [arrowStatus, setArrowStatus] = useState(0);
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, [currentPage]);

    const getJobs = () => {
        axios.get(`https://www.themuse.com/api/public/jobs?page=${currentPage}`)
            .then(res => {
                setJobs([...jobs, ...res?.data?.results])
                setLoading(false)
            }).catch(err => {
                Alert.alert('An error was encountered', `${err}`, [
                    { text: 'OK' },
                ]);
                console.log(err)
                setLoading(false)
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
            loading && <ActivityIndicator size="large" color="#ef5350" />
        )
    }

    const loadMoreItem = () => {
        setCurrentPage(p => p + 1)
        setLoading(true)
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
                    setArrowStatus(a?.nativeEvent?.contentOffset?.y)
                }}
                ref={(ref) => {
                    listViewRef = ref;
                }}
            />

            {
                arrowStatus > height ? <TouchableOpacity onPress={topButtonHandler} style={styles.upArrowButton}>
                    <Image tintColor="#ef5350" source={require("../../assets/images/up-arrow.png")} />
                </TouchableOpacity> : null
            }
        </View>
    )
}

export default Jobs;

const styles = StyleSheet.create({
    upArrowButton: {
        backgroundColor: 'rgba(21,76,121,0.3)',
        borderRadius: 30,
        position: 'absolute',
        right: 15,
        bottom: 30
    }
})