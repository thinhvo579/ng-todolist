import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  arrList: any[] = [{
    id:1,
    text:'monday',
    check:true,
    tick: false
  },
  {
    id:2,
    text:'tuesday',
    check:true,
    tick: false
  },
  {
    id:3,
    text:'wednesday',
    check:true,
    tick: false
  }
];
  newText = "";
  disabledBox = true;
  checkFlag = false;
  show = "yes";
  editTextString: string = "";
  newId = 1;
  
  constructor() { }
  addText(){
    if(this.arrList.length == 0){
      this.newId;
    }
    else{
      this.newId = this.arrList[this.arrList.length -1].id +1;
    }
    
    this.arrList.push({
      id:  this.newId,
      text: this.newText,
      check:true,
      tick: false
    })
    this.newText="";
    console.log(this.arrList);
  }
  editText(id: number){
      this.arrList.filter((data, i) => {
        if(this.arrList[i].id === id) {
          this.arrList[i].check = false;
          //console.log(this.arrList);
          
        }
      });
  }
  delText(id: number){

    //console.log(id);
    const index = this.arrList.findIndex(arr=>arr.id === id);
    this.arrList.splice(index,1);
  //  console.log(this.arrList);
  }
 
  saveEdit(id: any){
      const inputValue = (<HTMLInputElement>document.getElementById('input-' + id)).value;
      this.arrList.filter((data, i) => {
        // console.log('111111111111', data, i);
        // console.log('11111111111111 222', this.arrList[i].id, id);
        if(this.arrList[i].id === id) {
          this.arrList[i].text = inputValue;
          this.arrList[i].check = true;
          
          console.log(this.arrList);
        }
      });
  }
  // cancelEdit(id:number){
    
    
    
  // }
  ngOnInit(): void {
  }
  
}
