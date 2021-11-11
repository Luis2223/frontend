import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Account } from "../account.model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.css"],
})
export class AccountCreateComponent implements OnInit {
  account: Account = {
    name: "",
    price: 0,
  };

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  createAccount(): void {
    this.accountService.create(this.account).subscribe(() => {
      this.accountService.showMessage("Produto criado com sucesso!");
      this.router.navigate(["/accounts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/accounts"]);
  }
}
