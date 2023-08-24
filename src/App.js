import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FavoriteProvider from "./context/Provider";

import { JobsStackNavigator, FavoritesStackNavigator } from './navigations/StackNavigator';

function App() {
    const Drawer = createDrawerNavigator();
    return (
        <FavoriteProvider>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Jobs" screenOptions={{ headerShown: false }}>
                    <Drawer.Screen name="Jobs" component={JobsStackNavigator} />
                    <Drawer.Screen name="Favorites" component={FavoritesStackNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
        </FavoriteProvider>
    )
}

export default App;