
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export interface Gallery { name: string; url: string; }

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styles: [],
})
export class JumbotronComponent implements OnInit {

  private itemsCollection: AngularFireList<Gallery>;
  items: Observable<Gallery[]>;

  constructor(private afs: AngularFireDatabase) { 
    this.itemsCollection = afs.list<Gallery>('gallery');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
  }

}
