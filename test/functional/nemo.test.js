
describe('@firstTest@', function () {
  it('should load a website', async function () {
    this.nemo.driver.manage().timeouts().implicitlyWait(10000)
    await this.nemo.driver.get(this.nemo.data.baseUrl);
    await this.nemo.driver.get("https://lambdatest.github.io/sample-todo-app/");
    await this.nemo.view._waitVisible('name:li1', 10000);
    this.nemo.view._find('name:li1').click();
    this.nemo.view._find('name:li2').click();
    this.nemo.view._find('id:sampletodotext').sendKeys("Yey, Let's add it to list");
    this.nemo.view._find('id:addbutton').click();
    await this.nemo.view._waitVisible('name:li6', 10000);

  });
});
