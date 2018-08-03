const validator = require('./validator');
const createDiff = validator.createDiff;
const matchObjects = validator.matchObjects;

module.exports = (chai, utils) => {

  const Assertion = chai.Assertion;

  Assertion.addMethod('within', function(large){
    const small = this._obj;

    const match = matchObjects(small, large);

    const diff = createDiff(small, large);

		this.assert(
			match,
      "expected #{exp} to be within #{act}", 
      "expected #{exp} to not be within #{act}", 
      small,
      diff, 
      true
		)	
  });

}
