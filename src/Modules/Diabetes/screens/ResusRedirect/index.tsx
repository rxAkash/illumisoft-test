import { NavigationProp } from '@react-navigation/native';
import { resusIc } from 'assets/img';
import { RESUS_HOME } from 'Modules/Resuscitation/navigation/routes';
import React from 'react';
import { View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import DiabetesLayout from '../../components/DiabetesLayout';
import { diabetesText } from '../../config/strings';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const ResusRedirect = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(RESUS_HOME)
  }

  return (
    <DiabetesLayout title={diabetesText.ketoacidosis.title}>
      <View style={styles.body}>
        <Card title={diabetesText.ketoacidosis.resusRedirectTitle} blackTitle >
          <View style={styles.card}>
            <FullWidthButton
              text={diabetesText.ketoacidosis.resusRedirectButton}
              onPress={onNav}
              icon={resusIc}
              bigIcon
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default ResusRedirect;
