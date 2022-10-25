import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native'
import { Button } from '../components/Button/Button'
import { SkillCard } from '../components/SkillCard/SkillCard'

interface SkillData {
  id: string
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    console.log('new skill', data);


    setMySkills([...mySkills, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(mySkills => mySkills.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGreeting('Good morning!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!')
    } else {
      setGreeting('Good evening!')
    }
  }, [mySkills])

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID='welcome'>Welcome, Mausa</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        testID='input-skill'
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button
        testID='add-button'
        title='Add'
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {mySkills &&
        <FlatList
          testID='flatlist-skills'
          data={mySkills}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps='never'
          renderItem={({ item }) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: '#fff'
  }
})