import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  template: `
    <h2>Labs for Applied Angular</h2>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class LabsComponent {}
