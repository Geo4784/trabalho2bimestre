import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Linking } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#993399', dark: '#993399' }}
      headerImage={
        <Image
        source={require('@/assets/images/perfill.png')}
        style={styles.headerImage}
        /> 
        }>
        
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>
<TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/Geo4784')}>
<Image
source={require('@/assets/images/git.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>GitHub</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonb} onPress={() => Linking.openURL('https://www.instagram.com/_eugebarbosa?igsh=MTM2d3VoeGhweDF6MQ==')}>
<Image
source={require('@/assets/images/instagram.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 50, paddingTop: 10}}>
  <Text style={styles.text}>Instagram</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonx} onPress={() => Linking.openURL('https://x.com/GSilva_gva?t=1VfkXyG1A99aOmoL64ub9g&s=09')}>
<Image
source={require('@/assets/images/x.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 60, paddingTop: 10}}>
  <Text style={styles.text}>X-twitter</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonl} onPress={() => Linking.openURL('https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav')}>
<Image
source={require('@/assets/images/linke.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>linkedin</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL('https://open.spotify.com/user/31viiauho3vez7nz5lpb6xjznpfq?si=zCe-7yP7RuSa-7ZODRf38Q')}>
<Image
source={require('@/assets/images/spoty.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 73, paddingTop: 10}}>
  <Text style={styles.text}>Spotify</Text>
</ThemedText>
</TouchableOpacity>
<TouchableOpacity style={styles.buttony} onPress={() => Linking.openURL('https://youtube.com/@geovannabarbosadasilvabarb8694?si=pa-hrwEukaNkFqFH')}>
<Image
source={require('@/assets/images/you.png')}
style={styles.logo}
/> 
<ThemedText style={{marginRight: 63, paddingTop: 10}}>
  <Text style={styles.text}>Youtube</Text>
</ThemedText>
</TouchableOpacity>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    position: 'relative',
    width: 250,
    height: 250,
    alignItems: 'center',
    left: 70
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    textAlign: 'center',
    justifyContent: 'center'
  },
  button:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
    borderRadius: 50,
    marginTop: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20
  },
  buttonb:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'purple',
    borderRadius: 50,
    marginTop: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20
  },
  buttonx:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20
  },
  buttonl:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
    borderRadius: 50,
    marginTop: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20
  },
  buttons:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'green',
    borderRadius: 50,
    marginTop: 15,
    width: 320,
    height: 70,
    paddingHorizontal: 20
  },
  buttony:{
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
  }, 
  text:{
    color: 'white',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  }
});
