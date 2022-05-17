import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'


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
    private userService: UserService,
  ) {
    this.formUser = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', [Validators.required, Validators.minLength(10)]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      username: ['', Validators.required],
      password: ['', Validators.maxLength],
      password_confirmation: ['', Validators.maxLength],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.spinner = true;
    this.submitted = true;

    if (this.formUser.valid) {
      this.userService.storeUser(this.formUser.value)
        .subscribe(data => {
          this.stored = data.success;
          this.spinner = false;
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Todo ha salido bien 😀',
            showConfirmButton: false,
            timer: 3500
          })
        }, error => {
          this.spinner = false;
        })
    } else {
      Swal.fire({
        // position: 'top-end',
        icon: 'info',
        title: 'Debes llenar todos los campos del formulario 🤔',
        showConfirmButton: false,
        timer: 3500
      })
      this.spinner = false;
    }
  }

}
