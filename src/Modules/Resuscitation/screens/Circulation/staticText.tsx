import React from "react";
import { Text } from "react-native";
import styles from './styles';

export const FLUID_RESUS_TEXT = (
  <Text style={styles.staticText}>
    <Text style={styles.redText}>IV/IO</Text> Give 20 mL/kg of an isotonic crystalloid solution (NS or LR) over 5 to 10
    minutes to the infant or child in shock. Reassess the patient{"'"}s peripheral perfusion, vital signs
    and urine output frequently and repeat 20 mL/kg boluses as needed to restore tissue perfusion.{'\n\n'}
    For suspected <Text style={styles.redText}>Septic Shock</Text>, give 10-20mL/kg of crystalloid and reassess patient. Repeat as above to
    restore adequate tissue perfusion.{'\n\n'}
    For <Text style={styles.redText}>hemorrhagic shock</Text>, use blood products if they are available for ongoing resuscitation.{'\n\n'}
    For <Text style={styles.redText}>potential or probable myocardial dysfunction</Text>, smaller (5 - 10 mL/kg) and slower
    infusions are indicated, and the use of an intropic agent should be considered.{'\n\n'}
    For <Text style={styles.redText}>preterm and newborn infants</Text>, 10 mL/kg is an adequate initial fluid bolus.
  </Text>
)