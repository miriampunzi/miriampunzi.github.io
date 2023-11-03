import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  education = [
    {
      studyTitle: "Human-Computer Interaction and Design",
      university: "Université Paris-Saclay",
      url: "https://www.universite-paris-saclay.fr/en/education/master/computer-science/m2-human-computer-interaction",
      years: "September 2021",
      graduationPhoto: "assets/images/graduation-photos/ups.jpg",
    },
    {
      studyTitle: "Human-Computer Interaction and Design",
      university: "Universidad Politécnica de Madrid",
      url: "https://www.fi.upm.es/?pagina=2235",
      years: "June 2020",
      graduationPhoto: "assets/images/graduation-photos/upm.jpg",
    },
    {
      studyTitle: "Bachelor Degree in Computer Science",
      university: "Università degli studi di Trento",
      url: "https://offertaformativa.unitn.it/it/l/informatica",
      years: "June 2019",
      graduationPhoto: "assets/images/graduation-photos/unitn.jpg",
    },
    {
      studyTitle: "High School diploma in Computer Science",
      university: "ITIS E. Fermi di Mantova",
      url: "https://www.fermimn.edu.it/",
      years: "June 2016",
      graduationPhoto: "assets/images/graduation-photos/itis.jpg",
    },
  ]
}
