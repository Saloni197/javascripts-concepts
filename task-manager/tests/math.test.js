// const { TestWatcher } = require('jest')
//const { TestWatcher } = require('jest')
const {calculateTip,add} = require('../src/math.js')

test('test calculateTip function',()=>{
    const total = calculateTip(100,.5)
    expect(total).toBe(150)
    // if(total !== 150){
    //     throw new Error('fail to calculate tip amount, total is ' + total)
    // }
})
test('test calculateTip function',()=>{
    const total = calculateTip(100)
    expect(total).toBe(125)
})
// test('async test demo',()=>{
//     setTimeout( () => {
//         expect(1).toBe(2)
//     },2000)
// })
test('should check async/await', async ()=>{
    const total =  await add(15,5)
    expect(20).toBe(20)
})