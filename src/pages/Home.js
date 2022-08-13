import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Platform} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Yuri</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My skills</Text>

      {mySkills.map((skill, index) => (
        <SkillCard skill={skill} key={skill} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFFFFF',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
