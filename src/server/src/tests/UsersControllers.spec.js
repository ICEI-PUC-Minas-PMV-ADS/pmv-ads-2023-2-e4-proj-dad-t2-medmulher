// DESCRIBRE
// IT OR TEST
// EXPECT

function sum(a, b){
    return a + b;
}

describe("Initial Tests", () => {
    it("First unit tests", () => {

        let result = sum(7, 1);

        expect(result).toEqual(8);
    })
})