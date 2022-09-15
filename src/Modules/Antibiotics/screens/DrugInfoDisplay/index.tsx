import React from 'react';
import { Text, View } from 'react-native';
import AntibioticsLayout from 'Modules/Antibiotics/components/AntibioticsLayout';
import Card from 'UIToolkit/Card';
import styles from '../../styles';
import drugStyles from './styles';
import BulletList from 'UIToolkit/BulletList';
import HomeButton from 'Modules/Antibiotics/components/HomeButton';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';

interface Props {
  route: {
    params: {
      title?: string;
      drugConfig?: any;
    }
  }
}

const DrugInfoDisplay = React.memo(({route}: Props) => {
  return (
    <AntibioticsLayout
      title={route.params.title ? route.params.title : ''}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          {route.params.drugConfig && (
            <>
              <View style={drugStyles.treatmentContainer}>
                <Text style={drugStyles.boldText}>{route.params.drugConfig.medicine}</Text>
                <Text style={drugStyles.regularText}>{route.params.drugConfig.dose}</Text>
                {route.params.drugConfig.max && (
                  <Text style={drugStyles.regularText}>{route.params.drugConfig.max}</Text>
                )}
                {route.params.drugConfig.duration && (
                  <Text style={drugStyles.regularText}>{route.params.drugConfig.duration}</Text>
                )}
              </View>
              {route.params.drugConfig.notes ? (
                <BulletList
                  items={route.params.drugConfig.notes.map((item: string) => ({
                    text: item
                  }))}
                  style={drugStyles.list}
                />
              ) : (
                <Text style={[drugStyles.regularText, drugStyles.list]}>
                  {antibioticsText.shared.noNotes}
                </Text>
              )}
            </>
          )}
        </Card>
        <HomeButton />
      </View>
    </AntibioticsLayout>
  )
})

export default DrugInfoDisplay;
