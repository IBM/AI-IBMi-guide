---
title: Choosing an AI stack
description: Choosing an AI stack
sidebar:
    order: 1
---

# Choosing an AI stack

When choosing an AI stack for IBM i, your approach depends on your infrastructure.

If you're working with IBM Cloud, watsonx is a good choice. It provides scalable AI services for fine-tuning and inferencing, seamlessly integrating with IBM’s cloud-native ecosystem. The watsonx-SDK can be used directly from RPG or SQL programs to interact with watsonx models.

For on-prem Power machines, Rocket CE is a strong option, offering AI and data science capabilities optimized for IBM Power hardware.

If you need to ingest IBM i DB2 data into Python-based AI workflows, Mapepire is a great tool for efficient data extraction and processing.

If your AI workflows require working with federated data across multiple sources, Trino is an excellent choice for running distributed queries.

For real-time inferencing on IBM Power, Tyrico is a powerful tool that enables low-latency AI model execution.

By selecting the right combination of tools, you can ensure seamless AI integration into your IBM i environment while leveraging the best available resources for cloud, on-prem, and hybrid setups.