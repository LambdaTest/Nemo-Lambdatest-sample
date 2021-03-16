# Nemo-Lambdatest-sample

![LambdaTest Logo](https://www.lambdatest.com/images/logo.svg)

![NemoJS](https://nemo.js.org/images/logo.svg)

**Automate** your **acceptance tests** and run them in **real browsers!**

## Prerequisites for NemoJS tutorial for Selenium and JavaScript
* **Node.js and 
Package Manager (npm)** : Install Node.js from [here](https://nodejs.org/en/#home-downloadhead) Or Install Node.js with [Homebrew](http://brew.sh/)
```
$ brew install node
```
* **Nemo Package Module** :  <code>npm</code> to install Nemo
```
$ npm init
```
<code>npm</code> to install Nemo in <code>./node_modules/.bin folder</code>
```
$ npm install --save-dev nemo
```

* **LambdaTest Credentials**
   * Set LambdaTest username and access key in environment variables. It can be obtained from [LambdaTest Automation Dashboard](https://automation.lambdatest.com/)    
    example:
   - For linux/mac
    ```
    export LT_USERNAME="YOUR_USERNAME"
    export LT_ACCESS_KEY="YOUR ACCESS KEY"

    ```
    - For Windows
    ```
    set LT_USERNAME="YOUR_USERNAME"
    set LT_ACCESS_KEY="YOUR ACCESS KEY"

    ```
3. Setup
   * Clone the repo
   * Install dependencies `npm install`
   * Update `nemo.config.js` files with your LambdaTest Username and Access Key

4. run single test
   * npx nemo -P chrome

5. run parallel test
   * npx nemo -P chrome,chrome_2,firefox

