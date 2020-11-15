# smart_random
random with wieght


intro:

I needed a solution that random pick of item in items works with wieght. the scenario had a condition .each item with most Abundance has litle chance to pick.
so I came with some algorithm :
number of items:
##### total = 0 
items it self:
##### items
array of items with abundance
##### abundances

so algorithm works like this:


```
let items = {a: 10, b: 50, c: 10 }

let total = 0

let abundances = []

// getting sum of all abundances 
for (i  of  Object.values(items)){

   total  =  total+i

}
// we are looping through each pair (keys,values) and pushing to abundances by (total-value)times
for (let [key, value] of  Object.entries(items)) {

    for(let i=0;i<total-value;i++){

        abundances.push(key)

    }

}
// now we have an array of items with abundance , we can simply just pick from new array.
random_item  =  abundances[Math.floor(Math.random()*abundances.length)];
```

so this is working fine but I need to colabrate with others to extend this or finding a better algorithm .you are welcome to start.