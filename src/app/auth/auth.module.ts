import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from './login/login.component';
import { AuthReducer } from "./state/auth.reducers";
import { AUTH_STATE_NAME } from "./state/auth.selectors";

const routes:Routes = [

    { path: '', children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component:LoginComponent}
    ]}
]

@NgModule({

    declarations:[
    LoginComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        RouterModule.forChild(routes)
    ]  
})
export class AuthModule{

}