const chai = require('chai');
const expect = require('chai').expect;
const chiWithin = require('../index.js');

// Configure chai to use our new plugin
chai.use(chiWithin);

describe('objectWithin(small, large)', () => {

	it('evaluates two complex objects to true when the smaller object is fully contained within the larger one', () => {

    const large = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				e: {
  					f: 4,
  					g: 6
  				},
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const small = {
  			a: 1,
  			c: {
  				e: {
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

     	expect( small ).to.be.within( large );

	})

  it('evaluates two complex objects to false when the smaller object is NOT fully contained within the larger one', () => {

    const large = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				e: {
  					f: 4,
  					g: 6
  				},
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const small = {
  			a: 1,
  			i: 1, // <<<<<<<
  			c: {
  				e: {
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

     	expect( small ).to.not.be.within( large );

	})

  it('evaluates two complex objects to false when the smaller object is NOT fully contained within the larger one by a whole subseciton', () => {

    const large = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const small = {
  			a: 1,
  			c: {
  				e: { //<<<<<< e is not in the large object!!!
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

     	expect( small ).to.not.be.within( large );

	})


})
