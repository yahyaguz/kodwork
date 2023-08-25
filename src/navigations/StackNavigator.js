import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Jobs from "../screens/jobs";
import JobDetail from "../screens/jobDetail";
import Favorites from "../screens/favorites";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerTintColor: "#ef5350",
    headerBackTitleVisible: true,
    headerTitleAlign: "center",
};

const JobsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Jobs" component={Jobs} />
            <Stack.Screen name="Job Detail" component={JobDetail} />
            <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
    )
}

const FavoritesStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Job Detail" component={JobDetail} />
        </Stack.Navigator>
    )
}

export { JobsStackNavigator,FavoritesStackNavigator };