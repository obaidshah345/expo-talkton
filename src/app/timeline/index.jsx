import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { fetchTalks, likeTalk, onTalkLiked } from "../../services/api";
import { AntDesign } from "@expo/vector-icons";

const Timeline = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    fetchTalks().then(setTalks);

    onTalkLiked((talkId) => {
      console.log("Talk is Liked!!!");
      setTalks((prevTalks) =>
        prevTalks.map((talk) =>
          talk.id === talkId
            ? { ...talk, likesCount: talk.likesCount + 1 }
            : talk
        )
      );
    });
  }, []);

  const handleLike = (talkId) => {
    likeTalk(talkId).then(() => {
      setTalks((prevTalks) =>
        prevTalks.map((talk) =>
          talk.id === talkId
            ? { ...talk, likesCount: talk.likesCount + 1 }
            : talk
        )
      );
    });
  };

  const renderItem = ({ item }) => (
    <View className="p-4 border-b border-gray-200">
      <View>
        <Text className="text-lg mb-2">{item.content}</Text>
        <View className="flex-row space-x-2">
          <AntDesign
            name="like2"
            size={22}
            color="black"
            onPress={() => handleLike(item.id)}
            className="m-2 text-base"
          />
          <Text className="text-base">{item.likesCount}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={talks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

export default Timeline;
