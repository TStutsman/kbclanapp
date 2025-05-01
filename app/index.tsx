import { Link } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href={"./details"} asChild>
        <Button title="View Details" color={'#f4511e'}/>
      </Link>
    </View>
  );
}
