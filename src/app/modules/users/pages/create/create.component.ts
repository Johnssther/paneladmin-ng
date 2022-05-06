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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formUser = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', [Validators.required, Validators.minLength(10)]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      username: ['', Validators.required],
      password: ['', Validators.maxLength],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formUser.controls);
    this.submitted = true;

    if (this.formUser.valid) {

      this.userService.storeUser(this.formUser.value).subscribe(data => {
        console.log(data);
        this.stored = data.success;
      })

      console.log(this.formUser.value, 'se ve bien!')
    } else {
      console.log("FILL ALL FIELDS")
    }
  }

}
