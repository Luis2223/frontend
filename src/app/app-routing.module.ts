import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { AccountsComponent } from "./views/accounts/accounts.component";
import { AccountCreateComponent } from "./components/accounts/account-create/account-create.component";
import { AccountUpdateComponent } from "./components/accounts/account-update/account-update.component";
import { AccountDeleteComponent } from "./components/accounts/account-delete/account-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "accounts",
    component: AccountsComponent,
  },
  {
    path: "accounts/create",
    component: AccountCreateComponent,
  },
  {
    path: "accounts/update/:id",
    component: AccountUpdateComponent,
  },
  {
    path: "accounts/delete/:id",
    component: AccountDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
