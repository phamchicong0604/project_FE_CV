import { Component } from '@angular/core';
import { HomeSideNav } from './home-side-bar.constant';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-side-bar',
  templateUrl: './home-side-bar.component.html',
  styleUrls: ['./home-side-bar.component.scss'],
})
export class HomeSideBarComponent {
  dataSideNav: HomeSideNav[] = [
    {
      name: 'Việc Làm',
      children: [
        {
          name: 'Việc làm phù hợp ',
          router_link: '',
          icon:'suitable_job'
        },
        {
          name: 'Việc làm IT ',
          router_link: '',
          icon: 'it_job',
        },
        {
          name: 'Việc làm Senior',
          router_link: 'senior_job',
          icon:'senior_job'
        },
      ],
    },
    { name: 'Hồ sơ & CV', router_link: '' },
    { name: 'Công ty', router_link: '' },
    { name: 'Phát Triển Sự Nghiệp', router_link: '' },
  ];
  active: boolean[] = [];
  
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'suitable_job',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/suitable_job.svg'),
    );
    matIconRegistry.addSvgIcon(
      'it_job',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/it_job.svg'),
    );
    matIconRegistry.addSvgIcon(
      'senior_job',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/senior.svg'),
    );
  }
  
}
