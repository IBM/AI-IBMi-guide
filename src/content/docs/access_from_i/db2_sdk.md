---
title: SDK for Db2
description: SDK for Db2
sidebar:
    order: 1
---

A Db2 SDK for connecting to various services is now available. 
Please see [the project documentation](https://ibm.github.io/AI-SDK-Db2-IBMi/) fore more information.

It provides SQL connectivity to a whole host of things, including:
- [IBM watsonx.ai](http://watsonx.ai)
- [Ollama](http://ollama.com)
- OpenAI and OpenAI-compliant solutions, such as:
  - [LLaMa.cpp](https://github.com/ggml-org/llama.cpp) (including [native deployment on IBM i](http://ibm.biz/llamacpp-ibmi))
  - [Rocket CE](https://ibm.biz/rocketce-power)
  - [vLLM](https://docs.vllm.ai/)
  - [LM Studio](https://lmstudio.ai/)
- [Kafka](http://kafka.apache.org)
- [Slack](http://slack.com)
- [Twilio (SMS)](https://www.twilio.com/en-us/messaging/channels/sms)
- [PASE commands](https://www.ibm.com/docs/en/i/7.3.0?topic=programming-pase-i)


## Interacting with the SDK from RPG

If you need to call SDK functions from RPG, you can use embedded SQL within your RPGLE program:
```
EXEC SQL
    VALUES dbsdk_v1.wx_generate('Hello world') INTO :response;
```
