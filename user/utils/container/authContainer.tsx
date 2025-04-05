import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import React, { ReactNode } from "react";
import { external } from "@/styles/external.style";
import Images from "../images";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import { commonStyles } from "@/styles/common.style";
import color from "@/themes/app.colors";


type Props = {
  container: ReactNode;
  topSpace: any;
  imageShow: boolean;
};

const AuthContainer = ({ container, topSpace, imageShow }: Props) => {
  return (
    <KeyboardAvoidingView
      style={[external.fx_1]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {imageShow && (
        <Text
          style={{
            fontFamily: "TT-Octosquares-Medium",
            fontSize: windowWidth(30),
            textAlign: "center",
            paddingTop: windowHeight(50),
          }}
        >
          Ridee
        </Text>
      )}
      <Image
        style={[styles.backgroundImage, { marginTop: topSpace }]}
        source={Images.authBg}
      />

      <View style={styles.contentContainer}>
        <View style={[styles.container]}>
          <ScrollView>{container}</ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadowContainer,
    backgroundColor: color.whiteColor,
    paddingHorizontal: windowHeight(16),
    paddingVertical: windowHeight(12),
    borderStartStartRadius: windowHeight(16),
    borderStartEndRadius: windowHeight(16),
    borderTopRightRadius: windowHeight(16),
    borderTopLeftRadius: windowHeight(16),
     
  },
  backgroundImage: {
    width: "100%",
    height: windowHeight(150),
    // marginTop: windowHeight(150),
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  img: {
    height: windowHeight(28),
    width: windowHeight(90),
    ...external.as_center,
    ...external.mt_50,
    resizeMode: "contain",
  },
});

export default AuthContainer;
