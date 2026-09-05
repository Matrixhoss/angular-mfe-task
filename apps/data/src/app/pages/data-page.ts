import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { CompanyInformationService } from "../services/company-information.service";

@Component({
  selector: "app-data-page",
  imports: [],
  templateUrl: "./data-page.html",
  styleUrl: "./data-page.css",
})
export class DataPage {
  private readonly companyInformationService = inject(
    CompanyInformationService,
  );

  readonly information = toSignal(
    this.companyInformationService.getCompanyInformation(),
    { initialValue: null },
  );
}
