import React, { useState } from "react";
import { TouchableOpacity, Image, Button, Modal } from "react-native";
import { Icon, Text, View } from "native-base";

import styles from "./../styles";

import LinearGradient from "react-native-linear-gradient";

import theme from "@theme/styles";
import { navigate } from "@utility/navigation";
import { __ } from "@utility/translation";
import { setCategory } from "../../../services/Session";

import EnquireForm from "../../EnquireForm";
export default function Item(props) {
  const item = props.item;
  // console.log('item..',item)

  function onPressItem() {
    let value = {
      categoryId: item.id,
      categoryName: item.name,
      sub_category: {
        id: "",
        name: "",
      },
    };
    setCategory(value);
    navigate("SubCategoryList", { item: item, data: item });
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.featureContainer}>
        <TouchableOpacity
          style={styles.featureContent}
          onPress={() => onPressItem()}
        >
          <Image source={{ uri: item.image_url }} style={styles.featureImg} />
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.1)"]}
            style={styles.linearGradient}
          />
          <View style={styles.featureInfo}>
            <View>
              <Text style={styles.featureText}>{item.name}</Text>

              {/* <Text style={styles.featurePackageText}>{item['descText_' + this.props.language] || item.descText}</Text> */}
            </View>
            <View>
              <TouchableOpacity
                style={styles.enquireButton}
                onPress={toggleModal}
              >
                <Text>Enquire</Text>
              </TouchableOpacity>
              <Modal visible={isModalVisible} animationType="slide">
                <EnquireForm />
                <View>
                  <Button title="Hide Form" onPress={toggleModal} />
                </View>
              </Modal>
            </View>
            <View style={styles.featureIcon}>
              <Icon
                name="arrowright"
                type="AntDesign"
                style={[theme.extraHuge, theme.light]}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
