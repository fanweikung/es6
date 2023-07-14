// OBject getter and setter
let toys = {
  _list: [],
  set addToy(toy) {
    this._list.push(toy);
  },
  get toyList() {
    return this._list.join(", ");
  },
};

toys.addToy = "Bear Bear";
toys.addToy = "Pokemon";
toys.addToy = "Baby Sea Otter";
console.log(toys.toyList);

// Class getter and setter
class Attendance {
  constructor() {
    this._list = [];
  }
  set addName(item) {
    this._list.push(item);
  }
  get list() {
    return this._list.join(", ");
  }
}

let attendance = new Attendance();
attendance.addName = "Bear";
attendance.addName = "Adelyn";
attendance.addName = "Vincent";
attendance.addName = "Janet";

console.log(attendance.list);
