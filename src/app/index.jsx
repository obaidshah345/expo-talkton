import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { View, Text } from "react-native";
import Timeline from "./timeline";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="bg-indigo-900 p-6 w-full">
        <Text className="text-3xl font-black text-gray-200">Talkton</Text>
      </View>
      <Timeline />
    </SafeAreaView>
  );
}
