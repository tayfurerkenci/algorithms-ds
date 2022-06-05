// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;
    while (node) {
     counter++;
     node = node.next;
    }
    return counter;
  }

  // my wrong size function: (it doesn't pass the tests)
  // size(){
  //   let counter=0;
  //   while(this.head){
  //     this.head=this.head.next;
  //     counter++;
  //   }
  //   return counter;
  // }

  getFirst(){
    return this.head;
  }

  getLast()
  {
    let node = this.head;
    while(node && node.next){
      node=node.next;
    }
    return node;
  }

  clear(){
    this.head=null;
  }

  removeFirst(){
    if(!this.head)
    {
      return;
    }

    this.head = this.head.next;
  }

  removeLast()
  {
    if(!this.head) return;

    if(!this.head.next) {
        this.head = null;
        return;
    }

    let previous = this.head;
    let node = this.head.next;
    while(node.next){
      previous=node;
      node=node.next;
    }
    previous.next=null;
  }

  insertLast(data)
  {
    const last = this.getLast();
    if (last) {
      // There are some existing nodes in our chain:
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }

  }

  // my insertLast solution:
  // insertLast(data)
  // {
  //   if(!this.head)
  //   {
  //     this.head=new Node(data);
  //     return;
  //   }
  //
  //   const lastNode=this.getLast();
  //   lastNode.next=new Node(data);
  //
  // }

  getAt(index){
    let counter = 0;
    let node = this.head;

    while(node){
      if(counter === index)
      {
        return node;
      }

      counter++;
      node=node.next;
    }

    return null;
  }

  removeAt(index){
    if(!this.head)
    {
      return;
    }

    if(index === 0){
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if(!previous || !previous.next){
      return;
    }

    previous.next = previous.next.next;

  }

  insertAt(data, index)
  {
    if(!this.head)
    {
      this.head = new Node(data);
      return;
    }

    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  // alternative solution insert At
  // insertAt(data, index)
  // {
  //   if(!this.head)
  //   {
  //     this.head = new Node(data);
  //     return;
  //   }
  //
  //   if(index === 0){
  //     //this.insertFirst(data);
  //
  //     this.head = new Node(data, this.head);
  //     return;
  //   }
  //
  //   const previous = this.getAt(index - 1);
  //
  //   if(!previous || !previous.next)
  //   {
  //     this.insertLast(data);
  //     return;
  //   }
  //
  //   previous.next = new Node(data, previous.next);
  // }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while(node){
      fn(node, counter);
      node = node.next;
      counter++;
    }

  }

  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
