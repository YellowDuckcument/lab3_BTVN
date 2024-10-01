import { View, Text, Button } from "react-native";
import React from "react";
import { RootStackParamList } from "./type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FirstpageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Notifications"
>;

type Props = {
  navigation: FirstpageScreenNavigationProp; // Định nghĩa kiểu navigation
};

const Notifications: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default Notifications;
