import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-markdown',
  standalone: true,
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
  imports: [CommonModule],
})
export class MarkdownComponent implements OnInit {
  html?: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      marked.parse(
        `<h1 align="center">Angular - The modern web developer's platform</h1>
<p align="center">
  <br>
  <em>Angular is a development platform for building mobile and desktop web applications
    <br> using TypeScript/JavaScript and other languages.</em>
  <br>
</p>

<p align="center">
  <a href="https://www.angular.io"><strong>www.angular.io</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/angular/angular/issues">Submit an Issue</a>
  ·
  <a href="https://blog.angular.io/">Blog</a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://circleci.com/gh/angular/workflows/angular/tree/main">
    <img src="https://img.shields.io/circleci/build/github/angular/angular/main.svg?logo=circleci&logoColor=fff&label=CircleCI" alt="CI status" />
  </a>&nbsp;
  <a href="https://www.npmjs.com/@angular/core">
    <img src="https://img.shields.io/npm/v/@angular/core.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Angular on npm" />
  </a>&nbsp;
  <a href="https://discord.gg/angular">
    <img src="https://img.shields.io/discord/463752820026376202.svg?logo=discord&logoColor=fff&label=Discord&color=7389d8" alt="Discord conversation" />
  </a>
</p>

<p align="center">
  <a href="https://app.circleci.com/insights/github/angular/angular/workflows/default_workflow?branch=main">
    <img src="https://dl.circleci.com/insights-snapshot/gh/angular/angular/main/default_workflow/badge.svg" alt="InsightsSnapshot" />
  </a>
</p>

<hr>
`
      )
    );
  }
}
