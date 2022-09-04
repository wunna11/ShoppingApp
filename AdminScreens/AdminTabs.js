import React, { useEffect } from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AdminHome from './AdminHome';
import UserOrder from './UserOrder';
import UserList from './userList';
import Feedback from './Feedback';
import { firebase } from '../config';
import { CommonActions } from '@react-navigation/native';
import { Restart } from '../components/reload/reload';
import AdminTopTabScreen from './AdminTopTabScreen';
import { useIsFocused } from '@react-navigation/native';
export default function AdminTab({ navigation }) {

    const Tab = createBottomTabNavigator();

<<<<<<< HEAD
    const isFocused = useIsFocused();
    function SignOut({ navigation }) {

        useEffect(() => {
            firebase.auth().signOut();

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                })
            )
        }, [isFocused])

    }
=======
//
//    const SignOut = () => {
//        firebase.auth().signOut()
//        //  navigation.dispatch(
//        CommonActions.reset({
//            index: 0,
//            routes: [{ name: 'Login' }]
//        })
//
//        //navigation.navigate('Login')
//        Restart()
//    }
const isFocused = useIsFocused();
function SignOut({ navigation }) {
        
    useEffect(() => {
        firebase.auth().signOut();

           navigation.dispatch(
           CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
            )
    },[isFocused])
        
    }
   


>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
    return (
        <Tab.Navigator
            initialRouteName="AdminHScreen"
            screenOptions={{
                headerShown: false,
<<<<<<< HEAD
                tabBarShowLabel: false,
=======
                //tabBarIconStyle: { display: 'none' },
                //tabBarStyle: {
                //  paddingBottom: 20
                //},
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                tabBarLabelStyle: {
                    fontSize: 12
                },
                tabBarIcon: ({ color, size }) => (
<<<<<<< HEAD
                    <MaterialCommunityIcons name="home" color={'#ffd700'} size={30} />
=======
                    <MaterialCommunityIcons name="feather" color={'#ffd700'} size={30} />
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                ),

            }}
        >
            <Tab.Screen
                name="AdminHScreen"
                component={AdminHome}
            />
            <Tab.Screen
                name='Categories'
                component={AdminTopTabScreen}
                options={{
<<<<<<< HEAD

=======
                    //tabBarLabel: 'SignOut',
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="category" size={30} color={'#ffd700'} />
                    ),
                }}

            />
            <Tab.Screen
                name="UserOrder"
                component={UserOrder}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" color={'#ffd700'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="UserList"
                component={UserList}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={'#ffd700'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Feedback"
                component={Feedback}
                options={{
<<<<<<< HEAD

=======
                    //tabBarLabel: 'SignOut',
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbox-ellipses-outline" color={'#ffd700'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Logout"
                component={SignOut}
                options={{
<<<<<<< HEAD

=======
                    //tabBarLabel: 'SignOut',
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="exit" color={'#ffd700'} size={30} />
                    ),
                }}
            />

        </Tab.Navigator>
    );

<<<<<<< HEAD
}

=======
}
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
