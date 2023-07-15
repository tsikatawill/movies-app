import { Button, View } from "react-native";
import { Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Homescreen</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Go to details"
      />
    </View>
  );
};

export default HomeScreen;
