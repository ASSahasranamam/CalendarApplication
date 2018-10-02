import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import { FormControl, Validators} from '@angular/forms'
import * as moment from 'moment'


import{DialogformService} from '../dialogform.service'

@Component({
  selector: 'app-buy-sell-dialog',
  templateUrl: './buy-sell-dialog.component.html',
  styleUrls: ['./buy-sell-dialog.component.css']
})
export class BuySellDialogComponent implements OnInit {

  option : string;
  item: string ='';
  quantity: number=1;
  description: string=''

  quantityCont = new FormControl("", [Validators.min(1), Validators.required])
  reqControl = new FormControl("", [Validators.required])

  constructor(
    private dservice: DialogformService

  ) {   }


  ngOnInit() {
    this.option = this.dservice.getBs()

  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;


}
