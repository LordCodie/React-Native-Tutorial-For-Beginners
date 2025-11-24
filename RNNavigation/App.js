import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "./screens/ProfileScreen";
import { CourseListScreen } from "./screens/CourseListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons"
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelPosition: 'below-icon',
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "grey"
                }}
            >
                <Tab.Screen name="Course List" component={CourseListScreen} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "My profile",
                        tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />,
                        tabBarBadge: 3
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
                <Tab.Screen 
                    name="About Stack"
                    component={AboutStack}
                    options={{
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

