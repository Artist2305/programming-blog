---
id: "0001"
slug:  "when-should-you-use-struct-charp"
title: "When should you use struct?"
keywords: "struct, c#, class, tutorial, memory"
shortDesc: "Struct and class. How the memory is allocated?"
tags: "C# .NET .NET Core"
description: "Learn when you should use class and struct in C# language. How the memory is alocated and differences between class and struct."
date: "02 January 2021"
postImage: ../posts/post_1.svg
featuredImage: ../posts/dragonball.jpg
author: "Mateusz Szostek"
cardColor: "#b3e6ff"
firstRelatedTopic: "1"
secondRelatedTopic: "2"
thirdRelatedTopic: "0"

---

During your adventure with the C# programming language you will come across the concepts of class and struct. Perhaps it's not entirely clear when you should use struct instead of class. Good understanding of the differences in the behavior of reference types and value types is crucial in making this choice. Today I will try to explain it.

---
In this article you will read about:

1. Class and struct definition
2. Class and struct comparision
3. Conclusion

---
---
---

#### Definition of class and struct
---
**Structure** is a value type data type. You can create structure by using "struct" keyword. This concept helps you to create single variable that holds data types. It can contain constant fields, methods, indexers, properties, events, parameterized constructor, static constructors and nested types. Code below show the example how to use structure.

---

```csharp
struct Person {
   private string name; //fields
   private int age;
  
   public int Age { //property
     get {
       return age;
       }
     set {
       age = value;
       PersonAgeChanged(age);
     }
   }

  public Person(string name, int age ) //parametarized constructor
  {
    this.name = name;
    this.age = age;
  }

  public static Person GetPerson() //static method
  {
    return new Person();
  }

  public event Action<int> PersonAgeChanged; //event
}
```
*Example of using structure*

---
---
---
**Class** is like blueprint for creating objects. For example we could have class Car that contain fields like color, model etc. and then create red Ferrari or blue Porshe object. In object-oriented programming, a class define funcionality and kind of data thier objects will have, like fields, properties, methods, events etc. We can declare class by using "class" keyword as show the example below:

---

```csharp
class Car {
   private string brand; //fields
   private string color;
  
   public int Color { //property
     get {
       return color;
       }
     set {
       color = value;
       CarColorChanged(color);
     }
   }
   
  public Car( ) //constructor
  {
  }

  public Car(string brand, string color ) //parametarized constructor
  {
    this.name = name;
    this.age = age;
  }

  public void Drive() //method
  {
    Console.WriteLine("The car pull forward!");
  }

  public event Action<string> CarColorChanged; //event
}
```
*Example of using class*

---
---
---
#### Comparision of class and struct

---
---
Basically we can say that struct and classes are almost equivalent . The structures are the "light" versions of classes. The major differences are: 
1. Classes provide re-usability called inheritance and flexiblity of combining data and methods. Structs should be only used for grouping data.
2. Class is a reference type and struct is value type.
3. Class is created on heap memory and structure is created on stack memory.
4. Class is pass-by-copy and struct is pass-by-reference.
5. Class support inheritance while structures does not.
6. Class members are private by default, whereas members of struct are public by default.
7. Size of empty class equal 1 Byte where size of empty structure is 0 Bytes.
8. Struct can not be collected by garbage collector, whereas class allow to perform cleanup before object is delocated(by using garbage collector).
9. Struct cannot have a default constructor (a constructor without parameters) or a destructor.
10. Structs can be instantiated without using a new operator.


---
#### Conclusion

---
---
To answer this question, we must have a good understanding of all the differences. Therefore, you should only use struct if you are sure that:
1. It logically represents a single value, like primitive types (int, double, etc.).
2. It is commonly short-lived or are commonly embedded in other objects.
3. It has an instance size under 16 bytes.
4. It is immutable.
5. It should not be boxed and un-boxed frequently.

---
---
---
*Written by Mateusz Szostek*