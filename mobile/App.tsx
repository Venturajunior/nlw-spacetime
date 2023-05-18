import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-800">
      <Text className="text-6xl font-bold text-zinc-50">It works!!!!</Text>
      <StatusBar style="light" />
    </View>
  )
}
