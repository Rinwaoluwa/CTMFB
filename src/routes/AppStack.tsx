import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import ComingSoon from "../screens/ComingSoon";
import Icon from "../assets/svgs/icon";
import CustomTabBarButton from "../design-system/components/button/CustomTabBarButton";
import { getComputedHeight } from "../design-system/layout/responsive";

const BottomTab = createBottomTabNavigator();

function AppStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarStyle: {
          height: getComputedHeight(80),
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" fill={color} />,
        }}
      />
      <BottomTab.Screen name="Transactions" component={ComingSoon} options={{
          tabBarIcon: ({ color }) => <Icon name="history" fill={color} />,
        }} />
      <BottomTab.Screen
        name="Transfer"
        component={ComingSoon}
        options={{
          tabBarLabelStyle: {
            display: "none",
          },
        //   tabBarIcon: () => <Icon name="paper_plane" fill='white' />,
          tabBarButton: () => (
            <CustomTabBarButton />
          ),
        }}
      />
      <BottomTab.Screen name="Cards" component={ComingSoon} options={{
          tabBarIcon: ({ color }) => <Icon name="card" fill={color} />,
        }}/>
      <BottomTab.Screen name="More" component={ComingSoon} options={{
          tabBarIcon: ({ color }) => <Icon name="boxes" fill={color} />,
        }} />
    </BottomTab.Navigator>
  );
}

export default AppStack;
