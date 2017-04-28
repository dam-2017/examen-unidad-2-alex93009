import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      'NOMBRE': ['', [Validators.required]],
      'APELLIDOM': ['', [Validators.required]],
      'APELLIDOP': ['', [Validators.required]],
      'FECHA': ['', [Validators.required]],
      'RFC': ['', [Validators.required]],
    });
  }

  saveData(){
    console.log(this.myForm.value);
  }

}
