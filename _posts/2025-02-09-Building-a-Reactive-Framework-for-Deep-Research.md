---
title: |
    Building a Reactive Framework for Deep Research: Key Insights from Three Weeks of Development
description: >-
   How Parallel Thinking, Stream Management, and Injecting “Doubt” Shape Next-Gen AI Systems
author: Mahmudur R Manna
date: 2025-02-09 20:55:00 +0600
categories: [Data Science, AI]
tags: [Artificial Intelligence, Reasoning, Data]
pin: true
image:
  path: '/assets/media/deepresearch.jpg'
---



**Originally Posted on Medium AI Advances Publication:** [_Building a Reactive Framework for Deep Research: Key Insights from Three Weeks of Development_](https://medium.com/ai-advances/building-a-reactive-framework-for-deep-research-key-insights-from-three-weeks-of-development-8dfbf2243aea?sk=70651ba89a9c5c28dfaf3465e9b233c4)

* * *

> It wasn’t GPT integration or thread management that kept me busy for three weeks, but rather the numerous Stream Management tasks in both Backend and Frontend.

> **The Core Idea: Moving Beyond Sequential Chain of Thought**Traditional **Chain of Thought (CoT)** frameworks for AI research rely on linear, step-by-step reasoning. While effective, they struggle with dynamic problem-solving — real-world challenges demand parallel exploration, adaptability to new information, and the ability to “think” from multiple angles simultaneously.
> **My goal?** To build a reactive framework where AI agents collaborate in parallel, cross-verify findings, and synthesize insights dynamically. Here’s what I learned over three intense weeks of development.

### Inception

I’ve long been a fan of [_Netty_](https://netty.io/) — a powerful asynchronous, event-driven network application framework. Back in 2016–2018, I spent a good portion of my career building frameworks around _Netty_, well before Reactive Spring matured. If you’re curious about those early endeavors, here are two articles that capture some of my work:

[**Netty & Jersey Marriage**
_Asynchronous non-blocking Microservice API Gateway_mrmanna.medium.com](https://mrmanna.medium.com/netty-jersey-marriage-b7f12ac8d4a9)

[**Cloudoffice Reactive Cloud©**
_When your frontend is full of reactive/observable components but backend communicates same old request-response per…_mrmanna.medium.com](https://mrmanna.medium.com/cloudoffice-reactive-cloud-a877d899e3e3)

My fascination with the term “**Reactive**” stems from a broader view: I see the entire universe as a reactive environment, not just software runtimes. Life itself is full of unpredictability — events unfold unexpectedly, compelling us to respond in real time. Those who prepare for multiple scenarios often fare better than those who plan for a single outcome. Since uncertainty is inevitable, why not **embrace** it and **adopt** a more **reactive** mindset?

> You never know what comes next and are bound to react to whatever happens.

This perspective has naturally led me to think about AI architectures in the same way. Just as our world demands quick, adaptive responses, AI systems should also learn to adapt on the fly, reacting to changing contexts rather than relying exclusively on predefined sequences.

### Breaking the Chain: Injecting Doubt and Parallel Agents

**Chain of Thought (CoT)** is, by definition, sequential and somewhat resistant to disruptions. Even if you introduce “**Doubt**” to encourage deeper reasoning, it’s challenging to steer those actions dynamically. Interestingly, Stanford researchers discovered that simply appending “**wait**” — a tactic I liken to “**injecting doubt**” — can prompt GPT to think more thoroughly without requiring Reinforcement Learning. You can read more about it here:

[**Thinking GPT — Injecting Doubt: How Stanford’s Approach May Surpass Deepseek R1**
_Exploring How Skepticism and Test-Time Scaling Outperform Complex Reinforcement Learning_ai.gopubby.com](https://ai.gopubby.com/i-wrote-thinking-gpt-4-months-ago-now-stanford-researchers-prove-it-right-beating-deepseek-r1-13a65d7f705a)

I’ve been contemplating a similar idea since last year, but from a more **reactive** standpoint, recognizing the inherent limits of CoT. This line of thought ultimately led me to develop what I call:

#### **Reactive Thinking.**

### What Is Reactive Thinking?

In simple words, it’s not only relying on your past knowledge but also thinking based on available facts and different perspectives on the fly to arrive at a concise understanding.

> Multiple Perspectives, Facts, Morals, Verification Parallel Stream → Reactive Thinking

Interestingly, recent research also claims that multiple GPT interactions on the same topic can reduce hallucinations. I mentioned this in my paper “**Thinking GPT**” four months ago and proposed an architecture. Back then, I tried fine-tuning GPT with doubts from various perspectives. Although it didn’t attract much attention from other researchers and peers, I was convinced. So I started thinking a framework that would be inherently reactive and function in parallel. Today, I have a proof of concept.

{% include embed/youtube.html id='kX5SykY0OhM' %}
_Deep Research with Deepseek (Source: Video by Author)_

Initially, I considered building it with Python, since LangChain integrates easily with CoT. However, Java provides a better way to orient objects and manage context and threads. Spring has already done a great job with Spring AI. 
But then the main challenge arose: **Stream Management**. Being a fan of _Netty_ and having prior knowledge of _Spring Integration_ Stream Management, I integrated Spring Integration to handle multiple internal and external message buses, as well as stream publishing and subscribing.

When I started, _Deepseek R1_ didn’t exist (to me at least). I used _llama 3.1_ _and 3.2_ and built most of the framework and stream management. The results were better than those of 3.1 or 3.2, though still not on par with o1. Then _Deepseek R1_ arrived as a blessing, and I tried the 14B parameter distill model. 
However, prompting _Deepseek R1_ is entirely different from other GPTs. It took me time to understand, but I see it as a positive aspect of the evaluation, because you can now prompt in a more structured way.

### Input Processing and Output Processing

_Deepseek R1_ prompting is more programming-friendly. You can specify how to think (Input Processing) and refer to those steps in the output formatting as variables. It took some time to grasp initially, but later it felt more straightforward and controlled. Maybe I’ll write more about this in detail later, but for now, let’s focus on **Reactive Thinking**.

I won’t dive deeply into the technical architecture of the framework here, but I’ll give you a high-level overview of how these **Deep Research Agents** work in parallel.

### From Prompt to Research Paper

When a user submits a complex issue or problem, it first arrives at the **Receiver Agent**, which processes it for clarification. It then sends the clarified input to four different agents, as shown in the diagram below.

![alt](/assets/media/deepresearch_receiver.jpg)
_Receiver Agent to Parallel Agents (Source: Image by Author)_

All four agents work in parallel, unaware of each other’s internal processes, and they submit their outputs to the **Editor Agent.**

![alt](/assets/media/deepresearch_parallel.jpg)
_Parallel Agents to Editor Agent (Source: Image by Author)_

I’ve had many other insights during this journey, but I’d like to share just this much for now.

### **Key Takeaways**

**Parallel “Reactive Thinking” Improves Research**
By engaging multiple specialized agents in parallel — each with its own perspective — complex problems are examined from multiple angles, potentially reducing errors or hallucinations.

**Stream Management Is Central to Scalability**
Efficiently handling high-volume, real-time data flows requires robust stream management foundations. Tools like Netty and Spring Integration can help orchestrate concurrent tasks across agents.

**Chain of Thought vs. Injecting Doubt**
Traditional chain-of-thought prompting is sequential, limiting its adaptability mid-process. Introducing skepticism or “doubt” encourages deeper reflection, leading to more reliable outputs.

**Integration with Existing Ecosystems**
Building upon tried-and-tested frameworks (e.g., Netty, Spring Integration) can streamline development. It also supports interoperability, letting teams adopt this parallel approach without disrupting existing systems.

**Early Yet Promising**
Although still in its initial stages, this multi-agent, reactive paradigm shows promise for use in both research and industry applications, where scalable and reliable AI-driven insights are in high demand.

* * *

_Disclaimer: The views reflected in this article are the author’s views and research. And do not necessarily reflect the views of any past or present employer of the author._

By [Mahmudur R Manna](https://medium.com/@mrmanna) on [February 9, 2025](https://medium.com/p/8dfbf2243aea).

[Canonical link](https://medium.com/@mrmanna/building-a-reactive-framework-for-deep-research-key-insights-from-three-weeks-of-development-8dfbf2243aea)

Exported from [Medium](https://medium.com) on February 10, 2025.