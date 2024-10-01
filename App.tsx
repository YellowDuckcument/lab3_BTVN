import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Helps from "./pages/Helps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Helps" component={Helps} />
      </Drawer.Navigator> */}
      
      <Tab.Navigator >
        <Tab.Screen name="Home_tab" component={DrawerNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
