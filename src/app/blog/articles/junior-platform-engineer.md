---
title: "The Junior Platform Engineer"
category: "Software Engineering"
date: "03-11-2026"
---

# The Junior Platform Engineer

![ND Game](/articles/nd_game.png)

## Introduction
My hope with this article is to provide solace to other engineers, in the same boat as me, whom are starting off their career as a platform engineer.
It's not the most common path to take to start your career off! So, if you are an early career platform engineer reading this, or simply want lived experience for how it was starting off as a Junior platform engineer, this is the article for you.

## Stumbling Into Platform Engineering
Like many aspiring early career engineers, I was always seeking out new technologies and tools to see what "niche" would grab ahold of my attention. I wanted to know early on which domain in engineering would ultimately become my home.
Would it be strictly frontend? I did like working on Vue.js when I was on the frontend team at Nextcloud. Would it be strictly backend work, like I had done while I was at Enova International?

Instead, what excited me the most came from the curiosity of wanting to understan the underlying platform that my services were running during my internships.My intern projects showed me the *breadth* that goes into software engineering. I had to touch on-premise databases, service architecture, handling authentication and SHA encrpytion/decryption... It was amazing. I loved being able to show to the engineers and customers *around me* that I worked with everyday a toold that would help them out. That satisfaction was amazing, and I was learning something new everyday.

One thing bothered me, though. Despite crafting the logic behind my services... I had no clue *where* my services lived. Due to my internships being
inherently short lived, this layer of hosting was always abstracted away from me. All I knew was that everytime my pull request was merged, my changes would go into our CI/CD pipelines, usually handled by Jenkins. I vividly remember one pull request change ended up breaking our production service, leading to me scraping through the error logs that Jenkins provided. I was used to seeing error logs on the terminal, and not on some unknown tool like Jenkins. 

After this occured, I had enough with not knowing how the underlying platform looked like. I wanted to be able to understand at least 1 layer under the technology that I was working on, and yet shipping my service to production without knowing what Jenkins was doing felt like I was walking on a platform 10 feet above that I did not truly understand. After work, I found the following video, and it introduced me into the world of platform engineering.

https://youtu.be/7KCS70sCoK0

At my internship at Nextdoor before graduating, I was given the choice between several teams... but the team that had stuck out the most to me was "Cloud Engineering". *Pshhhh*... not only did the name SOUND sick, but after doing some research on what sort of work these teams historically work on, I noticed that this was the *exact* work that was abstracted away from me during my last internship at Enova. This was the perfect oppourtunity to hack away at the platform abstractions that puzzled me during my last internship, and so I knew I had to take this chance. Ironically, before receiving the form to choose my team placement as well, I had found the following video by NeetCode that, if I am being honest, also pushed me into wanting to work on cloud tooling and services.

https://www.youtube.com/watch?v=gcfB8iIPtbY

So, without much experience, I fly right over to San Francisco with my head (and metaphoric keyboard) to give my best shot.

## The Ultimate Kickstart
Luckily, I had the best mentor one could ever DREAM of to start off my career. It is not an understatement to say that my mentor at Nextdoor, [Satbir Chahal](https://www.linkedin.com/in/schahal/), will probably be one of the smartest and *kindest* people that I will ever have the pleasure to work with.
I dived in headsfirst to learning what all these Cloud Native Computing Foundation tools where (CNCF from here out). Kubernetes... or k8s? What's that?
Deployments, Flagger, canary's... do you mean, like, the bird?

There was so much to learn... but finally, it felt like nothing was being abstracted away from me. Yes, the actual CODE was being abstracted away, but at not point in reading the documentation for the CNCF tooling did it ever feel like I was not trusted with the information of what the layer underneath me way. Futrhermore, because most of the toolings are open source, I was able to read and even upstream changes to the code handling the logic. It felt as though I had the entire view of the products ecosystem available to me. The work I was also doing once I understood the concepts made the product **more robust** to errors. I myself knew the pain of pushing a breaking change to production, only to have to revert the change quickly, all the while worrying whether the downtime would get me into trouble.

The internship was a success, in many ways! Not only did I get to work on multiple problems that impacted the products infrastructure, but I also got to personal helped other engineers, other service maintainers, and other *friends* that I met while at Nextdoor. My changes brought value to the company *but also to the people that I grabbed coffee with day to day*. I cannot stress this enough - being the engineer for other engineers brought my days so much joy.

## Junior Imposter Syndrome
Despite having completed my internship successfully, truthfully, I was experiencing some imposter syndrome at the start of my senior year of college.
I knew only one other Junior platform engineer (shoutout to STEVEN!), but it felt like most other folks were doing either product or data engineering.
I also made the mistake by scrolling too much on social media, and reading that "junior engineers being platform engineers was like learning how to run before learning how to walk". Online, a lot of the common rhetoric surrounding being a platform engineer is that the teams tend to be *senior heavy*, as they tend to have experienced dealing with large scale systems naturally during their career.

The dichotomy between what I was hearing and what I enjoyed was something that bothered me for a long time. It was only until sometime around the turn of my second semester of senior year in college, where I was reminiscing about my accomplishments at Nextdoor, that I realized that the seniority I have does not matter when the work that I was doing was **fun, impactful, and made the engineers around me happier**. The work that I was doing was interesting, unabstracted, and low level. It was challenging. It placed me right in the technological eye of the storm that I enjoyed being in, and I expect many others who have gotten this far also do.

## Where I Go Forward
Going forward, I am lucky enough to say that my first full time job will still be within platform engineering. While I still do love building on the product side (I mean, I made this blog just to always have something to keep working on that did not require me to orchestrate VM's!), for now, I'll be the Junior platform engineer within my team. I'll continue constantly learning, improving, and being the one in the team meetings to ask "what is this for?", until I hopefully one day become the person on the other end of the question, answering another Juniors question.

If you love being able to see the entire technological ecosystem of a product, I could not recommend platform engineering more.
If you also enjoy helping out other engineers, then platform work is also for you. Whether you are a Junior, an intern, or a Senior+, so long as you love the work and ability to help the people you interact with daily, it is never wrong to choose platform engineering.

That's all I have to say about the topic. Thank you for reading!