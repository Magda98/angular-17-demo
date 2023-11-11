import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from '../markdown-editor/markdown.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
  imports: [CommonModule, MarkdownComponent],
})
export class DeferrableViewsComponent {}
