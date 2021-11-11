import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../account.model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-update",
  templateUrl: "./account-update.component.html",
  styleUrls: ["./account-update.component.css"],
})
export class AccountUpdateComponent implements OnInit {
  account: Account;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.account = {
      name: "",
      price: 0,
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.accountService.readById(id).subscribe((account) => {
      this.account = account;
    });
  }

  updateAccount(): void {
    this.accountService.update(this.account).subscribe(() => {
      this.accountService.showMessage("Conta atualizada com sucesso!");
      this.router.navigate(["accounts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/accounts"]);
  }
}
