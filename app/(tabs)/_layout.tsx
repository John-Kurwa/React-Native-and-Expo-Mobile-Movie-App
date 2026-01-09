import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground, Image, View } from 'react-native'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Text } from 'react-native'

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight} 
        className=" 
          flex       
          flex-row w-full
          min-w-[112px] min-h-16
          justify-center items-center
          rounded-full 
          overflow-hidden
        "
        >
        <Image source={icon}
          tintColor="#151312" className="w-5 h-5"
        />
        <Text
          className="ml-2 text-secondary text-sm font-semibold">{title}
        </Text>
      </ImageBackground>
  )
}
    return (
      <View className="size-full h-11 justify-center items-center rounded-full">         
          <Image source={icon}
            tintColor="#A8BB5DB" className="w-4 h-4"
          />
      </View>
    )
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {  
          height: 50,       
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 8,
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 40,
          height: 56,
          position: 'absolute', 
          overflow: 'hidden',
          borderColor: '#0f0D23',
          paddingVertical: 8,
        },
      }}  
    >        
        <Tabs.Screen 
        name="index" 
        options={{ 
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
             <TabIcon 
                focused={focused}
                icon={icons.home}
                title="Home"
             />
            ),
           }} 
        />
        <Tabs.Screen 
        name="search" 
        options={{ 
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
             <TabIcon 
                focused={focused}
                icon={icons.search}
                title="Search"
             />
            ),
           }} 
        />
        <Tabs.Screen 
        name="saved" 
        options={{ 
            title: 'Saved',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
             <TabIcon 
                focused={focused}
                icon={icons.save}
                title="Saved"
             />
            ),
           }} 
        />
        <Tabs.Screen 
        name="profile" 
        options={{ 
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
             <TabIcon 
                focused={focused}
                icon={icons.person}
                title="Profile"
             />
            ),
           }} 
        />
    </Tabs>
  )
}

export default _layout