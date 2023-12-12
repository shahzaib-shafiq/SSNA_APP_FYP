import React, { useMemo } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { MaterialIcons } from '@expo/vector-icons';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

// const AnnouncementCard = ({
//   downloadAttachementMarginTop,
//   onButtonDownloadPress,
// }) => {
//   const announcementStyle = useMemo(() => {
//     return {
//       ...getStyleValue("marginTop", downloadAttachementMarginTop),
//     };
//   }, [downloadAttachementMarginTop]);

//   return (
//     <View style={[styles.announcement, announcementStyle]}>
//       <Text style={[styles.studentsCanCollect1, styles.daysAgoFlexBox]}>
//        title
//       </Text>
//       <TouchableOpacity
//         style={styles.buttonDownload1}
//         onPress={onButtonDownloadPress}
//       >
//         <MaterialIcons name="file-download" size={24} color="#535353" />
//       </TouchableOpacity>
//       <Text style={[styles.daysAgo, styles.daysAgoFlexBox]}>2 days ago</Text>
//       <Text style={[styles.admitCards, styles.admitCardsTypo]}>
//         Admit Cards
//       </Text>
//     </View>
//   );
// };

const AnnouncementCard = ({
  downloadAttachementMarginTop,
  onButtonDownloadPress,
  title,
  announcement,
}) => {
  const announcementStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", downloadAttachementMarginTop),
    };
  }, [downloadAttachementMarginTop]);

  return (
    <View style={[styles.announcement, announcementStyle]}>
      <Text style={[styles.titleText, styles.daysAgoFlexBox]}>
        {title}
      </Text>
      <Text style={[styles.studentsCanCollect1, styles.daysAgoFlexBox]}>
        {announcement}
      </Text>
      <TouchableOpacity
        style={styles.buttonDownload1}
        onPress={onButtonDownloadPress}
      >
        <MaterialIcons name="file-download" size={24} color="#535353" />
      </TouchableOpacity>
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
    marginLeft: 5,
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
