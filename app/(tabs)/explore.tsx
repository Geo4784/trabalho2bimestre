import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>
<TouchableOpacity style={styles.button}>
<Image
source={require('@/assets/images/github.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Image
source={require('@/assets/images/github.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Image
source={require('@/assets/images/github.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Image
source={require('@/assets/images/github.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Image
source={require('@/assets/images/github.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Image
source={require('@/assets/images/github.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 9
  }, 
  text:{
    color: 'white',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  }
});
