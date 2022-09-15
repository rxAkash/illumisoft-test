import { StyleSheet } from "react-native";
import { blackColor, grayColor, lightGray } from "UIToolkit/theme/colors";
import { containerPadding } from "UIToolkit/theme/styles";

const styles = StyleSheet.create({
  container: {
    ...containerPadding,
    flex: 1
  },
  listContent: {
    paddingBottom: 40
  },
  disclaimerCard: {
    padding: 16
  },
  disclaimerText: {
    fontSize: 14,
    color: blackColor,
    fontWeight: '300'
  },
  disclaimerTitle: {
    fontWeight: '600'
  },
  italicText: {
    fontStyle: 'italic'
  },
  card: {
    padding: 12
  },
  input: {
    borderWidth: 0.5,
    borderColor: lightGray,
    borderRadius: 4,
    padding: 12,
    color: blackColor,
    fontWeight: '400',
    width: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: lightGray
  },
  body: {
    padding: 16
  },
  verticalContainer: {
    paddingVertical: 16
  },
  sectionTitleContainer: {
    paddingHorizontal: 16
  },
  sectionTitle: {
    fontSize: 16,
    color: blackColor,
    marginBottom: 6,
    fontWeight: '500'
  },
  sectionSubtitle: {
    fontSize: 14,
    color: blackColor,
  },
  medInfoTitle: {
    fontSize: 16,
    color: blackColor,
    fontWeight: '300',
    marginBottom: 4
  },
  bold: {
    fontWeight: '500'
  },
  sectionHint: {
    fontSize: 12,
    color: grayColor,
    fontWeight: '300'
  },
  noteText: {
    fontSize: 12,
    color: blackColor,
    fontWeight: '300'
  },
  infoSection: {
    borderBottomColor: lightGray,
    borderBottomWidth: 0.5,
    padding: 12
  },
  wideButton: {
    width: 120
  },
  cardButton: {
    marginTop: 18
  },
  cardGroupButton: {
    marginTop: 16
  },
  warningCard: {
    backgroundColor: '#FFF3F3',
    padding: 8,
    marginBottom: 16
  },
  warningText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DF0D34',
    marginBottom: 4
  },
  spacedText: {
    marginTop: 12,
    marginBottom: 18,
    fontSize: 14
  },
  medValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4054B2'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12
  },
  ketoneDose: {
    fontSize: 20,
    fontWeight: '600',
    color: '#86134F'
  },
  grayBox: {
    backgroundColor: '#f5f5f5',
    padding: 8
  },
  inputSection: {
    marginTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: lightGray,
    paddingTop: 12
  }
})

export default styles;
