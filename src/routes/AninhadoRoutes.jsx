import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { StackRoutes } from "./StackRoutes";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TITULOS = {
  homeStack: "Início",
  productTab: "Produtos",
  profileTab: "Perfil",
  settingsTab: "Configurações",
};

function Abas() {
  return (
    <Bottom.Navigator
      initialRouteName="homeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#9CA3AF",
      }}
    >
      <Bottom.Screen
        name="homeStack"
        component={StackRoutes}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="productTab"
        component={Product}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Bottom.Screen
        name="profileTab"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="settingsTab"
        component={Settings}
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export function AninhadoRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="inicio"
      screenOptions={({ route }) => ({
        headerShown: true,
        title: TITULOS[getFocusedRouteNameFromRoute(route)],
        drawerActiveTintColor: "#7C3AED",
        drawerActiveBackgroundColor: "#EDE9FE",
      })}
    >
      <Drawer.Screen
        name="inicio"
        component={Abas}
        initialParams={{ screen: "homeStack" }}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="produtos"
        component={Abas}
        initialParams={{ screen: "productTab" }}
        options={{
          drawerLabel: "Produtos",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="perfil"
        component={Abas}
        initialParams={{ screen: "profileTab" }}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="configuracoes"
        component={Abas}
        initialParams={{ screen: "settingsTab" }}
        options={{
          drawerLabel: "Configurações",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}