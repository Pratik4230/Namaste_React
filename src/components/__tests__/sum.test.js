import { sum } from '../sum'

test("testing is it working " , () => {
    const result =  sum(5,5);

    //Assertion
    expect(result).toBe(10)
})