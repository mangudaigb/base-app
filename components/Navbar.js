import { View, Text, Image } from 'react-native'
import React from 'react'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

const Navbar = () => {
  return (
    <View>
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-10 w-10 bg-gray-300 p-2 rounded-full"
        />

        <View className="flex-1">
          <View>
            {/* <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text> */}
            <Text className="font-bold text-xl pl-3">
              Welcome Pariksya!
              {/* <ChevronDownIcon size={20} color="#00CCBB" /> */}
            </Text>
          </View>
        </View>

        {/* <UserIcon size={35} color="#00CCBB" /> */}
      </View>
    </View>
  )
}

export default Navbar