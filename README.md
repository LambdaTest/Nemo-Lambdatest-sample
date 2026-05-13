# Run Selenium Tests With NemoJS — TestMu AI (Formerly LambdaTest)

![JavaScript](https://user-images.githubusercontent.com/95698164/172134732-2e9c780e-10ac-4956-b366-86ffc25bf070.png)

<p align="center">
  <a href="https://www.testmuai.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/@TestMuAI" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn how to use NemoJS framework to configure and run your JavaScript automation testing scripts on the TestMu AI platform*

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
git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample.git
cd Nemo-Lambdatest-sample
```

3. Install the dependencies by executing the following command.

``` js
npm install
```

4. To run your Selenium tests with NemoJS, you would need to set your TestMu AI username and access key in the environment variables. To get it, visit [Automation Dashboard](https://automation.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample) and click on the Key button from the top-right.

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

5. Set the environment variables in `nemo.config.js` file with your TestMu AI Username and Access Key.

## Running The Single Test Case With NemoJS

**Test Scenario:** To run your single test case with NemoJS on TestMu AI, let’s understand our test case scenario, the below Nemo.js automation script will test a sample to-do list app. The code marks two list items as done, adds a list item, and then outputs the total number of pending items. Check out the [nemo.test.js](https://github.com/LambdaTest/Nemo-TestMu AI-sample/blob/master/test/functional/nemo.test.js) file to run your first sample test. 

To run the single test, execute the below command in the terminal.

``` js
npx nemo -P chrome
```

## Running The Parallel Tests With NemoJS

**Test Scenario:** In this code, we will test our Sample to-do app in three browser versions and operating systems. Check out the [nemo.config.js](https://github.com/LambdaTest/Nemo-TestMu AI-sample/blob/master/nemo.config.js) file to run your first sample test. 

Now run the below command to run the parallel tests.

``` js
npx nemo -P chrome,chrome_2,firefox
```


## Documentation & Resources :books:
 
Visit the following links to learn more about TestMu AI's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [TestMu AI Documentation](https://www.testmuai.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample)
* [TestMu AI Blog](https://www.testmuai.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample)    

## TestMu AI Community :busts_in_silhouette:

The [TestMu AI Community](https://community.testmuai.com/?utm_source=github&utm_medium=repo&utm_campaign=Nemo-TestMu AI-sample) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At TestMu AI ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/)

## 🚀 LambdaTest is Now TestMu AI

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/) - we have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

**🔄 Our Rebrand Journey**

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).

**🔭 Explore TestMu AI**

The same infrastructure LambdaTest customers relied on, now delivered through autonomous AI agents.

- [KaneAI](https://www.testmuai.com/kane-ai/)
- [Agent-to-Agent Testing](https://www.testmuai.com/agent-to-agent-testing/)
- [HyperExecute](https://www.testmuai.com/hyperexecute/)
- [Real Device Cloud](https://www.testmuai.com/real-device-cloud/)
- [Pricing](https://www.testmuai.com/pricing/)
- [Documentation](https://www.testmuai.com/support/docs/)