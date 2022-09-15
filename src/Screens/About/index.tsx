import React from 'react';
import {ScrollView} from 'react-native';
import Disclaimer from './Disclaimer';

const About = React.memo(() => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Disclaimer />
    </ScrollView>
  );
});

export default About;
