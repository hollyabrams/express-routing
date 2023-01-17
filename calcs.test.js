const { findMean, findMedian, findMode } = require("./calcs");
  
  describe("findMedian", () => {
    it("finds the median of an even set", () => { 
      expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
  })
  
  describe("findMean", () => {
    it("finds the mean of an empty array", () => { 
      expect(findMean([1,2,3])).toEqual(2)
    })
    it("finds the mean of an array of numbers", () => { 
      expect(findMean([1,-1,4,2])).toEqual(1.5)
    })
  })
  
  describe("findMode", () => {
    it("finds the most common number in an array", () => { 
      expect(findMode([1,1,1])).toEqual(1)
    })
  })
