import { closeIc } from 'assets/img';
import { blackboxIc, warningsIc } from 'assets/img/resus';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import styles from './styles';

interface Config {
  Drug: string;
  USBlackBox: string | null;
  Contraindications: string | null;
  SpecialPrecautions: string | null;
  ISMPHighAlert: string | null,
  AdditionalAdverseReactions: string | null;
}

interface Props {
  visible: boolean;
  onDismiss: () => void;
  config: Config;
  hasBlackBox: boolean;
}

const DrugWarning = React.memo(({visible, onDismiss, config, hasBlackBox}: Props) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onDismiss}
      animationIn='slideInUp'
      backdropOpacity={0.6}
      propagateSwipe
    >
      <View style={styles.container} >
        <View style={styles.headerContainer}>
          <View style={styles.placeholder} />
          <Text style={styles.title}>{resusText.drugDosing.warnings}</Text>
          <Pressable
            onPress={onDismiss}
            hitSlop={20}
          >
            <Image source={closeIc} style={styles.closeIc} />
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        >  
          {hasBlackBox && config.USBlackBox && (
            <>
              <View style={styles.subtitleContainer}>
                <Image source={blackboxIc} style={styles.warningIc} />
                <Text style={styles.blackBoxText}>{resusText.drugDosing.blackBox}</Text>
              </View>
              <View style={{marginBottom: 12}}>
                {React.isValidElement(config.USBlackBox) ? config.USBlackBox : (
                  <Text style={styles.text}>{config.USBlackBox}</Text>
                )}
              </View>
            </>
          )}
          <View style={styles.subtitleContainer}>
            <Image source={warningsIc} style={styles.warningIc} />
            <Text style={styles.warningText}>{resusText.drugDosing.warnings}</Text>
          </View>
          {config.Contraindications && (
            <View>
              <Text style={styles.sectionTitle}>{resusText.drugDosing.contradictions}</Text>
              {config.Contraindications}
            </View>
          )}
          {config.SpecialPrecautions && (
            <View>
              <Text style={styles.sectionTitle}>{resusText.drugDosing.specialPrecautions}</Text>
              {config.SpecialPrecautions}
            </View>
          )}
          {config.ISMPHighAlert && (
            <View>
              <Text style={styles.sectionTitle}>{resusText.drugDosing.ISMPHighAlert}</Text>
              <Text style={styles.text}>{config.ISMPHighAlert}</Text>
            </View>
          )}
          {config.AdditionalAdverseReactions && (
            <View>
              <Text style={styles.sectionTitle}>{resusText.drugDosing.additionalAdverseReactions}</Text>
              <Text style={styles.text}>{config.AdditionalAdverseReactions}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  )
})

export default DrugWarning;
