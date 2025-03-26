import { Tabs } from "expo-router";
import { Image, Text, View, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const { width } = Dimensions.get("window");

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <View className="flex-row items-center justify-center px-3 py-2 rounded-full">
        <Image source={icon} className="size-5 tint-red-600" />
        <Text className="text-white text-sm font-bold ml-2">
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="items-center justify-center">
      <Image source={icon} className="size-5 opacity-70" />
    </View>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#E50914", // Netflix red
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarItemStyle: {
          paddingVertical: 6,
        },
        tabBarBackground: () => (
          <BlurView intensity={80} tint="dark" className="absolute inset-0 rounded-2xl" />
        ),
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          borderRadius: 16,
          marginHorizontal: width * 0.05,
          marginBottom: insets.bottom > 0 ? insets.bottom : 16,
          paddingHorizontal: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Save" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
