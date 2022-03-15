import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "../user.model";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, switchMap} from "rxjs";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userFormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(13)]],
    username: [],
    email: ['', [Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
    phone: []
  });

  user: User = {};

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => params['id'] !== undefined),
      map(params => params['id']),
      switchMap(id => this.userService.getById(id))
    ).subscribe(user => {
      this.user = user;
      this.userFormGroup.patchValue(this.user);
    });
  }

  addUser(): void {
    this.user = this.userFormGroup.value;
    this.userService.save(this.user)
      .subscribe(user => {
        this.user = user;
        this.router.navigate(['users']);
      })
  }
}
