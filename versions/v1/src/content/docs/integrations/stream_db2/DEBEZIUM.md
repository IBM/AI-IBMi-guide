---
title: Using Debezium
description: Using Debezium
sidebar:
    order: 1
---

# Debezium

![11964329](https://github.com/user-attachments/assets/7473ce0d-5b18-46cd-aef3-d61772b1b863)

[Debezium](https://debezium.io/) is an open source distributed platform for change data capture (CDC). It provides a common interface for streaming and processing of changes in your databases. Start it up, point it at your databases, and your apps can start responding to all of the inserts, updates, and deletes that other apps commit to your databases. Debezium is durable and fast, so your apps can respond quickly and never miss an event, even when things go wrong.

Debezium provides a growing library of [source connectors](https://debezium.io/documentation/reference/stable/connectors/index.html) for [Apache Kafka Connect](https://kafka.apache.org/documentation/#connect). Each connector ingests changes from a different database by using that database’s features for CDC, and produces change events with very similar structures, making it easy for your applications to consume and respond to events, regardless of their origin.

The **Db2 for IBM i Connector** leverages journals as a source for CDC events.

- [GitHub Repository](https://github.com/debezium/debezium-connector-ibmi)

- [Maven Artifacts](https://central.sonatype.com/artifact/io.debezium/debezium-connector-ibmi)

Debezium reference materials:

- [Documentation](https://debezium.io/documentation/)

- [Architecture](https://debezium.io/documentation/reference/stable/architecture.html)

- [Features](https://debezium.io/documentation/reference/stable/features.html)