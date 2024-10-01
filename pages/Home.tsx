import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "./Notifications";
import Helps from "./Helps";

type FirstpageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: FirstpageScreenNavigationProp; // Định nghĩa kiểu navigation
};

const Drawer = createDrawerNavigator();


const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
   </View>
  //   <Drawer.Navigator initialRouteName="Home">
  //     <Drawer.Screen name="Notifications" component={Notifications} />
  //     <Drawer.Screen name="Helps" component={Helps} />
  //   </Drawer.Navigator> 
  );
};

export default Home;
