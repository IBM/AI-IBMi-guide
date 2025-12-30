---
title: watsonx.ai
description: watsonx.ai
sidebar:
    order: 5
---
## Access Db2 from watsonx.ai

Based on where you are in the platform, choose the method for creating a connection to Db2 on IBM i.

- In a project  
  Click Assets > New asset > Connect to a data source. See [Adding a connection to a project](https://dataplatform.cloud.ibm.com/docs/content/wsj/manage-data/create-conn.html?context=wx).
- In a deployment space  
  Click Import assets > Data access > Connection. See [Adding data assets to a deployment space](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ml-space-add-assets.html?context=wx).
- In the Platform assets catalog  
  Click New connection. See [Adding platform connections](https://dataplatform.cloud.ibm.com/docs/content/wsj/manage-data/platform-conn.html?context=wx).

The steps for these three different scenarios are quite similar. In this documentation, it will establish a connection within the project to illustrate the entire process.

### Go to the project page, and click the Assets tab

<img width="1066" alt="image" src="https://github.com/user-attachments/assets/c0822e03-1b71-4bf7-8e42-ae1a456e64ee">

### Click New asset > Prepare data > Connect to a data source

<img width="1092" alt="image" src="https://github.com/user-attachments/assets/cce387cd-09b5-4414-956b-84fd36a41310">

### Select the IBM Db2 for i connector

<img width="1094" alt="image" src="https://github.com/user-attachments/assets/c79b50c2-f77d-49ab-999b-ee87ba5fc84c">

### Enter the connection information

Typically, you need to provide information like the hostname, port number, username, and password.
Below is port number information based on the JDBC driver and SSL/TLS configuration.  
There are two JDBC driver options: IBM JCC driver and JT400 driver. The JT400 driver is preferred because it does not require an additional license like the JCC driver does.

|JDBC Driver |Port Non-SSL|Port SSL|
|------------|------------|--------|
|JCC driver  |446         |448     |
|JT400 driver|8471        |9471    |

<img width="1001" alt="image" src="https://github.com/user-attachments/assets/89dbf483-9a7a-4ffa-b037-5c7b9078395c">
<img width="999" alt="image" src="https://github.com/user-attachments/assets/150f5d6e-7113-4b2c-be11-46b42efa69c5">

If the certificate used in SSL/TLS configuration is not signed by a publicly trusted CA, then you need to paste the content of the CA certificate in the **SSL certificate** text box.

### Verify the connection

Click Test connection to verify if the connection can be created successfully

### Create the connection

Click Create. The connection appears on the Assets page. You can edit the connection by clicking the connection name on the Assets page.

### Add data assets from the connection

A connected data asset is a pointer to data that is accessed through a connection to an external data source. You create a connected data asset by specifying a connection, any intermediate structures or paths, and a relational table or view, a set of partitioned data files, or a file. When you access a connected data asset, the data is dynamically retrieved from the data source. See [Add data assets from the connection](https://dataplatform.cloud.ibm.com/docs/content/wsj/manage-data/connected-data.html?context=wx).

To add a data asset from a connection to a project:

- From the project page, click the Assets tab, and then click Import assets > Connected data.
  <img width="1048" alt="image" src="https://github.com/user-attachments/assets/1e88f7cf-02a3-4d6c-b013-f0169841bc7a">

- Select an existing connection asset or create a new one as the source of the data.
  <img width="1168" alt="image" src="https://github.com/user-attachments/assets/053c9e85-cc49-453b-b139-26e1d8b30a2e">

- Select the data you want. You can select multiple connected data assets from the same connection. Click Import.
  <img width="2052" alt="image" src="https://github.com/user-attachments/assets/366fe272-9d31-4c37-b5ff-0ca46c0dcf7f">