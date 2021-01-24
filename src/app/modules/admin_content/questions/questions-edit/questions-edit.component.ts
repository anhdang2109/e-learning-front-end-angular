import {Component, Inject, OnInit} from '@angular/core';
import {Question} from '../questions.model';
import {QuestionAnswer} from '../../questions-answer/questions-answer.model';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {QuestionService} from '../question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../questions-create/questions-create.component';
import {Category} from '../../category/category.model';
import {CategoryService} from '../../category/category.service';


@Component({
  selector: 'app-dialog-edit-question-answer',
  templateUrl: 'dialog-edit-question-answer.html',
})
export class DialogEditQuestionAnswerComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditQuestionAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-dialog-edit-question-input',
  templateUrl: 'dialog-edit-question-input.html',
})
export class DialogEditQuestionInputComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditQuestionInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-questions-edit',
  templateUrl: './questions-edit.component.html',
  styleUrls: ['./questions-edit.component.css']
})
export class QuestionsEditComponent implements OnInit {
  private id: number;
  type: string;
  categories: Category[] = [];
// @ts-ignore
  questionSingleChoice: Question = {
    code: '',
    type: 'single-choice',
    level: 'medium',
    content: '',
    explanation: '',
    category: null
  };
  questionMultipleChoice: Question = {
    code: '',
    type: 'multiple-choice',
    level: 'medium',
    content: '',
    explanation: '',
    category: null
  };
  questionTrueFalse: Question = {
    code: '',
    type: 'true-false',
    level: 'medium',
    content: '',
    explanation: '',
    category: null
  };
  questionInput: Question = {
    code: '',
    type: 'input',
    level: 'medium',
    content: '',
    explanation: '',
    category: null
  };

  answerAMultipleChoice: QuestionAnswer = {code: 'a', content: '', isCorrect: false};
  answerBMultipleChoice: QuestionAnswer = {code: 'b', content: '', isCorrect: false};
  answerCMultipleChoice: QuestionAnswer = {code: 'c', content: '', isCorrect: false};
  answerDMultipleChoice: QuestionAnswer = {code: 'd', content: '', isCorrect: false};
  answersMultipleChoice: QuestionAnswer[] = [];

  answerASingleChoice: QuestionAnswer = {code: 'a', content: '', isCorrect: false};
  answerBSingleChoice: QuestionAnswer = {code: 'b', content: '', isCorrect: false};
  answerCSingleChoice: QuestionAnswer = {code: 'c', content: '', isCorrect: false};
  answerDSingleChoice: QuestionAnswer = {code: 'd', content: '', isCorrect: false};
  answersSingleChoice: QuestionAnswer[];

  answerATrueFalse: QuestionAnswer = {code: '', content: '', isCorrect: false};
  answerBTrueFalse: QuestionAnswer = {code: '', content: '', isCorrect: false};
  answersTrueFalse: QuestionAnswer[] = [];

  answersInput: QuestionAnswer[] = [];
  answerAInput: QuestionAnswer = {code: '#', content: '', isCorrect: true};

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private categoryService: CategoryService,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.idQuestion;
      console.log(this.id);

      this.questionService.findById(this.id).toPromise().then(value => {
        console.log(value);
        this.type = value.type;
        console.log(this.type);
        if (this.type === 'single-choice') {
          this.questionSingleChoice = value;
          console.log(this.questionSingleChoice);
          this.answerASingleChoice = value.questionAnswers[0];
          this.answerBSingleChoice = value.questionAnswers[1];
          this.answerCSingleChoice = value.questionAnswers[2];
          this.answerDSingleChoice = value.questionAnswers[3];
          this.answersSingleChoice = [
            this.answerASingleChoice,
            this.answerBSingleChoice,
            this.answerCSingleChoice,
            this.answerDSingleChoice,
          ];
        }
        if (this.type === 'multiple-choice') {
          this.questionMultipleChoice = value;
          this.answerAMultipleChoice = value.questionAnswers[0];
          this.answerBMultipleChoice = value.questionAnswers[1];
          this.answerCMultipleChoice = value.questionAnswers[2];
          this.answerDMultipleChoice = value.questionAnswers[3];
          this.answersMultipleChoice = [
            this.answerAMultipleChoice,
            this.answerBMultipleChoice,
            this.answerCMultipleChoice,
            this.answerDMultipleChoice,
          ];
        }
        if (this.type === 'true-false') {
          this.questionTrueFalse = value;
          this.answerATrueFalse = value.questionAnswers[0];
          this.answerBTrueFalse = value.questionAnswers[1];
          this.answersTrueFalse = [
            this.answerATrueFalse,
            this.answerBTrueFalse,
          ];
        }
        if (this.type === 'input') {
          this.questionInput = value;
          this.answerAInput = value.questionAnswers[0];
          this.answersSingleChoice = [
            this.answerAInput,
          ];
        }
      });
    });
    this.categoryService.getAll().toPromise().then(value => {
      this.categories = value;
      console.log(value);
      console.log(this.categories);
    });
  }

  updateMultipleChoice() {
    if (this.validateAnswers(this.answersMultipleChoice)) {
      this.questionMultipleChoice.questionAnswers = this.answersMultipleChoice;
      console.log(this.questionMultipleChoice);
      this.questionService.update(this.questionMultipleChoice, this.id).subscribe(() => {
        alert('successfully');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Please input at least one true answer');
    }
  }

  openDialogAMultipleChoice(): void {
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
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


  updateSingleChoice() {
    if (this.validateAnswers(this.answersSingleChoice)) {
      this.questionSingleChoice.questionAnswers = this.answersSingleChoice;
      console.log(this.questionSingleChoice);
      this.questionService.update(this.questionSingleChoice, this.id).subscribe(() => {
        alert('successfully');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Please input at least one true answer');
    }
  }

  openDialogASingleChoice(): void {
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.questionSingleChoice.type, content: this.answerASingleChoice.content, isCorrect: this.answerASingleChoice.isCorrect}
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.questionSingleChoice.type, content: this.answerBSingleChoice.content, isCorrect: this.answerBSingleChoice.isCorrect}
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.questionSingleChoice.type, content: this.answerCSingleChoice.content, isCorrect: this.answerCSingleChoice.isCorrect}
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.questionSingleChoice.type, content: this.answerDSingleChoice.content, isCorrect: this.answerDSingleChoice.isCorrect}
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

  updateTrueFalse() {
    if (this.validateAnswers(this.answersTrueFalse)) {
      console.log(this.questionTrueFalse);
      this.questionTrueFalse.questionAnswers = this.answersTrueFalse;
      console.log(this.questionTrueFalse);
      this.questionService.update(this.questionTrueFalse, this.id).subscribe(() => {
        alert('successfully');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Please input at least one true answer');
    }
  }

  openDialogATrueFalse(): void {
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.questionTrueFalse.type, content: this.answerATrueFalse.content, isCorrect: this.answerATrueFalse.isCorrect}
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
    const dialogRef = this.dialog.open(DialogEditQuestionAnswerComponent, {
      width: '500px',
      data: {type: this.questionTrueFalse.type, content: this.answerBTrueFalse.content, isCorrect: this.answerBTrueFalse.isCorrect}
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

  updateInput() {
    this.answersInput.push(this.answerAInput);
    this.questionInput.questionAnswers = this.answersInput;
    console.log(this.questionInput);
    this.questionService.update(this.questionInput, this.id).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/admin/questions']);
    });
  }

  openDialogInput(): void {
    const dialogRef = this.dialog.open(DialogEditQuestionInputComponent, {
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
