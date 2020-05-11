import React, { ReactNode } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
interface Props {
  component: ReactNode,
  params?: {}
}

const Stack = createStackNavigator();
const MockedNavigator: React.SFC<Props> = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;