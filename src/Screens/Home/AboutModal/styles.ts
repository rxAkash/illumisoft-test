import { StyleSheet } from "react-native";
import { blackColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1
  },
  safeArea: {
    marginHorizontal: -20,
    flex: 1
  },
  content: {
    flex: 1,
    marginBottom: -150,
  },
  contentContainer: {
    backgroundColor: whiteColor,
    paddingHorizontal: 20,
    
    paddingBottom: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 28
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 18,
    color: blackColor
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: blackColor
  },
  sectionText: {
    marginLeft: 36,
    marginBottom: 14,
    lineHeight: 18,
    color: blackColor
  },
  takeSurveyButton: {
    marginBottom: 12
  }
})

export default styles;
