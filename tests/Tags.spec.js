const{test, expect} = require('@playwright/test')

test('Test1@sanity', async({})=>{
    
    console.log('This is test1...')
})

test('Test2@sanity', async({})=>{
    console.log('This is test2...')
})

test('Test3@regression', async({})=>{
    console.log('This is test3...')
})

test('Test4@regression', async({})=>{
    console.log('This is test4...')
})

test('Test5@sanity@regression', async({})=>{
    console.log('This is test5...')
})