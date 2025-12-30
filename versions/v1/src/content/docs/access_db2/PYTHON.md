---
title: Python programs
description: Python programs
sidebar:
    order: 2
---

# Access Db2 from a Python application
There are several good ways to access Db2 from a Python application, some of which are using Mapepire, and using Trino. Mapepire is the best choice when you only have a single data source, but when multiple data sources are involved, Trino may be a better option.

## Mapepire
Accessing Db2 from a Python application can be simplified using Mapepire, a database access layer built on secure web sockets. Unlike traditional Db2 drivers, Mapepire requires no native dependencies on the client machine, making it an ideal choice for cloud-native deployments across various platforms, including Red Hat UBI, Alpine Linux containers, and major cloud services like IBM Cloud, AWS, and Azure. By leveraging Mapepire, developers can establish a secure connection to Db2 for i with minimal setup, ensuring encrypted communication over a single port.

To get started, install the mapepire-python package and configure connection credentials in a .ini file. Using Python's `configparser`, credentials are loaded and passed to a `DaemonServer` object, which establishes the connection. Queries can then be executed synchronously with `SQLJob` or asynchronously using `PoolJob` and `Pool` for concurrent execution. The results are returned in JSON format, including metadata about the query execution. This flexibility allows Python developers to integrate Db2 seamlessly into modern applications while maintaining security and scalability.

To learn more see the official [Mapepire documentation](https://mapepire-ibmi.github.io/).


## Trino

Trino is a distributed SQL query engine designed for fast analytics on large datasets. It allows querying data from multiple data sources, including Db2, PostgreSQL, MySQL, and even data lakes like Amazon S3 or HDFS. If your application needs to combine data from Db2 and other sources in real-time, Trino provides an efficient way to run federated queries without the need for complex ETL processes. To learn more about Trino, check out the official [Trino Documentation](https://trino.io/). Note, that when querying Db2 on IBM i from Trino, you will need to download the [trino-jtopen connector](https://github.com/wAVeckx/trino-jtopen).