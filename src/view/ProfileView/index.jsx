import React from "react";
import { Button, Text, View } from "react-native";
import getStoreData from "../../redux/Helpers";
import { PRODUCT_REDUCER } from "../../redux/reducers/ReducerTypes";

export default function ProfileView({ navigation, route }) {
  const {data: dataProduct} = getStoreData(PRODUCT_REDUCER);

  const dataName = dataProduct?.dataProduct[0].name;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text >This is SAGA: {dataName}   profile</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
