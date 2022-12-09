import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/ProductAction";
import _ from "lodash"

export default function HomeScreen({ navigation }) {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      dispatch(getProduct({
        dataProduct: filteredData
      }))

      setFilteredResults(filteredData);
      
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="SEARCH......"
        style={styles.input}
        onChangeText={(e) => searchItems(e)}
      />

      <View style={{padding: 20}}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return <Text style={{paddingBottom: 5}} key={item.id}>{item.name}</Text>;
            })
          : APIData.map((item) => {
              return <Text style={{paddingBottom: 5}} key={item.id}>{item.name}</Text>;
            })}
      </View>

      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
