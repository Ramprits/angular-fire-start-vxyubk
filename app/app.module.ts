import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppComponent } from "./app.component";

const config = {
  apiKey: "AIzaSyC4r4NF85R4si7fXLWXzn-mavr4RqPGRQY",
  authDomain: "telegrame-clone-e8746.firebaseapp.com",
  databaseURL: "https://telegrame-clone-e8746.firebaseio.com",
  projectId: "telegrame-clone-e8746",
  storageBucket: "telegrame-clone-e8746.appspot.com",
  messagingSenderId: "956126560383",
  appId: "1:956126560383:web:70b414febc71ef4c5ebf4a",
  measurementId: "G-0KNR1W8MHD"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
