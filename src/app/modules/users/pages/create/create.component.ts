import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formUser!: FormGroup;
  submitted: boolean = false;
  stored: boolean = false;
  spinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formUser = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['John aLEJANDRO hERNANDE', [Validators.required, Validators.minLength(10)]],
      surname: ['ERKGJRT', Validators.required],
      email: ['j.ajr@gmail.com', [Validators.required, Validators.email]],
      phone: ['dfer', [Validators.required, Validators.maxLength(15)]],
      username: ['username12', Validators.required],
      password: ['123qweasd', Validators.maxLength],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.spinner = true;
    console.log(this.formUser.controls);
    this.submitted = true;

    if (this.formUser.valid) {
      this.userService.storeUser(this.formUser.value).subscribe(data => {
          console.log(data);
          this.stored = data.success;
          this.spinner = false;
      })

      console.log(this.formUser.value, 'se ve bien!')
    } else {
        console.log("FILL ALL FIELDS")
        this.spinner = false;
    }
  }

}
