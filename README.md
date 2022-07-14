# Run Selenium Tests With NemoJS On LambdaTest

![JavaScript](https://user-images.githubusercontent.com/95698164/172134732-2e9c780e-10ac-4956-b366-86ffc25bf070.png)

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn how to use NemoJS framework to configure and run your JavaScript automation testing scripts on the LambdaTest platform*

[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table of Contents

* [Pre-requisites](#pre-requisites)
* [Running The Single Test Case With NemoJS](#running-the-single-test-case-with-nemojs)
* [Running The Parallel Tests With NemoJS](#running-the-parallel-tests-with-nemojs)

## Pre-requisites

Before starting running your Selenium tests with NemoJS, ensure you have the following things configured.

1. Make sure you have NodeJS installed. You can install it from the official [NodeJS website](https://nodejs.org/en/#home-downloadhead). You can also install NodeJS by running the following command in the terminal.

``` js
$ brew install node
```

2. Clone the repo.

``` js
$ git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample.git
  cd Nemo-Lambdatest-sample
```

3. Install the dependencies by executing the following command.

``` js
  npm install
```

4. To run your Selenium tests with NemoJS, you would need to set your LambdaTest username and access key in the environment variables. To get it, visit [Automation Dashboard](https://automation.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample) and click on the Key button from the top-right.

**For Windows:**

``` js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**For Mac/Linux:**

``` js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

6. Set the environment variables in `nemo.config.js` file with your LambdaTest Username and Access Key.

## Running The Single Test Case With NemoJS

**Test Scenario:** To run your single test case with NemoJS on LambdaTest, let’s understand our test case scenario, the below Nemo.js automation script will test a sample to-do list app. The code marks two list items as done, adds a list item, and then outputs the total number of pending items. Check out the [nemo.test.js](https://github.com/LambdaTest/Nemo-Lambdatest-sample/blob/master/test/functional/nemo.test.js) file to run your first sample test. 

To run the single test, execute the below command in the terminal.

``` js
npx nemo -P chrome
```

## Running The Parallel Tests With NemoJS

**Test Scenario:** In this code, we will test our Sample to-do app in three browser versions and operating systems. Check out the [nemo.config.js](https://github.com/LambdaTest/Nemo-Lambdatest-sample/blob/master/nemo.config.js) file to run your first sample test. 

Now run the below command to run the parallel tests.

``` js
npx nemo -P chrome,chrome_2,firefox
```


## Documentation & Resources :books:
 
Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample)
* [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample)
* [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample)    

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/) 
      
## About LambdaTest

[LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.    

### Features

* Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
* Real-time cross browser testing on 3000+ environments.
* Test on Real device cloud
* Blazing fast test automation with HyperExecute
* Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
* Smart Visual Regression Testing on cloud
* 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
* Automated Screenshot testing across multiple browsers in a single click.
* Local testing of web and mobile apps.
* Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
* Geolocation testing of web and mobile apps across 53+ countries.
* LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports
    
[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)
      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](support@lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample)
* For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-Lambdatest-sample)
