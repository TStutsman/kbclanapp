import { Link } from "expo-router";
import { Text, View } from "react-native";
import { CustomButton } from "@/components/CustomButton";

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
      <Link href="/details" asChild>
        <CustomButton title={"View Details"} />
      </Link>
    </View>
  );
}
