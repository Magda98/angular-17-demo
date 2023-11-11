import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { PagedResults, People } from '../models';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signals',
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HttpClientModule],
})
export class SignalsComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  conditionalCount = computed(() => {
    if (this.count() !== 0) {
      return `The count is ${this.count()}`;
    } else {
      return 'Nothing to see here!';
    }
  });

  updateCount() {
    this.count.update((value) => value + 1);
  }
  swapiData = toSignal(
    this.httpClient.get<PagedResults<People>>('https://swapi.dev/api/people')
  );

  constructor(private httpClient: HttpClient) {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
}
