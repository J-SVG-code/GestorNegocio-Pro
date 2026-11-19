# Gestor Pro

Aplicación web y Progressive Web App (PWA) enfocada en el control operativo, de inventario, ventas, fiados y caja para distintos tipos de negocios, diseñada para operar con fluidez desde dispositivos móviles y de escritorio.

## Características principales

- **Flujo inicial en 3 pasos:**
  1. **Lo necesario sobre la aplicación:** resumen claro de inventario, ventas, fiados, cálculo de vuelto, catálogo digital y funciones Pro.
  2. **Términos y condiciones:** revisión y aceptación previa a la configuración inicial.
  3. **Registro o vinculación:** alta de nuevo negocio como **Dueño** (con PIN de 4 dígitos) o vinculación de equipo como **Empleado** o **Socio**.
- **Inventario y proveedores:** gestión de productos con código/SKU, fotografía opcional, control de existencias, alertas de stock bajo y directorio de proveedores.
- **Ventas, multidivisa y fiados:** registro de operaciones al contado por método de pago, control de créditos/fiados con abonos, cálculo de vuelto en USD ($) y Bs, comprobantes e impresión térmica/Bluetooth (en Modo Pro).
- **Caja y movimientos (`finanzas`):** sección operativa independiente de **Modo Pro**, destinada a entradas, salidas, gastos, pagos y consulta de historial de caja (oculta en Modo Empleado).
- **Roles y seguridad:** acceso diferenciado para **Dueño**, **Socio** y **Empleado**, protegido mediante PIN de dueño y permisos configurables.
- **Modo Pro y PWA:** soporte offline mediante Service Worker (`sw.js`), respaldos JSON, exportación de reportes en PDF, catálogo digital para WhatsApp y sincronización en la nube cuando está activo el modo compatible.

## Estructura del proyecto

- `index.html`: interfaz principal, lógica operativa, gestión de roles, bienvenida en 3 pasos y sincronización.
- `sw.js`: service worker para caché de recursos y funcionamiento offline.
- `manifest.json`: configuración de instalación y metadatos de la PWA.
- `catalogo.html`: vista de catálogo digital compartible.

## Autoría y derechos

- **Autor:** Joelvy José Salazar Vargas (C.I. 30.022.434)
- **Copyright:** © 2026 Gestor Pro. Todos los derechos reservados.
