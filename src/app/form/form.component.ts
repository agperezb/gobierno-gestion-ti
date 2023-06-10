import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup = new FormGroup<any>({});

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup<any>({
      ask1: new FormControl('', Validators.required),
      ask2: new FormControl('', Validators.required),
      ask3: new FormControl('', Validators.required),
      ask4: new FormControl('', Validators.required),
      ask5: new FormControl('', Validators.required),
      ask6: new FormControl('', Validators.required),
      ask7: new FormControl('', Validators.required),
      ask8: new FormControl('', Validators.required),
      ask9: new FormControl('', Validators.required)
    });
  }

  public sendForm(): void {
      if (this.form.valid) {
        console.log(this.form.value);
        // Realiza las acciones adicionales que desees con los datos del formulario
      } else {
        // Marca los campos inválidos como tocados para mostrar los mensajes de error
        this.marcarCamposComoTocados();
      }
    }

    marcarCamposComoTocados() {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
    }

    getMessageError(controlName: string): string {
      const control = this.form.get(controlName);
      if (control?.hasError('required')) {
        return 'Este campo es obligatorio';
      }
      return '';
    }

}
