# ts-design-patterns

 GoF (Gang of Four) patterns applied with TypeScript according to the book [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns). These patterns are classified according to their 3 purposes:

**Creational patterns**: 
>Creation patterns are those that abstract and/or postpone the creation process of objects. They help make a system independent of how its objects are created, composed, and represented. A class creation pattern uses inheritance to vary the class that is instantiated, whereas an object creation pattern will delegate instantiation to another object. Creation patterns become important as systems evolve to rely more on object composition than class inheritance. Composition-based development makes it possible for objects to be composed without the need to expose their interior as with class inheritance, which makes it possible to define behavior dynamically and the emphasis shifts from coding rigidly to a set behavior, for defining a smaller set of behaviors that can be composed in any number to define more complex behaviors. There are two recurring themes in these patterns. First, they all encapsulate knowledge about which concrete classes are used by the system. Second, they hide the way these classes are created and assembled. All the system generally knows about objects is that their classes are defined by abstract classes. Consequently, creation patterns give a lot of flexibility in what is created, who creates it, how and when it is created. They allow you to configure a system with “product” objects that vary widely in structure and functionality. The configuration can be static (that is, specified at compile time) or dynamic (at runtime).

**Structural patterns**:
>Structural patterns are concerned with how classes and objects are composed to form larger structures. Class ones use inheritance to compose interfaces or implementations, and object ones describe ways to compose objects to obtain new functionality. The flexibility gained by object composition comes from the ability to change composition at runtime which is not possible with static composition (class inheritance).

**Behavioral patterns**:
>Behavior patterns focus on algorithms and assignments of responsibilities between objects. They not only describe patterns of objects or classes, but also patterns of communication between objects. Class behavior patterns use inheritance to distribute behavior between classes, and object behavior patterns use object composition as a counterpart to inheritance. Some describe it as groups of objects that cooperate to perform a task that could not be performed by an object alone.