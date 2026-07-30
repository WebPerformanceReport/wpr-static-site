---
title: "Why WebPerformance Report Exists"
description: "A conversation with Henri Helvetica about web performance, reports, and the missing last mile between data and decisions."
date: 2026-07-29
layout: layouts/post.njk
permalink: "/blog/why-webperformance-report-exists/"
pageClass: page--post
readingTime: 12
tags:
  - post
  - web-performance
  - reporting-as-a-service
  - founder-story
author:
  name: Edwin Molina Hernández
  avatar: /assets/img/blog/authors/author-photo-edwin-molina-hernandez.jpg
  github: https://github.com/edwinmh
  linkedin: https://www.linkedin.com/in/edwinmolinahernandez/
featuredImage: /assets/img/blog/why-webperformance-report-exists-hero-image.jpg
heroVideo: "hLPhaEQCpjA"
heroVideoTitle: "Watch the conversation with Henri Helvetica"
---

<p class="ui-post-lead">The conversation was not only about a product. It was about the problem that made the product necessary.</p>

_A conversation with Henri Helvetica about web performance, reports, and the missing last mile between data and decisions._

_This article is based on my conversation with Henri Helvetica on Speedy Stream. It has been edited for clarity and readability._

A few months ago, I had the opportunity to share the story behind WebPerformance Report in a conversation with Henri Helvetica. It was a meaningful moment for me, not only because I was talking about the product, but because the conversation helped me explain something deeper: why WebPerformance Report exists.

At the beginning of the interview, Henri asked me to introduce myself. That simple question took me back to the beginning of my journey with the web. I am Edwin Molina Hernández, originally from Ecuador, living in Germany for several years. I am a software engineer and today I work as Head of IT in a fashion ecommerce company in Munich, while continuing to build WebPerformance Report as a founder.

My career started at the end of the 1990s and the beginning of the 2000s. I started working in web development in Ecuador while studying at university, and later worked in Argentina, Colombia, and eventually Germany, in ecommerce, web agencies, banks, and different types of digital projects. The early web was slow, experimental, and full of discovery. Dial-up connections were common, internet access was expensive, and companies were still trying to understand what websites were and why the web would become important for business. For developers, it was an exciting time. We were learning how to build the web while the web itself was still being defined.

## When performance became measurable

Later in the conversation, Henri asked me when I became more interested in web performance. For many years, I had cared about optimizing websites. Like many developers, I wanted pages to load faster and feel better for users. But at that time, the idea of "web performance" was not as structured in my mind as it is today.

A key moment happened in 2017, when I attended a Google workshop in Munich about AMP. During one of the presentations, I saw WebPageTest being used for the first time. That moment changed how I understood performance: it was no longer only an intuition. It was measurable.

<div class="ui-post-metric-cards">
  <div class="ui-post-metric-card ui-post-metric-card--green">
    <span class="ui-post-metric-card__label">Metrics</span>
    <p class="ui-post-metric-card__desc">Measurable data points to track and improve performance systematically.</p>
  </div>
  <div class="ui-post-metric-card ui-post-metric-card--blue">
    <span class="ui-post-metric-card__label">Rules</span>
    <p class="ui-post-metric-card__desc">Established guidelines that define what good performance looks like.</p>
  </div>
  <div class="ui-post-metric-card ui-post-metric-card--green">
    <span class="ui-post-metric-card__label">Tools</span>
    <p class="ui-post-metric-card__desc">Instruments like WebPageTest and Lighthouse to measure and diagnose.</p>
  </div>
  <div class="ui-post-metric-card ui-post-metric-card--blue">
    <span class="ui-post-metric-card__label">Community</span>
    <p class="ui-post-metric-card__desc">A growing network of experts sharing knowledge about web performance.</p>
  </div>
</div>

When you have numbers, you can improve things in a more systematic way: you can compare, explain, prioritize, and create a conversation based on data instead of opinion. After that workshop, WebPageTest became part of my toolbox. I started using it in projects, combining it with Lighthouse and other performance analysis tools, reviewing websites, creating recommendations, and sharing reports with managers, clients, and technical teams.

But over time, I started to notice something important: the biggest challenge was not only measuring performance. It was communicating it.

## The moment that changed the idea

During the interview, I shared one moment that stayed with me.

A Head of Marketing once asked me directly:

> "Can you send me a performance report?"

That surprised me. The company already had technical teams. The tools existed, the data existed, the website was being monitored, but the person responsible for important business decisions still needed a clear report that explained what was happening. That moment helped me understand the real problem: there was a communication gap inside companies.

Technical teams often have access to dashboards, audits, metrics, and monitoring tools. But managers, marketers, and other decision-makers do not always have the same access, context, or time. The data exists, but it does not always reach the people who need to understand it. And when information does not reach the right person, it does not become action.

At the beginning, I thought this was a performance problem. Later, I understood it was a communication problem. Today, I see it as a culture problem, because web performance is not only about fixing technical issues. It is about helping organizations understand why performance matters, how it affects users, and how different teams can work together to improve it.

## Data should go to people

That insight became one of the core principles behind WebPerformance Report:

<div class="ui-post-callout"><p><strong>The data should go to the person, not the other way around.</strong></p></div>

Most digital tools expect users to log in, remember a URL, open a dashboard, explore charts, interpret data, and decide what matters. That model works well for experts, but not always for everyone else. In many organizations, people already have too many tools and too many dashboards. But there is one channel that almost every company still uses every day: email. The inbox is still one of the most common places where work happens: reports, tasks, alerts, and decisions all pass through it.

When I started sending performance reports directly to people's inboxes, something interesting happened.

<ul class="ui-post-checklist">
  <li>People <strong>opened</strong> them.</li>
  <li>People <strong>read</strong> them.</li>
  <li>People <strong>forwarded</strong> them.</li>
  <li>People used them to <strong>ask questions</strong>.</li>
  <li>People used them to start <strong>conversations with their technical teams</strong>.</li>
</ul>

The report arrived where people already were. That became a foundational idea for WebPerformance Report: instead of forcing people to search for insights, we deliver them. Instead of creating another dashboard to check, we send a clear report to the right person at the right time.

## Building the first reports

The first version of the idea was very simple. I did not want to manually create performance reports every time someone asked for one. WebPageTest had an API, so I started experimenting with automation. The goal was to collect performance metrics automatically, organize them, and send them as a report. I started building the first layout almost like Lego.

- What should go in the header?
- What should appear first?
- Which metrics are important for a high-level report?
- What information should be visible immediately?
- What details should link back to the original source?

WebPageTest itself was a big inspiration: it shows a clear journey from the server to the browser, giving you scores, important metrics, page size, requests, and deeper technical details when you need them. I wanted to create something simpler and more accessible: a report that managers could understand, but that technical people could also use; one that gives a clear overview and then lets users go deeper into the original source when they need more detail.

At the beginning, the project did not even have the name WebPerformance Report. One early name was "WebPageTest Newsletter." But over time, I realized the concept was not really a newsletter. A newsletter distributes content. This was different. This was automated reporting: a system that collected data from a trusted source, transformed it into a clear format, and delivered it periodically to the people who needed it. Eventually, with the help of my wife, the name became WebPerformance Report. Simple. Direct. Clear.

## Why reports still matter

Reports are one of the oldest business communication formats, and that is exactly why they are still powerful. A good report creates focus, organizes information, gives context, and helps people understand what changed, what matters, and what should happen next.

In web performance, this is especially important. A raw metric is not always enough. A Largest Contentful Paint value, a Time to First Byte result, an accessibility issue, or a security grade can be useful, but only if the person reading it understands what it means and why it matters.

A good report should not overwhelm people. It should guide them.

<ul class="ui-post-checklist">
  <li>Help a <strong>developer</strong> identify an issue.</li>
  <li>Help a <strong>marketer</strong> understand the impact on user experience.</li>
  <li>Help a <strong>manager</strong> ask better questions.</li>
  <li>Help an <strong>internal sponsor</strong> support performance work inside the organization.</li>
</ul>

This is why WebPerformance Report uses a clear visual structure with simple traffic-light signals: if something is green, the reader understands it is in a good state; if something is red, they know a conversation should start. That conversation is important, because performance improves when people understand it, not only when tools measure it.

## From performance to a 360° vision

At first, WebPerformance Report was focused on performance. But the more the product evolved, the clearer it became that modern web performance is not only about speed. A website can be fast but inaccessible, fast but insecure, fast but still fail users. Today, we see web performance as a 360° discipline that includes speed, accessibility, security, sustainability, SEO, ecommerce, analytics, and other signals that define the quality of a digital experience. That is why WebPerformance Report has started to expand beyond the original performance report.

<ul class="ui-post-checklist">
  <li>Added <strong>security reporting</strong> based on Mozilla HTTP Observatory.</li>
  <li>Added <strong>accessibility reporting</strong> based on WAVE.</li>
  <li>Exploring future reports: Google Search Console, Shopify, Google Analytics, Website Carbon, and more.</li>
</ul>

The idea is not to replace those tools. It is to amplify them. Measurement tools are excellent at observing, scanning, and generating data. WebPerformance Report adds the next layer:

<div class="ui-post-metric-cards">
  <div class="ui-post-metric-card ui-post-metric-card--blue">
    <span class="ui-post-metric-card__label">Collect</span>
    <p class="ui-post-metric-card__desc">Data from trusted measurement tools, automatically and reliably.</p>
  </div>
  <div class="ui-post-metric-card ui-post-metric-card--blue">
    <span class="ui-post-metric-card__label">Organize</span>
    <p class="ui-post-metric-card__desc">Raw metrics structured into a clear, readable format.</p>
  </div>
  <div class="ui-post-metric-card ui-post-metric-card--blue">
    <span class="ui-post-metric-card__label">Explain</span>
    <p class="ui-post-metric-card__desc">Context that turns numbers into understanding for any audience.</p>
  </div>
  <div class="ui-post-metric-card ui-post-metric-card--blue">
    <span class="ui-post-metric-card__label">Deliver</span>
    <p class="ui-post-metric-card__desc">Reports sent directly to the right person at the right time.</p>
  </div>
</div>

## Reporting-as-a-Service

During the conversation, I also explained where WebPerformance Report is going next. We are evolving from a beta product into a SaaS platform, but the deeper vision is bigger than one report type or one tool. The goal is to build a reporting layer: a system that collects data from different measurement tools, transforms it into clear reports, and delivers those reports to the right people. That is why we describe WebPerformance Report as a Reporting-as-a-Service platform.

In the current digital world, attention is fragmented. Companies use many tools, many dashboards, and many communication channels, but important information still needs a reliable way to reach people. Reports can play that role. They bring rhythm, context, and clarity into the organization; they help teams understand what is happening without adding more friction; and they can become the last mile between measurement tools and the people who need to act on the metrics. That last mile is where WebPerformance Report wants to be.

## The role of AI

We are also beginning to integrate AI into WebPerformance Report, but for us, AI is not just a feature to add because it is popular. AI becomes useful when it has the right context. Every report contains structured information about a website, its metrics, its status, and its evolution over time. With AI, we can help explain what changed, why it may matter, and what actions could be considered. For example, an AI Insight can help summarize whether the user experience is improving, whether a metric is moving in the wrong direction, or whether a technical area needs attention.

This is only the beginning. In the future, as users build more historical context inside WebPerformance Report, the platform can evolve into an AI-powered strategic advisor for digital performance: a system where users can ask questions like:

- What happened last month?
- Which reports changed the most?
- Where should we focus next?
- What risks are becoming visible?

But the principle remains the same: AI should help people understand and act, not create more noise.

## Closing the gap

WebPerformance Report exists because the digital world does not suffer from a lack of data. It suffers from a lack of clear, accessible, and actionable understanding. The tools already observe. The dashboards already exist. The metrics are already there. But between observation and action, there is still a gap.

WebPerformance Report exists to close that gap: to deliver the right information to the right person, to make performance understandable, and to help teams move from metrics to decisions, and from decisions to results.

<p class="ui-post-signature">Reports. Decisions. Results.</p>

<a class="ui-post-cta-banner" href="https://webperformancereport.com/">
  <span>Get your own report</span>
  <svg class="ui-post-cta-banner__icon" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">
    <path d="M1 8h12M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a>
