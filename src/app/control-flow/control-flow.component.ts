import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PagedResults, People } from '../models';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, HttpClientModule, CommonModule],
})
export class ControlFlowComponent {
  toggleText = signal(false);
  toggleElseBlockText = signal(false);

  employees = signal([
    {
      id: '246A0DEA-4423-EAE7-BEDA-AA0B36F6CA86',
      name: 'Evan Hull',
      country: 'United States',
      experience: 6,
    },
    {
      id: '75A5C838-C697-98E7-8B99-AC4B8E14BEA0',
      name: 'Rana Castaneda',
      country: 'Peru',
      experience: 4,
    },
    {
      id: 'EF9DBD86-0727-8776-5676-C2B775BD30D5',
      name: 'Gail David',
      country: 'Sweden',
      experience: 9,
    },
    {
      id: '6A2A1489-6B4A-DD17-DEB0-CE499569E5AB',
      name: 'Plato Deleon',
      country: 'Spain',
      experience: 8,
    },
    {
      id: 'D31C4985-E896-C978-8985-D75A90E81BCA',
      name: 'Cole Hickman',
      country: 'India',
      experience: '0',
    },
  ]);

  removeEmplyee(id: string) {
    this.employees.update((employees) =>
      employees.filter((employee) => employee.id !== id)
    );
  }

  swapiData = this.httpClient.get<PagedResults<People>>(
    'https://swapi.dev/api/people'
  );
  constructor(private httpClient: HttpClient) {}
}
