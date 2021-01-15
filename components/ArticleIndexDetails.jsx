import React from "react";
import { Dimensions, Image, StyleSheet, Text,TouchableOpacity, View } from "react-native";

const ArticleIndexDetails = ({ navigation, article }) => {
  return (
    <>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ShowArticleScreen", {article: article}) 
      }}
    />
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.subtitle}>{article.subtitle}</Text>
      </View>
    </>
  );
};

export default ArticleIndexDetails;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 2,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "American Typewriter",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});
