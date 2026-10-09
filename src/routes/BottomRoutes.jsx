// Arquivo responsável por registrar e configurar a navegação por ABAS (Bottom Tabs)
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home';
import Product from '../screens/Product';
import Profile from "../screens/Profile";

const Bottom = createBottomTabNavigator();

export function BottomRoutes() {

    return (
        <Bottom.Navigator
          initialRouteName="profile"
          screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: "#7C3AED",
            tabBarInactiveTintColor: "#9C43AF",

          }}
        >
            <Bottom.Screen 
                name="home"
                component={Home}
            />
            <Bottom.Screen 
                name="product"
                component={Product}
            />
            <Bottom.Screen 
              name="profile"
              component={Profile}
            />
        </Bottom.Navigator>
    )
}