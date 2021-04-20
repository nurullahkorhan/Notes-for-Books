import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

import DrawerNavigation from "./src/Components/DrawerNavigation";
import HeaderNavigation from "./src/Components/HeaderNavigation";

import HomeScreen from "./src/Screens/HomeScreen";
import AddNoteScreen from "./src/Screens/AddNote";
import EditNoteScreen from "./src/Screens/EditNote";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderNavigation navigation={navigation} screen={"Home"} />,
    }),
  },
  AddNote: {
    screen: AddNoteScreen,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderNavigation navigation={navigation} screen={"AddNote"} />,
    }),
  },
  EditNote: {
    screen: EditNoteScreen,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderNavigation navigation={navigation} screen={"EditNote"} />,
    }),
  },
});

const MyDrawer = createDrawerNavigator(
  {
    Home: {
      screen: AppNavigator,
    },
  },
  {
    contentComponent: DrawerNavigation,
    drawerWidth: 235,
  }
);

const AppContainer = createAppContainer(MyDrawer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
