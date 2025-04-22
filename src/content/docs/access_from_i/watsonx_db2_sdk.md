---
title: AI SDK for Db2
description: AI SDK for Db2
sidebar:
    order: 1
---



To interact with watsonx using the WatsonX SDK from RPG or SQL on IBM i, follow these steps:

1. Authenticate with watsonx

Before making any requests, you need to authenticate using an API key and project ID.

```
CALL watsonx.logoutjob();
CALL watsonx.setapikeyforjob('your-api-key');
CALL watsonx.setprojectidforjob('your-project-id');
```

-- Verify if a new token is needed (should return 'Y')
```
VALUES watsonx.ShouldGetNewToken();
```
-- Authenticate (should return 'Y')
```
VALUES watsonx.authenticate();
```
-- Verify again (should return 'N' if authentication is successful)
```
VALUES watsonx.ShouldGetNewToken();
```
2. Generate Text Using WatsonX

Once authenticated, you can generate text using a model. The generate() function accepts input text and an optional model ID.

-- Basic text generation
```
VALUES watsonx.generate('Hello world');
```
-- Specify a model ID
```
VALUES watsonx.generate('Hello world', model_id => 'ibm/granite-3-8b-instruct');
```
To fine-tune text generation, use the parameters() function:

```
VALUES watsonx.parameters(temperature => 0.5, time_limit => 1000);
VALUES watsonx.generate('Hello world', parameters => watsonx.parameters(temperature => 0.5, time_limit => 1000));
```
3. Retrieve Available Models

You can get a list of available models without authentication:
```
CALL watsonx.GetModels();
Installation on IBM i
To install the WatsonX SDK on IBM i:
```
Clone the repository:
```
git clone https://github.com/your-repo/watsonx-sdk-db2-ibmi.git
OR download and extract the repository as a .zip file.
```
Navigate to the extracted folder:
```
cd /path/to/watsonx-sdk
```
Build the SDK using GNU Make (gmake):
```
gmake
```
## Interacting with watsonx from RPG

If you need to call WatsonX functions from RPG, you can use embedded SQL within your RPGLE program:
```
EXEC SQL
    VALUES watsonx.generate('Hello world') INTO :response;
```

To learn more about the WastsonX-SDK, check out the [official documentation](https://github.com/IBM/WatsonX-SDK-Db2-IBMi)