//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an object
// O: one output, an array of object's values
// C: none
// E: none
function objectValues(object) {
	// return all values of object in an array
	return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an object
// O: one output, a string of object's keys seperated by a space
// C: none
// E: none
function keysToString(object){
	// return all keys in a string with a space seperating them
	return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an object
// O: one output, a string of object's values seperated by a space
// C: none
// E: only string values should be joined and returned
function valuesToString(object) {
	// init vals to an empty array
	const vals = [];
	// for all keys in object
	for (let keys in object){
		// if a value is a string
		if (typeof object[keys] === 'string'){
			// push that value to vals
			vals.push(object[keys]);
		}
   }
   // return vals, joined by a space
   return vals.join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an array or an object
// O: one output, a string stating array or object
// C: none
// E: none
function arrayOrObject(collection) {
	// if the collection is an array, return array, else return object
	return Array.isArray(collection) ? 'array' : 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, a string 
// O: one output, the string with it's first letter capitalized
// C: none
// E: none
function capitalizeWord(string) {
	// return the string, with it's first letter capitalized
	return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, a string of words
// O: one output, each word in the string capitalized
// C: none
// E: none
function capitalizeAllWords(string) {
	// init words to an array of the words in string
	const words = string.split(' ');
	// init caps to a storage array
	const caps = []
	// go through each word
	for (let i = 0; i < words.length; i++){
		  // capitalize each first letter, and add all words to caps
          caps.push(words[i][0].toUpperCase() + words[i].slice(1));
	}
	// returned caps joined
	return caps.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an object
// O: one output, a string that welcomes the name on object
// C: none
// E: if name is not capitalized, capitalize it
function welcomeMessage(object) {
	// return 'Welcome [Name]!', always capitalizing name to catch edge case
	return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an object
// O: one output, a string that says "Name is a Species"
// C: none
// E: both name and species should be capitalized
function profileInfo(object) {
	// return 'Name is a Species' with both name and species capitalized
	return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an object
// O: one output, a string of noises
// C: none
// E: if no noises exist or noise is not an array, return 'there are no noises'
function maybeNoises(object) {
	// if noises is an array and has a length greater than 0, return the noises joined with a space, else 'there are no noises'
	return Array.isArray(object.noises) && object.noises.length > 0 ? object.noises.join(' ') : 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, a string and a word
// O: one output, a boolean reflecting if the word is in the string
// C: none
// E: none
function hasWord(string, word) {
	// if string includes word, return true, else false
	return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, a string representing a friend and an object
// O: one output, the object with the added friend
// C: none
// E: none
function addFriend(name, object) {
	// if the array does not include name
	if (object.friends.includes(name) === false) {
		// then push name to the array
		object.friends.push(name);	
	}
   // and return object, now modified
   return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, a string representing a friend and an object
// O: one output, a boolean reflecting whether given string exists on friend's array
// C: none
// E: if friends array does not exist, return false
function isFriend(name, object) {
	// if the friends array does not exist
	if (object.friends === undefined) {
		// return false
		return false;
	// if the friends array includes name
	} else if (object.friends.includes(name)){
		// return true
		return true
	// else name is not on array
	} else {
		// return false
		return false;
	}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, a string of name and an array of all people
// O: one output, an array of non-friends
// C: none
// E: none
function nonFriends(name, array) {
	// init enemy to an empty array
	let enemy = [];
	// loop through the given array of people
	for (let i = 0; i < array.length; i++){
		// if the person is not the person we're finding the enemies of
		if (array[i].name !== name){
			// make a boolean flag
			let flag = false;
			// we need to loop through that person's friend array to see if they're a friend
			for (let j = 0; j < array[i].friends.length; j++){
				// if an element equals name
				if (array[i].friends[j] === name) {
					// swap flag to true, they're friends
					flag = true;
				}
			}
			// if flag is still false, they are an enemy
			if (flag === false) {
				// push the name to enemy
				enemy.push(array[i].name);
		    }
		}
	}
	//return enemy
	return enemy
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: three inputs, an object, key that is a string and value that could be any value
// O: one output, the object updated
// C: none
// E: none
function updateObject(object, key, value) {
	// use params to update the object
	object[key] = value;
	// return object
	return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, an object and an array
// O: one output, the object edited
// C: none
// E: none
function removeProperties(object, array) {
	// loop through the array
	for (var i = 0; i < array.length; i++) {
		// delete the properties given on the object in array
		delete object[array[i]];
	  }
	  // return the object with removed properties
	  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: one input, an array
// O: one output, the array with duplicates removed
// C: none
// E: none
function dedup(array) {
	// init dupeFree to an array literal
	let dupeFree = [];
	// loop over array
	for (let i = 0; i < array.length; i++){
		// if the value in array does not equal a value in dupeFree
		if (!dupeFree.includes(array[i])) {
			//push it to dupeFree
			dupeFree.push(array[i]);
		}
	}
 // return dupeFree
 return dupeFree;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
	typeof process !== "undefined" &&
	typeof process.versions.node !== "undefined"
) {
	// here, export any references you need for tests //
	module.exports.objectValues = objectValues;
	module.exports.keysToString = keysToString;
	module.exports.valuesToString = valuesToString;
	module.exports.arrayOrObject = arrayOrObject;
	module.exports.capitalizeWord = capitalizeWord;
	module.exports.capitalizeAllWords = capitalizeAllWords;
	module.exports.welcomeMessage = welcomeMessage;
	module.exports.profileInfo = profileInfo;
	module.exports.maybeNoises = maybeNoises;
	module.exports.hasWord = hasWord;
	module.exports.addFriend = addFriend;
	module.exports.isFriend = isFriend;
	module.exports.nonFriends = nonFriends;
	module.exports.updateObject = updateObject;
	module.exports.removeProperties = removeProperties;
	module.exports.dedup = dedup;
}
