import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Icon } from "@ui-kitten/components";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AnnouncementCard = ({
  downloadAttachementMarginTop,
  onButtonDownloadPress,
}) => {
  const announcementStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", downloadAttachementMarginTop),
    };
  }, [downloadAttachementMarginTop]);

  return (
    <View style={[styles.announcement, announcementStyle]}>
      <Text style={[styles.studentsCanCollect1, styles.daysAgoFlexBox]}>
        Students can collect thier admit cards from the respective offices,
        kindly see the pdf attached below to avoid any inconvenience.
      </Text>
      <Button
        style={styles.buttonDownload1}
        size="medium"
        color="#535353"
        textStyle={styles.buttonDownloadText}
        accessoryLeft={<Icon name="download" pack="material" />}
        onPress={onButtonDownloadPress}
      >
        Download Attachement
      </Button>
      <Text style={[styles.daysAgo, styles.daysAgoFlexBox]}>2 days ago</Text>
      <Text style={[styles.admitCards, styles.admitCardsTypo]}>
        Admit Cards
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonDownloadText: {
    fontWeight: "600",
    fontFamily: "Inter",
  },
  daysAgoFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  admitCardsTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.inter,
  },
  studentsCanCollect1: {
    height: "25.9%",
    width: "94.05%",
    top: "30.72%",
    fontSize: FontSize.size_smi,
    letterSpacing: 0.1,
    lineHeight: 19,
    fontWeight: "300",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    left: "2.96%",
  },
  buttonDownload1: {
    top: 120,
    right: 12,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  daysAgo: {
    height: "6.63%",
    width: "18.1%",
    top: "14.46%",
    left: "81.88%",
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  admitCards: {
    height: "16.27%",
    width: "48.65%",
    top: "10.24%",
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray_200,
    textAlign: "left",
    position: "absolute",
    left: "2.96%",
  },
  announcement: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorLightgray,
    width: 385,
    height: 166,
  },
});

export default AnnouncementCard;
