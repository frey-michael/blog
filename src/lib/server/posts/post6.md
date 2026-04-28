---
id: '207451af-c484-4f2f-bb7c-e702cea2f3be'
date: 2026-04-28
title: 'tbd'
summary: 'tbd'
---

In the introductory blog post about Data Mesh as a Service, we discovered one particular challenge to optimize upstream dependencies. This time, we want to take a closer look at how to tackle this issue. But first let us revisit the problem in more detail.

## What are upstream dependencies and why should we bother?

In the realm of data products, there are more often than not layers of them. In the well-known [medallion architecture](https://www.databricks.com/blog/what-is-medallion-architecture) for instance, you will start out with raw data in the Bronze layer, clean and validate it in Silver and finally provide consumption-ready reports in Gold. This in turn means that any data product in Gold will have one or more upstream dependencies to data products in Silver which again are dependent on data products in Bronze.

INSERT IMAGE AND DESCRIBE IT.

While there is no way around such dependencies, we want to reduce coupling of data products and make them as coherent as possible. In other words, a data product should serve a single purpose but serve it well. This way, any dependency to a coherent data product will be well justified and make use of it as a whole. As a counterexample, assume that you create a single data product with all of your raw data in it. Now every single data product in Silver will have a dependency to your one and only Bronze data product. On the consumer side, this means you have to deal with a lot of unneccessary mental load. Furthermore, any change of your single upstream dependency might affect you. Even though, you only use a fraction of the data product, you will need to painstakingly check with every change, whether the part relevant to you was involved in the update.

Recall that we are working on so-called Managed Data Products, that are used by different companies on their respective platform. In this case, having misaligned dependencies becomes suddenly much more expensive - quite literally. Not only do different customers have to deal with the already mentioned disadvantages of bloated products, they additionally will also need to load and compute data they do not really need, simply because it "came with the package".

## Problem Setting

When we started out creating managed data products, we had two things ready: working data marts from the existing data warehouses and an extensive analysis, which tables from the source database are being used in which data marts. Our initial plan was pretty simple - put every data mart into a separate gold data product and group source tables into sensibles bronze products to optimize dependencies. Notice that silver is missing in this picture, but making sure that raw source tables are already in optimized packages will help us in any case.

The picture below shows an example we are trying to avoid. There are three gold product with dependencies - displayed as black arrows - to the bronze products. Each bronze product is essentially a collection of source tables. While the gold product in the middle depends on two different bronze products, it actually only uses one table of each. Thus, in the worst case, the gold product will require a customer to load seven tables while only using two of them.

INSERT IMAGE HERE

## Linear Programming to the Rescue!

A pretty neat way to maximize or minimize a target with certain constraints is Linear Programming (LP). As stated in the name, the only requirement to use this approach is that both the target and the constraints can be expressed as linear relationships. But let us make it more accessible with a small example.

Assume you are the head of a manufacturing plant. Your plant produces both balls and sticks for sports. Both of these articles use up a certain amount of your resources (measured in money) and require time of your employees to actually produce them (measured in hours). Assume a ball requires 3 hours time and 8$ worth of materials, while a stick can be made within hour from 5$ worth of resources. You have 60 hours and a budget of 250$ for this week's production. What should you have produced in which quantities?
