"use strict"
console.log('第二題結果');


class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
    }

    // add node to the tail
    push(item){
        let node = new Node(item);
        
        // if first node
        if(!this.head){
            this.head = node;
        }else{
            // else find the tail
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = node;
        }
        this.length++;
    }


    //remove node
    pop(element=null){
        
        // if first node
        if(!this.head){
            return "it's empty linked list";
        }else{

            let value;

            if(element !== null){
                // find the node
                let n = this.head;
    
                while (n.item !== element) {
                    n = n.next;
                }

                //將改元素存起來
                value = n.item;


                n.next = n.next.next;
            }else{
                //如果沒有指定要移除的元素，移除最後一個
                // else find the tail
                let tail = this.head;
                while (tail.next !== null) {

                    if(tail.next.next == null){
                        value = tail.next.item;
                        tail = null;
                    }else{

                        tail = tail.next;
                    }

                }

            }

            this.length--;

            return value;
        }
    }



    //回傳長度
    size(){
        return this.length;
    }


}

