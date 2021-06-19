# RapydPay Payment System

# Overview

### This is a Payment Platorm that supports sending and transfering of payments. This application uses [Rapyd](https://www.rapyd.net/) payment APIs to handle payments of the user.

# Prerequisite

### [Rapyd Account](https://www.rapyd.net/)

### [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### [Node.js](https://nodejs.org/en/download/)



# Installation Guidelines

## STEP 1

 ```sh
   git clone https://github.com/payalpatra/RapydPay-Payment-System.git
   ```

## STEP 2
* ### Note - Run this command in the root directory as well as in the frontend directory.

```sh
   npm install
   ```

## STEP 3

* #### [Get Your Rapyd Access key and Secret key from Rapyd client portal](https://dashboard.rapyd.net/developers)
* #### Note - Create .env file in the root directory with following variables. 


  ```sh 
  PORT = 5000
  ACCESS_KEY = 
  SECRET_KEY = 
  MONGO_URI = 
   ```
   
## STEP 4

### Run this in the root directory 

```sh
 npm run dev
   ```

## Test cards 
* ### Note - Initially the total balance of the wallets will be zero. So you can create a customer with the wallet id and rapyd test cards to fund your wallets.
* ### [Here's a link to Rapyd Test cards for payments and transactions](https://docs.rapyd.net/build-with-rapyd/reference/testing-for-payments-api)




# Features 
## 1. Create Wallet Features
* ### [User can fill up their credentials and create wallet which generates a unique wallet ID.](https://www.linkpicture.com/q/Wallet-Form.png)
* ### [All the Wallet Details with the unique wallet ID shows up in the wallet Section.](https://user-images.githubusercontent.com/67522406/122463538-54a3c480-cfd3-11eb-94b1-4d6c4afc915b.png)
* ### [Money Transactions can be done between wallets with Sender's WalletID , Amount (in USD) and Recievers WalletID,  The application automatically fills up the senders wallet ID when the sender clicks on the SEND MONEY Button of a particular Wallet.](https://www.linkpicture.com/q/Wallet-Transfer_1.png)

* ### [The total balance gets updated after successfull Transaction between wallets.](https://user-images.githubusercontent.com/67522406/122463739-9af92380-cfd3-11eb-8232-2e90870a9c14.png)

## 2. Accesing Transactions of a Wallet

* ### [Transactions of a particular wallet can be viewed by clicking on the view transaction button on each wallet card.](https://user-images.githubusercontent.com/67522406/122463739-9af92380-cfd3-11eb-8232-2e90870a9c14.png)
* ### [Transaction detail conatins the transacion ID , Amount Debited/credited, Date and wallet id of the wallet to which the amount is paid or recieved.](https://user-images.githubusercontent.com/67522406/122463739-9af92380-cfd3-11eb-8232-2e90870a9c14.png)

* ### [If the amount is credited to the wallet it shows in green and if the amount is debited it shows in Red.](https://user-images.githubusercontent.com/67522406/122463739-9af92380-cfd3-11eb-8232-2e90870a9c14.png)

### Important Points To remember for creating wallet
* ####  You can create only one wallet with single Email-ID or Phone Number.
* ####  The number should be in E.164 format (Ex- +918247564782)

## 3. Creating customer with a wallet

* ### [Customer can be created for each wallet with a default Visa card number and details of the customer.](https://www.linkpicture.com/q/Create-Customer.png)

* ### [Customer Section will contain the information of all the customers. Each customer will have their own customeID and walletd id associated with it.](https://www.linkpicture.com/q/Customers.png)

### Important Points To remember for creating customer
* ####  You can create only one customer using one wallet but you can fund multiple wallets using a single customer.

## 4 . Accessing payments of a Customer 

* ### [Customers can pay to any wallets and the amount will be debited from the associated visa card of the cutomer from which it was initially created. ](https://www.linkpicture.com/q/Payment-Form.png)

* ### [The amount paid by the customer is added to the wallet and the balance gets updated in the total balance of the ewallet.](https://user-images.githubusercontent.com/67522406/122466831-6be4b100-cfd7-11eb-8bd6-4289cf6bd4d2.png)


* ### [The payment details of a particular customer conatins the Pament Id and the wallet id to which the amount was paid.](https://user-images.githubusercontent.com/67522406/122466831-6be4b100-cfd7-11eb-8bd6-4289cf6bd4d2.png)

* ### [If the amount is paid from the customers associated wallet it shows up in green and if it is paid to another wallet it shows in green.](https://www.linkpicture.com/q/view-payments_1.png)

## 5 . Checkout
* ### [Products can be buyed using rapyd hosted checkout ](https://www.linkpicture.com/q/Products2.png)

# Snapshots
![HomePage - 1](https://user-images.githubusercontent.com/67522406/122408947-60c25e80-cfa0-11eb-8a91-bbdec9122e13.png)
![HomePage - 2](https://user-images.githubusercontent.com/67522406/122408962-6455e580-cfa0-11eb-94f9-7c7e62f806d7.png)
![HomePage - 3](https://user-images.githubusercontent.com/67522406/122408983-67e96c80-cfa0-11eb-95d4-b99ce6f91d5d.png)
![HomePage - 4](https://user-images.githubusercontent.com/67522406/122408996-6a4bc680-cfa0-11eb-87b5-e69251100ea7.png)
![Products - 1](https://user-images.githubusercontent.com/67522406/122409019-70da3e00-cfa0-11eb-9382-4c808f49158e.png)
![Products2](https://user-images.githubusercontent.com/67522406/122409032-733c9800-cfa0-11eb-8a28-0d9e7810b16b.png)
![ServicePage - 1](https://user-images.githubusercontent.com/67522406/122409042-759ef200-cfa0-11eb-86cb-163b8602f6a7.png)
![ServicePage - 2](https://user-images.githubusercontent.com/67522406/122409065-7899e280-cfa0-11eb-8b98-7c0daef79d6f.png)
![ServicePage - 3](https://user-images.githubusercontent.com/67522406/122409086-7b94d300-cfa0-11eb-8778-ee687b50ae97.png)
![Wallet](https://user-images.githubusercontent.com/67522406/122463538-54a3c480-cfd3-11eb-94b1-4d6c4afc915b.png)
![Wallet Form](https://user-images.githubusercontent.com/67522406/122409112-82bbe100-cfa0-11eb-9008-1b75e247d6fb.png)
![Wallet Transfer](https://user-images.githubusercontent.com/67522406/122409134-864f6800-cfa0-11eb-84c2-e17faf239077.png)
![View Transactions](https://user-images.githubusercontent.com/67522406/122463739-9af92380-cfd3-11eb-8232-2e90870a9c14.png)
![Customers](https://user-images.githubusercontent.com/67522406/122409218-96ffde00-cfa0-11eb-8354-2f1ae762e90d.png)
![view payments](https://user-images.githubusercontent.com/67522406/122466831-6be4b100-cfd7-11eb-8bd6-4289cf6bd4d2.png)



## Author
### Payal Patra

<a href="https://linkedin.com/in/payalpatra105" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://github.com/payalpatra" target="blank"><img align="center" src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://instagram.com/p_iconic_" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="p_iconic_" height="30" width="40" /></a>
