import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = '';

  onButtonClick() {
    this.password = this.generatePassword();
    // console.log({
    //   length : this.length,
    //   letters : this.includeLetters, 
    //   numbers : this.includeNumbers, 
    //   symbols : this.includeSymbols
    // });
  }

  generatePassword() {
    const numbers = "124567890";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*-+=?|";

    let validchars = '';
    if(this.includeLetters)
      validchars += letters;
    if(this.includeNumbers)
      validchars += numbers;
    if(this.includeSymbols)
      validchars += symbols;

    let pwd = "";
    let l = validchars.length;
    for(let i=0; i<this.length; i++) {
      const index = Math.floor(Math.random() * l);
      pwd += validchars[index];
    }
    console.log(pwd, validchars);
    return pwd;
  }

  onChangeLength(event : any) {
    const parsedValue = parseInt(event.target.value);

    if(!isNaN(parsedValue))
      this.length = parsedValue;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

}
