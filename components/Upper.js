import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const Upper = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Button
          style={styles.menus1}
          size="giant"
          accessoryLeft={<Icon name="menu" pack="material" />}
          onPress={() => {  }}
          //onPress={() => navigation.navigate("DrawerMenu")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menus1: {
    backgroundColor:'#4D8DA9',
    position: "absolute",
    top: 8,
    left: 24,
    width: 45,
    height: 33,
  },
  view: {
    backgroundColor:'#4D8DA9',
    width: 431,
    height: 65
  },
});

export default Upper;
