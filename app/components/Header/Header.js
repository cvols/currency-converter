import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

import gear from './images/gear.png'

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image resizeMode="contain" style={styles.icon} source={gear} />
        </TouchableOpacity>
    </View>
)

export default Header