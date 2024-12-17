---
id: '28a378a9-dcab-41f1-9325-e4a464552fd2'
date: 2024-12-16
title: 'The power of simplification'
summary: 'When impementing solutions to overwhelming problems, the resulting complexity can often lead to bugs, misunderstandings and hard to maintain code. In such situations, it is crucial to simplify issues as much as possible. Requirements can be questioned, dependencies restructured and sometimes a simply a change of perspective might help.'
---

The starting point for this post is the very first problem on [Project Euler](https://www.projecteuler.net), which I will quote below. Project Euler is a collection of math problems that can be solved programmatically. Quite similar to LeetCode but with less focus on algorithms and data structures. The problem in question looks as follows:

> *If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.*

> *Find the sum of all the multiples of 3 or 5 below 1000.*

Of course, if you ever heard of for loops before, this problem doesn't look too challenging. A possible solution in python could be:

```python
sum = 0

for i in range(1000):
    if i % 3 == 0 or i % 5 == 0:
        sum = sum + i

print(sum)
```

However, there is a completely different and at least in some respect also simpler approach to solving this puzzle. But before diving further into it, I need to recount one of my favourite anecdotes about Carl Friedrich Gauss and summations.

As the story goes, when young Gauss was still in elementary school, his teacher asked the class to sum up all numbers between 1 and 100. To the teacher's surprise, Gauss came up to him a couple of minutes later and presented the correct result instead of scribbling wildly on his board like the rest of the class. When asked how he managed to sum up all these numbers so quickly, Gauss replied that he noticed a pattern: 1 plus 100 is equal to 101, so is 2 and 99 as well as 3 and 98. Continuing in this manner, all the numbers up to 100 can be expressed as 50 times 101. Thus the formula to count all numbers from 1 to n is $\frac{n(n+1)}{2}$.

Back to our problem, we start the alternative approach by reformulating the task: we build sums of multiples of 3 and 5 below 1000, respectively. We also subtract multiples of their least common multiple, which is 15. This is due to the fact that these numbers occur twice as multiples of both 3 and 5 and are therefore counted twice.

$$
\begin{alignat}{5}
&\space &3 + &6 + &9 +  &\ldots + 999 \\
&+ ( &5 + &10 + &15 + &\ldots + 995) \\
&- ( &15 + &30 + &45 + &\ldots + 990) \\
\end{alignat}
$$

Now this formula transforms nicely.

$$
\begin{alignat}{5}
3& (&1 + &2 + &3 +  &\ldots + 333) \\
+ 5&( &1 + &2 + &3 + &\ldots + 199) \\
- 15&( &1 + &2 + &3 + &\ldots + 66) \\
\end{alignat}
$$

At this point, the connection to the story above should become quite obvious. In fact, we only need to apply the resulting formula three times in order to solve the problem.

$$
\begin{align}
3&\left(\frac{333\cdot 334}{2}\right) \\
+ 5&\left(\frac{199 \cdot 200}{2}\right) \\
- 15&\left(\frac{66 \cdot 67}{2}\right) \\
=& \space 233168
\end{align}
$$

Admittedly, in this rather simple puzzle, even the straight-forward approach was rather simple and it's hard to see the benefits of the alternate solution. However, I find it fascinating, that it could technically be solved without using any additional devices at all! In this respect, it serves as an analogy to many real business problems where constrained resources, complex requirements and chaotic legacy code bases can leave you clueless about how to implement the next feature or solve a nasty bug. Maybe there's a much simpler way if you only look far enough.
