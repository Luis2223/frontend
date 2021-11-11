import { Component, OnInit } from "@angular/core";
import { Account } from "../account.model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-read",
  templateUrl: "./account-read.component.html",
  styleUrls: ["./account-read.component.css"],
})
export class AccountReadComponent implements OnInit {
  accounts: Account[];
  displayedColumns = ["id", "name", "price", "action"];

  constructor(private accountService: AccountService) {
    this.accounts = [];
  }

  ngOnInit(): void {
    this.accountService.read().subscribe((accounts) => {
      this.accounts = accounts;
      console.log(accounts);
    });
  }
}
