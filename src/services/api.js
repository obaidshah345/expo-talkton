import axios from "axios";
import Pusher from "pusher-js/react-native";
import Constants from "expo-constants";

const { API_BASE_URL, PUSHER_APP_KEY, PUSHER_CLUSTER } =
  Constants.manifest2.extra;

const API_URL = API_BASE_URL;

const pusher = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_CLUSTER,
  encrypted: true,
});

export const fetchTalks = async () => {
  const response = await axios.get(`${API_URL}/timeline`);
  return response.data;
};

export const likeTalk = async (talkId) => {
  await axios.post(`${API_URL}/timeline/${talkId}/like`);
};

export const onTalkLiked = async (callback) => {
  const channel = pusher.subscribe("talks");
  channel.bind("like", callback);
};
