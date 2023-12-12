import * as React from "react";
import { StyleSheet, View } from "react-native";
import AnnouncementCard from "./AnnouncementCard";
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Component1 = ({ title, announcement }) => {
  return (
    <View style={styles.component1}>
      <AnnouncementCard
        downloadAttachementMarginTop={31}
        onButtonDownloadPress={() => {}}
        title={title}
        announcement={announcement}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component1: {
    position: "absolute",
    top: 30,
    left: 12,
    width: 388,
    height: 200,
    paddingLeft: 1,
    paddingRight: 2,
    justifyContent: "flex-end",
  },
});

export default Component1;