import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../account.model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-delete",
  templateUrl: "./account-delete.component.html",
  styleUrls: ["./account-delete.component.css"],
})
export class AccountDeleteComponent implements OnInit {
  account: Account;

  constructor(
    private router: Router,
    private accountService: AccountService,
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

  deleteAccount(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.accountService.delete(id).subscribe(() => {
      this.accountService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["accounts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["accounts"]);
  }
}
