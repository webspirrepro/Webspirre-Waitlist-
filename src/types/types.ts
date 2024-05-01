import React from "react";

enum SectionId {
  HERO = "hero_section",
  SECTWO = "section_two",
  CONTACTSEC = "contact_section",
  SECTHREE = "section_three",
}

interface SectionType {
  bgImg?: string;
  sectionId?: SectionId;
}
interface ModalType {
  open?: boolean;
  toogleModal(): void;
  videoToggle?: () => void;
}

export type { SectionType, ModalType };
