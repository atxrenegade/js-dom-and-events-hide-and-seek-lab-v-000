// Define a function getFirstSelector(selector), which accepts a selector and
// returns the first element that matches.

const getFirstSelector = (selector) => {
	return document.querySelector(selector);
}

// Define a function nestedTarget() that pulls a .target out of #nested
const nestedTarget = () => {
	return document.querySelector( '#nested .target' )
}

// Define a function increaseRankBy(n) that increases the ranks in all of the
// .ranked-lists by n. (You might need to make use of parseInt())
const increaseRankBy = (n) => {
	let ranks = document.querySelectorAll('.ranked-list');
	let i;
	for(i = 0; i < ranks.length; i++){
		let children = ranks[i].children
	    let j;
		for (j = 0; j < children.length; j++){
			let convertedNumber = (parseInt(children[j].innerHTML))
			children[j].innerHTML = convertedNumber + n
		}
	}

}

// Define a function deepestChild() that pulls out the most deeply nested
// child from div#grand-node. (Remember, you can iterate over elements and
// call querySelector() and querySelectorAll() on them. This is challenging to
// implement correctly, but not beyond your ability!)

// WORK IN PROGRESS

const deepestChild = (element) => {
	nodeX = document.querySelector( element );
	if (nodeX !== null ) {
		element += ' div'
		console.log(element)
  		deepestChild(element)

	} else {
		 return element
	}
}
