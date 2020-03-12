import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'header',
    templateUrl :'./header.html'
})

export class Header{

    constructor(){}

    ngOninit(){
        console.log('header');
    }
}