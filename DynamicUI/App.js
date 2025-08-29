import { StyleSheet, View, Text, useWindowDimensions, Platform } from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton title="Press me" onPress={() => alert("pressed")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontSize: 'italic'
      },
      android: {
        color: 'blue',
        fontSize: 30
      }
    }),
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
