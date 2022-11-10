import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegistrazioneComponent } from './registrazione.component';

@NgModule({
  declarations: [LoginComponent, RegistrazioneComponent],
  imports: [CommonModule],
  exports: [LoginComponent, RegistrazioneComponent],
})
export class AuthModule {}
