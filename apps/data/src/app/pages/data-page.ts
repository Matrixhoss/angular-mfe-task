import { Component } from "@angular/core";

@Component({
  selector: "app-data-page",
  imports: [],
  templateUrl: "./data-page.html",
  styleUrl: "./data-page.css",
})
export class DataPage {
  readonly company = {
    name: "Acme Corporation",
    industry: "Technology",
    headquarters: "New York, USA",
    founded: 2010,
    employees: "250+",
    website: "www.acmecorp.com",
    websiteUrl: "https://www.acmecorp.com",
  };

  readonly aboutUs =
    "Acme Corporation is a leading provider of innovative solutions to help businesses grow and succeed in the digital world. We are committed to delivering high-quality products and excellent customer service.";

  readonly mission =
    "To empower businesses with technology and drive positive change.";
}
