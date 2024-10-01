import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";

type FirstpageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: FirstpageScreenNavigationProp; // Định nghĩa kiểu navigation
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
    </View>
  );
};

export default Home;
