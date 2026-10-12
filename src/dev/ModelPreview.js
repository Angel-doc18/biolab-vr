// Development only: ?model3d=<topic id> in the web preview opens that topic's 3D
// model screen without signing in, to check models and their movement.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Specimen from '../screens/learn/Specimen';

const Stack = createStackNavigator();

export default function ModelPreview() {
  const unitId = new URLSearchParams(window.location.search).get('model3d') || 'cell';
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Specimen" component={Specimen} initialParams={{ unitId }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
