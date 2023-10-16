function singleNumber(nums) {

    const map = new Map()
    for(let i=0;i<nums.length;i++){
       let item = nums[i]
       console.log(map.get(item),'map.get(item)',item)
       if(map.get(item)){
         map.delete(item)
       }
       else{
        map.set(item,true)
       }
    }

    console.log(map)
   return Array.from(map.keys())
  };


  console.log(singleNumber([1,2,1,3,2,5]))