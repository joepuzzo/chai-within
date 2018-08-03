// Util functions

function anArray (a) {
  return Array.isArray(a)
}

function anObject (a) {
  return !Array.isArray(a) && typeof a === 'object' && a !== null
}

// Function that will ( in the case of a diff ) add all the attributes
// that do exist in the large object
const createDiff = ( small, large, cursor, key ) => {

  // Base case1: large is undefined
  if( large === undefined ){
    return;
  }

	// Base case2: we are not an object or array
  if( !anArray(small) && !anObject(small) ){
    // The small scalor is equal so add it
		if( small === large ){
      cursor[key] = small;
    }
    return;
	}

  // First recur is slightly different
  const initial = !cursor;

	if( anObject(small) ){

    // Initialize ther cursors key to an object
    // but there is a special case on first recur
    // where the cursor not defined
    if( !initial ){
      cursor[key] = {};
    } else {
      cursor = {};
    }

		// For every key in small recur
  	Object.keys( small ).forEach((objKey)=>{
			// Recur
			createDiff( small[objKey], large[objKey], initial ? cursor : cursor[key], objKey  );
  	})

    return cursor;
	}

  // Initialize the cursors key to an array
  // but there is a special case on first recur
  // where the cursor not defined
  if( !initial ){
    cursor[key] = [];
  } else {
    cursor = [];
  }

	// We must be an array so itterate
	small.forEach((e, i)=>{
		// Recur
		createDiff( e, large[i], initial ? cursor : cursor[key], i );
	});

  return cursor;

}

// Everything in the small must exist in the large

const matchObjects = ( small, large ) => {

  // Base case1: large is undefined
  if( large === undefined ){
    return false;
  }

  // Base case2: we are not an object or array
  if( !anArray(small) && !anObject(small) ){
		const result = small === large;
    return result;
	}

	if( anObject(small) ){
		// For every key in small regur
  	return Object.keys( small ).every((key)=>{
			// Recur
			const match = matchObjects( small[key], large[key] );
			// If we did not match return early.. we are done
			return match;
  	})
	}

	// We must be an array so itterate
	return small.every((e, i)=>{
		// Recur
		const match = matchObjects( e, large[i] );
		// If we did not match return early.. we are done
    return match;
	});

}

module.exports = { 
  matchObjects, 
  createDiff
};
