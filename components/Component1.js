import * as React from "react";
import { StyleSheet, View } from "react-native";
import AnnouncementCard from "./AnnouncementCard";

const Component1 = () => {
  return (
    <View style={styles.component1}>
      <AnnouncementCard onButtonDownloadPress={() => {}} />
      <AnnouncementCard
        downloadAttachementMarginTop={31}
        onButtonDownloadPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component1: {
    position: "absolute",
    top: 80,
    left: 12,
    width: 388,
    height: 363,
    paddingLeft: 1,
    paddingRight: 2,
    justifyContent: "flex-end",
  },
});

export default Component1;
