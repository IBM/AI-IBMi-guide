---
title: IBM Cloud Pak for Data
description: Cloud Pak 4 Data
sidebar:
    order: 1
---

## Access Db2 from IBM Cloud Pak 4 Data

### Go to the project page, and click the Assets tab

<img width="962" alt="image" src="https://github.com/user-attachments/assets/f0fcfd08-8e2f-4c8e-8300-65a622fb531c">

### Click New asset > Data access tools > Connection

<img width="966" alt="image" src="https://github.com/user-attachments/assets/2bd764d6-238f-4073-93ed-0d97a30c240c">

### Select the IBM Db2 for i connector

<img width="968" alt="image" src="https://github.com/user-attachments/assets/58eece88-5b92-4524-bf49-d874a3d70d8d">

### Upload JDBC driver files

JDBC driver files are required to create a connection using the IBM Db2 for i connector and there are two options: IBM JCC driver and JT400 driver. For more information, see [Db2 for i connection](https://www.ibm.com/docs/encloud-paks/cp-data/5.0.x?topic=connectors-db2-i-connection).  
Not all the users have the permission to do this step. Ask the admin to upload the jar files following the instructions in this link: [Upload JDBC driver files](https://www.ibm.com/docs/en/cloud-paks/cp-data/5.0.xtopic=connectors-importing-jdbc-driver-files).
   
### Enter the connection information

Typically, you need to provide information like the hostname, port number, username, and password.
Below is port number information based on the JDBC driver and SSL/TLS configuration.
|JDBC Driver |Port Non-SSL|Port SSL|
|------------|------------|--------|
|JCC driver  |446         |448     |
|JT400 driver|8471        |9471    |
   
<img width="859" alt="image" src="https://github.com/user-attachments/assets/ee19210e-b045-4674-9e0d-aefaa5c368da">
<img width="859" alt="image" src="https://github.com/user-attachments/assets/c71cbe7e-a5e7-40a7-be2d-ee2668960922">
<img width="859" alt="image" src="https://github.com/user-attachments/assets/518dc195-a42c-4e8c-bb91-3c5108cea941">

If the certificate used in SSL/TLS configuration is not signed by a publicly trusted CA, then you need to paste the content of the CA certificate in the **SSL certificate** text box. 

### Verify the connection

Click Test connection to verify if the connection can be created successfully

### Create the connection

Click Create. The connection appears on the Assets page. You can edit the connection by clicking the connection name on the Assets page.

### Add data assets from the connection

A connected data asset is a pointer to data that is accessed through a connection to an external data source. You create a connected data asset by specifying a connection, any intermediate structures or paths, and a relational table or view, a set of partitioned data files, or a file. When you access a connected data asset, the data is dynamically retrieved from the data source. See [Add data assets from the connection](https://dataplatform.cloud.ibm.com/docs/content/wsj/manage-data/connected-data.html?context=cpdaas).

To add a data asset from a connection to a project:

- From the project page, click the Assets tab, and then click Import assets > Connected data.
  <img width="1325" alt="image" src="https://github.com/user-attachments/assets/3e976acb-6b45-484e-9fed-506568470136">

- Select an existing connection asset or create a new one as the source of the data.
  <img width="1324" alt="image" src="https://github.com/user-attachments/assets/01133e7f-e1ca-43bf-868e-34e6b86901f4">
  
- Select the data you want. You can select multiple connected data assets from the same connection. Click Import.
  <img width="1934" alt="image" src="https://github.com/user-attachments/assets/3f1dde64-2c49-4dce-a29b-bce172664c6f">