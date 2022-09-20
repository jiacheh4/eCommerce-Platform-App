import React, { useState } from "react"; //useState only avaliable in function component, not class component
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

//显示对话
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/kabi.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/kabi.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/kabi.jpg"),
  },
];

function MessagesScreen(props) {
  //需要declare state and re-render (use state hook (start with use) to decalre state variable)
  // messages is the state variable
  //setMessages is a function to update the state variable
  const [messages, setMessages] = useState(initialMessages);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id); //filter the item
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        //for loop一遍对话框list
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            //每个对话框格式
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        //对话框之间的灰线
        ItemSeparatorComponent={ListItemSeparator}
        // 向下拉刷新 pull to refresh
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
