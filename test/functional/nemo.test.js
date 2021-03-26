const assert = require('assert');
describe('@firstTest@', function () {
  it('should load a website', async function () {
    this.nemo.driver.manage().timeouts().implicitlyWait(5000)
    this.nemo.driver.executeScript("lambda-name=sample-todo-app-test");
    await this.nemo.driver.get(this.nemo.data.baseUrl);
    await this.nemo.driver.get("https://lambdatest.github.io/sample-todo-app/");
    await this.nemo.view._waitVisible('name:li1', 5000);
    this.nemo.view._find('name:li1').click();
    this.nemo.view._find('name:li2').click();
    this.nemo.view._find('id:sampletodotext').sendKeys("Yey, Let's add it to list");
    this.nemo.view._find('id:addbutton').click();
    await this.nemo.view._waitVisible('name:li6', 5000);
    var page_title = this.nemo.driver.getTitle();
    if (page_title === "Sample page - lambdatest.com"){
      this.nemo.driver.executeScript("lambda-status=" + "passed");
    }
    else {
      this.nemo.driver.executeScript("lambda-status=" + "failed");
    }
  });
});
