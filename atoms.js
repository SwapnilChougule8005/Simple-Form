/*import {atom} from "recoil";

 export const  languageChange = atom({
    key:"languageChange",
    default: { 
      language: 'english',
      translations : {
         hello: {
           english: "Hello",
           marathi: "नमस्ते"
         },
         read_more: {
           english: "Read more",
           marathi: "अधिक वाचा"
         },
         show_less: {
           english: "Show less",
           marathi: "कमी दाखवा"
         },
         not_interested: {
           english: "Not Interested",
           marathi: "रस नाही"
         },
         refresh: {
           english: "Refresh",
           marathi: "रिफ्रेश"
         },
         no_tours_left: {
           english: "No Tours left",
           marathi: "कोणतीही पर्यटन शिल्लक नाही"
         },
         plan_with_friends:{
           english: "plane with friends",
           marathi: "मित्रांसह योजना"
         },
       }
    }
 });

  */

import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const{persistAtom} = recoilPersist();

 export const userDataChange = atom({
     key:"userDataChange",
     default: {
      firstName:"",
      lastName:"",
      email:"",
      age:"",
      gender:""
     },
     effects:[persistAtom],
 });

