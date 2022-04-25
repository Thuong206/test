import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export interface PeriodicElement {
  name: any;
  position: number;
  date: string;
  Update: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', date: '20-4-2022', Update: 'H' },
//   { position: 2, name: 'Helium', date: '20-4-2022', Update: 'He' },
//   { position: 3, name: 'Lithium', date: '20-4-2022', Update: 'Li' },
// ];
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  public date: Date = new Date()

  // displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-date', 'demo-Update'];
  // dataSource = ELEMENT_DATA;

  public today: string = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate()
  public time: string = this.date.getHours() + 'h' + ":" + this.date.getMinutes() + 'm'
  public isTrue: boolean = true
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }
  public arrTodo: any[] = [
    { stt: 1, name: 'Hydrogen', date: '2020-02-20' },
    { stt: 2, name: 'Helium', date: '2020-02-20' },
    { stt: 3, name: 'Lithium', date: '2020-02-20' },
  ];
  openDialog(i: number, name: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: { name: name, index: i, arr: this.arrTodo },
    });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
  handleEdit(i: number): void {
    console.log(this.arrTodo[i].name)
    const name = this.arrTodo[i].name
    this.openDialog(i, name)
    console.log(i)
  }

  handleAdd(ipValue: any): void {
    this.isTrue = false
    setTimeout(() => {
      this.isTrue = true
      ipValue.value != '' ? this.arrTodo.push({ name: ipValue.value, date: ` ${this.time} ${this.today} ` }) : ""
    }, 1200)
    ipValue.value = ''
    ipValue.focus()

  }

  handleDelete(i: number): void {
    console.log(i)
    this.isTrue = false
    setTimeout(() => {
      this.isTrue = true
      setTimeout(() => {
        this.arrTodo.splice(i, 1)
      }, 300)
    }, 1200)
    // this.arrTodo = this.arrTodo.filter((item, index) => { index != i })

  }


}
