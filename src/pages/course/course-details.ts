import { Component } from '@angular/core';
import {
  AlertController,
  NavController,
  NavParams
} from 'ionic-angular';

@Component({
  selector: 'page-course-details',
  templateUrl: 'course-details.html'
})
export class CourseDetailPage {
  private week: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.week = this.navParams.get('week');
  }
}
