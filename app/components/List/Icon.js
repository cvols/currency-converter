import React, { Component } from 'react'
import { View, Image } from 'react-native'

import styles from './styles'

import check from './images/check.png'

const Icon = ({ checkmark, visible, iconBackground }) => {
    const iconStyles = [styles.icon]
    if (visible) {
        iconStyles.push(styles.iconVisible)
    }

    if (iconBackground) {
        iconStyles.push({ backgroundColor: iconBackground })
    }

    return (
        <View style={iconStyles}>
            {checkmark ? <Image resizeMode="contain" style={styles.checkIcon} source={check} /> : null }
        </View>
    )
}

export default Icon