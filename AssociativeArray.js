;(function() {
	/**	AssociativeArray()
	 *	Simple helper method for making Pseudo-Realistic Associative Arrays.
	 *	
	 *	@example AssociativeArray( { key: value } )
	 *	@example AssociativeArray( key, value )
	 *	@example AssociativeArray( [keys], [value] )
	 **/
	function AssociativeArray() {
		var args = Array.prototype.slice.call(arguments),
			arr = [];
		switch (true) {
			case args.length == 1 && 'object' == typeof args[0]:
				var keys = Object.keys(args[0]),
					vals = Object.values(args[0]);
				for (var i=0;i<keys.length;i++) if (/num|str/i.test(typeof keys[i])) arr[keys[i]] = vals[i];
				arr.length = vals.length;	//	set array length
				break;
			case args.length == 2 && /^\[[^\]]*\]$/.test(JSON.stringify(args)):	//	2 Strings
				arr[args[0]] = args[1];
				arr.length = 1;	//	set array length
				break;
			case args.length == 2 && /^\[\[[^\]]*\],\[[^\]]*\]\]$/.test(JSON.stringify(args)):	//	2 Arrays
				var keys = args[0],
					vals = args[1];
				//	add blank values foreach extra key if there are more keys than values
				if (keys.length > vals.length) keys.map(function(v, i) { if (i >= vals.length) vals.push(void 0); });
				for (var i=0;i<keys.length;i++) if (/num|str/i.test(typeof keys[i])) arr[keys[i]] = vals[i];
				//	append any left over values to array
				if (vals.length > keys.length) vals.map(function(v, i) { if (i >= keys.length) arr.push(v); });
				arr.length = vals.length;	//	set array length
				break;
			case !!arguments.length:
				arr = Array.prototype.concat.apply([], arguments);
				break;
		}
		return arr
	}
	window.hasOwnProperty("AssociativeArray") || (window.AssociativeArray = AssociativeArray);
})();
