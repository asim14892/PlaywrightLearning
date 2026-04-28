const{test, expect}=require('@playwright/test')
import path from 'path';

test.skip('Test upload files_Single File', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const uploadfilebtn = await page.locator('#singleFileInput')

    const filePath = path.resolve(__dirname, 'UploadFiles', 'Testfile1.pdf');

    await uploadfilebtn.setInputFiles(filePath)
    
    await page.click("//button[text()='Upload Single File']")
    await page.waitForTimeout(5000)

})



test('Test upload files_Multi File', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const uploadfilebtn = await page.locator('#multipleFilesInput')

    //const filePath = path.resolve(__dirname, 'UploadFiles', 'Testfile1.pdf');

    await uploadfilebtn.setInputFiles(['tests/UploadFiles/Testfile1.pdf',
                                        'tests/UploadFiles/DataReading.xlsx'])
    
    await page.click("//button[text()='Upload Multiple Files']")
    await page.waitForTimeout(2000)
    await uploadfilebtn.setInputFiles([])
    await page.click("//button[text()='Upload Multiple Files']")
    await page.waitForTimeout(2000)
    await expect(await page.locator('#multipleFilesStatus')).toHaveText('No files selected.')
    await page.waitForTimeout(5000)



})