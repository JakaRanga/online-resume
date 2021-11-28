import { DisplayLanguage } from "./display-language.model";
import { ResumeAssets } from "./resume-assets.model";

export interface Metadata {

    displayLanguages?: DisplayLanguage[],
    assets: ResumeAssets;

}