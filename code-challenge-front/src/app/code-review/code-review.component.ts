import { Component } from '@angular/core';

@Component({
  selector: 'app-code-review',
  templateUrl: './code-review.component.html',
  styleUrls: ['./code-review.component.scss'],
})
export class CodeReviewComponent {
  codeReviewFlowSteps: Array<string> = [
    'Developers use branches to implement features and bug fixes.',
    'Oncebranches are ready for testing, developers request code reviews.',
    'Other members of your team review code from the branches.',
    'A list of issues is compiled for each review.',
    'Developers commit additional changes to the branches to fix discovered issues.',
    'Code review of the branch gets approved.',
    'Branch is merged into master and shipped to production.',
  ];

  codeReviewReasons: Array<string> = [
    'Increasing Code Quality',
    'Learning',
    'Knowledge Exchange',
  ];
  constructor() {}
}
