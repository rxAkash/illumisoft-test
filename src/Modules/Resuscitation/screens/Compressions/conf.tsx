import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export const COMPRESSIONS_CONFIG = [
  {
    lable: "Depth:",
    text: "1/3 the AP Diameter"
  },
  {
    lable: "Rate:",
    text: "At least 100/minute"
  },
  {
    lable: "Compression Ventilation Ratio:",
    text: "3:1"
  },
  {
    lable: <Text style={styles.bold}>Compression and ventilation should be synchronized even with advanced airway</Text>,
    text: ''
  },
  {
    lable: <Text style={styles.bold}>Allow complete chest recoil between each compression</Text>,
    text: ''
  }
]

export const CIRCULATION_CONFIG = {
  title: "Circulation",
  content: [
    {
      lable: "Pulse Check:",
      text: "Umbilical or Brachial"
    },
    {
      lable: "Compression Indication:",
      text: "HR < 60, despite 30 sec of ventilation"
    },
    {
      lable: "Landmarks:",
      text: "Lower 1/3 of sternum"
    },
    {
      lable: "Method",
      text: "2 thumb-encircling hands"
    }
  ]
}