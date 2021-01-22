import {Component, OnInit} from '@angular/core';
import {Attempt} from '../../attempt/attempt.model';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AttemptService} from "../../attempt/attempt.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  attempts: Attempt[];
  user: User;
  role: string;
  users: User[];
  currentUsername: string;
  p: number = 1;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private attemptService: AttemptService) {
  }

  async ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.user = await this.userService.getUserById(id).toPromise();
    this.attemptService.getAll().subscribe(data => {
      this.attempts = data;
      console.log(data);
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }

  delete(id: any) {
    if (confirm('Bạn đã chắc chắn?')) {
      this.userService.delete(id).subscribe(value => {
        console.log('Delete', value);
        this.router.navigate(['/admin/users']);
      });
    }
  }

}
