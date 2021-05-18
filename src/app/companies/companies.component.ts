import {Component, OnInit} from '@angular/core';
import {CompanyI} from '../../interfaces/company.interface';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  public companies: CompanyI[] = [
    {
      "id": 0,
      "balance": "5528413.85",
      "name": "ATOMICA",
      "phone": "+1 (904) 402-2296",
      "description": "Proident eu est cillum ad do dolor magna ea nostrud pariatur minim non voluptate reprehenderit. Mollit enim aute sint pariatur. Esse do cupidatat culpa adipisicing dolor occaecat laborum velit do et non eu mollit aliqua. Est nisi veniam labore dolor eu anim laborum ex qui deserunt sit elit eu. Sunt dolor esse eiusmod eiusmod reprehenderit tempor ea amet consequat mollit sit amet ea minim.",
      "registered": "Wed Jul 27 2016 15:47:43 GMT+0000"
    },
    {
      "id": 1,
      "balance": "4934487.48",
      "name": "CONCILITY",
      "phone": "+1 (953) 547-2240",
      "description": "Ea tempor anim consectetur voluptate ea esse. In cillum nostrud ut et reprehenderit duis consectetur nisi incididunt enim esse sit. Amet officia minim ex laboris cupidatat Lorem incididunt cillum Lorem ad officia.",
      "registered": "Fri Nov 03 2017 10:26:08 GMT+0000"
    },
    {
      "id": 2,
      "balance": "6713580.15",
      "name": "QIMONK",
      "phone": "+1 (978) 491-3492",
      "description": "Elit ullamco sint eu anim irure ullamco labore. Sit consequat sunt consequat cupidatat reprehenderit sunt laborum. Voluptate esse cillum magna dolore.",
      "registered": "Wed Mar 13 2013 14:24:22 GMT+0000"
    },
    {
      "id": 3,
      "balance": "6486181.8",
      "name": "PROGENEX",
      "phone": "+1 (933) 583-2637",
      "description": "Exercitation et irure mollit proident cillum sint excepteur deserunt deserunt et cupidatat elit exercitation. Voluptate ex incididunt proident occaecat eu officia qui dolore esse anim in id occaecat. Exercitation deserunt eu irure nisi occaecat minim nostrud duis aute amet esse amet mollit consequat.",
      "registered": "Tue Mar 22 2011 01:30:38 GMT+0000"
    },
    {
      "id": 4,
      "balance": "4997581.71",
      "name": "TERRAGEN",
      "phone": "+1 (838) 436-2918",
      "description": "Esse velit minim reprehenderit velit aliqua labore eu aliqua cillum ipsum do aliquip. Tempor sunt qui elit reprehenderit quis magna tempor id duis ut. Aute tempor esse duis consectetur consequat adipisicing fugiat reprehenderit amet ex consequat magna quis. Culpa nostrud nulla sunt ad duis officia amet reprehenderit ea. Ad mollit labore sint id nulla ea veniam. Fugiat tempor nostrud veniam occaecat sit duis.",
      "registered": "Mon Feb 01 2021 20:41:58 GMT+0000"
    },
    {
      "id": 5,
      "balance": "8341754.33",
      "name": "ECLIPTO",
      "phone": "+1 (916) 552-2034",
      "description": "Duis quis cupidatat culpa enim ad. Aliqua exercitation laborum est amet nulla. Ad ut officia sint nisi duis sint fugiat nisi. Ea consequat sunt tempor dolor excepteur duis amet culpa veniam ut incididunt. Id veniam magna ex dolore commodo.",
      "registered": "Sat Feb 21 2015 21:52:46 GMT+0000"
    },
    {
      "id": 6,
      "balance": "1014963.76",
      "name": "PARAGONIA",
      "phone": "+1 (966) 512-3100",
      "description": "Tempor aliquip Lorem est enim sint laborum exercitation exercitation laboris nostrud cillum. Id minim Lorem consectetur Lorem ex. Culpa anim enim ea veniam eiusmod labore reprehenderit. Exercitation do pariatur officia reprehenderit non laboris aliquip minim anim laborum. Enim cupidatat Lorem laboris est proident minim est. Sint do veniam ex Lorem et reprehenderit voluptate tempor laborum ut. Nisi proident sit qui deserunt.",
      "registered": "Thu Oct 28 2010 19:42:24 GMT+0000"
    },
    {
      "id": 7,
      "balance": "2494709.14",
      "name": "ASSISTIA",
      "phone": "+1 (941) 421-3841",
      "description": "Exercitation elit amet reprehenderit velit ad deserunt voluptate dolore Lorem ad eiusmod non deserunt. Eu fugiat eu ut est laborum irure adipisicing magna esse dolor magna. Anim tempor nisi qui minim pariatur dolore nostrud ex aliqua. Consectetur veniam ad sint reprehenderit nulla reprehenderit ut elit aliquip. Adipisicing eu aliqua velit magna deserunt mollit duis sint quis. Minim consequat cupidatat consequat consequat aliqua. Nisi officia incididunt non ex.",
      "registered": "Sun Oct 07 2012 14:32:46 GMT+0000"
    },
    {
      "id": 8,
      "balance": "467531.84",
      "name": "OULU",
      "phone": "+1 (843) 576-3077",
      "description": "Ullamco quis do ex sint incididunt anim non anim. Ut nisi sint voluptate labore deserunt occaecat excepteur cupidatat anim proident qui adipisicing. Minim culpa tempor quis excepteur minim. Ad duis excepteur qui cupidatat magna ullamco aliqua et. Culpa sunt labore proident sit nulla laborum. Ullamco anim dolore labore mollit cupidatat est elit sit cillum eiusmod elit id ullamco anim.",
      "registered": "Mon May 11 2015 00:10:57 GMT+0000"
    },
    {
      "id": 9,
      "balance": "3547261.02",
      "name": "ANIVET",
      "phone": "+1 (872) 598-2969",
      "description": "Cupidatat sint non aliquip laborum exercitation tempor cillum anim sunt. Fugiat pariatur ut ad laboris ut cillum in ut ipsum irure ullamco eiusmod. Eu duis fugiat adipisicing ut exercitation ipsum ex in occaecat pariatur exercitation. Nostrud reprehenderit do magna commodo. In reprehenderit deserunt aliqua nisi qui magna adipisicing occaecat labore est eu. Laboris tempor id consectetur ex duis in culpa tempor incididunt dolore.",
      "registered": "Fri May 29 2020 11:37:05 GMT+0000"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
