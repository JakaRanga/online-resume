import { Contact } from "./contact.model";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Language } from "./language.model";
import { Metadata } from "./metadata.model";
import { Profile } from "./profile.model";
import { Skill } from "./skill.model";

export interface ResumeData {

    lang: string,
    profile: Profile,
    contacts: Contact[],
    experiences: Experience[],
    educations: Education[],
    skills: Skill[],
    languages: Language[],
    pdfName: string

}
