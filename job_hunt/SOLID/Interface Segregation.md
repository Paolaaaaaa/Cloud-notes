# Interface Segregation Principle
El Principio de Segregación de Interfaces establece que los clientes no deben verse obligados a depender de interfaces que no utilizan. Esto significa que es mejor tener varias interfaces específicas para cada tipo de cliente en lugar de una única interfaz general que incluya métodos que algunos clientes no necesitan.

### Versión Mal Aplicada del Principio de Segregación de Interfaces
```java
interface Worker {
  work();
  eat();
}
class HumanWorker implements Worker {
  work() { /* ... */ }
  eat() { /* ... */ }
}
class RobotWorker implements Worker {
  work() { /* ... */ }
  eat() { throw new Error("Los robots no comen"); }
}
```

### Versión Bien Aplicada del Principio de Segregación de Interfaces
```java
interface Workable { work(); }
interface Eatable { eat(); }
interface Sleepable { sleep(); }
class Human implements Workable, Eatable, Sleepable { }
class Robot implements Workable { }  // Solo lo que necesita
```