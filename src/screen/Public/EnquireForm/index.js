import React from "react";
import { Text, View, TextInput, StyleSheet,Button } from "react-native";

const EnquireForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Enquire Form </Text>
      <View>
        <TextInput placeholder="Company Name" />
        <TextInput placeholder="City" />
        <TextInput placeholder="Contact" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Model Name" />
        <TextInput placeholder="Enquire Details" />
        <Button title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 0.3,
    fontSize: 40,
    marginTop:10,
    textAlign: "center",
  }
});

export default EnquireForm;
