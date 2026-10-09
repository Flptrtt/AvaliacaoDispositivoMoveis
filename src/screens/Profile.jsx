import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import ButtonIcon from "../components/ButtonIcon";
import Title from "../components/Title";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        paddingTop: 54,
      }}
    >
      <Header>
        <ButtonIcon
          icon="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Profile</Title>
      </Header>
    </View>
  );
}
