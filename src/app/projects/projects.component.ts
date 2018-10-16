import { Component, OnInit, ViewChild } from '@angular/core';
import {ProjectdboxComponent} from '../projectdbox/projectdbox.component'
import {DialogformService} from  '../dialogform.service'
import {MatDialog} from '@angular/material';

import { Subject } from 'rxjs/Subject';
//
// const ELEMENT_DATA = [
//   {
//     position: 0,
//     name: "aS",
//     duration: 1,
//     durationType:'Hours',
//     predecessor: [0],
//     worker: 'adithya',
//     startdate: '11/12/2012',
//     endDate: '12/12/2012',
//     statusPercentage: 56,
//     statusText: 'half',
//     show: true
//
//   },
//   {
//     position: 1,
//     name: "aS",
//     duration: 12,
//     durationType:'Hours',
//     predecessor: [0],
//     worker: 'adithya',
//     startdate: '12/12/2012',
//     endDate: '13/12/2012',
//     statusPercentage: 0,
//     statusText: 'half',
//              show: true
//
//   },
//   {
//     position: 2,
//     name: "aSdaf",
//     duration: 1,
//     durationType:'Hours',
//     predecessor: [1],
//     worker: 'adithya',
//     startdate: '12/12/2012',
//     endDate: '14/12/2012',
//     statusPercentage: 56,
//     statusText: 'half',
//     show: true
//
//   },
//   {
//     position: 3,
//     name: "asafgS",
//     duration: 4,
//     durationType:'days',
//     predecessor: [3],
//     worker: 'adithya',
//     startdate: '14/12/2012',
//     endDate: '20/12/2012',
//     statusPercentage: 56,
//     statusText: 'half',
//     show: false
//
//   }
// ]


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  showCreateProject: boolean = false;

  refresh: Subject<any> = new Subject();

  displayedColumns: string[] = [
    "Sn. No",
     "Name",
       "Duration",
    "Predecessor",
    "Worker",
    "Start Date",
    ' ',
  "Actions"];


localData = []
// dataSource = new MatTableDataSource(this.localData);

rangeValue: { from: Date; to: Date } = {
  from: new Date(),
  to: (new Date() as any)['fp_incr'](10)
};



  constructor(public dialog: MatDialog, private dservice: DialogformService ) { }

  ngOnInit() {

    this.addPhase();

//     this.dataSource.sort = this.sort;
// this.dataSource.paginator = this.paginator;

  }


switchView(): void{
  if(this.showCreateProject== true){
    this.showCreateProject= false

  } else{
    this.showCreateProject = true
  }


}



dropdownSearch =['aparna','adithya','benjamin']

model = {name: '', worker:[], description: '',
type: 'regular',risk:'Medium', observer:[], startDate: ''};


addPhase(){
  this.localData.push(
    {
      position: 90,
      name: '',
      pstartDate: '',
      taskData: []

}
  )
  console.log(this.localData)

}

addTask(i){
  this.localData[i].show= true
  this.localData[i].taskData.push(
    {

          position: 90,
          name: '',
      duration: 1,
      durationType:'Hours',
      predecessor: [0],
      worker: [],
      startdate: '11/12/2012',
      endDate: '12/12/2012',
      statusPercentage: 0,
      statusText: '-'

    }

  )
  console.log(this.localData)


}



onSubmit(){}

toggle(element) {
if(element.show === true)  {
  element.show = false;

}else {
  element.show = true;

}

// CHANGE THE NAME OF THE BUTTON.

}


openProjDialog() {



//  this.dservice.setBs(option);
//  console.log(option);


  const dialogRef = this.dialog.open(ProjectdboxComponent, {

  minWidth: '70%',
  width: 'auto'

});

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.refresh.next()
//    this.displaySelected()
  });
}


CreateProject(): void {

  this.dservice.createProject(this.localData);
}


}
