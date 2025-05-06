---
title: Running AI natively on IBM i
description: Running AI solutions natively on IBM i
sidebar:
    order: 4
---


### LLaMa.cpp

<img src="https://github.com/user-attachments/assets/b8942b7d-daf8-4c9d-ade4-a88d4ce0683b" width=400>

[LLaMa.cpp](https://github.com/ggml-org/llama.cpp) is becoming a popular industry solution
for running Large Language Models (LLMs). It can now be run natively on IBM i!

In the near future, LLaMa.cpp will likely be available as an IBM i RPM and
installable with [the `yum` package manager](http://ibm.biz/ibmi-rpms)

In the meantime, you can build and deploy LLaMa.cpp yourself by following the
steps documented [in this deployment guide](http://ibm.biz/llamacpp-ibmi)

## scikit-learn (SKLearn)

<img src="https://github.com/user-attachments/assets/8415899a-c8ba-4ef7-b4f2-4ed776719ad5" width=400>

[scikit-learn](https://scikit-learn.org/) provides robust machine learning capabilities for Python programs. It provides support
for a number of capabilities including classification, regression, and clustering.

The SciKit-Learn packages for Python are available in RPM form and can be installed via:
```bash
/QOpenSys/pkgs/bin/yum install python39-scikit-learn
```

## chainer

<img src="https://github.com/user-attachments/assets/7c1495ec-7a79-448c-8e09-f8eb2bdb5dd5" width=400>

[chainer](https://chainer.org/) provides "A Powerful, Flexible, and Intuitive Framework for Neural Networks."
It can be installed with a simple `pip` invocation, for instance with Python 3.13:

```bash
/QOpenSys/pkgs/bin/python3.13 install chainer
```
