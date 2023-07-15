import { Button, View } from "react-native";
import { Text } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Go to home" />
    </View>
  );
};

export default DetailsScreen;
