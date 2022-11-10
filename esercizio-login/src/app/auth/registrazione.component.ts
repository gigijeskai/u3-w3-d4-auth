import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <form>
      <div class="mb-3">
        <label for="firstname" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstname" />
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastname" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email </label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styles: [],
})
export class RegistrazioneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
