import { TutorialService } from './../../services/tutorial.service';
import { Component, OnInit } from '@angular/core';
import Tutorial from 'src/app/models/tutorials';

@Component({
  selector: 'app-add-tutorials',
  templateUrl: './add-tutorials.component.html',
  styleUrls: ['./add-tutorials.component.css']
})
export class AddTutorialsComponent implements OnInit {

  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    })
  }

  newTutorial(): void{
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

}
