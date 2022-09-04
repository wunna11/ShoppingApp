<<<<<<< HEAD
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import { firebase } from '../config'

const CategoryList = ({ navigation }) => {
=======
import { StyleSheet, Text, View,Button,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import { firebase } from '../config'

const CategoryList = ({navigation}) => {
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8

    const [data, setData] = useState([]);
    const dataRef = firebase.firestore().collection('categories');
    const [name, setName] = useState('');



    useEffect(() => {
        read();
    }, [])

    // read data
    const read = () => {
        dataRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const data = []
                    querySnapshot.forEach((doc) => {
                        const { name } = doc.data()

                        data.push({
                            id: doc.id,
                            name,
                        })
                    })
                    setData(data)
                }
            )
    }
    return (
        <View>
            <Text>CategoryList</Text>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                    </View>
                )}
<<<<<<< HEAD

            />
=======
            
            />

>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
            <Button
                title='Back'
                onPress={() => navigation.navigate('CreateCategory')}
            />
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({})