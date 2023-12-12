import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const CourseMaterial1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.courseMaterial}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.bluebgPosition]} />
      </View>
      <Pressable
        style={styles.query}
        onPress={() => navigation.navigate("SeniorGuidanceScreenViewDetails")}
      >
        <View style={styles.queryChild} />
        <Text style={styles.iWantTo3}>In-depth dive in concepts of C++</Text>
        <Text style={[styles.daysAgo, styles.daysAgoTypo]}>3 days ago</Text>
        <Text style={[styles.byAnasNaveed3, styles.daysAgoTypo]}>
          By D.S Malik
        </Text>
        <Text style={[styles.dependencyIssue, styles.csTypo]}>C++</Text>
        <Text style={[styles.cs, styles.csTypo]}>CS</Text>
        <View style={styles.queryItem} />
        <View style={[styles.queryInner, styles.queryInnerLayout]} />
        <View style={[styles.rectangleView, styles.queryInnerLayout]} />
        <Text style={[styles.answer, styles.answerTypo]}>DOWNLOAD</Text>
        <Image
          style={[styles.upArrow1Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-1.png")}
        />
        <Image
          style={[styles.upArrow2Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-2.png")}
        />
        <Text style={[styles.text7, styles.textTypo]}>34</Text>
        <Text style={[styles.text8, styles.textTypo]}>14</Text>
      </Pressable>
      <View style={styles.upper}>
        <LinearGradient
          style={[styles.bluebg, styles.bluebgPosition]}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Pressable
          style={styles.menus1}
          onPress={() => navigation.navigate("DrawerMenu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/menus-12.png")}
          />
        </Pressable>
        <Text style={[styles.guidancePortal, styles.downloadedTypo]}>
          Course Material
        </Text>
        <View style={[styles.upperChild, styles.upperChildShadowBox]} />
        <Text style={[styles.text9, styles.text9Typo]}>+</Text>
      </View>
      <View style={styles.filters}>
        <View style={[styles.filters1, styles.filtersShadowBox1]}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.all, styles.mostTypo]}>All</Text>
        </View>
        <View style={[styles.filters2, styles.filtersShadowBox1]}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.mostUpvoted, styles.mostTypo]}>Books</Text>
        </View>
        <View style={[styles.filters3, styles.filtersShadowBox1]}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.mostDownvoted, styles.mostTypo]}>Slides</Text>
        </View>
        <View style={[styles.filters4, styles.filtersShadowBox1]}>
          <Image
            style={[styles.filter1Icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/filter-1.png")}
          />
        </View>
      </View>
      <Text style={[styles.download, styles.downloadTypo]}>DOWNLOAD</Text>
      <Pressable
        style={[styles.query1, styles.queryPosition]}
        onPress={() => navigation.navigate("SeniorGuidanceScreenViewDetails")}
      >
        <View style={styles.queryChild} />
        <Text style={styles.iWantTo3}>In-depth dive in concepts of C++</Text>
        <Text style={[styles.daysAgo, styles.daysAgoTypo]}>3 days ago</Text>
        <Text style={[styles.byAnasNaveed3, styles.daysAgoTypo]}>
          By D.S Malik
        </Text>
        <Text style={[styles.dependencyIssue, styles.csTypo]}>OPP</Text>
        <Text style={[styles.cs, styles.csTypo]}>CS</Text>
        <View style={styles.queryItem} />
        <View style={[styles.queryInner, styles.queryInnerLayout]} />
        <View style={[styles.rectangleView, styles.queryInnerLayout]} />
        <Text style={[styles.answer, styles.answerTypo]}>DOWNLOAD</Text>
        <Image
          style={[styles.upArrow1Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-1.png")}
        />
        <Image
          style={[styles.upArrow2Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-2.png")}
        />
        <Text style={[styles.text7, styles.textTypo]}>34</Text>
        <Text style={[styles.text8, styles.textTypo]}>14</Text>
      </Pressable>
      <Text style={[styles.download1, styles.downloadTypo]}>DOWNLOAD</Text>
      <Pressable
        style={[styles.query2, styles.queryPosition]}
        onPress={() => navigation.navigate("SeniorGuidanceScreenViewDetails")}
      >
        <View style={styles.queryChild} />
        <Text style={styles.iWantTo3}>In-depth dive in concepts of C++</Text>
        <Text style={[styles.daysAgo, styles.daysAgoTypo]}>3 days ago</Text>
        <Text style={[styles.byAnasNaveed3, styles.daysAgoTypo]}>
          By D.S Malik
        </Text>
        <Text style={[styles.dependencyIssue, styles.csTypo]}>
          Data Structures
        </Text>
        <Text style={[styles.cs, styles.csTypo]}>CS</Text>
        <View style={styles.queryItem} />
        <View style={[styles.queryInner, styles.queryInnerLayout]} />
        <View style={[styles.rectangleView, styles.queryInnerLayout]} />
        <Text style={[styles.answer, styles.answerTypo]}>DOWNLOAD</Text>
        <Image
          style={[styles.upArrow1Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-1.png")}
        />
        <Image
          style={[styles.upArrow2Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-2.png")}
        />
        <Text style={[styles.text7, styles.textTypo]}>34</Text>
        <Text style={[styles.text8, styles.textTypo]}>14</Text>
      </Pressable>
      <Text style={[styles.download2, styles.downloadTypo]}>DOWNLOAD</Text>
      <View style={styles.courseMaterialChild} />
      <View style={[styles.courseMaterialItem, styles.downloadedPosition]} />
      <View style={styles.button}>
        <Text style={[styles.postQuestion, styles.answerTypo]}>OKAY !</Text>
      </View>
      <Text style={[styles.downloaded, styles.downloadedPosition]}>
        DOWNLOADED!
      </Text>
      <Pressable
        style={styles.epback}
        onPress={() => navigation.navigate("CourseMaterial")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  daysAgoTypo: {
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.64%",
    height: "7.11%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  csTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    top: "0%",
    position: "absolute",
  },
  queryInnerLayout: {
    width: "22.25%",
    borderRadius: Border.br_6xs,
    top: "80%",
    height: "20%",
    display: "none",
    bottom: "0%",
    position: "absolute",
  },
  answerTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    top: "85.19%",
    width: "6.41%",
    height: "9.04%",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  downloadedTypo: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  upperChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text9Typo: {
    fontWeight: "600",
    display: "none",
    textAlign: "left",
    position: "absolute",
  },
  filtersShadowBox1: {
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    position: "absolute",
  },
  mostTypo: {
    color: Color.colorGray_100,
    top: "14.89%",
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  downloadTypo: {
    left: 290,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  queryPosition: {
    left: 19,
    height: 187,
    width: 395,
    position: "absolute",
  },
  downloadedPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  screenmain: {
    left: "0%",
    backgroundColor: Color.colorWhite,
  },
  homeScreen: {
    top: 14,
    left: -2,
    width: 375,
    height: 812,
    position: "absolute",
  },
  queryChild: {
    height: "52.89%",
    width: "39.65%",
    top: "17.43%",
    right: "60.35%",
    bottom: "29.68%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    left: "0%",
    position: "absolute",
  },
  iWantTo3: {
    height: "34.17%",
    width: "54.28%",
    top: "24.49%",
    lineHeight: 12,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    left: "42.99%",
    position: "absolute",
  },
  daysAgo: {
    width: "18.61%",
    left: "81.39%",
    display: "none",
  },
  byAnasNaveed3: {
    width: "27.14%",
    left: "42.99%",
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.64%",
    height: "7.11%",
  },
  dependencyIssue: {
    height: "17.43%",
    width: "50%",
    left: "0.3%",
  },
  cs: {
    height: "14.81%",
    width: "8.84%",
    left: "89.65%",
  },
  queryItem: {
    width: "37.8%",
    right: "3.06%",
    left: "59.14%",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    top: "80%",
    height: "20%",
    bottom: "0%",
    position: "absolute",
  },
  queryInner: {
    right: "77.75%",
    backgroundColor: Color.colorDarkseagreen,
    left: "0%",
  },
  rectangleView: {
    right: "53.67%",
    left: "24.08%",
    backgroundColor: Color.colorSalmon,
  },
  answer: {
    height: "9.09%",
    width: "15.7%",
    top: "85.03%",
    left: "70.13%",
    color: Color.colorWhite,
    fontWeight: "600",
    display: "none",
    textAlign: "left",
    position: "absolute",
  },
  upArrow1Icon3: {
    top: "81.28%",
    right: "82.03%",
    bottom: "1.93%",
    left: "10.05%",
    width: "7.92%",
    height: "16.79%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
  },
  upArrow2Icon3: {
    top: "99.36%",
    right: "50.3%",
    bottom: "-16.15%",
    left: "41.77%",
    width: "7.92%",
    height: "16.79%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
  },
  text7: {
    left: "5.8%",
  },
  text8: {
    left: "29.87%",
    display: "none",
  },
  query: {
    top: 217,
    left: 20,
    height: 187,
    width: 395,
    position: "absolute",
  },
  bluebg: {
    backgroundColor: "transparent",
    left: "0%",
  },
  icon: {
    display: "none",
    height: "100%",
    width: "100%",
  },
  menus1: {
    left: "5.59%",
    top: "78.8%",
    right: "84.01%",
    bottom: "7.08%",
    width: "10.39%",
    height: "14.12%",
    position: "absolute",
  },
  guidancePortal: {
    height: "10.04%",
    width: "57.33%",
    top: "81.03%",
    left: "21.86%",
    color: Color.colorWhite,
    position: "absolute",
  },
  upperChild: {
    height: "13.39%",
    width: "9.61%",
    top: "79.57%",
    right: "5.34%",
    bottom: "7.04%",
    left: "85.06%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1100,
    shadowRadius: 6.1,
    elevation: 6.1,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    display: "none",
    position: "absolute",
  },
  text9: {
    height: "23.61%",
    width: "6.94%",
    top: "74.68%",
    left: "86.66%",
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
  },
  upper: {
    top: -163,
    left: -1,
    width: 431,
    height: 233,
    position: "absolute",
  },
  filtersShadowBox: {
    elevation: 4.4,
    shadowRadius: 4.4,
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  all: {
    width: "42.91%",
    left: "28.54%",
    height: "70.21%",
    color: Color.colorGray_100,
    top: "14.89%",
  },
  filters1: {
    width: "13.42%",
    right: "86.58%",
    bottom: "57.91%",
    elevation: 5.1,
    shadowRadius: 5.1,
    top: "7.01%",
    height: "35.07%",
    left: "0%",
  },
  mostUpvoted: {
    width: "78.61%",
    left: "11.64%",
    height: "70.21%",
    color: Color.colorGray_100,
    top: "14.89%",
  },
  filters2: {
    width: "32.91%",
    right: "50.49%",
    left: "16.6%",
    bottom: "57.91%",
    elevation: 5.1,
    shadowRadius: 5.1,
    top: "7.01%",
    height: "35.07%",
  },
  mostDownvoted: {
    height: "74.89%",
    width: "83.61%",
    left: "9.83%",
  },
  filters3: {
    width: "38.97%",
    top: "64.93%",
    right: "61.03%",
    elevation: 5.1,
    shadowRadius: 5.1,
    height: "35.07%",
    left: "0%",
    bottom: "0%",
  },
  filter1Icon1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  filters4: {
    height: "42.09%",
    width: "7.66%",
    left: "92.34%",
    bottom: "57.91%",
    elevation: 5.1,
    shadowRadius: 5.1,
    right: "0%",
    top: "0%",
  },
  filters: {
    top: 101,
    left: 33,
    width: 368,
    height: 67,
    position: "absolute",
  },
  download: {
    top: 377,
  },
  query1: {
    top: 453,
  },
  download1: {
    top: 613,
  },
  query2: {
    top: 699,
  },
  download2: {
    top: 859,
  },
  courseMaterialChild: {
    top: 94,
    left: 17,
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    width: 398,
    height: 816,
    position: "absolute",
  },
  courseMaterialItem: {
    marginTop: -125,
    marginLeft: -147,
    borderRadius: 36,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 294,
    height: 251,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  postQuestion: {
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
  },
  button: {
    top: 509,
    left: 154,
    borderRadius: Border.br_31xl,
    backgroundColor: "#20aae5",
    width: 121,
    height: 40,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  downloaded: {
    marginTop: -14,
    marginLeft: -91,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  icon1: {
    overflow: "hidden",
  },
  epback: {
    left: 24,
    top: 21,
    width: 38,
    height: 33,
    position: "absolute",
  },
  courseMaterial: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CourseMaterial1;
