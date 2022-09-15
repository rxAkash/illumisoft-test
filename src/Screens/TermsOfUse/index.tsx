import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from './styles';

const TermsOfUse = React.memo(() => {
  return (
    <ScrollView>
      <GoBackHeader border />
      <View style={styles.container}>
        <Text style={styles.title}>Mobile App Terms of Use</Text>
        <Text style={styles.text}>
          <Text>
            This Mobile App Terms of Use Agreement (“
            <Text style={styles.strong}>Agreement</Text>”) is entered into by
            and between The Children’s Mercy Hospital (“
            <Text style={styles.strong}>CMH</Text>”) and “you,” the user of the
            PedsGuide: Pediatric Decision Support mobile application (the “
            <Text style={styles.strong}>App</Text>”). Access to, use of and/or
            browsing of the App is provided subject to the terms and conditions
            set forth in this Agreement. {'\n\n'}
          </Text>
          <Text>
            By accessing, using, and/or browsing the App, you hereby agree to
            these terms and conditions. {'\n\n'}
          </Text>
          <Text>
            THIS AGREEMENT CONTAINS WARRANTY DISCLAIMERS AND OTHER PROVISIONS
            THAT LIMIT CMH’S LIABILITY TO YOU. PLEASE READ THESE TERMS AND
            CONDITIONS CAREFULLY AND IN THEIR ENTIRETY, AS USING, ACCESSING
            AND/OR BROWSING THE APP CONSTITUTES ACCEPTANCE OF THESE TERMS AND
            CONDITIONS. IF YOU DO NOT AGREE TO BE BOUND TO EACH AND EVERY TERM
            AND CONDITION SET FORTH HEREIN, PLEASE EXIT THE APP IMMEDIATELY AND
            DO NOT USE, ACCESS AND/OR BROWSE THE APP. {'\n\n'}
          </Text>
          <Text>
            BY USING THE APP, YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE READ AND
            UNDERSTAND THESE TERMS AND CONDITIONS, THAT THE PROVISIONS,
            DISCLOSURES AND DISCLAIMERS SET FORTH HEREIN ARE FAIR AND
            REASONABLE, AND THAT YOUR AGREEMENT TO FOLLOW AND BE BOUND BY THESE
            TERMS AND CONDITIONS IS VOLUNTARY AND IS NOT THE RESULT OF FRAUD,
            DURESS OR UNDUE INFLUENCE EXERCISED UPON YOU BY ANY PERSON OR
            ENTITY. {'\n\n'}
          </Text>
          <Text>
            1. <Text style={styles.underline}>License</Text>. Subject to the
            limitations and terms set forth in this Agreement, CMH hereby grants
            you a limited, non-exclusive, non-transferable, non-sublicensable,
            revocable license to access and use the App for your personal,
            non-commercial use on a mobile telecommunication device owned or
            otherwise controlled by you. You are not permitted to use the App
            for any purpose other than as expressly permitted under this
            Agreement. Any use of the App not expressly permitted by this
            Agreement is a breach of this Agreement. You acknowledge that the
            Licensor may audit your use of the App.
            {'\n\n'}
            2. <Text style={styles.underline}>Scope of Use</Text>. This App and
            the information, services, content and/or data contained therein
            (the “<Text style={styles.strong}>Content</Text>”) is intended only
            for (i) use by health care and emergency services professionals, and
            (ii) informational and educational purposes. It is not, and is not
            intended, for use in the diagnosis, cure, mitigation, treatment, or
            prevention of disease or other conditions. The Content contained in
            the App delivers similar information to that of a textbook or other
            health resource, and provides contextually-relevant information by
            matching patient-specific information to reference information
            routinely used in clinical practice (e.g. evidence based practices
            and guidelines). This Content does not establish a standard of care
            to be followed in every case. All Content presented through the App
            is determined solely by those selections made by you in your use of
            the App. It is recognized that each case is different and those
            individuals involved in providing health care are expected to use
            their judgment in determining what is in the best interests of the
            patient based on the circumstances existing at the time. CMH accepts
            no responsibility for the correctness of any action you take based
            in whole or in part upon your use of this App.
            {'\n\n'}
            3. <Text style={styles.underline}>Limitations on Use</Text>. You
            agree not to interfere or attempt to interfere with the proper
            working of the App or to disrupt the operations or violate the
            security of the App. Violations of system or network operation or
            security may result in civil or criminal liability. CMH will
            investigate possible occurrences of such violations, and may involve
            and cooperate with law enforcement authorities in prosecuting anyone
            involved with such violations. You agree to comply with all user
            responsibilities and obligations as stated in this Agreement.
            Non-enforcement or our failure to act with respect to a breach by
            you or others of this Agreement does not constitute consent or
            waiver, and we reserve the right to enforce such term at our sole
            discretion. No waiver of any breach or default hereunder shall be
            deemed to be a waiver of any preceding or subsequent breach or
            default. Nothing contained in this Agreement shall be construed to
            limit the actions or remedies available to us with respect to any
            prohibited activity or conduct.
            {'\n\n'}
            You further agree that you will not, nor attempt to (or as
            applicable, allow or direct a third party to):
            {'\n\n'}
            <Text style={styles.strong}>a.</Text> reproduce, duplicate, copy,
            sell, resell, or exploit the App, its Content, its software or any
            portion of any of the foregoing;
            {'\n\n'}
            <Text style={styles.strong}>b.</Text> use the App for any purpose in
            violation of local, state, national or international laws;
            {'\n\n'}
            <Text style={styles.strong}>c.</Text> infringe the intellectual
            property rights, privacy rights, or moral rights of CMH or any third
            party;
            {'\n\n'}
            <Text style={styles.strong}>d.</Text> lend, rent, lease, sell,
            redistribute, assign, sublicense or otherwise transfer the App or
            the right to download or use the App;
            {'\n\n'}
            <Text style={styles.strong}>e.</Text> use the App for any commercial
            purpose or for any commercial or non-commercial public display;
            {'\n\n'}
            <Text style={styles.strong}>f.</Text> copy, decompile, reverse
            engineer, disassemble, attempt to derive the source code of the App,
            any App updates, or any part of the App or updates, or attempt to do
            any of the foregoing;
            {'\n\n'}
            <Text style={styles.strong}>g.</Text> copy, modify or create
            derivative works of the App, Content, or any App or Content updates
            or any part of the App, Content or updates;
            {'\n\n'}
            <Text style={styles.strong}>h.</Text> remove any copyright or other
            proprietary notices from the App, Content, part of the App;
            {'\n\n'}
            <Text style={styles.strong}>i.</Text> transfer the Content from the
            App to anyone else or “mirror” the same on any server;
            {'\n\n'}
            <Text style={styles.strong}>j.</Text> circumvent, disable, or
            otherwise interfere with security-related features of the App or
            features that prevent or restrict use or copying of any Content;
            {'\n\n'}
            <Text style={styles.strong}>k.</Text> use any robot, spider, site
            search or retrieval App, or any other manual or automatic device or
            process to retrieve, index, data-mine, or in any way reproduce or
            circumvent the navigational structure or presentation of the App;
            {'\n\n'}
            <Text style={styles.strong}>l.</Text> harvest, collect or mine
            information about other users of the App;
            {'\n\n'}
            <Text style={styles.strong}>m.</Text> post or transmit any virus,
            worm Trojan horse or other harmful or disruptive element; or
            {'\n\n'}
            <Text style={styles.strong}>n.</Text> violate any applicable law,
            rule or regulation.
            {'\n\n'}
            If you violate any of these restrictions, this license will
            automatically terminate, and you may be subject to prosecution and
            damages.
            {'\n\n'}
            4.{' '}
            <Text style={[styles.strong, styles.underline]}>DISCLAIMERS</Text>.
            {'\n\n'}
            <Text style={styles.strong}>a.</Text>{' '}
            <Text style={[styles.strong, styles.underline]}>
              Medical Advice Disclaimer
            </Text>{' '}
            CMH provides the App and the Content contained therein for
            informational purposes only. CMH does not provide any medical advice
            on or through the App, and the Content should not be so construed or
            used. Using, accessing and/or browsing the App does not create an
            agency or physician-patient relationship between you or any third
            party and CMH. You should not rely on anything contained in the App.
            Your use or reliance upon any Content found in this App is done at
            your own risk. You hereby agree that you shall not make any health
            or medical related decision based in whole or in part on anything
            contained in the App.
            <Text style={styles.strong}>
              THE APP DOES NOT OFFER MEDICAL ADVICE, AND NOTHING CONTAINED IN
              THE CONTENT IS INTENDED TO CONSTITUTE PROFESSIONAL ADVICE FOR
              MEDICAL DIAGNOSIS OR TREATMENT.
            </Text>
            {'\n\n'}
            <Text style={styles.strong}>b.</Text>{' '}
            <Text style={[styles.strong, styles.underline]}>
              Content Disclaimer
            </Text>{' '}
            Any Content within the App are or have been rendered based on
            specific facts, under certain conditions, and subject to certain
            assumptions, and may not and should not be used or relied upon for
            any other purpose. You acknowledge and accept that it is impossible
            to anticipate all possible situations that may exist and to prepare
            guidelines for each. Although great care has been taken in compiling
            and checking the Content to ensure accuracy, CMH shall not be
            responsible or in any way liable for any errors, omissions, or
            inaccuracies, whether arising from negligence or otherwise, or for
            any consequences arising therefrom. The Content may be changed
            without notice and is not guaranteed to be complete, correct,
            timely, current or up-to-date. Similar to any printed materials, the
            Content may become out-of-date. CMH undertakes no obligation to
            update any Content in the App; provided, however, that CMH may
            update the Content at any time without notice in CMH’s sole and
            absolute discretion. CMH reserves the right to make alterations or
            deletions to the Content at any time without notice.
          </Text>
          {'\n\n'}
          <Text style={styles.strong}>c.</Text>{' '}
          <Text style={[styles.strong, styles.underline]}>
            Third Party Links
          </Text>{' '}
          The App may, from time to time, display, include or make available
          third party content (including data, information, applications and
          other products, services and/or materials) or provide links to third
          party web sites or services (“
          <Text style={styles.strong}>Third Party Materials</Text>”). These
          Third Party Materials are provided solely as a convenience to you and
          not as a guarantee, warranty, or recommendation by CMH of the Third
          Party Materials or as an indication of any affiliation, sponsorship or
          endorsement of such Third Party Materials. CMH is not responsible for
          the content of Third Party Materials and does not make any
          representations or warranties regarding the privacy practices of, or
          the content or accuracy of materials on, any third party websites. If
          you decide to access linked Third Party Materials, you do so at your
          own risk. Your use of Third Party Materials is subject to the terms of
          use for such sites.
          {'\n\n'}
          <Text style={styles.strong}>d.</Text>{' '}
          <Text style={[styles.strong, styles.underline]}>
            Disclaimer of Warranties
          </Text>{' '}
          THE CONTENT AND SERVICES MADE AVAILABLE IN THE APP ARE PROVIDED ON AN
          “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND. TO THE
          MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, CMH, ON ITS BEHALF AND
          ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS AND
          SERVICE PROCIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER
          EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE APP AND
          CONTENT AND SERVICES, INCLUDING, WITHOUT LIMITATION, ALL IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF
          COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE.
          Without limiting the generality of the foregoing, CMH makes no
          warranty, representation or guaranty (i) as to the reliability,
          content, sequence, accuracy, timeliness or completeness of the
          Content, that the Content may be relied upon for any reason or that
          the Content will be uninterrupted or error free or that any defects
          can or will be corrected, nor (ii) with respect to any Content offered
          or provided within or through the App regarding treatment of medical
          conditions, action, or App of medication.
          {'\n\n'}
          5.{' '}
          <Text style={[styles.strong, styles.underline]}>
            LIMITATION OF LIABILITY
          </Text>
          .
          <Text style={styles.strong}>
            UNDER NO CIRCUMSTANCES, AS A RESULT OF YOUR USE OF OR INABILITY TO
            USE THE APP AND/OR THE CONTENT AND SERVICES, WILL CMH OR ANY OF ITS
            AFFILIATES, OR ANY OF THEIR RESPECTIVE LICENSORS OR SERVICE
            PROVIDERS, BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR ANY DIRECT,
            INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, CONSEQUENTIAL OR OTHER
            DAMAGES UNDER ANY LEGAL THEORY, INCLUDING, WITHOUT LIMITATION, TORT,
            CONTRACT, STRICT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </Text>
          Without limiting the generality of the foregoing, CMH shall have
          absolutely no liability in connection with the App for:
          {'\n\n'}
          <Text style={styles.strong}>i.</Text> damages as a result of lost
          profits, loss of good will, work stoppage, failure of performance,
          delays in operation or transmission, non-delivery of information,
          deletions of files, mistakes, defects, errors, interruptions or
          computer failure or malfunction;
          {'\n\n'}
          <Text style={styles.strong}>ii.</Text> any loss or injury caused, in
          whole or in part, by CMH’s actions, omissions, or negligence, or for
          contingencies beyond CMH’s control, in procuring, compiling, or
          delivering the Content;
          {'\n\n'}
          <Text style={styles.strong}>iii.</Text> any errors, omissions, or
          inaccuracies in the Content regardless of how caused, or delays or
          interruptions in delivery of the Content; or
          {'\n\n'}
          <Text style={styles.strong}>iv.</Text> any decision made or action
          taken or not taken in reliance upon the Content.
          {'\n\n'}
          THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF
          BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE AND
          REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR COMPANY WAS
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          {'\n\n'}
          6. <Text style={styles.underline}>Changes and Updates</Text> CMH may
          revise the Content in this App, or otherwise change or update the App
          including the terms of this Agreement, without notice to you. CMH may
          also make improvements and/or changes in services and functionalities
          or add new features at any time without notice. Your continued use of
          this App will signify your continued agreement to these terms and
          conditions as they may be revised.
          {'\n\n'}
          7. <Text style={styles.underline}>User Data</Text> You agree that CMH
          may collect, store, process, maintain, upload, sync, transmit, share,
          disclose and use certain data and information including, but not
          limited to, information or data regarding the characteristics or usage
          of the App, as well as personal information, user location data and
          user content (collectively, “
          <Text style={styles.strong}>User Data</Text>”) (i) to facilitate the
          provision of the services or functionality of the App, including but
          not limited to authentication, performance optimization, software
          updates, product support and other services to you related to the App
          or to otherwise improve CMH’s ability to provide other services (if
          any) to you related to the App, (ii) to develop new services and
          ideas, and (ii) for any other CMH describes when you provide User
          Data. CMH collects User Data directly from you when you provide it to
          CMH, automatically as you navigate through the App, and from third
          parties. You acknowledge that use of the App may result in User Data
          being transmitted between your mobile telecommunications device and a
          database service designated by a third party and/or transmitted or
          disclosed to or accessed by CMH. Without limiting the foregoing, you
          acknowledge that audit logs reflecting your logins, logouts, and the
          activities you have accessed through your use of the App may be
          generated in connection with your use of the App. Your User Data may
          also be made available to CMH for troubleshooting. The App is not
          intended nor designed to access, receive, store, or process protected
          health information, or PHI (as that term is defined in the Health
          Content Protection and Accountability Act of 1996, “
          <Text style={styles.strong}>HIPAA</Text>”). In the event you enter PHI
          into the App in any manner, you acknowledge that a “Covered
          Entity-Business Associate” relationship (as those terms are defined in
          HIPAA) is not created, and such entry of PHI shall be considered a
          material breach of this Agreement.
          {'\n\n'}
          8. <Text style={styles.underline}>
            CMH Intellectual Property
          </Text>{' '}
          Except as otherwise indicated, all content in the App, including text,
          graphics, logos, button icons, photos, images, forms, audio, video,
          questionnaires, and software, is the property of CMH or its licensors
          and is protected by United States and international copyright laws.
          CMH allows you to view or download a single copy of the material on
          the App solely for your personal, noncommercial use. The compilation
          of all content on the App is the exclusive property of CMH or its
          licensors and is protected by United States and international
          copyright laws. Unless specifically authorized in writing by CMH, any
          use of these materials, or of any materials contributed to the App by
          entities other than CMH, on any other web site or networked computer
          environment for any purpose is prohibited.
          {'\n\n'}
          Other proprietary marks of CMH or third parties may be designated as
          such from time to time in the App through use of the TM, SM, or ®
          symbols. You are not authorized to make any use of the marks or the
          proprietary marks of third parties, including but not limited to, as
          metatags or in any other fashion that may create a false or misleading
          impression of affiliation or sponsorship with or by CMH or the
          applicable third party
          {'\n\n'}
          9. <Text style={styles.underline}>Geographic Restrictions</Text> The
          Content is based in the United States and provided for access and use
          only by persons located in the United States. You acknowledge that you
          may not be able to access all or some of the Content outside of the
          United States and that access thereto may not be legal by certain
          persons or in certain countries. If you access the App and its Content
          from outside the United States, you are responsible for compliance
          with local laws.
          {'\n\n'}
          10. <Text style={styles.underline}>Export Regulation</Text> The App
          may be subject to United States export control laws, including the
          United States Export Administration Act and its associated
          regulations. You shall not, directly or indirectly, export, re-export,
          or release the App to, or make the App accessible from, any
          jurisdiction or country to which export, re-export, or release is
          prohibited by law, rule, or regulation. You shall comply with all
          applicable federal laws, regulations, and rules, and complete all
          required undertakings (including obtaining any necessary export
          license or other governmental approval), prior to exporting,
          re-exporting, releasing, or otherwise making the Application available
          outside the United States.
          {'\n\n'}
          11. <Text style={styles.underline}>Termination</Text> This Agreement
          is effective until terminated by you or CMH. Your rights under this
          Agreement will terminate automatically without notice from CMH if you
          fail to comply with any of these terms and conditions. Upon
          termination, you shall cease all use of the App, and destroy all
          copies, full or partial, of the App in your possession or control.
          {'\n\n'}
          12. <Text style={styles.underline}>Miscellaneous</Text>
          {'\n\n'}
          <Text style={styles.strong}>a.</Text> The App is intended for persons
          eighteen (18) years or older. Persons under the age of eighteen (18)
          should not access, use and/or browse the App.
          {'\n\n'}
          <Text style={styles.strong}>b.</Text> You agree to indemnify and hold
          CMH harmless from any claim or demand, including attorneys’ fees, made
          by any third party arising from or in any way related to (1) any
          content posted or made available by you on this App, (2) any violation
          of law that occurs by you in connection with the App, (3) any breach
          of this Agreement by you; and/or (4) your use of, or reliance upon,
          the App and/or the Content contained therein.
          {'\n\n'}
          <Text style={styles.strong}>c.</Text> If any provision of this
          Agreement is held to be invalid or unenforceable in whole or in part
          in any jurisdiction, then that provision shall be deemed ineffective
          in such jurisdiction but shall have no effect on the enforceability of
          the remaining provisions.
          {'\n\n'}
          <Text style={styles.strong}>d.</Text> This Agreement and your use of
          the App, along with the Content contained therein, shall be governed
          by and construed in accordance with the laws of the State of Missouri
          without regard to conflict of laws principles. Any legal suit, action,
          or proceeding arising out of or related to this Agreement or the App
          shall be instituted exclusively in the federal courts of the United
          States or the courts of the State of Missouri in each case located in
          Kansas City and Jackson County. You waive any and all objections to
          the exercise of jurisdiction over you by such courts and to venue in
          such courts. You further agree that any claims or causes of action
          arising out of or related to this Agreement and the App, along with
          the Content contained therein, shall be filed within one (1) year
          after such claim or cause of action arose, or such claim or cause of
          action shall be forever barred.
          {'\n\n'}
          <Text style={styles.strong}>e.</Text> You hereby acknowledge that this
          Agreement represents the entire understanding between you and CMH
          concerning your use of the App and the Content contained therein.
        </Text>
      </View>
    </ScrollView>
  );
});

export default TermsOfUse;
