/**
 *  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map()
    for (let str of strs) {
        let key = Array.from(str).sort().toString()
        let list = map.get(key)?map.get(key):new Array()
        list.push(str)
        map.set(key,list)
    }
    return Array.from(map.values())

};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))