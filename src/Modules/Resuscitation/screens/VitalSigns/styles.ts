import { StyleSheet } from "react-native";
import { blackColor, primaryColor } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding
  },
  title: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 12
  },
  card: {
    padding: 12
  },
  sectionTitle: {
    fontWeight: '600',
    color: blackColor,
    textAlign: 'center',
    marginTop: 12
  },
  avpuText: {
    color: blackColor,
    fontWeight: '300',
    marginVertical: 2
  },
  avpuRed: {
    color: 'red',
    fontWeight: '600',
  }
})

export default styles;
