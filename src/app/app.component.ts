import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeatures=[];
  selectedTech=[];
  selectedContent=[];

  pgFeatures=["IOT","AI","Blockchain"];
  favFeatures=["finance","human resources"];
  stateFeatures=["greenary","kochi","trivandram"];
  cityFeatures=["tamil","chennai","vellore"];

  selectMca(){
    this.selectedTech=this.pgFeatures;
    //console.log("ap seleted");
  }
    selectMba(){
      this.selectedTech=this.favFeatures;
      //console.log("ts seleted");

  }
  selectState(){
    this.selectedFeatures=this.stateFeatures;
}
selectCity(){
  this.selectedFeatures=this.cityFeatures;
}
submitForm(ref){
  let obj=ref.value;
  console.log(obj);

this.selectedContent.push(obj)
}
}