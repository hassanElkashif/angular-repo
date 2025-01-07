import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cards = [
    { img: 'imgs/port1.png', alt: 'Portfolio Sample 1' },
    { img: 'imgs/port2.png', alt: 'Portfolio Sample 2' },
    { img: 'imgs/port3.png', alt: 'Portfolio Sample 3' },
    { img: 'imgs/port1.png', alt: 'Portfolio Sample 1' },
    { img: 'imgs/port2.png', alt: 'Portfolio Sample 2' },
    { img: 'imgs/port3.png', alt: 'Portfolio Sample 3' }
  ];

  isBigImageVisible = false;
  bigImageSrc = '';

  showBigImage(imgSrc: string) {
    this.bigImageSrc = imgSrc;
    this.isBigImageVisible = true;
  }

  hideBigImage() {
    this.isBigImageVisible = false;
  }
}
