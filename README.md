
/**
 * Run 
 * npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 * 
 */

# AI Generator - Sistema de Generación Automática de Código

**Versión:** 1.0.0  
**Autor:** Ignacio Sánchez Ramírez  
**Fecha:** 25 de Junio de 2025  
**Tecnologías:** TypeScript, Next.js, React, FastAPI, PostgreSQL  

---

## Índice

1. [Visión General](#visión-general)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Motor Principal CodeGen](#motor-principal-codegen)
4. [Funcionalidades Implementadas](#funcionalidades-implementadas)
5. [Casos de Uso](#casos-de-uso)
6. [Estructura de Archivos](#estructura-de-archivos)
7. [Guía de Desarrollo](#guía-de-desarrollo)
8. [Roadmap Futuro](#roadmap-futuro)
9. [Configuración y Uso](#configuración-y-uso)
10. [Contribución](#contribución)

---

## Visión General

**AI Generator** es un sistema avanzado de generación automática de código que transforma esquemas de bases de datos SQL en aplicaciones web completas. El sistema está diseñado para eliminar el trabajo repetitivo y generar código de alta calidad de forma automática.

### Características Principales

* **Generación Automática Completa**: Desde esquemas SQL hasta aplicaciones web funcionales
* **Arquitectura Modular**: Componentes reutilizables y extensibles
* **Múltiples Lenguajes**: TypeScript, Python, SQL, JSON, CSV, Markdown
* **Personalización Avanzada**: Templates modificables y configuraciones flexibles
* **Análisis Inteligente**: Parser SQL robusto con detección automática de relaciones
* **Orientado a Resultados**: Código limpio, validado y libre de errores

---

## Arquitectura del Sistema

### Componentes Principales

```
┌─────────────────────────────────────────────────────────────┐
│                    AI GENERATOR SYSTEM                      │
├─────────────────────────────────────────────────────────────┤
│  Frontend (Next.js + React)                                │
│  ├── UI Components (Input Editors, Output Monitors)        │
│  ├── Code Generation Interface                             │
│  └── Template Management                                    │
├─────────────────────────────────────────────────────────────┤
│  CodeGen Engine (src/app_front/codegen)                    │
│  ├── SQL Parser & Analyzer                                 │
│  ├── Code Generation Classes                               │
│  ├── Template System                                       │
│  └── Type Mapping & Validation                             │
├─────────────────────────────────────────────────────────────┤
│  Output Layer                                              │
│  ├── TypeScript Entities                                   │
│  ├── FastAPI Client Services                               │
│  ├── React Components (futuro)                             │
│  └── Validation Classes                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Motor Principal CodeGen

### Ubicación: `src/app_front/codegen/`

El motor CodeGen es el corazón del sistema, compuesto por varias clases especializadas:

#### **CodeGenUtil**
```typescript
// Utilidades básicas para el sistema
class CodeGenUtil {
    static capitalize(str: string): string
    static uncapitalize(str: string): string
    static generateImports(): string
}
```

#### **CodeGenSql**
```typescript
// Procesamiento y análisis de SQL
class CodeGenSql {
    static mapSqlTypeToTypeScript(sqlType: string): string
    static getEsquemaTables(sqlScript: string): ModelTable[]
    static isNumericType(sqlType: string): boolean
    static getMaxDigitsForNumericType(sqlType: string): number
}
```

#### **CodeGenTsFilesContent**
```typescript
// Generación de contenido TypeScript
class CodeGenTsFilesContent {
    static genFileContentEntityClass(tableModel: ModelTable): string
    static genFileContentEntityType(tableModel: ModelTable): string
    static genFileContentEntityArrayClass(tableModel: ModelTable[]): string
    static genFileContentTableDef(table: ModelTable): string
}
```

#### **CodeGenServices**
```typescript
// Generación de servicios FastAPI
class CodeGenServices {
    static genFileContentServiceClass(tableModel: ModelTable): string
}
```

---

## Funcionalidades Implementadas

### **1. Parser SQL Avanzado**
* Análisis de `CREATE TABLE` statements
* Detección automática de PRIMARY KEYS
* Identificación de FOREIGN KEYS y relaciones
* Campos auto-generados (GENERATED ALWAYS AS IDENTITY)
* Mapeo inteligente de tipos SQL → TypeScript

### **2. Generación de Entidades TypeScript**
* Clases completas con propiedades tipadas
* Constructores con todos los parámetros
* Métodos de validación (`minlen()`, `maxlen()`)
* Valores por defecto correctos según tipo
* Generación individual o masiva

### **3. Clases de Definición y Validación**
* Clases `TableDef` para cada tabla
* Arrays de `ModelField` con metadatos completos
* Información de relaciones y constraints
* Serialización JSON para debugging

### **4. Servicios Cliente FastAPI**
* CRUD completo: `getAll()`, `insert()`, `update()`, `delete()`, `get()`
* Búsquedas específicas: `getByName()`, `getByOther()`
* Manejo de errores HTTP estándar
* Tipos TypeScript integrados

### **5. Mapeo de Tipos Inteligente**
* PostgreSQL → TypeScript
* Detección de tipos numéricos con precisión
* Manejo de campos opcionales/requeridos
* Soporte para tipos complejos

---

## Casos de Uso

### **Caso 1: Generación de Entidades desde SQL**
```typescript
// Input: Esquema SQL
const sqlScript = `
CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(100),
    created_at timestamp without time zone
);
`;

// Output: Clase TypeScript generada
export class User {
    public id: number | null = null;
    public name: string = "undefined";
    public email: string = "undefined";
    public created_at: Date = new Date();
    
    constructor(id: number | null, name: string, email: string, created_at: Date) {
        // ... implementación
    }
    
    public minlen(fieldName: string): number | null { /* ... */ }
    public maxlen(fieldName: string): number | null { /* ... */ }
}
```

### **Caso 2: Generación de Servicios Cliente**
```typescript
// Input: ModelTable para "users"
const userModel = new ModelTable("users");

// Output: Servicio FastAPI completo
export class UserService {
    public static getAll(): CancelablePromise<Array<User>> { /* ... */ }
    public static insert(requestBody: User): CancelablePromise<User> { /* ... */ }
    public static update(id: number, requestBody: User): CancelablePromise<User> { /* ... */ }
    public static delete(id: number): CancelablePromise<User> { /* ... */ }
    public static get(id: number): CancelablePromise<User> { /* ... */ }
}
```

---

## Estructura de Archivos

```
src/
├── app/
│   ├── codegen/                    # UI Components
│   │   ├── header.tsx
│   │   ├── inputeditor.tsx         # Editor de código SQL
│   │   ├── outputmonitor.tsx       # Monitor de salida
│   │   ├── page.tsx               # Página principal
│   │   └── ...
│   └── ...
├── app_front/
│   ├── codegen/                    # MOTOR PRINCIPAL
│   │   ├── cgmodel.ts             # Modelos base (ModelTable, ModelField)
│   │   ├── codegen.ts             # Clases principales de generación
│   │   ├── cgservices.ts          # Generación de servicios
│   │   ├── sqltypes.json          # Mapeo de tipos SQL
│   │   └── templates/             # Sistema de templates
│   │       ├── temp_service.ts    # Template de servicios
│   │       └── temp_service_text.ts # Template como string
│   └── squema.ts                  # Archivo de salida generado
├── client/                        # Cliente API generado
│   ├── models/                    # Modelos TypeScript
│   └── service/                   # Servicios FastAPI
└── ...
```

---

## Roadmap Futuro

### **Fase 2: Generación de Componentes React (En Desarrollo)**

#### **Componentes de Formulario Automáticos**
* **InputText** - Para campos string
* **InputNumber** - Para campos numéricos
* **InputDate** - Para campos de fecha
* **InputCheck** - Para campos boolean
* **InputSelect** - Para campos con relaciones FK

#### **Vistas Completas**
* **ListView** - Tablas de datos con paginación
* **DetailView** - Vistas de detalle de registros
* **FormView** - Formularios de insert/update
* **SearchView** - Componentes de búsqueda

### **Fase 3: Generación de Backend (Futuro)**

#### **Python FastAPI**
* Modelos Pydantic automáticos
* Endpoints CRUD completos
* Validación automática
* Documentación Swagger

#### **SQL Scripts**
* Scripts de migración
* Datos de prueba (seed data)
* Índices optimizados
* Triggers y procedimientos

### **Fase 4: Sistemas Completos (Visión Futura)**

#### **Generación de Aplicaciones Completas**
* **Frontend + Backend** - Stack completo
* **Múltiples Bases de Datos** - PostgreSQL, MySQL, SQLite
* **Diferentes Arquitecturas** - Microservicios, Monolito, Serverless
* **Configuración Automática** - Docker, CI/CD, Testing

#### **Formatos de Salida Adicionales**
* **JSON** - Configuraciones y datos
* **CSV** - Importación/exportación
* **Markdown** - Documentación automática
* **PDF** - Reportes y especificaciones

#### **Múltiples Lenguajes y Frameworks**
* **Python** - Django, Flask, FastAPI
* **JavaScript/TypeScript** - React, Vue, Angular
* **PHP** - Laravel, Symfony
* **C#** - .NET Core, Entity Framework
* **Java** - Spring Boot, Hibernate

---

## Configuración y Uso

### **Inicio Rápido**

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Abrir navegador:**
```
http://localhost:3000
```

### **Uso del Sistema**

1. **Preparar esquema SQL** en el editor
2. **Ejecutar generación** mediante la interfaz
3. **Revisar código generado** en el monitor de salida
4. **Usar las clases generadas** en tu aplicación

---

## Contribución

### **Cómo Contribuir**

1. **Fork** del repositorio
2. **Crear** una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crear** un Pull Request

### **Áreas de Contribución**

* **Bug Fixes** - Corrección de errores
* **Nuevas Funcionalidades** - Generadores adicionales
* **Documentación** - Mejoras en docs
* **Testing** - Casos de prueba
* **Templates** - Nuevos templates

---

## Tecnologías y Dependencias

### **Stack Tecnológico**

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 14+ | Framework React |
| **TypeScript** | 5+ | Tipado estático |
| **React** | 18+ | UI Components |
| **TailwindCSS** | 3+ | Estilos |
| **DaisyUI** | 4+ | Componentes UI |

---

## Objetivos del Proyecto

### **Misión**
Revolucionar el desarrollo de aplicaciones web mediante la generación automática de código de alta calidad, eliminando el trabajo repetitivo y acelerando el time-to-market.

### **Visión**
Convertirse en la herramienta estándar para la generación automática de aplicaciones web completas, soportando múltiples lenguajes, frameworks y arquitecturas.

### **Valores**
* **Calidad** - Código limpio y mantenible
* **Eficiencia** - Automatización inteligente
* **Flexibilidad** - Adaptable a diferentes necesidades
* **Innovación** - Tecnologías de vanguardia

---

## Métricas y Estadísticas

### **Estado Actual**
* **15+ Clases** implementadas
* **500+ Líneas** de código generativo
* **100%** TypeScript tipado
* **0 Errores** de compilación
* **Soporte completo** para PostgreSQL

### **Objetivos 2025**
* **Generación de React Components**
* **Soporte para múltiples BBDD**
* **Sistema de plugins**
* **Interfaz visual mejorada**

---

*Última actualización: 25 de Junio de 2025*
