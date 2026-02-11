# Single Responsibility Principle (SRP)

El Principio de Responsabilidad Única establece que una clase debe tener una única razón para cambiar, es decir, debe tener una sola responsabilidad o función dentro del sistema. Esto significa que cada clase debe encargarse de una única parte del funcionamiento del programa, lo que facilita su mantenimiento y mejora la modularidad del código.

### Versión Mal Aplicada del Principio de Responsabilidad Única
```java
class Order {
  calculateTotal() { }
  saveToDatabase() { }
  sendConfirmationEmail() { }
}
```

### Versión Bien Aplicada del Principio de Responsabilidad Única
```java
class Order {
  calculateTotal() { }
}
class OrderRepository {
  saveToDatabase(order) { }
}
class EmailService {
  sendConfirmation(order) { }
}
```
