import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good afternoon');
    } else {
      setGreetings('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Text style={styles.title} testID="welcome">
        Welcome, Yuri Paiva
      </Text>
      <Text style={styles.greetings}>{greetings}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555555"
        onChangeText={setNewSkill}
        testID="input-new"
      />

      <Button onPress={handleAddNewSkill} title="Add" testID="button-add" />

      <Text style={[styles.title, {marginVertical: 50}]}>My skills</Text>

      {mySkills && (
        <FlatList
          testID="flat-list-skills"
          data={mySkills}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="never"
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      )}
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
  greetings: {
    color: '#FFFFFF',
  },
});
