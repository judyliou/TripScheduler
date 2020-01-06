# TripScheduler
A trip scheduler developed Flask and deployed on AWS Lambda
## What does it use?
AWS: Dynamodb, S3, Personalize, Lambda

Zappa

JQXscheduler
## How to use it?
### database
There are 5 "tables" in dynamodb:
```
user -> userId
city -> cityId
spot -> spotId
click -> spotId
user-habit -> habitId
```
Get city and spot information via [cityScraper](https://github.com/BiatBang/cityScraper) and data will be automatically inserted into your Dynamodb.
### configurations
In app/config, there are configuration file(s). Change the value there to your own configurations.
