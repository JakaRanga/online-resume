import { Metadata } from "./metadata.model";
import { ResumeData } from "./resume-data.model";

export interface ResumeFile {

    metadata: Metadata,
    data: ResumeData[]

}