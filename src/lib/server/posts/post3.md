---
id: 'ac45bb5a-d302-4582-85e6-cb7d3ad96dcc'
date: 2024-12-19
title: 'The pitfalls of abstract classes'
summary: 'Yes, yet another blog post about the Liskov Substitution Principle. This time, however, we will focus on why this violation still occurs fairly often even though it seems simple enough to avoid it.'
---

Most of us have heard of the Liskov Substitution Principle (LSP) as part of the well-known [SOLID Principles](https://en.wikipedia.org/wiki/SOLID). There's already many great examples of this principle, alas usually quite abstract ones (no pun intended). So when I recently came across a LSP violation in the wild, I was wondering how this came about. The reason turned out to be implementation details that creeped into the abstractions, which I will explain in more detail below. But first, let's set the table.

Simply put, the Liskov Substitution Principle states that any object of class X should be replacable with an object of sub-class Y, extending class X, without breaking the program. The most common example I've seen regarding this is about birds. Imagine you have a super-class *Bird* that implements basic bird behaviour like flying and walking. You then implement sub-classes of specific birds to differentiate for example how they hibernate. An example implementation could look as follows.

```java
public abstract class Bird {
   public void fly(){
       // default flying method
   }

   public void walk(){
       // default walking method

    public abstract void hibernate();
}

public class Swallow extends Bird {
    public void hibernate(){
        // go south
    }
}

public class Penguin extends Bird {
    public void hibernate(){
        // What's that?
    }

    @Override void fly(){
       // Well, this is gonna be akward... 
    }
}
```

Penguins clearly don't work well with our definition of birds in general. Our differentiating feature, hibernation, defaults to no operation as they are used to cold climates and flying is off the table altogether. If we now loop through an array of birds to let all of them fly, we would probably cause an exception as soon as the first penguin has his turn. Using the hibernate method instead would not necessarily break our program. Nevertheless, calling methods that have no effect whatsoever is definitely not in line with best practices. 

Since this is a toy example without any real requirements, I will not go into possible solutions. An extensive list of approaches can be found in the wikipedia article about the so called [Circle-Ellipse Problem](https://en.wikipedia.org/wiki/Circle%E2%80%93ellipse_problem#Possible_solutions), which is another common example of a LSP violation.

Instead we move on to the actual example the caught my eye in a recent project. In this situation, I was looking at code to store files such as documents, images, etc. Apparently, there were multiple ways to achieve this, depending on the client's setup. Files could for instance be stored directly on the server itself, but they could also be sent through an API to a third-party document management system. Strongly simplified, this would look as follows.

```java
public abstract class StorageManager {
    public abstract void saveDocument(string id, byte[] data);
    public abstract byte[] loadDocument(string id);
    public abstract void archiveDocument(string id);
    }

public class ExternalDMSManager extends StorageManager {
    
    private api = new DMS();

    public void saveDocument(string id, byte[] data){
        api.saveDocument(string id, byte([] data);
    }

    public byte[] loadDocument(string id){
        api.loadDocument(string id);
    }

    public void archiveDocument(string id){
        api.archiveDocument(string id);
    }
}

public class FileSystemManager extends StorageManager {

    public void saveDocument(string id, byte[] data){
        FileOutputStream fos = new FileOutputStream(id);
        ...
    }

    public byte[] loadDocument(string id){
        FileInputStream fis = new FileInputStream(id)
        ...
    }

    public void archiveDocument(string id){
        // Not applicable - nop
    }
}
```

Do you notice the similarity to the bird example? Technically, this is not even a violation of LSP as mentioned above. We could in principle substitute all occurences of a StorageManager with instances of a FileSystemManager. But again, it's quite misleading to provide a method that literally does nothing.

The reason for this issue stems from the capability of the document storage system used with some clients. Apparently, these systems were able to archive files, meaning they could no longer be modified or overwritten. Since the whole program worked with the abstraction of a *StorageManager* the developers felt it necessary to add the archive-method to the base class
