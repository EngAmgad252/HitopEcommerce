import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Contact} from 'src/app/models/contact'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

 //Form Validation
 formData=new FormGroup(
  {
    userName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required)
}
)

contact=new Contact()

//to get full control of controls use it in validation
get controls(){

  return this.formData.controls
}

//Save Contact

contactUs(){
console.log(this.contact)
}


constructor() { }

ngOnInit(): void {
}

}
