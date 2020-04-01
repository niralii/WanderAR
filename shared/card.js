import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Card (props) {
    return (
        <View style={StyleSheet.card}>
            <View style={StyleSheet.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})
