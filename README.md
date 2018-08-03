# chai-within

## Installation

```
npm install --save objectwithin
```

## Usage

The chai-within plugin adds the "within" method to the chai assertion lib. This assertion will deeply
compare two objects, making sure EVERY field that is in the smaller object exists in the larger one.

```js
const largeObj = {
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

const smallObj = {
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
```

