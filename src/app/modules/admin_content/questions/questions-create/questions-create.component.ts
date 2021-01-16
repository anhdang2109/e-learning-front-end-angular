import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Question} from '../questions.model';
import {QuestionService} from '../question.service';
import {QuestionAnswer} from '../../questions-answer/questions-answer.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  type: string;
  content: string;
  isCorrect: boolean;
}
@Component({
  selector: 'app-dialog-question-answer',
  templateUrl: 'dialog-question-answer.html',
})
export class DialogQuestionAnswerComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogQuestionAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {

  // @ts-ignore
  question: Question = {
    code: '',
    type: '',
    level: '',
    content: '',
    explanation: ''
  };
  answers: QuestionAnswer[] = [];
  answerA: QuestionAnswer = { content: '', isCorrect: false};
  answerB: QuestionAnswer = { content: '', isCorrect: false};
  answerC: QuestionAnswer = { content: '', isCorrect: false};
  answerD: QuestionAnswer = { content: '', isCorrect: false};

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private productService: QuestionService,
              private router: Router,
              public dialog: MatDialog) {
    console.log(this.question);
  }

  ngOnInit(): void {
    console.log(this.question);
  }

  // tslint:disable-next-line:typedef
  create() {
    console.log(this.question);
    this.answers.push(this.answerA);
    this.answers.push(this.answerB);
    this.answers.push(this.answerC);
    this.answers.push(this.answerD);
    console.log(this.question);
    this.question.questionAnswers = this.answers;
    console.log(this.question);
    this.productService.save(this.question).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/admin/questions']);
    });
  }

  openDialogA(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.question.type, content: this.answerA.content, isCorrect: this.answerA.isCorrect}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerA.content = result.content;
      this.answerA.isCorrect = result.isCorrect;
    });
  }

  openDialogB(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.question.type, content: this.answerB.content, isCorrect: this.answerB.isCorrect}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerB.content = result.content;
      this.answerB.isCorrect = result.isCorrect;
    });
  }

  openDialogC(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.question.type, content: this.answerC.content, isCorrect: this.answerC.isCorrect}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerC.content = result.content;
      this.answerC.isCorrect = result.isCorrect;
    });
  }

  openDialogD(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.question.type, content: this.answerD.content, isCorrect: this.answerD.isCorrect}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerD.content = result.content;
      this.answerD.isCorrect = result.isCorrect;
    });
  }

}
