# Fundamentos

## Design Patterns
Un patrón de diseño es una solución reutilizable a un problema común en el diseño en el código. No es la única forma, es un lenguaje compartido para explicar desiciones.

> Ejemplo - Singleton: Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Útil para recursos compartidos como conexiones a bases de datos.


## Design Pattern vs Architectural Pattern

| Aspecto | Design Pattern | Architectural Pattern |
|---------|----------------|---------------------|
| **Definición** | Desiciones a nivel de clases/objetos | Organización a nivel de sistema (capas, servicios ) |
| **Nivel de abstracción** | Bajo | Alto |
| **Aplicación** | En el código fuente de una aplicación | En la arquitectura general de una aplicación |
| **Ejemplo** | Singleton, Factory, Observer | MVC, Layered Architecture, Microservices, Event-Driven Architecture |

## Tipos de patrones de diseño
- **Creacionales**: Cómo instanciar sin acoplar. Ej: Singleton, Factory, Builder.
- **Estructurales**: Cómo conectar componentes. Ej: Adapter, Decorator, Facade.
- **Comportamentales**: Cómo gestionar la comunicación entre objetos. Ej: Observer, Strategy, Command.


## Singleton
Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
- **Uso**: Configuraciones, conexiones a bases de datos, logging.
- **Ejemplo**: Logger, Database Connection Manager.


