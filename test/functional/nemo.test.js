const assert = require('assert');
var status = "";
describe('@firstTest@', async function () {
  before(async function () {
    await this.nemo.driver.executeScript("lambda-name=sample-todo-app-test");
  });
  after(async function () {
    await this.nemo.driver.executeScript("lambda-status=" + status);  
  });
  it('should load a website', async function () {
    this.nemo.driver.manage().timeouts().implicitlyWait(5000);
    await this.nemo.driver.get(this.nemo.data.baseUrl);
    await this.nemo.driver.get("https://lambdatest.github.io/sample-todo-app/");
    await this.nemo.view._waitVisible('name:li1', 5000);
    await this.nemo.view._find('name:li1').click();
    await this.nemo.view._find('name:li2').click();
    await this.nemo.view._find('id:sampletodotext').sendKeys("Yey, Let's add it to list");
    await this.nemo.view._find('id:addbutton').click();
    await this.nemo.view._waitVisible('name:li6', 5000);
    var page_title = await this.nemo.driver.getTitle();
    console.log("hello", page_title)
    if (page_title === "Sample page - lambdatest.com"){
      status = "passed";
    }
    else {
      status = "failed";
    }
  });
});
