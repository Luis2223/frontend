import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"],
})
export class AccountsComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de contas",
      icon: "storefront",
      link: "/accounts",
    };
  }
  ngOnInit(): void {}

  navigateToAccountCreate(): void {
    this.router.navigate(["/accounts/create"]);
  }
}
