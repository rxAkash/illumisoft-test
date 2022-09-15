import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from './styles';

interface Props {
  children: React.ReactElement<any>;
  title?: string;
}

const AntibioticsLayout = React.memo(({children, title}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <GoBackHeader />
      {title && (
        <Text style={styles.title}>{title}</Text>
      )}
      <ScrollView>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
})

export default AntibioticsLayout;
