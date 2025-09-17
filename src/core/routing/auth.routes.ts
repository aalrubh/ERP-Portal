import { Routes } from "@angular/router";
import { TwoFAComponent } from "@auth/pages/2FA/twofa";
import { ConfirmTwoFAComponent } from "@auth/pages/confirm2FA/confirmtwofa";
import { ConfirmEmailComponent } from "@auth/pages/confirmEmail/confirm-email";
import { ForgotPasswordComponent } from "@auth/pages/forgotPassword/forgot-password";
import { LoginComponent } from "@auth/pages/login/login";
import { RegisterComponent } from "@auth/pages/register/register";
import { RegisterTwoFAComponent } from "@auth/pages/register2FA/register-two-fa";

export const routes : Routes = [
    {
        path: "login",
        title: 'Log In',
        component: LoginComponent,
    },
    {
        path: "2FA",
        title: 'Two Factor Authentication',
        component: TwoFAComponent,
    },
    {
        path: "forgotPassword",
        title: 'Forgot Password',
        component: ForgotPasswordComponent,
    },
    {
        path: "register",
        title: 'Register',
        component: RegisterComponent,
    },
    {
        path: "confirmEmail",
        title: 'Confirm Email',
        component: ConfirmEmailComponent,
    },
    {
        path: "register2FA",
        title: 'Register',
        component: RegisterTwoFAComponent,
    },
    {
        path: "confirm2FA",
        title: 'Register',
        component: ConfirmTwoFAComponent,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./../layout/not-found-shell/not-found-page').then(m => m.NotFoundPage),
    },
]