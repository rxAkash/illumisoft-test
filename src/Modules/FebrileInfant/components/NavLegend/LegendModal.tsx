/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigation, useRoute } from '@react-navigation/native';
import { closeIc, nextArrowIc } from 'assets/img';
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { buttonPressed } from 'UIToolkit/theme/styles';
import styles from './styles';

interface Props {
  items: {
    title: string;
    route: string | null;
    subroute?: boolean;
  }[],
  pathway: string;
  isVisible: boolean;
  onDismiss: () => void;
}

const LegendModal = React.memo(({items, pathway, isVisible, onDismiss}: Props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigate = (route: string) => {
    navigation.navigate(route as never);
    onDismiss();
  }

  const navToStart = () => {
    const firstItemRoute = items.find(item => item.route !== null);
    if(firstItemRoute && firstItemRoute.route) {
      navigation.navigate(firstItemRoute.route as never);
      onDismiss();
    }
  }

  return (
    <Modal
      isVisible={isVisible}
      onDismiss={onDismiss}
      onSwipeComplete={onDismiss}
      animationIn='slideInDown'
      animationOut="slideOutUp"
      onBackdropPress={onDismiss}
      backdropOpacity={0.3}
    >
      <SafeAreaView style={styles.modalBody}>
        <View style={styles.container}>
          <Pressable style={styles.closeContainer} onPress={onDismiss}>
            <Image source={closeIc} style={styles.icon} />
          </Pressable>
          <Text style={styles.title}>{pathway}</Text>
          <ScrollView style={{maxHeight: '100%'}}>
            {items.map(item => (
              <Pressable
                key={item.title}
                disabled={!item.route}
                style={({pressed}) => [pressed && buttonPressed, styles.itemRow]}
                //@ts-ignore
                onPress={() => navigate(item.route)}
              >
                <Text style={[
                  styles.itemText,
                  item.subroute && styles.subtext,
                  route.name === item.route && styles.activeText
                ]}>
                  {item.title}
                </Text>
                {item.route && (
                  <Image source={nextArrowIc} style={styles.arrow} />
                )}
              </Pressable>
            ))}
          </ScrollView>
          <View>
            <Pressable
              style={({pressed}) => [pressed && buttonPressed, styles.returnButton]}
              onPress={navToStart}
            >
              <Text style={styles.blueText}>Return to Beginning</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
})

export default LegendModal;
