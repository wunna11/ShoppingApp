import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
<<<<<<< HEAD
  Alert,
=======
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  Button,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { BackHandler } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { firebase } from "../config";
import { SearchBar } from "react-native-elements";
import * as Animatable from "react-native-animatable";
<<<<<<< HEAD
import UserTrendList from "./UserTrendList";

const ImageHome = [
  "https://i.pinimg.com/564x/e1/33/04/e1330445b52b2076d17e0428709fa7d7.jpg",
  "https://pbs.twimg.com/media/FbfwzaFWYAIG8l3?format=jpg&name=large",
  "https://assets.vogue.com/photos/61536b6d48a587a316a3131b/master/w_1920,c_limit/00009-Christian-Dior-Spring-22-RTW-Paris-credit-Alessandro-Lucioni-Gorunway.jpg",
  "https://i.pinimg.com/564x/36/7a/11/367a1169d6d0376c3d260b921dff067f.jpg",
  "https://i.pinimg.com/564x/39/56/e0/3956e0e9b18ff91a261712d83dc15ff7.jpg",
  "https://k-odyssey.com/news/data/20220831/p1065602841003125_446_thum.jpg",
  "https://i.pinimg.com/564x/a4/ee/55/a4ee5554b2a156a4ab494c689898a2b6.jpg",
  "https://pbs.twimg.com/media/FbnfsWbacAA3aI2?format=jpg&name=small",
  "https://i.pinimg.com/564x/a2/3b/c5/a23bc51721ceb6b2505ee110ec3c929b.jpg",
=======

const ImageHome = [
  "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  "https://www.wowkorea.live/img/album/66/331537/417744_l.jpg",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://i.pinimg.com/564x/8a/1c/fc/8a1cfc2100eb7b3558284a1340096f45.jpg",
  "https://images.unsplash.com/photo-1520975708797-fd2543e902bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://i.pinimg.com/564x/1f/15/82/1f1582927a458e5d8af5687c26609063.jpg",
  "https://i.pinimg.com/564x/b5/fa/0f/b5fa0ffc412561ba3461bce5a24757e1.jpg",
  "https://i.pinimg.com/564x/29/09/7a/29097a3760cadbae5976ad4caa9176ad.jpg",
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_LATERAL = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function BackDrop({ scrollX }) {
  const firestore = firebase.firestore;
  const auth = firebase.auth;
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const dataRef = firebase.firestore().collection("products");
  const [search, setSearch] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);
  const isFocused = useIsFocused();
<<<<<<< HEAD

=======
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(auth().currentUser.uid)
      .get()
      .then((user) => {
        setUser(user.data());
      });
  }, [isFocused]);

<<<<<<< HEAD
  //useEffect(() => {
  //  BackHandler.addEventListener("hardwareBackPress",()=>{
  //    BackHandler.exitApp();
  //  });
  //}, []);

//  function handleBackButtonClick() {
//    navigation.goBack();
//    return true;
//  }
//
//  useEffect(() => {
//    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
//    return () => {
//      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
//    };
//  }, []);

//useEffect(() => {
//  BackHandler.addEventListener("hardwareBackPress", () => {
//    BackHandler.exitApp();
//  });
//}, []);
//const backAction = () => {
//  Alert.alert("Hold on!", "Are you sure you want to exit?", [
//    {
//      text: "Cancel",
//      onPress: () => null,
//      style: "cancel"
//    },
//    { text: "YES", onPress: () => BackHandler.exitApp() }
//  ]);
//  return true;
//};
//
//useEffect(() => {
//  BackHandler.addEventListener("hardwareBackPress", backAction);
//
//  return () =>
//    BackHandler.removeEventListener("hardwareBackPress", backAction);
//}, []);

  
=======
  // Search item
  useEffect(() => {
    setFilterProduct(
      data.filter(
        (res) =>
          res.name.toLowerCase().includes(search.toLowerCase()) ||
          res.desc.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  // read data
  const read = () => {
    dataRef.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const { imgURL } = doc.data();
        const { name } = doc.data();
        const { desc } = doc.data();
        const { price } = doc.data();
        //  const { qty } = doc.data();
        const { category_name } = doc.data();

        data.push({
          id: doc.id,
          imgURL,
          name,
          desc,
          price,
          //qty,
          category_name,
        });
      });
      setData(data);
    });
  };

  useEffect(() => {
    read();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress",()=>{
      BackHandler.exitApp();
    });
  }, []);
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  return (
    <View
      style={
        ([
          {
            height: ALTURA_BACKDROP,
            width,
            position: "absolute",
            top: 0,
          },
        ],
        StyleSheet.absoluteFillObject)
      }
    >
      {ImageHome.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const outputRange = [0, 1, 0];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange,
        });

        return (
          <Animated.Image
            source={{ uri: imagen }}
            key={index}
            blurRadius={3}
            style={[
              {
                height: ALTURA_BACKDROP,
                width,
                position: "absolute",
                top: 0,
                opacity,
              },
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0 }}
      />

      <Animatable.View animation="fadeInUp" duration={2000}>
      <Animatable.View
                            animation="pulse"
                            direction='alternate'
                            iterationCount='infinite'
                        >
          <Text style={styles.label1}>Welcome {user?.username}!</Text>
          </Animatable.View>
        <Text style={styles.label2}> Find your style with WTTH</Text>
<<<<<<< HEAD
       
=======
        {/*<SearchBar
        placeholder="Search"
        onChangeText={(search) => setSearch(search)}
        value={search}
      />

      {search.length ? (
        <Text style={{position: "absolute"}}>
          {filterProduct.map((item) => (
            <View style={{position: "absolute"}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProductDetail", { item })}
              >
                <Text style={{ color: "#fff", fontSize: 20, }}>{item.name}</Text>
                <Text style={{ color: "#fff", fontSize: 10 }}>{item.desc}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </Text>
                ) : null}*/}
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
      </Animatable.View>
    </View>
  );
}

export default function DrawerHome({ navigation }) {
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

  const scrollX = React.useRef(new Animated.Value(0)).current;

    const [data, setData] = useState([]);
    const dataRef = firebase.firestore().collection("products");

    const [search, setSearch] = useState("");
    const [filterProduct, setFilterProduct] = useState([]);

    // read data
    const read = () => {

        dataRef.orderBy('name', 'desc').limit(4).onSnapshot((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                const { imgURL } = doc.data();
                const { name } = doc.data();
                const { desc } = doc.data();
                const { price } = doc.data();
                const { qty } = doc.data();
                const { category_name } = doc.data();

                data.push({
                    id: doc.id,
                    imgURL,
                    name,
                    desc,
                    price,
                    qty,
                    category_name,
                });
            });
            setData(data);
        });
    };


    useEffect(() => {
        read();
    }, []);

    // Search item
    useEffect(() => {
        setFilterProduct(
            data.filter(
                (res) =>
                    res.name.toLowerCase().includes(search.toLowerCase()) ||
                    res.desc.toLowerCase().includes(search.toLowerCase()) ||
                    res.category_name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, data]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <SearchBar
                    placeholder="Search"
                    onChangeText={(search) => setSearch(search)}
                    value={search}
                />

                {search.length ? (
                    <Text>
                        {filterProduct.map((item, index) => (
                            <View style={{
                                flex: 1,
                                paddingBottom: 30
                            }}>
                                <View key={index} style={{ flexDirection: 'column', paddingHorizontal: 10, flex: 1 }}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("ProductDetail", { item })}
                                    >
                                        <View>
                                            <Image
                                                style={styles.iimage1}
                                                source={{ uri: item.imgURL }}
                                            />
                                        </View>
                                        <Text style={{ color: "gold", fontSize: 20 }}>{item.name.substr(0, 10)}</Text>
                                        <Text style={{ color: "gold", fontSize: 10 }}>{item.desc.substr(0, 20)}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </Text>
                ) : null}
      </View>
=======
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
      <ScrollView>
        <BackDrop scrollX={scrollX} />

        <View>
          <Animated.FlatList
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { x: scrollX } },
                },
              ],
              { useNativeDriver: true }
            )}
            data={ImageHome}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 200,
              marginHorizontal: ESPACIO_LATERAL,
            }}
            decelerationRate={0}
            snapToInterval={ANCHO_CONTENEDOR}
            scrollEventThrottle={16}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 1) * ANCHO_CONTENEDOR,
                index * ANCHO_CONTENEDOR,
                (index + 1) * ANCHO_CONTENEDOR,
              ];

              const outputRange = [0, -50, 0];
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange,
              });

              return (
                <View style={{ width: ANCHO_CONTENEDOR }}>
                  <Animated.View
                    style={{
                      marginHorizontal: ESPACIO,
                      padding: ESPACIO,
                      borderRadius: 34,
                      backgroundColor: "#fff",
                      alignItems: "center",
                      transform: [{ translateY }],
                    }}
                  >
                    <Image source={{ uri: item }} style={styles.posterImage} />
                  </Animated.View>
                </View>
              );
            }}
          />
        </View>
        <ScrollView
          style={{ flexDirection: "row" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={[styles.bottom]}
            onPress={() => navigation.navigate("Products")}
          >
            <Image
              source={require("../assets/shopp.jpg")}
              style={styles.imgLogo}
            />
            <Text style={styles.Bot1}> All </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottom]}
            onPress={() => navigation.navigate("Men")}
          >
            <Image
              source={require("../assets/men1.jpg")}
              style={styles.imgLogo}
            />
            <Text style={styles.Bot1}> Men </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottom]}
            onPress={() => navigation.navigate("Woman")}
          >
            <Image
              source={require("../assets/woman.jpg")}
              style={styles.imgLogo}
            />
            <Text style={styles.Bot1}> Women </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottom]}
            onPress={() => navigation.navigate("Shoes")}
          >
            <Image
              source={require("../assets/shoeY.jpg")}
              style={styles.imgLogo}
            />
            <Text style={styles.Bot1}> Shoes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottom]}
            onPress={() => navigation.navigate("Accessory")}
          >
            <Image
              source={require("../assets/bag.jpg")}
              style={styles.imgLogo}
            />
            <Text style={styles.Bot1}>Accessory</Text>
          </TouchableOpacity>
        </ScrollView>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={{ flexDirection: "row" }}
        >
          <Text
            style={{
              color: "black",
              padding: 15,
              fontSize: 19,
              fontWeight: "700",
            }}
          >
            Trending In This Week{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Products")}>
            <Text
              style={{
                color: "black",
                padding: 20,
                fontSize: 15,
                fontWeight: "400",
                marginLeft: 15,
              }}
            >
              {" "}
              See more...
            </Text>
          </TouchableOpacity>
        </Animatable.View>

<<<<<<< HEAD
      <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }} >
    <Animatable.View
          animation="fadeInUp"
          duration={3000}
          style={styles.row}>
    <ScrollView horizontal={true} style={{ width: "100%" }}>
    <UserTrendList/>
    </ScrollView>
    </Animatable.View>
    </ScrollView>
     
       
=======
        <Animatable.View
          animation="fadeInUp"
          duration={3000}
          style={styles.row}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Woman")}>
            <Image
              source={require("../assets/trend2.png")}
              style={styles.Trend}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Men")}>
            <Image
              source={require("../assets/trend3.jpg")}
              style={styles.Trend}
            />
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.row}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
            <Image
              source={require("../assets/trend1.jpg")}
              style={styles.Trend}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Accessory")}>
            <Image
              source={require("../assets/prada.jpg")}
              style={styles.Trend}
            />
          </TouchableOpacity>
        </Animatable.View>
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
<<<<<<< HEAD
    //alignItems: "center",
    //justifyContent: "center",
=======
    alignItems: "center",
    justifyContent: "center",
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  imgLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "lightgray",
  },
  Trend: {
    width: 150,
    height: 150,
    borderRadius: 3,
    margin: 15,
    marginTop: 0,
    borderWidth: 0.2,
    borderColor: "lightgray",
  },
  label1: {
    fontSize: 16,
    color: "white",
    padding: 10,
    fontWeight: "300",
    marginBottom: 18,
  },
  label2: {
    fontSize: 21,
    color: "white",
    paddingLeft: 10,
    fontWeight: "700",
    marginBottom: 30,
    letterSpacing: 1,
  },

  label: {
    fontSize: 18,
    color: "gold",
    fontWeight: "bold",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    shadowColor: "gray",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.8,
    elevation: 15,
  },
  column: {
    flexDirection: "column",
  },
  bottom: {
    width: 75,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Bot1: {
    fontSize: 13,
<<<<<<< HEAD
    color: "#000",
    padding: 5,
    paddingBottom: 0,
    textAlign: "center",
  },
});

 {/*<Animatable.View
          animation="fadeInUp"
          duration={3000}
          style={styles.row}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Woman")}>
            <Image
              source={require("../assets/trend2.png")}
              style={styles.Trend}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Men")}>
            <Image
              source={require("../assets/trend3.jpg")}
              style={styles.Trend}
            />
          </TouchableOpacity>
        </Animatable.View>*/}
        {/*<Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.row}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
            <Image
              source={require("../assets/trend1.jpg")}
              style={styles.Trend}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Accessory")}>
            <Image
              source={require("../assets/prada.jpg")}
              style={styles.Trend}
            />
          </TouchableOpacity>
        </Animatable.View>*/}
=======
    color: "black",
    padding: 5,
    paddingBottom: 0,

    textAlign: "center",
  },
});
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
