import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import styles from './styles'

import icon from './images/icon.png'

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)

export default ClearButton