import axios from "axios";
import Pusher from "pusher-js/react-native";

const API_URL = "http://192.168.18.22:3000/api"; // replace with your own local IP

const pusher = new Pusher("YOUR_APP_KEY", {
  cluster: "YOUR_CLUSTER",
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
