import { createStackNavigator } from '@react-navigation/stack';
import Account from './Account';
import EditProfile from './EditProfile'

const Stack = createStackNavigator();

<<<<<<< HEAD
export default function UserAccount({ navigation }) {
    return (

        <Stack.Navigator
            initialRouteName="Account"
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen name="Account" component={Account}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name='EditProfile' component={EditProfile}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>

    );
}
=======
export default function UserAccount({navigation}) {
    return (
    
      <Stack.Navigator
        initialRouteName="Account"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Account" component={Account}
          options={{
            headerShown:false
          }} />
        <Stack.Screen name='EditProfile' component={EditProfile}
         options={{
          headerShown:false
        }} />
      </Stack.Navigator>
   
    );
  }
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
