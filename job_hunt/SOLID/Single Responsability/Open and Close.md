# Open and Close Principle

Un componente debee estar abierto para su extensión, pero cerrado para su modificación. Esto significa que el comportamiento de un componente puede ser extendido sin modificar su código fuente, lo que ayuda a evitar errores y facilita la evolución del software.


### Versión Mal Aplicada del Principio de Abierto/Cerrado
```java
class PaymentProcessor {
  process(type) {
    if (type === 'credit') { /* ... */ }
    else if (type === 'debit') { /* ... */ }
    // Cada nuevo tipo requiere modificar esta clase
  }
}
``` 

### Versión Bien Aplicada del Principio de Abierto/Cerrado
```java

class PaymentProcessor {
  process(paymentMethod) {
    paymentMethod.pay();  // Abierto a extensión, cerrado a modificación
  }
}
class CreditCardPayment {
  pay() { /* ... */ }
}
class DebitCardPayment {
  pay() { /* ... */ }
}
```