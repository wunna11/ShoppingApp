import React, { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
import { set } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firebase } from "../config";
import { doc } from "firebase/firestore";
=======
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firebase } from "../config";
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8

const AdminScreen = ({ route, navigation }) => {

  const [data, setData] = useState([]);
  const dataRef = firebase.firestore().collection("products");
  const [show, setshow] = useState(false);
  const [showBox, setShowBox] = useState(true);
<<<<<<< HEAD
 
=======

>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imgURL, setImageURL] = useState("");
  const [category_name, setCategory_name] = useState('');

  useEffect(() => {
    read();
  }, []);

  // read data
  const read = () => {
    setshow(true)
    setTimeout(() => {
      setshow(false)
    }, 1000)
    dataRef
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          const { imgURL } = doc.data();
          const { name } = doc.data();
          const { desc } = doc.data();
          const { price } = doc.data();
          const { category_name } = doc.data();

          data.push({
            id: doc.id,
            imgURL,
            name,
            desc,
            price,
            category_name,
          });
        });
        setData(data);
      });
  };

<<<<<<< HEAD
=======
  //// delete data
  //const destroy = (data) => {
  //  dataRef
  //    .doc(data.id)
  //    .delete()
  //    .then(() => {
  //      alert("Deleted Successfully!");
  //      console.log(" Data Deleted");
  //    })
  //    .catch((error) => {
  //      alert("error");
  //    });
  //};

>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  // delete data
  const showConfirmDialog = (data) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this product?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            //console.log("User pressed Later")
            dataRef
              .doc(data.id)
              .delete()
              .then(() => {
                alert("Deleted Successfully!");
                console.log(" Data Deleted");
              })
              .catch((error) => {
                alert("error");
              });
            setShowBox(false);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };
<<<<<<< HEAD

 

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      BackHandler.exitApp();
    });
  }, []);
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };
  
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
  
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

=======
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress",()=>{
      BackHandler.exitApp();
    });
  }, []);
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.adminView}>
<<<<<<< HEAD
        <Text style={styles.title}>WTTH</Text>
          <Text style={styles.adminText}>All Products</Text>
=======
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
          <Image
            style={styles.tinyLogo}
            source={require('../assets/logo.png')}
          />

<<<<<<< HEAD
=======
          <Text style={styles.adminText}>Add All Products</Text>
          <TouchableOpacity
            style={{ backgroundColor: "gold", padding: 20, borderRadius: 40 }}
            onPress={() => navigation.navigate("CreateProduct")}
          >
            <MaterialCommunityIcons name="plus" size={30} color={"black"} />
          </TouchableOpacity>
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
        </View>

        <View style={{ flex: 2, padding: 10, paddingTop: 0 }}>
          <ActivityIndicator size="small" color="gold" animating={show}></ActivityIndicator>
          <FlatList
            data={data}
            keyExtractor={(_, i) => String(i)}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={styles.Box}
              >
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
<<<<<<< HEAD
=======
                    //onPress={() =>
                    //    navigation.navigate("UpdateProduct", { item })
                    //}
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8

                    onPress={() => {
                      Alert.alert(
                        "Are your sure?",
                        "Are you sure you want to update this product?",
                        [
                          // The "Yes" button
                          {
                            text: "Yes",
                            onPress: () => {
                              navigation.navigate("UpdateProduct", { item })
                              setShowBox(false);
                            },
                          },
                          // The "No" button
                          // Does nothing but dismiss the dialog when tapped
                          {
                            text: "No",
                          },
                        ]
                      );
                    }}

                  >
                    <MaterialCommunityIcons
                      name="lead-pencil"
                      size={25}
                      color="gold"
                    />
                  </TouchableOpacity>
<<<<<<< HEAD
                  <Text style={styles.padd}>
                    {item.category_name}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate("TrendProduct", {item})} style={{ left: 10, }}>
                    <Text style={{color: "#000", padding: 5,backgroundColor: "gold", fontWeight: '700', borderRadius: 8}}> Set Trending </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => showConfirmDialog(item)} style={{ left: 35, }}>
=======

                  <Text style={styles.padd}>
                    {item.category_name}
                  </Text>


                  <TouchableOpacity onPress={() => showConfirmDialog(item)} style={{ left: 60, }}>
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                    <Ionicons name="trash" color={"#ffd700"} size={30} />
                  </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                  <View>
                    <Image
                      style={styles.iimage}
                      source={{ uri: item.imgURL }}
                    />
                  </View>
                  <View style={{ padding: 10, }}>
                    <Text style={styles.text}>
                      {/*Name:*/}
                      {item.name}
                    </Text>
                    <Text style={styles.text}>
                      Price: ${item.price}
                    </Text>
<<<<<<< HEAD
                    <Text style={[styles.text, styles.decText]}
                    numberOfLines={2}
                    >
                      {/*Description:*/}
                      {item.desc}...
                    </Text>

                  </View>
=======
                    <Text style={[styles.text, styles.decText]}>
                      {/*Description:*/}
                      {item.desc}
                    </Text>

                  </View>

>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                </View>
              </View>
            )}
          />
        </View>
<<<<<<< HEAD
        <View style={styles.button}>
                <TouchableOpacity
            style={{ backgroundColor: "gold", padding: 20, borderRadius: 40 }}
            onPress={() => navigation.navigate("CreateProduct")}
          >
            <MaterialCommunityIcons name="plus" size={30} color={"black"} />
          </TouchableOpacity>
                  </View>
=======
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
      </View>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
<<<<<<< HEAD
    adminView: {
        padding: 10,
        marginTop:-25,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'space-between',
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        right: 0,
        bottom: 30,
        borderRadius: 100,
      },
      adminText: {
        fontSize: 20,
        color: "white",
        fontWeight: "500",
        letterSpacing: 1,
      },
      title: {
        color: "gold",
        marginBottom:12,
        fontSize:23,
        marginLeft: "2%",
        fontWeight:'bold'
      },
      text: {
        fontSize: 16,
        color: "#fff",
        paddingBottom: 5,
        fontWeight: "500",
        letterSpacing: 1,
        width: 150,
      },
      iimage: {
        width: 150,
        height: 150,
        borderRadius: 15,
      },
      padd: {
        width: 100,
        marginLeft: '10%',
        color: 'gold',
        fontWeight: "bold",
        fontSize: 18,
      },
      Box: {
        padding: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#000",
        borderRadius: 15,
      },
      container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        paddingTop: 18,
        padding: 10
      },
      decText: {
        fontSize: 12,
        letterSpacing: 1.5,
        color: 'gold',
        fontWeight: 'bold',
      },
      tinyLogo: {
        width: 55,
        height: 55,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#fff",
      }
=======
  adminView: {
    padding: 13,
    flexDirection: "row",
  },
  adminText: {
    fontSize: 20,
    color: "white",
    ontWeight: "500",
    letterSpacing: 1,
    paddingLeft: 12,
    paddingTop: 30,
    paddingRight: 12,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    paddingBottom: 5,
    fontWeight: "500",
    letterSpacing: 1,
    width: 150,
  },
  iimage: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  padd: {
    width: 100,
    marginLeft: '30%',
    color: 'gold',
    fontWeight: "bold",
    fontSize: 18,
  },
  Box: {
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#000",
    borderRadius: 15,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    paddingTop: 18,
    padding: 10
  },
  decText: {
    fontSize: 12,
    letterSpacing: 1.5,
    color: 'gold',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
  }
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
});
