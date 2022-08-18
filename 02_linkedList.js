"use strict"
console.log('');
console.log('第二題結果');

//node class
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.length = 0;
        this.head = null;
    }

    // 加到最後一個
    push(item){
        let node = new Node(item);
        
        // 第一個
        if(!this.head){
            this.head = node;
        }else{
            // 找到最後一個，加在next上
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
        
        if(!this.head){
            return "it's empty linked list";
        }else{

            let value = null;

            if(element !== null){
                
                let node = this.head;
                let pre_node = null;

                while (true) {          

                    //移除遇到該元素的第一個node
                    if(node.item == element){
                        value = element;

                        if(node.next == null){
                            pre_node.next = null;
                        }else{
                            node.item = node.next.item;
                            node.next = node.next.next;
                        }
                        break;
                    }

                    if(node.next == null){
                        break;
                    }else{
                        pre_node = node;
                        node = node.next;
                    }
                }

            }else{
                //如果沒有指定要移除的元素，移除最後一個
                let tail = this.head;
                while (tail.next !== null) {

                    if(tail.next.next == null){
                        value = tail.next.item;
                        tail.next = null;
                    }else{

                        tail = tail.next;
                    }

                }

            }


            //判斷value是否有值，沒有的話，代表該元素不存在!

            if(value !== null ){

                this.length--;
                return value;
            }else{
                return "沒有 "+element+" 這個元素";
            }

        }
    }



    //回傳長度
    size(){
        return this.length;
    }


}


const stack = new Stack() 
stack.push(1);
stack.push(2);
stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);

// console.log(stack.pop(6));//刪除特定元素
console.log(stack.pop());//刪除最後一個元素
// console.log(stack.pop(7));//顯示無該元素
console.log(stack.size());
// console.log(stack);
