import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page</Text>
      <Link href='/about'>Go to about</Link>
      <Link href='/profile/vishwas'>Go to profile</Link>
      <Link href='/products'>Go to Products</Link>
      <Link href='/missing-route'>Missing Route</Link>
    </View>
  );
}
