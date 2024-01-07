import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {

  constructor() { }

  projects = [
    {
      name: "bookflix",
      about: "Bookflix is a simple system in which you can find books you’re looking for, of any genre.",
      what: "Group project",
      where: "Universidad Politécnica de Madrid",
      url: "https://www.fi.upm.es/?pagina=2235",
      duration: "September 2019 - June 2020"
    },

    {
      name: "pearly",
      about: "Pearly is an online platform where people can play tabletop games and game creators can test their new games for design and feasibility. Through the system, they can search for other players to play with and explore new games. Game creators can create new games from scratch or modify already existing ones. For example, a user can create his own version of an existing game, changing some rules or modifying the design of cards. In the system are included some statistics and surveys (for example: how many people played a particular game, how long the match was, the average time taken per turn). These statistics are useful for game creators to test the game, but also for players in choosing a game to play.",
      what: "Group project",
      where: "Universidad Politécnica de Madrid",
      url: "https://www.fi.upm.es/?pagina=2235",
      duration: "February 2020 - June 2020"
    },

    {
      name: "insignum",
      about: "InSignum is an interactive system to assist deaf people in their daily life at home. It consists of a smartwatch application and connected directional lights around the house, warning the user of the nature and the location of sounds at home. When something noisy is happening in the house, the smartwatch starts to vibrate, and the app displays what is happening. At the same time, the directional lights turn on guiding the user to the correct location of the sound. The color of the lights indicates the seriousness of the cause of the noise. The combination of the smartwatch app and the directional lights is to don't force users to always have the smartwatch and to have a backup system in case one of the two is not working properly. We tested the system by building a doll-house prototype with Arduino and emulating a smartwatch with Android Studio.",
      what: "Group project",
      where: "Université Paris-Saclay",
      url: "https://www.universite-paris-saclay.fr/en/education/master/computer-science/m2-human-computer-interaction",
      duration: "September 2020 - October 2020",
      video: "https://www.youtube.com/embed/iKftsyKDiDo?rel=0"
    },

    {
      name: "popupbreak",
      about: "PopUpBreak is a well-being desktop app with an emotional Virtual Coach (VC) that helps users in maintaining good practices for sedentary workers, as well as teaching new ones and keeping track of them. The VC can be customized by the user and, through a pop-up notification on the computer screen, it reminds them to do a pause, eye breaks, drink water, and others. Moreover, the application gives also some recommendations (e.g. how often a person should relax the eyes while working in front of a PC) and summarizes the activities done day by day. We believe that this system encourages people to work more healthily, avoiding the main consequences of a sedentary lifestyle. We use virtual coaching to reinforce users' behaviour, leading to acquiring good habits. ",
      what: "Group project",
      where: "Université Paris-Saclay",
      url: "https://www.universite-paris-saclay.fr/en/education/master/computer-science/m2-human-computer-interaction",
      duration: "November 2020 - December 2020"
    },

    {
      name: "situatedmemories",
      about: "In this project, we created a prototype of an AR-based application that allows people to attach memories to physical objects. The prototype recognizes 3D objects and shows all the attached digital media (like old photos, videos, or annotations) as floating bubbles around the item. Then, the user can retrieve the memories or save new ones. We aim to amplify users' nostalgic feelings when they look at their past memories situated in their special object, as well as make them aware of the story of that object. ",
      what: "Group project",
      where: "Université Paris-Saclay",
      url: "https://www.universite-paris-saclay.fr/en/education/master/computer-science/m2-human-computer-interaction",
      duration: "January 2021 - February 2021",
      video: "https://www.youtube.com/embed/DLVnXWCYp-4?rel=0",
    },

    {
      name: "nonverbalbehaviour",
      about: "This research work investigates the user experience of an alternative method to teach nonverbal behavior to Embodied Conversational Agents (ECAs) in immersive environments. We overcome the limitations of the existing approaches proposing a VR game in which the player takes an active role in improving the learning models of the agents. The study explores how a game interaction in an immersive environment can improve the user experience in performing this interactive task, sharing the same space with the learning agents. ",
      what: "Master thesis",
      where: "LISN Lab @ Université Paris-Saclay",
      url: "https://www.lisn.upsaclay.fr/",
      duration: "April 2021 - August 2021",
      publicationUrl: "https://dl.acm.org/doi/10.1145/3490100.3516475",
      publication: "DOI: 10.1145/3490100.3516475",
    },

    {
      name: "concertrandomization",
      about: "This Unity application automatically generates thousands of images of random concert scenarios, with the corresponding labeled version of the image according to the category of the elements. The aim of the program is to generate enough data to train a neural network for semantic segmentation applied to concert photos.",
      what: "Work as Research Assistant",
      where: "EventLab",
      url: "https://www.event-lab.org/",
      duration: "April 2022 - September 2022"
    }
  ]
}
