import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  closeResult: string;
  myImages = [
    {
    thumbnail : '../../assets/black.jpg',
    image : "Hello",
    message : "Hello"
    },
    {
    thumbnail : '../../assets/black.jpg',
    image : "Hello",
    message : "Hello"
    },
    {
    thumbnail : '../../assets/black.jpg',
    image : "Hello",
    message : "Hello"
    }
  ];

  constructor(private modalService: NgbModal) {

   }




  ngOnInit() {
  }



  open2(content) {
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}





}
