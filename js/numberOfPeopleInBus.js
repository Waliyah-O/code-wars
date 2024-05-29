let number = function(busStops){
	let totalNumberOfPeople = 0

	for (const [on, off] of busStops){
		totalNumberOfPeople += on - off
	}

	return totalNumberOfPeople >= 0 ? totalNumberOfPeople : 0
}

console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 0]]));

