import { listIc } from 'assets/img/febrileInfant';
import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import LegendModal from './LegendModal';
import styles from './styles';

interface Props {
  items: {
    title: string;
    route: string | null;
    subroute?: boolean;
  }[],
  pathway: string;
}

const NavLegend = React.memo(({items, pathway}: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.listicon} onPress={() => setShowModal(true)}>
        <Image source={listIc} style={styles.icon} />
      </TouchableOpacity>
      <LegendModal
        isVisible={showModal}
        onDismiss={() => setShowModal(false)}
        items={items}
        pathway={pathway}
      />
    </View>
  )
})

export default NavLegend;
