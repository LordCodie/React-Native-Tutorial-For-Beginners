import {
  View, StyleSheet, StatusBar,
  FlatList, Text, ActivityIndicator
} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholderasd.typicode.com/posts?_limit=${limit}`
      )
      const data = await response.json()
      setPostList(data)
      setIsLoading(false)
      setError("")
    } catch (error) {
      console.error(`Error fetching data: ${error}`)
      setIsLoading(false)
      setError("Failed to fetch post list")
    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'blue'} />
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {error ?
        (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) :
        <>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              )}
            />
          </View>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: "#666666"
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center'
  },
  errorText: {
    color: '#D8000C',
    fontSize: 16,
    textAlign: 'center'
  }
});
