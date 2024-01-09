import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Linking, ScrollView, Switch } from 'react-native';

const Profilku = () => {
  const url = 'https://www.instagram.com/hiroudaa';
  Linking.openURL(url);
}

const Proyek1 = () => {
  const url = 'https://www.figma.com/file/3TQUNbCJ2iruvNmnfS4YWt/SINATA?type=design&node-id=0-1&mode=design&t=mMjrzuyxHx1GvfkX-0';
  Linking.openURL(url);
}

const Proyek2 = () => alert('Mohon maaf proyek tidak di hosting sehingga tidak dapat dibuka');

const Proyek3 = () => alert('Mohon maaf proyek tidak di hosting sehingga tidak dapat dibuka');

const Porto = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <ScrollView>
      <View style={[styles.container, isEnabled && { backgroundColor: '#a7adba' }]}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={[styles.switch, styles.switchTopLeft]} // Tambahkan style switchTopLeft
        />
        <Text style={styles.title}>My Portofolio</Text>

        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={require('./components/Profile.jpg')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Contact Me" color="#fd3754" onPress={Profilku} />
        </View>

        <Text style={styles.name}>Cholid Afiddrus W.</Text>

        <Text style={styles.description}>
          Saya adalah pelajar IT dengan pengalaman 2.5 tahun sebagai Web Developer, Fullstack Developer, Mobile Developer dan Data Administrator. Seorang yang kreatif dan terampil dalam menggunakan bahasa pemrograman dan framework HTML, CSS, JS, PHP, Angular JS, Yii 2, Kotlin, Laravel, SQL dan C#, serta memiliki kemampuan komunikasi lisan dan verbal yang baik.
        </Text>

        <Text style={styles.projectTitle}>My Recent Project</Text>

        <View style={styles.projectContainer}>
          <Image style={styles.projectImage} source={require('./components/Sinata.jpg')} />
          <Text style={styles.projectName}>SINATA</Text>
          <Text style={styles.projectSubtitle}>Frontend Website Design</Text>
          <View style={styles.buttonContainer1}>
            <Button title="Open Here" color="#ff9632" onPress={Proyek1} />
          </View>
        </View>

        <View style={styles.projectContainer}>
          <Image style={styles.projectImage} source={require('./components/Setting.png')} />
          <Text style={styles.projectName}>E-BC Kota Bontang</Text>
          <Text style={styles.projectSubtitle}>Frontend Website Design</Text>
          <View style={styles.buttonContainer1}>
            <Button title="Open Here" color="#ff9632" onPress={Proyek2} />
          </View>
        </View>

        <View style={styles.projectContainer}>
          <Image style={styles.projectImage} source={require('./components/BuahMarket.jpg')} />
          <Text style={styles.projectName}>BuahMarket</Text>
          <Text style={styles.projectSubtitle}>Frontend Website Design & Backend Website Design</Text>
          <View style={styles.buttonContainer1}>
            <Button title="Open Here" color="#ff9632" onPress={Proyek3} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  switchTopLeft: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bae1ff',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
  },
  buttonContainer1: {
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: 'grey',
    marginVertical: 20,
    marginHorizontal: 10,
    fontFamily: 'Poppins',
  },
  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    fontSize: 18,
  },
  projectContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  projectImage: {
    width: 280,
    height: 200,
    borderRadius: 15,
  },
  projectName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginTop: 20,
  },
  projectSubtitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'grey',
  },
});

export default Porto;
