
function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;   //向队尾添加一个元素
  this.dequeue = dequeue;   //删除队首元素
  this.front = front;       //读取队首元素
  this.back = back;         //读取队尾元素
  this.toString = toString;
  this.empty = empty;       //判断队列是否为空
};

function enqueue(val){
  this.dataStore.push(val);
}

function dequeue(){
  return this.dataStore.shift();
}

function front(){
  return this.dataStore[0];
}
function back(){
  return this.dataStore[this.dataStore.length - 1];
}
function toString(){
  var retStr = '';
  for(var i=0;i<this.dataStore.length;i++){
    retStr += this.dataStore[i].toString() + "\n";
  }
  return retStr;
}
function empty(){
  return this.dataStore.length
}

