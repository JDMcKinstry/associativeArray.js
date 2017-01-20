# associativeArray.js
Simple helper method for making Pseudo-Realistic Associative Arrays.

###Use is as simple as:

```javascript
AssociativeArray( { key: value } )
//|OR|
AssociativeArray( key, value )
//|OR|
AssociativeArray( [keys], [value] )
```

##Example 1

```javascript
var arr = AssociativeArray({ key_0: "value_0", key_1: "value_1", key_2: "value_2", key_3: "value_3", key_4: "value_4", key_5: "value_5", key_6: "value_6", key_7: "value_7", key_8: "value_8", key_9: "value_9" })
//	will ==
//	Array[10]
//		key_0: "value_0"
//		key_1: "value_1"
//		key_2: "value_2"
//		key_3: "value_3"
//		key_4: "value_4"
//		key_5: "value_5"
//		key_6: "value_6"
//		key_7: "value_7"
//		key_8: "value_8"
//		key_9: "value_9"
//		length: 10
```

##Example 2

```javascript
var arr = AssociativeArray("key_0", "value_0")
//	will ==
//	Array[1]
//		key_0: "value_0"
//		length: 1
```

##Example 3

```javascript
var arr = AssociativeArray(["key_0", "key_1", "key_2", "key_3", "key_4", "key_5"], ["value_0", "value_1", "value_2", "value_3", "value_4", "value_5"])
//	will ==
//	Array[5]
//		key_0: "value_0"
//		key_1: "value_1"
//		key_2: "value_2"
//		key_3: "value_3"
//		key_4: "value_4"
//		key_5: "value_5"
//		length: 5
```
