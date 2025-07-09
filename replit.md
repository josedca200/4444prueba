# Pricify - Aplicación de Gestión Financiera

## Descripción del Proyecto
Pricify es una aplicación web de gestión financiera diseñada para empresas venezolanas. Permite calcular márgenes de ganancia, gestionar inventario y monitorear finanzas con soporte para múltiples monedas (bolívares y dólares).

## Arquitectura del Proyecto
- **Frontend**: React con TypeScript, Vite como bundler
- **Backend**: Express.js con TypeScript
- **Base de datos**: PostgreSQL (Neon-backed en Replit)
- **Estilo**: CSS personalizado con variables CSS
- **Autenticación**: Sistema de login básico con contexto React

## Estructura de Archivos
```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── contexts/       # Contextos React (Auth)
│   │   ├── pages/          # Páginas principales
│   │   └── index.css       # Estilos globales
├── server/                 # Backend Express
│   ├── index.ts           # Servidor principal
│   ├── routes.ts          # Rutas API
│   └── storage.ts         # Gestión de datos
└── shared/                # Esquemas compartidos
    └── schema.ts          # Definiciones de tipos
```

## Características Principales
1. **Calculadora de Márgenes**: Calcula márgenes de ganancia, impuestos y rentabilidad
2. **Gestión de Inventario**: Monitoreo de stock y valoración de productos
3. **Panel Financiero**: Análisis de ingresos, gastos y balances
4. **Autenticación**: Sistema de login seguro
5. **Diseño Responsivo**: Optimizado para móviles y desktop

## Paleta de Colores
- **Azul Principal (Chase Bank Blue)**: #005A87
- **Grises Elegantes**: #475569, #64748b, #94a3b8
- **Colores de Estado**: Verde para éxito, Amarillo para advertencias, Rojo para errores

## Tipografía
- **Fuente Principal**: Poppins (Google Fonts)
- **Pesos disponibles**: 300, 400, 500, 600, 700

## Estado Actual
✅ Migración completa de Bolt a Replit
✅ Aplicación funcionando correctamente
✅ Nueva paleta de colores implementada
✅ Tipografía Poppins aplicada en toda la app
✅ Diseño de login mejorado con fondo Spline

## Cambios Recientes
- **2024**: Migración exitosa desde Bolt a Replit
- **2024**: Actualización completa de la marca a "Pricify"
- **2024**: Implementación de nueva paleta de colores azul Chase Bank
- **2024**: Aplicación de tipografía Poppins en toda la aplicación
- **2024**: Mejora del diseño de login con fondo interactivo
- **2024**: Renovación completa de la sección Inventario:
  - Eliminadas todas las referencias a bolívares
  - Enfoque 100% en USD como moneda operativa
  - Nuevo título con efectos visuales consistentes
  - Reducción a 3 métricas principales
  - Tabla simplificada sin columnas de bolívares
  - Formulario mejorado con validación
  - Diseño responsive optimizado
- **2025**: Transformación a sistema profesional de inventario:
  - Sistema de movimientos (Ingreso, Egreso, Devolución, Merma)
  - Modal profesional para registro de movimientos
  - Gestión de categorías integrada con edición inline
  - Validaciones de stock automáticas
  - Actualización automática de inventario
  - Gestión completa de productos por categoría:
    - Vista detallada de productos por categoría
    - Edición de productos individual
    - Eliminación masiva de productos por categoría
    - Adición de productos directo a categoría específica
    - Modales en cascada con navegación fluida
  - Sistema de navegación mejorado:
    - Menú lateral con subcategorías para Inventario
    - "Gestionar Inventario" como página principal
    - "Historial de Movimientos" como nueva sección analítica
    - Navegación expandible con animaciones fluidas
  - Auditoría completa y trazabilidad:
    - Historial de movimientos como "prueba ácida" no editable
    - Registro automático de todas las acciones de inventario
    - Eliminaciones masivas con trazabilidad completa
    - Integración bidireccional entre gestión e historial
- **2025**: Renovación completa del módulo de Finanzas:
  - Sistema de pestañas modernas (Ingresos, Egresos, CxC, CxP)
  - Tarjetas de métricas con gradientes sutiles y efectos visuales
  - Modal profesional para agregar transacciones con validación
  - Tabla deslizable con exportación CSV integrada
  - Enfoque 100% en USD como moneda principal
  - Soporte opcional para Bs con tipo de cambio automático
  - Componente MetricCard reutilizable con iconos lucide-react
  - Diseño responsive optimizado para móviles
  - Datos seed con 8 transacciones reales de ejemplo
  - Interfaz consistente con paleta de colores Chase Bank Blue
  - Sistema independiente de Ingresos y Egresos:
    - Botones específicos por sección ("Agregar Ingreso" / "Agregar Egreso")
    - Tipos editables independientes para cada categoría
    - Modal adaptativo según la pestaña activa
    - Validación automática del tipo de transacción
    - Métricas con flexbox responsivo (fijo en desktop, deslizable en móvil)
    - Eliminación completa del campo "Origen" obsoleto en formularios y tablas
    - Corrección de espaciado en pestañas CxC/CxP para móviles
    - Campo "Monto" en blanco por defecto para mejor UX
- **2025**: Optimización del módulo de Inventario:
    - Eliminación del campo "Precio" en gestión de productos
    - Simplificación de formularios de agregar/editar productos a solo 3 campos
    - Enfoque exclusivo en Nombre, Descripción y Cantidad Inicial
    - Mantenimiento de compatibilidad con estructura existente (priceUsd = 0)
    - Reestructuración 100% responsive de la tabla de productos:
      - Implementación con CSS Grid responsive (desktop/tablet)
      - Vista de cards apiladas para móvil (< 640px)
      - Badges condicionales de cantidad (verde ≥10, rojo <10)
      - Scroll horizontal automático cuando es necesario
      - Diseño optimizado para 1440px, 768px y 375px
      - Accesibilidad mejorada con aria-labels descriptivos
- **2025**: Re-diseño responsive de botones del módulo de Finanzas:
    - Implementación 100% responsive con Tailwind CSS
    - Layout XL: 4 botones en línea (gap-6)
    - Layout MD: 2x2 botones (basis-[calc(50%-1rem)])
    - Layout SM: botones apilados (w-full)
    - Texto adaptativo CxC/CxP en móviles
    - Accesibilidad completa con focus states y aria-labels
    - Tipografía escalable desde text-xs hasta text-base
- **2025**: Refinamiento de colores y UX del módulo de Finanzas:
    - Fondo blanco (#FFFFFF) con borde azul de selección sin cortes
    - Estados: activo (border-primary-500, text-primary-600), inactivo (border-transparent, text-gray-700)
    - Hover sutil con hover:bg-gray-50 para mejor legibilidad
    - Botón "X" mejorado en sidebar con animación rotate-90 on hover
    - Rounded-2xl en desktop, rounded-xl en ultra-pequeño (<360px)
    - Accesibilidad completa con focus:ring-primary-200
- **2025**: Corrección de clipping de bordes y centrado de tarjetas:
    - Eliminado clipping del borde azul con overflow-visible en contenedor
    - Tarjetas centradas en móvil con grid place-items-center y max-w-[20rem]
    - Desktop: distribución 2 columnas manteniendo centrado relativo
    - Pills con gap-x-6 gap-y-4 para espaciado optimizado
    - Media query específica para pantallas ultra-estrechas (<360px)
- **2025**: Optimización del espaciado en tarjetas de resumen:
    - Corregido espaciado excesivo en versión web con lg:grid-cols-4
    - Mantiene max-w-[20rem] en móvil, max-w-none en desktop
    - Layout responsive: 1 columna (móvil), 2 columnas (tablet), 4 columnas (desktop)
    - Preserva coherencia visual sin espacios forzados

## Preferencias del Usuario
- Enfoque en mejoras estéticas y UX
- Uso de colores corporativos (azul Chase Bank)
- Tipografía moderna y legible (Poppins)
- Diseño limpio y profesional

## Tecnologías Utilizadas
- React 18 + TypeScript
- Vite para desarrollo
- Express.js + TypeScript
- Lucide React para iconos
- Chart.js para gráficos
- Date-fns para manejo de fechas
- CSS Variables para temas

## Configuración de Desarrollo
- Puerto: 5000 (servidor unificado)
- Base de datos: PostgreSQL integrada de Replit
- Hot reload activado en desarrollo
- Servidor bound a 0.0.0.0 para compatibilidad con Replit