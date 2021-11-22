import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResumeData {

  profile: Profile,
  contacts: Contact[],
  experiences: Experience[],
  educations: Education[],
  skills: Skill[],
  languages: Language[],
  picture: string
  
}

export interface Profile {

  name: string,
  title: string,
  catchphrase: string,
  birthdate: string,
  nationality: string,
  localisation: string

}

export interface Contact {

  name: string,
  value: string,
  type: 'tel' | 'email' | 'web' | 'linkedin'

}

export interface Experience extends Indexable {

  title: string,
  subtitle: string,
  description: string,
  date: string

}

export interface Education extends Indexable {

  title: string,
  subtitle: string,
  date: string

}

export interface Skill extends Indexable {

  name: string,
  knowledge: number

}

export interface Language extends Indexable {

  type: string,
  level: number

}

export interface Indexable {

  index: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class ResumeLoaderService {

  resumeData: ResumeData;

  constructor(private http: HttpClient) { }

  public getResumeInformation(): Observable<ResumeData> {
    return this.http.get<ResumeData>('./assets/resume-information.json');
  }

  public storeResumeInformations(resumeData: ResumeData): void {
    this.resumeData = resumeData;
  }

  public getResumeInformations(): ResumeData {
    return this.resumeData;
  }
}
