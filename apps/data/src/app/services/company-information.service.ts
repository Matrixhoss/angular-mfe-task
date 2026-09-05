import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

export interface Company {
  name: string;
  industry: string;
  headquarters: string;
  founded: number;
  employees: string;
  website: string;
  websiteUrl: string;
}

export interface CompanyInformation {
  company: Company;
  aboutUs: string;
  mission: string;
}

const COMPANY_INFORMATION: CompanyInformation = {
  company: {
    name: "Acme Corporation",
    industry: "Technology",
    headquarters: "New York, USA",
    founded: 2010,
    employees: "250+",
    website: "www.acmecorp.com",
    websiteUrl: "https://www.acmecorp.com",
  },
  aboutUs:
    "Acme Corporation is a leading provider of innovative solutions to help businesses grow and succeed in the digital world. We are committed to delivering high-quality products and excellent customer service.",
  mission:
    "To empower businesses with technology and drive positive change.",
};

@Injectable({
  providedIn: "root",
})
export class CompanyInformationService {
  getCompanyInformation(): Observable<CompanyInformation> {
    return of(COMPANY_INFORMATION).pipe(delay(500));
  }
}
