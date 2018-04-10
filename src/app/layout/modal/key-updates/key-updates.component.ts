import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.css']
})
export class KeyUpdatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newUpdate() {
    var div;
    var i=0;
    if(document.getElementById('updates')!=null)
        div= document.getElementById('updates');
    else{
      document.getElementById('keyUpdate').innerHTML += "<div id='updates'></div>";
          div = document.getElementById('updates');
    }
       var y = document.createElement("textarea");
       y.setAttribute("id", "text"+i);
       y.setAttribute("rows","2");
       y.setAttribute("class", "form-control");
       y.setAttribute("onClick", "setId(this.id)");
       div.appendChild(y);
          i=i+1;
  }



}



function newUpdate() {
  var div;
  if(document.getElementById('updates')!=null)
      div= document.getElementById('updates');
  else{
    document.getElementById('keyUpdate').innerHTML += "<div id='updates'></div>";
        div = document.getElementById('updates');
  }
     var y = document.createElement("textarea");
     y.setAttribute("id", "text"+i);
     y.setAttribute("rows","2");
     y.setAttribute("class", "form-control");
     y.setAttribute("onClick", "setId(this.id)");
     div.appendChild(y);
        i=i+1;
}
