import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";


const Stack = createNativeStackNavigator()
const Navigation =()=>{
  return (
    // NavigationContainer은 하나당 앱 하나라고 생각하면 됩니다.
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="치후니 사이트" component={Screen1}></Stack.Screen >
        <Stack.Screen name="screen2" component={Screen2}></Stack.Screen >
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Navigation