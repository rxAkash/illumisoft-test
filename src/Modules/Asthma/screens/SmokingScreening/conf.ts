import { lightbulbBubbleIc, questionBubbleIc } from "assets/img/asthma";
import { asthmaText } from "Modules/Asthma/config/strings";
import { QUIT_NOW_LINK, SMOKE_FREE_LINK } from "Modules/Asthma/config/urls";

export const smokeScreeningConf = [
  {
    title: asthmaText.smokingScreening.step1,
    icon: questionBubbleIc,
    options: [
      {
        text: asthmaText.smokingScreening.step1question1
      },
      {
        text: asthmaText.smokingScreening.step1question2
      },
      {
        text: asthmaText.smokingScreening.step1question3
      }
    ]
  },
  {
    title: asthmaText.smokingScreening.step2,
    icon: lightbulbBubbleIc,
    options: [
      {
        text: asthmaText.smokingScreening.step2question1
      },
      {
        text: asthmaText.smokingScreening.step2question2
      },
      {
        text: asthmaText.smokingScreening.step2question3
      }
    ]
  },
  {
    title: asthmaText.smokingScreening.step3,
    icon: lightbulbBubbleIc,
    options: [
      {
        text: asthmaText.smokingScreening.step3info1,
        link: QUIT_NOW_LINK
      },
      {
        text: asthmaText.smokingScreening.step3info2,
        link: SMOKE_FREE_LINK
      }
    ]
  }
]