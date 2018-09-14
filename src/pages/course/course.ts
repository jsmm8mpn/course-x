import { Component } from '@angular/core';
import {
  AlertController,
  NavController
} from 'ionic-angular';
import { CourseDetailPage } from './course-details';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {

  weeks: any = [
    {id: 1, num: 'Week 1', title: 'Test Title', desc: 'Test Desc'},
    {id: 2, num: 'Week 2', title: 'Test Title 2', desc: 'Test Desc 2'}
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  select(id: number) {
    this.navCtrl.push(CourseDetailPage, {
      week: this.weeks[id-1]
    });
  }
}
