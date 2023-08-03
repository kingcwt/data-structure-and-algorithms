
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
// 定义测试数据链表1: 1 -> 2 -> 4
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// 定义测试数据链表2: 1 -> 3 -> 4
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if (list1 === nul && list2 === null) return list1

    const dummy = new ListNode(0);
    let p = dummy;

    while(list1!==null&&list2!==null){
        if(list1.val < list2.val){
            p.next = list1;
            list1 = list1.next
        }else{
           p.next = list2;
           list2 = list2.next
        }
        p = p.next
    }

    p.next = list1?list1:list2
    return dummy.next
};

console.log(mergeTwoLists(list1,list2),'kkk')



let l1 = {
    val:1,
    next:{
        val:2,
        next:{
            val:4
        }
    }
}
let l2 = {
    val:1,
    next:{
        val:3,
        next:{
            val:4
        }
    }
}
// 通过对象的方式去实现
var mergeTwoLists2 = function(l1, l2) {
    
    if (l1 === null&&l2 === null) return l1;
    const d = {val:0}
    let p = d
    while (l1 && l2 ) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    p.next = l1 ? l1 : l2
    return d.next
}



console.log(mergeTwoLists2(l1,l2),'cccccccs')