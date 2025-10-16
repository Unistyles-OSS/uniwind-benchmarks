import { add } from '@uniwind-benchmarks/benchmark'
import { StyleSheet, Text, View } from 'react-native'

function App() {
  console.log(add(1, 2))

  return (
    <View style={styles.container}>
      <Text>Nativewind 4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
