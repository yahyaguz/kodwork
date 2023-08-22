import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from './screens/jobs';
import Favorites from './screens/favorites';

function App() {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="jobs">
                <Drawer.Screen name="Jobs" component={Jobs} />
                <Drawer.Screen name="Favorites" component={Favorites} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;