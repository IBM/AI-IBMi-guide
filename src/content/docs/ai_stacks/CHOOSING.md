---
title: Choosing an AI stack
description: Choosing an AI stack
sidebar:
    order: 1
---


There are several options for deploying an AI stack to ingest IBM i data, train models,
and deploy to production. This guide aims to summarize some of these options.

## Rocket Cognitive Environment (RocketCE)

RocketCE offers a POWER-optimized software stack for running AI workloads.
It has builtin exploitation of the [AI acceleration of the Power chipset](../mma).
The product aims to minimize the entry barrier for AI by natively using Python
packages on Linux LPARS, without any container platform needed. 
Benefit from over 200 packages optimized for IBM Power10 and backed by enterprise
support from IBM and Rocket.

**Why choose it?**
- Keep your entire AI lifecycle on premise
- Exploit AI acceleration in IBM's Power hardware
- No container platform (such as OpenShift or Kubernetes) needed
- Evaluate at no cost

**Resources**
- [Announcement](https://www.ibm.com/docs/en/announcements/rocketce-aiml-power-support?region=US)
- [Community forum](https://ibm.biz/rocketce-power)

## Rocket AI Hub

Rocket AI hub provides a development-centric data & AI environment (data scientists,
developers, ops, scientists, …) and get access to the most up-to-date frameworks & tools
at no license costs on top of Red Hat OpenShift or vanilla Kubernetes. AI Hub also takes
advantage of the [AI acceleration of the Power chipset](../mma).

Since AI Hub runs on a container platform, it allows you to start small and scale big
over time. Plus, it includes a suite of advanced tooling to make the AI lifecycle easier,
such as:
- [KServe](https://github.com/kserve/kserve), an open source framework for serving ML models. It is based on the [Open API specification](https://swagger.io/).
- [Kubeflow](https://github.com/kubeflow), an open source platform for machine learning based on Google's TensorFlow and Keras.
- [Kubeflow Pipelines](https://github.com/kubeflow/pipelines), an open source framework for building and deploying machine learning pipelines. It includes a suite of components to deploy, manage and monitor ML models.
- [Katib](https://github.com/kubeflow/katib), an open source framework for automated machine learning (AutoML). 


**Why choose it?**
- Keep your entire AI lifecycle on premise
- Exploit AI acceleration in IBM's Power hardware
- Leverage a container platform (such as OpenShift or Kubernetes) and advanced orchestration and deployment tools
- Evaluate at no cost

**Resources**
- [Announcement](https://www.ibm.com/docs/en/announcements/rocket-ai-hub-power)

## Watsonx

IBM watsonx is IBM's flagship AI suite. It can be deployed as a service or on-prem and consists of several components, including:
- [watsonx.ai](http://watsonx.ai), an enterprise-grade AI studio where you can train, refine, and deploy AI models.
- [watsonx.data](https://www.ibm.com/products/watsonx-data), a data lakehouse and data federation offering to power AI and analytics with all your data.
- [watsonx.governance](https://www.ibm.com/products/watsonx-governance), a toolkit to manage risk, compliance, and the AI lifecycle

**Why choose it?**
- Flexibility to consume and produce AI models in a cloud environment if needed
- Utilize tools designed with non-programmers in mind.
- Many features have trial options to help you get started

**Resources**
- [watsonx landing page](https://www.ibm.com/watsonx)

## Native IBM i libraries

Some technologies are available to run natively on IBM i, including:
- scikit-learn (some examples available [here](https://github.com/IBM/ibmi-oss-examples/tree/master/machinelearning))
- [chainer](https://github.com/chainer/chainer)

## Others

The AI stacks above are explicitly tested and certified for use with IBM i and AI workloads. However, 
there are many other viable options, including:
- [Open Data Hub](https://opendatahub.io/)
- [Red Hat AI](https://www.redhat.com/en/products/ai)
- [OpenShift AI](https://www.redhat.com/en/technologies/cloud-computing/openshift/openshift-ai)
- Building your own AI solution


