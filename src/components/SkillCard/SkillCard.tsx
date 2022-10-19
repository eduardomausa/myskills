import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: string

}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
      style={skillCardStyle.buttonSkill}
      {...rest}
    >
      <Text style={skillCardStyle.skill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const skillCardStyle = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  skill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
