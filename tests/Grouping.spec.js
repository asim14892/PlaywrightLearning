import{test, expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('This is beforeAll.....')
})
test.afterAll(async()=>{
    console.log('This is afterAll.....')
})
test.beforeEach(async()=>{
    console.log('This is beforeEach.....')
})
test.afterEach(async()=>{
    console.log('This is afterEach.....')
})

test.describe.only('Sanity', async()=>{
    test('Test1', async({})=>{
    console.log("This is Test1...")
    })

    test('Test2', async({})=>{
        console.log("This is Test2...")
    })
})

test.describe('Regression', async()=>{
    test('Test3', async({})=>{
    console.log("This is Test3...")
    })

    test('Test4', async({})=>{
        console.log("This is Test4...")
    })

    test('Test5', async({})=>{
        console.log("This is Test5...")
    })
})

