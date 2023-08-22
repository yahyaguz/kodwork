import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './screens/favorites';

import { JobsStackNavigator } from './navigations/StackNavigator';

function App() {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Jobs" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Jobs" component={JobsStackNavigator} />
                <Drawer.Screen name="Favorites" component={Favorites} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;