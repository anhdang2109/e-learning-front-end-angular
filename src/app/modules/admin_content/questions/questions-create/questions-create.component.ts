import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
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
  templateUrl: 'dialog-create-question-answer.html',
})
export class DialogQuestionAnswerComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogQuestionAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-dialog-question-input',
  templateUrl: 'dialog-create-question-input.html',
})
export class DialogQuestionInputComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogQuestionAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

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
  questionSingleChoice: Question = {
    code: Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 3),
    type: 'single-choice',
    level: 'medium',
    content: '',
    explanation: '',
  };
  questionMultipleChoice: Question = {
    // @ts-ignore
    code: Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 3),
    type: 'multiple-choice',
    level: 'medium',
    content: '',
    explanation: ''
  };
  questionTrueFalse: Question = {
    // @ts-ignore
    code: Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 3),
    type: 'true-false',
    level: 'medium',
    content: '',
    explanation: ''
  };
  questionInput: Question = {
    // @ts-ignore
    // code: Math.floor((Math.random() * 100000) + 1),
    code: Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 3),
    type: 'input',
    level: 'medium',
    content: '',
    explanation: ''
  };

  answerAMultipleChoice: QuestionAnswer = {code: 'a', content: '', isCorrect: false};
  answerBMultipleChoice: QuestionAnswer = {code: 'b', content: '', isCorrect: false};
  answerCMultipleChoice: QuestionAnswer = {code: 'c', content: '', isCorrect: false};
  answerDMultipleChoice: QuestionAnswer = {code: 'd', content: '', isCorrect: false};
  answersMultipleChoice: QuestionAnswer[] = [
    this.answerAMultipleChoice,
    this.answerBMultipleChoice,
    this.answerCMultipleChoice,
    this.answerDMultipleChoice,
  ];

  answerASingleChoice: QuestionAnswer = {code: 'a', content: '', isCorrect: false};
  answerBSingleChoice: QuestionAnswer = {code: 'b', content: '', isCorrect: false};
  answerCSingleChoice: QuestionAnswer = {code: 'c', content: '', isCorrect: false};
  answerDSingleChoice: QuestionAnswer = {code: 'd', content: '', isCorrect: false};
  answersSingleChoice: QuestionAnswer[] = [
    this.answerASingleChoice,
    this.answerBSingleChoice,
    this.answerCSingleChoice,
    this.answerDSingleChoice,
  ];

  answerATrueFalse: QuestionAnswer = {code: '', content: 'True', isCorrect: false};
  answerBTrueFalse: QuestionAnswer = {code: '', content: 'False', isCorrect: false};
  answersTrueFalse: QuestionAnswer[] = [
    this.answerATrueFalse,
    this.answerBTrueFalse,
  ];

  answersInput: QuestionAnswer[] = [];
  answerAInput: QuestionAnswer = {code: '', content: '', isCorrect: true};

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private productService: QuestionService,
              private router: Router,
              public dialog: MatDialog) {
    console.log(this.questionSingleChoice);
    console.log(this.questionMultipleChoice);
    console.log(this.questionTrueFalse);
    console.log(this.questionInput);
  }

  ngOnInit(): void {
    console.log(this.questionSingleChoice);
    console.log(this.questionMultipleChoice);
    console.log(this.questionTrueFalse);
    console.log(this.questionInput);
  }

  // tslint:disable-next-line:typedef
  createMultipleChoice() {
    if (this.validateAnswers(this.answersMultipleChoice)) {
      console.log(this.questionMultipleChoice);
      this.questionMultipleChoice.questionAnswers = this.answersMultipleChoice;
      console.log(this.questionMultipleChoice);
      this.productService.save(this.questionMultipleChoice).subscribe(() => {
        alert('Thành công');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Vui lòng nhập ít nhất một câu trả lời đúng');
    }
  }

  openDialogAMultipleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionMultipleChoice.type,
        content: this.answerAMultipleChoice.content,
        isCorrect: this.answerAMultipleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerAMultipleChoice.content = result.content;
      this.answerAMultipleChoice.isCorrect = result.isCorrect;
    });
  }

  openDialogBMultipleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionMultipleChoice.type,
        content: this.answerBMultipleChoice.content,
        isCorrect: this.answerBMultipleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerBMultipleChoice.content = result.content;
      this.answerBMultipleChoice.isCorrect = result.isCorrect;
    });
  }

  openDialogCMultipleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionMultipleChoice.type,
        content: this.answerCMultipleChoice.content,
        isCorrect: this.answerCMultipleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerCMultipleChoice.content = result.content;
      this.answerCMultipleChoice.isCorrect = result.isCorrect;
    });
  }

  openDialogDMultipleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionMultipleChoice.type,
        content: this.answerDMultipleChoice.content,
        isCorrect: this.answerDMultipleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerDMultipleChoice.content = result.content;
      this.answerDMultipleChoice.isCorrect = result.isCorrect;
    });
  }


  createSingleChoice() {
    if (this.validateAnswers(this.answersSingleChoice)) {
      this.questionSingleChoice.questionAnswers = this.answersSingleChoice;
      console.log(this.questionSingleChoice);
      this.productService.save(this.questionSingleChoice).subscribe(() => {
        alert('Thành công');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Vui lòng nhập ít nhất một câu trả lời đúng');
    }
  }

  openDialogASingleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionSingleChoice.type,
        content: this.answerASingleChoice.content,
        isCorrect: this.answerASingleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerASingleChoice.content = result.content;
      if (result.isCorrect === true) {
        this.answerASingleChoice.isCorrect = result.isCorrect;
        this.answerBSingleChoice.isCorrect = false;
        this.answerCSingleChoice.isCorrect = false;
        this.answerDSingleChoice.isCorrect = false;
      } else {
        this.answerASingleChoice.isCorrect = result.isCorrect;
      }
    });
  }

  openDialogBSingleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionSingleChoice.type,
        content: this.answerBSingleChoice.content,
        isCorrect: this.answerBSingleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerBSingleChoice.content = result.content;
      if (result.isCorrect === true) {
        this.answerBSingleChoice.isCorrect = result.isCorrect;
        this.answerASingleChoice.isCorrect = false;
        this.answerCSingleChoice.isCorrect = false;
        this.answerDSingleChoice.isCorrect = false;
      } else {
        this.answerBSingleChoice.isCorrect = result.isCorrect;
      }
    });
  }

  openDialogCSingleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionSingleChoice.type,
        content: this.answerCSingleChoice.content,
        isCorrect: this.answerCSingleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerCSingleChoice.content = result.content;
      if (result.isCorrect === true) {
        this.answerCSingleChoice.isCorrect = result.isCorrect;
        this.answerASingleChoice.isCorrect = false;
        this.answerBSingleChoice.isCorrect = false;
        this.answerDSingleChoice.isCorrect = false;
      } else {
        this.answerCSingleChoice.isCorrect = result.isCorrect;
      }
    });
  }

  openDialogDSingleChoice(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionSingleChoice.type,
        content: this.answerDSingleChoice.content,
        isCorrect: this.answerDSingleChoice.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerDSingleChoice.content = result.content;
      if (result.isCorrect === true) {
        this.answerDSingleChoice.isCorrect = result.isCorrect;
        this.answerASingleChoice.isCorrect = false;
        this.answerCSingleChoice.isCorrect = false;
        this.answerBSingleChoice.isCorrect = false;
      } else {
        this.answerDSingleChoice.isCorrect = result.isCorrect;
      }
    });
  }

  createTrueFalse() {
    if (this.validateAnswers(this.answersTrueFalse)) {
      console.log(this.questionTrueFalse);
      this.questionTrueFalse.questionAnswers = this.answersTrueFalse;
      console.log(this.questionTrueFalse);
      this.productService.save(this.questionTrueFalse).subscribe(() => {
        alert('Thành công');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Vui lòng nhập ít nhất một câu trả lời đúng');
    }
  }

  openDialogATrueFalse(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionTrueFalse.type,
        content: this.answerATrueFalse.content,
        isCorrect: this.answerATrueFalse.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerATrueFalse.content = result.content;
      if (result.isCorrect === true) {
        this.answerATrueFalse.isCorrect = result.isCorrect;
        this.answerBTrueFalse.isCorrect = false;
      } else {
        this.answerATrueFalse.isCorrect = result.isCorrect;
      }
    });
  }

  openDialogBTrueFalse(): void {
    const dialogRef = this.dialog.open(DialogQuestionAnswerComponent, {
      width: '500px',
      data: {
        type: this.questionTrueFalse.type,
        content: this.answerBTrueFalse.content,
        isCorrect: this.answerBTrueFalse.isCorrect
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerBTrueFalse.content = result.content;
      if (result.isCorrect === true) {
        this.answerBTrueFalse.isCorrect = result.isCorrect;
        this.answerATrueFalse.isCorrect = false;
      } else {
        this.answerBTrueFalse.isCorrect = result.isCorrect;
      }
    });
  }

  createInput() {
    this.answersInput.push(this.answerAInput);
    this.questionInput.questionAnswers = this.answersInput;
    console.log(this.questionInput);
    this.productService.save(this.questionInput).subscribe(() => {
      alert('Thành công');
      this.router.navigate(['/admin/questions']);
    });
  }

  openDialogInput(): void {
    const dialogRef = this.dialog.open(DialogQuestionInputComponent, {
      width: '500px',
      data: {type: this.questionInput.type, content: this.answerAInput.content, isCorrect: this.answerAInput.isCorrect}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.answerAInput.content = result.content;
      this.answerAInput.isCorrect = result.isCorrect;
    });
  }

  validateAnswers(answers: QuestionAnswer[]): boolean {
    let count = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].isCorrect === false) {
        console.log('answer i = ' + answers[i].isCorrect);
        count += 1;
      }
    }
    console.log('count value = ' + count);
    return count !== answers.length;
  }
}
