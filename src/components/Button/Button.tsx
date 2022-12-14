import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={buttonStyle.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={buttonStyle.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})