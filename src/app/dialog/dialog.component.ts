import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  index: number;
  arr: [];
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public date: any

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  public today!: string
  ngOnInit(): void {
    this.today = this.data.arr[this.data.index]['date']
    console.log(this.today)
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data.arr)
    // console.log(this.data.index)
  }
  handleSave(ipValue: any, ipDate: any): void {
    let obj = this.data.arr[this.data.index] as any
    console.log(delete obj['name'])
    obj['name'] = ipValue.value
    ipValue.focus()
    ipValue.value = ''

    obj['date'] = ipDate
    this.dialogRef.close()
    // console.log(obj.email)
    // this.data.arr[this.data.index]['date'] = ipDate

  }
}
