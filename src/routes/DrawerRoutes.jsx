// Arquivo responsável por registrar e configurar a navegação por ABAS (Bottom Tabs)

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {

    return (
        <Drawer.Navigator
          initialRouteName="profile"
          screenOptions={{ 
            headerShown: false,
          }}
        >
            <Drawer.Screen 
                name="home"
                component={Home}
            />
            <Drawer.Screen 
                name="product"
                component={Product}
            />
            <Drawer.Screen 
              name="profile"
              component={Profile}
            />
        </Drawer.Navigator>
    )
}