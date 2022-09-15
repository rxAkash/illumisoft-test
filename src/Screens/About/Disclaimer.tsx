import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Disclaimer = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          PedsGuide: Pediatric Decision Support v2.0.1
      </Text>
      <Text style={styles.disclaimer}>Disclaimer</Text>
      <Text style={styles.text}>
          This Pediatric Decision Support mobile app (“App”), developed and
          owned by The Children’s Mercy Hospital (“CMH”), is intended for
          informational and educational purposes only and for use by persons
          over the age of eighteen (18). If you are under the age of eighteen
          (18) please discontinue use of the App immediately. {'\n'}
      </Text>
      <Text style={styles.text}>
          THE APP IS NOT INTENDED FOR USE IN THE DIAGNOSIS, CURE, MITIGATION,
          TREATMENT, OR PREVENTION OF DISEASE OR OTHER CONDITIONS. THE APP DOES
          NOT OFFER MEDICAL ADVICE, AND NOTHING CONTAINED IN THE CONTENT IS
          INTENDED TO CONSTITUTE PROFESSIONAL ADVICE FOR MEDICAL DIAGNOSIS OR
          TREATMENT. USE OF OR RELIANCE UPON THE APP DOES NOT IN ANY WAY CREATE
          A PROVIDER-PATIENT RELATIONSHIP BETWEEN CMH, ITS EMPLOYEES, AGENTS, OR
          CONTRACTORS AND ANY INDIVIDUAL. YOU SHOULD NOT PRIMARILY RELY UPON ANY
          APP SOFTWARE FUNCTION TO MAKE DIAGNOSIS OR TREATMENT DECISIONS
          REGARDING A PARTICULAR INDIVIDUAL. {'\n'}
      </Text>
      <Text style={styles.text}>
          You acknowledge that each case is different and those individuals
          involved in providing health care are expected to use their judgement
          in determining what is in the best interests of the patient based on
          the circumstances existing at the time. CMH accepts no responsibility
          for the correctness or accuracy of any action you take based in whole
          or in part upon your use of this App. {'\n'}
      </Text>
      <Text style={styles.text}>
          By using this App you acknowledge and accept that your use of the App
          is subject at all times to the <Text>Terms of Use</Text> found within
          the App.
      </Text>
    </View>
  )
})

export default Disclaimer;
