import {
  View, Text,
  Image, ImageBackground,
  ScrollView, Button,
  Pressable, Modal,
  StatusBar, ActivityIndicator,
  Alert, StyleSheet
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  const { container, title, lightblueBg, lightgreenBg, box, androidShadow } = styles
  return (
    <View style={container}>

      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style inheritence
          <Text style={styles.darkModeBoldText}> in bold</Text>
        </Text>
      </View>

      <View style={[box, lightblueBg]}>
        <Text>Lightblue box</Text>
      </View>

      <View style={[box, lightgreenBg, androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60
  },
  darkMode: {
    backgroundColor: 'black'
  },
  title: {},
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
  },
  lightblueBg: {
    backgroundColor: "lightblue"
  },
  lightgreenBg: {
    backgroundColor: "lightgreen"
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  },
  darkModeText: {
    color: 'white'
  },
  darkModeBoldText: {
    fontWeight: 'bold'
  }
})