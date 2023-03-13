import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: any;
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
id:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<ModelComponent>,) {
    debugger
    this.id = this.data.id
  }
  ngOnInit() {

  }
  onNoClick(): void {
    debugger
    this.dialogRef.close("close");
  }
  onNoClick1(): void {
    debugger
    this.dialogRef.close("delete");
  }
}
