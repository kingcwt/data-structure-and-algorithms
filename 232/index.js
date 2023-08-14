/**
 * 输入：
    ["MyQueue", "push", "push", "peek", "pop", "empty"]
    [[], [1], [2], [], [], []]
    输出：
    [null, null, null, 1, 1, false]

    解释：
    MyQueue myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    myQueue.peek(); // return 1
    myQueue.pop(); // return 1, queue is [2]
    myQueue.empty(); // return false
 */
var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};
MyQueue.prototype.toOutStack = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
};
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    this.toOutStack();
  }
  return this.outStack.pop()
};

MyQueue.prototype.peek = function(){
    if(!this.outStack.length){
        this.toOutStack()
    }
    return this.outStack[this.outStack.length - 1];
}

var obj = new MyQueue();
const x = "chr";
const xl = ["MyQueue", "push", "peek", "pop", "empty"];
obj.push(xl[0]);
obj.push(xl[1]);
obj.push(x); // 将元素 x 推到队列的末尾
console.log(obj.inStack, obj.outStack,'start push end');

var param_2 = obj.peek();
console.log(param_2, "param_2");
console.log(obj.inStack, obj.outStack);

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
