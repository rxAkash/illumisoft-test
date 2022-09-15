import { SKIN_INFECTION_ABSCESS, SKIN_INFECTION_BITE, SKIN_INFECTION_CELLULITIS, SKIN_INFECTION_IMPETIGO, SKIN_INFECTION_NECROTIZING } from "Modules/Antibiotics/navigation/routes";

export const INFECTIONS = [
  {
    key: SKIN_INFECTION_IMPETIGO,
    name: 'Impetigo',
    description:
        'Superficial bacterial infection that manifests with lesions that progress to vesicles, pustules, and crusts.',
  },
  {
    key: SKIN_INFECTION_CELLULITIS,
    name: 'Cellulitis',
    description: 'Infection of the dermis and subcutaneous fat without a suppurative focus.',
  },
  {
    key: SKIN_INFECTION_ABSCESS,
    name: 'Abscess',
    description: 'A collection of purulent fluid within the dermis and deeper skin tissues.',
  },
  {
    key: SKIN_INFECTION_NECROTIZING,
    name: 'Necrotizing Fasciitis',
    description: 'Rapidly progressive, widespread tissue destruction with systemic signs of toxicity.',
  },
  {
    key: SKIN_INFECTION_BITE,
    name: 'Animal/Human Bite',
    description: 'Infection (typically cellulitis or abscess) resulting from an animal or human bite.',
  },
]