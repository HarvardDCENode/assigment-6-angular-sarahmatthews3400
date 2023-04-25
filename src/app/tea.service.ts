import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  maxId:number = 3;
  teaList = [
    {
      _id: 1,
      name:'Mao Jian',
      category:'green',
      source:'China',
      notes:'A classic green with a robust, grassy flavor. Do not oversteep, whatever you do, or it will become horrendously astringent. 175 degrees F maximum, a little cooler is probably better.'
    },
    {
      _id: 2,
      name:'Chai Cascarilla',
      category:'black',
      source:'MEM Tea',
      notes:'Delicious blend of cocoa nibs and shells and black tea. Best enjoyed with milk.'
    },
    {
      _id: 3,
      name:'Hairy Crab',
      category:'oolong',
      source:'MEM Tea',
      notes:'a less-oxidized oolong with a complex, leafy flavor. Tastier than the name might suggest... unless you are familiar with the fishy delicacy it is named after from Shanghai. Re-steeps well and is robust to high-temp steeps.'
    }
  ];

  constructor() { }

  listTeas():any[]{
    return this.teaList;
  }

  /* the below functions are placeholders; not used now, but 
    will be supported and re-implemented with REST for the final */
  getTea(id:number):any{
    return this.teaList.find((el) => {return el._id == id});
  }

  createTea(teaObject:any){
    teaObject._id = ++this.maxId;
    this.teaList.push(teaObject);
    return this.getTea(teaObject._id)
  }

  updateTea(id:number, data:any){
    let tea = this.getTea(id);
    if (tea){
      tea = Object.assign(tea, data);
      return tea;
    } else {
      return null;
    }
  }

  deleteTea(id:number) {
    let tea = this.getTea(id);
    if (tea) {
      this.teaList = this.teaList.filter(el => el._id != id);
    }
  }
}
