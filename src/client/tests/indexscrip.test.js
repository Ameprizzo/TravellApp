import {
    handleSearch,
} from "../js/indexscript";

describe("check for handleSearch()", () => {
    test("It should return true", async () => {
            expect(handleSearch).toBeDefined();
        }),

        test("It should be a function", async () => {
            expect(typeof handleSearch).toBe("function");
        })


})