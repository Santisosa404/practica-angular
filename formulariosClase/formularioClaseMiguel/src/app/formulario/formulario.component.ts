import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  pass:string;
  formularioRegistro: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2:['']
    },{
      validator: this.passwordEqualsValidator('password', 'password2')
    });

  }

  ngOnInit(): void {
  }

  enviarForm() {
    if (this.formularioRegistro.valid) {
      console.log(this.formularioRegistro.getRawValue());
    } else {
      console.log('Formulario incorrecto');
    }
  };

  // validatorPassword(fc: FormControl) {
  //   const value = fc.value as string;
  //   alert(value);
  //   const isInvalid = this.pass.trim().toLowerCase() !== value.trim().toLowerCase();
  //   return isInvalid ? { passwordError: 'Password is not a strong password' } : null;
  // }

  // validar(fc :FormControl){
  //   const value = fc.value as string;
  //   if(this.pass.trim().toLowerCase()==value.trim().toLowerCase()){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  passwordEqualsValidator(passwordName: string, passwordRepeatName: string){
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[passwordName];
        const passwordRepeat = formGroup.controls[passwordRepeatName];
        if (passwordRepeat.errors && !passwordRepeat.errors.confirmedValidator) {
            return;
        }
        if (password.value !== passwordRepeat.value) {
          passwordRepeat.setErrors({ passwordEqualsError: true });
        } else {
          passwordRepeat.setErrors(null);
        }
    }
}
  imprimirForm() {
    console.log(this.formularioRegistro.getRawValue());

  }

}
