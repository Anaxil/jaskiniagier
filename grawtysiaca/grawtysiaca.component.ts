import { Component, OnInit } from '@angular/core';
declare var p5: any;

@Component({
  selector: 'app-grawtysiaca',
  templateUrl: './grawtysiaca.component.html',
  styleUrls: ['./grawtysiaca.component.css']
})
export class GrawtysiacaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const s = (p) => {
      let x = 100,
            y = 100;

      p.setup = () => {
        const canvas = p.createCanvas(1500, 500);
        p.background(0);
      };

      p.draw = () => {
        p.background(0);
        if (p.mouseIsPressed) {
          p.fill(0);
        } else {
          p.fill(255);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
      };
    };



    const game = new p5(s, 'p5sketch');
  }

}
