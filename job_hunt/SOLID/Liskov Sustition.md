# Liskov Sustitution Principle (LSP)

El Principio de Sustitución de Liskov establece que los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin alterar el comportamiento del programa. Esto significa que las clases derivadas deben cumplir con las expectativas establecidas por la clase base, lo que garantiza la coherencia y la previsibilidad en el uso de las clases.

### Versión Mal Aplicada del Principio de Liskov Sustitución
```java
class Bird {
  fly() { }
}
class Sparrow extends Bird {
  fly() { } }
class Penguin extends Bird {
  fly() { throw new Error("Los pingüinos no pueden volar"); }
}   

### Versión Bien Aplicada del Principio de Liskov Sustitución

```java
class Bird {
  eat() { }
}
class Sparrow extends Bird {
  fly() { }
}
class Penguin extends Bird {
  // No implementa fly(), ya que los pingüinos no vuelan
}
```