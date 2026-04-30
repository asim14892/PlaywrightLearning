const{test,expect} = require('@playwright/test')

//skip
test.skip('Test1', async({})=>{
    console.log("This is test1....")
})
//only
test.only('Test2', async({})=>{
    console.log("This is test2....")
})

//Fixme

test('Test3', async({})=>{
    test.fixme()
    console.log("This is test3....")
})

//Fail

test('Test4', async({browserName})=>{
    if(browserName=='chromium'){
        test.fail()
    }
    
    expect(1).toBe(2)
})

