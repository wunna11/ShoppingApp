import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import All from "../TabScreens/All";
import WomanClothing from "../TabScreens/WomanClothing";
import MenClothing from "../TabScreens/MenClothing";
import Shoes from "../TabScreens/Shoes";
import Accessories from "../TabScreens/Accessories";

export default function Products({ navigation }) {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            initialRouteName={"All"}
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#000' },
                headerTitleStyle: { color: '#fff', },
                "tabBarActiveTintColor": "#fff",
                "tabBarInactiveTintColor": "#fff",
                "tabBarActiveBackgroundColor": "#757271",
                "tabBarInactiveBackgroundColor": "#000",
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]

            }}
        >
            <Tab.Screen
                name="All"
                component={All}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={'#FFE89C'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Man"
                component={MenClothing}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="man" color={'#FFE89C'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Woman"
                component={WomanClothing}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="woman" color={'#FFE89C'} size={30} />
                    ),
                }}
            />

            <Tab.Screen
                name="Shoe"
                component={Shoes}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shoe-heel" color={'#FFE89C'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Accessory"
                component={Accessories}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="necklace" color={'#FFE89C'} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

}