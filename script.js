const DICT = {
es: {
sub: "Control de Inventario, Ventas y Fiados",
resumen: "Resumen", inventario: "Inventario", ventas: "Ventas", ajustes: "Ajustes",
filtrarProd: "Filtrar por Producto", todosProd: "Todos los Productos (General)",
ganNeta: "GANANCIA NETA (COBRADA)", inversion: "INVERSIÓN TOTAL",
venTot: "VENTAS TOTALES", porCobrar: "POR COBRAR (FIADOS)",
regMerc: "Registrar Mercancía", nomProd: "Nombre del Producto",
invSocio: "Inversión / Socio o Lote (Opcional)", costoUni: "Costo Unidad ()",
tipoPrecio: "Tipo de Precio", alDetal: "Al Detal", alMayor: "Al Mayor",
precioVenta: "Precio ()", cantidad: "Cantidad", ganEst: "Ganancia estimada", perdidaEst: "Pérdida estimada",
gastosExtraLbl: "Gastos Adicionales (Transporte, Bolsas, etc.) [Opcional]", btnAddGasto: "+ Agregar Gasto Extra",
phConcepto: "Concepto (ej. Envío)", phMonto: "Monto ()",
guardarProd: "+ Guardar en Inventario", invActual: "Inventario Actual",
regVenta: "Registrar Venta", selProd: "Selecciona un producto",
precioCob: "Precio Cobrado ()", estPago: "Estado del Pago", pagado: "Pagado Completo", fiado: "Fiado / Por Cobrar",
nomCliente: "Nombre del Cliente", abonoIni: "Abono inicial ()",
btnVenta: "✓ Registrar Venta", histVentas: "Historial de Ventas",
msgStockIns: "⚠️ Cantidad insuficiente", msgVentaOk: "✓ Venta registrada. Ganancia:",
msgFiadoOk: "Venta fiada registrada. Debe:", msgProdOk: "✓ Producto guardado",
pagarBtn: "💵 Cobrar", debeTxt: "Debe", pagadoTxt: "Pagado", sinDatos: "Sin registros aún.",
lblIdioma: "🌐 Idioma de la Aplicación", ajustesTit: "Ajustes del Negocio",
lblNomNeg: "Nombre del Negocio", btnGuardarNom: "Guardar Nombre", btnBorrar: "Borrar Todos los Datos",
modalDetalle: "Detalle de Venta", btnCerrar: "Cerrar", btnEliminar: "Eliminar Venta",
confBorrarProd: "¿Estás seguro de eliminar este producto del inventario?", planillaTit: "Control de Inventario y Ventas", btnPdf: "📥 Descargar Reporte PDF"
},
en: {
sub: "Inventory, Sales & Credit Control",
resumen: "Summary", inventario: "Inventory", ventas: "Sales", ajustes: "Settings",
filtrarProd: "Filter by Product", todosProd: "All Products (General)",
ganNeta: "NET PROFIT (COLLECTED)", inversion: "TOTAL INVESTMENT",
venTot: "TOTAL SALES", porCobrar: "ACCOUNTS RECEIVABLE (CREDIT)",
regMerc: "Add Merchandise", nomProd: "Product Name",
invSocio: "Investment / Partner or Batch (Optional)", costoUni: "Unit Cost ()",
tipoPrecio: "Price Type", alDetal: "Retail", alMayor: "Wholesale",
precioVenta: "Price ()", cantidad: "Quantity", ganEst: "Estimated profit", perdidaEst: "Estimated loss",
gastosExtraLbl: "Additional Expenses (Shipping, Bags, etc.) [Optional]", btnAddGasto: "+ Add Extra Expense",
phConcepto: "Concept (e.g., Shipping)", phMonto: "Amount ()",
guardarProd: "+ Save to Inventory", invActual: "Current Inventory",
regVenta: "Register Sale", selProd: "Select a product",
precioCob: "Charged Price ()", estPago: "Payment Status", pagado: "Paid in Full", fiado: "Credit / Unpaid",
nomCliente: "Customer Name", abonoIni: "Initial Deposit ()",
btnVenta: "✓ Register Sale", histVentas: "Sales History",
msgStockIns: "⚠️ Insufficient quantity", msgVentaOk: "✓ Sale registered. Profit:",
msgFiadoOk: "Credit sale registered. Owes:", msgProdOk: "✓ Product saved",
pagarBtn: "💵 Collect", debeTxt: "Owes", pagadoTxt: "Paid", sinDatos: "No records yet.",
lblIdioma: "🌐 App Language", ajustesTit: "Business Settings",
lblNomNeg: "Business Name", btnGuardarNom: "Save Name", btnBorrar: "Delete All Data",
modalDetalle: "Sale Details", btnCerrar: "Close", btnEliminar: "Delete Sale",
confBorrarProd: "Are you sure you want to delete this product from inventory?", planillaTit: "Inventory & Sales Control", btnPdf: "📥 Download PDF Report"
},
pt: {
sub: "Controle de Estoque, Vendas e Fiados",
resumen: "Resumo", inventario: "Estoque", ventas: "Vendas", ajustes: "Ajustes",
filtrarProd: "Filtrar por Produto", todosProd: "Todos os Produtos (Geral)",
ganNeta: "LUCRO LÍQUIDO (RECEBIDO)", inversion: "INVESTIMENTO TOTAL",
venTot: "VENDAS TOTAIS", porCobrar: "A RECEBER (FIADO)",
regMerc: "Registrar Mercadoria", nomProd: "Nome do Produto",
invSocio: "Investimento / Sócio ou Lote", costoUni: "Custo Unidade ()",
tipoPrecio: "Tipo de Preço", alDetal: "Varejo", alMayor: "Atacado",
precioVenta: "Preço ()", cantidad: "Quantidade", ganEst: "Lucro estimado", perdidaEst: "Prejuízo estimado",
gastosExtraLbl: "Despesas Adicionais (Frete, Sacolas, etc.) [Opcional]", btnAddGasto: "+ Adicionar Despesa Extra",
phConcepto: "Conceito (ex. Frete)", phMonto: "Valor ()",
guardarProd: "+ Salvar no Estoque", invActual: "Estoque Atual",
regVenta: "Registrar Venda", selProd: "Selecione um produto",
precioCob: "Preço Cobrado ()", estPago: "Status do Pagamento", pagado: "Pago Completo", fiado: "Fiado / A Receber",
nomCliente: "Nome do Cliente", abonoIni: "Entrada inicial ($)",
btnVenta: "✓ Registrar Venda", histVentas: "Histórico de Vendas",
msgStockIns: "⚠️ Quantidade insuficiente", msgVentaOk: "✓ Venda registrada. Lucro:",
msgFiadoOk: "Venda fiada registrada. Deve:", msgProdOk: "✓ Produto salvo",
pagarBtn: "💵 Receber", debeTxt: "Deve", pagadoTxt: "Pago", sinDatos: "Sem registros.",
lblIdioma: "🌐 Idioma do Aplicativo", ajustesTit: "Configurações",
lblNomNeg: "Nome do Negócio", btnGuardarNom: "Salvar Nome", btnBorrar: "Apagar Todos os Dados",
modalDetalle: "Detalhes da Venda", btnCerrar: "Fechar", btnEliminar: "Excluir Venda",
confBorrarProd: "Tem certeza de que deseja excluir este produto do estoque?", planillaTit: "Controle de Inventário e Vendas", btnPdf: "📥 Baixar Relatório PDF"
}
};
let db = JSON.parse(localStorage.getItem('app_data_v15')) || {
negocio: "Mi Negocio",
idioma: "es",
proHasta: 0,
proPermanente: false,
productos: [],
ventas: []
};
function guardar() {
localStorage.setItem('app_data_v15', JSON.stringify(db));
actualizarTodo();
}
function esProActivo() {
if (db.proPermanente) return true;
return Date.now() < (db.proHasta || 0);
}
function abrirModalPro() {
const m = document.getElementById('modal-pro');
if (m) m.style.display = 'flex';
}
function cerrarModalPro() {
const m = document.getElementById('modal-pro');
if (m) m.style.display = 'none';
}
function iniciarRecompensaPro() {
const timerBox = document.getElementById('pro-timer-box');
const countdown = document.getElementById('pro-countdown');
const btn = document.getElementById('btn-ver-anuncio');
if (!timerBox || !countdown || !btn) return;
btn.disabled = true;
timerBox.style.display = 'block';
let segundos = 5;
countdown.innerText = segundos;
const intervalo = setInterval(() => {
segundos--;
countdown.innerText = segundos;
if (segundos <= 0) {
clearInterval(intervalo);
timerBox.style.display = 'none';
btn.disabled = false;
db.proHasta = Date.now() + (6 * 60 * 60 * 1000);
guardar();
cerrarModalPro();
mostrarToast("👑 ¡Modo PRO activado por 6 horas!");
}
}, 1000);
}
function activarProPermanente() {
const codigo = prompt("Ingresa tu código de activación PRO:");
if (codigo && codigo.trim() === "7560326") {
db.proPermanente = true;
guardar();
cerrarModalPro();
mostrarToast("💎 ¡Felicidades! PRO Permanente Activado");
} else if (codigo !== null) {
alert("Código incorrecto o inválido.");
}
}
function actualizarEstadoProUI() {
const activo = esProActivo();
const badge = document.getElementById('badge-pro');
const lblEstado = document.getElementById('lbl-estado-pro');
const txtDesc = document.getElementById('txt-desc-pro');
if (badge) {
badge.className = activo ? 'badge-pro' : 'badge-free';
badge.innerText = activo ? '👑 PRO' : 'GRATIS';
}
if (lblEstado) {
lblEstado.innerText = db.proPermanente ? '💎 PRO Permanente' : (activo ? '👑 PRO Activo (6h)' : 'Plan Gratis');
}
if (txtDesc) {
txtDesc.innerText = activo ? 'Tienes todas las funciones avanzadas desbloqueadas.' : 'Activa PRO viendo un anuncio corto o ingresando tu código.';
}
}
function t(key) {
const lang = DICT[db.idioma] ? db.idioma : 'es';
return DICT[lang][key] || DICT['es'][key] || key;
}
function mostrarToast(mensaje) {
const toast = document.getElementById('toast');
if(!toast) return;
toast.innerText = mensaje;
toast.style.display = 'block';
setTimeout(() => { toast.style.display = 'none'; }, 3000);
}
document.addEventListener('DOMContentLoaded', () => {
const selLang = document.getElementById('select-idioma');
if(selLang) selLang.value = db.idioma || 'es';
aplicarIdioma();
const lblNeg = document.getElementById('lbl-negocio');
if(lblNeg) lblNeg.innerText = db.negocio;
const cfgNom = document.getElementById('cfg-nombre');
if(cfgNom) cfgNom.value = db.negocio;
actualizarTodo();
});
function cambiarIdiomaApp() {
const sel = document.getElementById('select-idioma');
if(sel) {
db.idioma = sel.value;
aplicarIdioma();
guardar();
}
}
function aplicarIdioma() {
const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
setTxt('txt-subtitulo', t('sub'));
setTxt('nav-resumen', t('resumen'));
setTxt('nav-inventario', t('inventario'));
setTxt('nav-ventas', t('ventas'));
setTxt('nav-ajustes', t('ajustes'));
setTxt('txt-filtrar-prod', t('filtrarProd'));
setTxt('txt-kpi-gan', t('ganNeta'));
setTxt('txt-kpi-inv', t('inversion'));
setTxt('txt-kpi-ven', t('venTot'));
setTxt('txt-kpi-deu', t('porCobrar'));
setTxt('txt-reg-merc', t('regMerc'));
setTxt('lbl-p-nombre', t('nomProd'));
setTxt('lbl-p-inv', t('invSocio'));
setTxt('lbl-p-costo', t('costoUni'));
setTxt('lbl-p-tipoprecio', t('tipoPrecio'));
setTxt('opt-inv-detal', t('alDetal'));
setTxt('opt-inv-mayor', t('alMayor'));
setTxt('lbl-p-precio', t('precioVenta'));
setTxt('lbl-p-stock', t('cantidad'));
setTxt('lbl-gastos-extra', t('gastosExtraLbl'));
setTxt('btn-add-gasto', t('btnAddGasto'));
setTxt('btn-guardar-prod', t('guardarProd'));
setTxt('txt-inv-actual', t('invActual'));
setTxt('txt-reg-venta', t('regVenta'));
setTxt('lbl-v-prod', t('nomProd'));
setTxt('lbl-v-cant', t('cantidad'));
setTxt('lbl-v-precio', t('precioCob'));
setTxt('lbl-v-estado', t('estPago'));
setTxt('opt-pagado', t('pagado'));
setTxt('opt-fiado', t('fiado'));
setTxt('lbl-v-cliente', t('nomCliente'));
setTxt('lbl-v-abono', t('abonoIni'));
setTxt('btn-reg-venta', t('btnVenta'));
setTxt('txt-hist-ventas', t('histVentas'));
setTxt('txt-ajustes', t('ajustesTit'));
setTxt('lbl-cfg-nombre', t('lblNomNeg'));
setTxt('btn-cfg-nombre', t('btnGuardarNom'));
setTxt('btn-borrar-todo', t('btnBorrar'));
setTxt('modal-titulo', t('modalDetalle'));
setTxt('btn-cerrar-modal', t('btnCerrar'));
setTxt('lbl-planilla-titulo', t('planillaTit'));
setTxt('btn-pdf-planilla', t('btnPdf'));
calcularGananciaPrevia();
actualizarTodo();
}
function cambiarTab(id, btn) {
document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
const target = document.getElementById(id);
if(target) target.classList.add('active');
if(btn) btn.classList.add('active');
}
function agregarGastoExtraInv(nombre = '', monto = '') {
const div = document.getElementById('lista-gastos-inv');
if(!div) return;
const row = document.createElement('div');
row.className = 'flex gap-2 mb-1.5 gasto-row';
row.innerHTML = <input type="text" class="gasto-nombre w-full p-1.5 text-xs bg-slate-50 border border-slate-300 rounded" placeholder="${t('phConcepto')}" value="${nombre}"> <div class="flex gap-1"> <input type="number" class="gasto-monto w-20 p-1.5 text-xs bg-slate-50 border border-slate-300 rounded" placeholder="${t('phMonto')}" step="0.01" value="${monto}" oninput="calcularGananciaPrevia()"> <button type="button" onclick="this.parentElement.parentElement.remove(); calcularGananciaPrevia();" class="bg-red-50 text-red-600 px-2 rounded font-bold text-xs">✕</button> </div>;
div.appendChild(row);
}
function calcularGananciaPrevia() {
const costo = parseFloat(document.getElementById('p-costo')?.value) || 0;
const precio = parseFloat(document.getElementById('p-precio')?.value) || 0;
const cant = parseInt(document.getElementById('p-stock')?.value) || 0;
let totalExtras = 0;
document.querySelectorAll('.gasto-monto').forEach(input => {
totalExtras += parseFloat(input.value) || 0;
});
const ingresosTotales = precio * cant;
const inversionTotalProd = (costo * cant) + totalExtras;
const gan = ingresosTotales - inversionTotalProd;
const prev = document.getElementById('preview-ganancia');
if(prev) {
if(gan < 0) {
prev.className = "text-center p-2 rounded-md text-xs font-semibold mb-2.5 border border-dashed border-red-300 bg-red-50 text-red-800";
prev.innerText = ${t('perdidaEst')}: -$${Math.abs(gan).toFixed(2)};
} else {
prev.className = "text-center p-2 rounded-md text-xs font-semibold mb-2.5 border border-dashed border-emerald-300 bg-emerald-50 text-emerald-800";
prev.innerText = ${t('ganEst')}: $${gan.toFixed(2)};
}
}
}
function toggleAbono() {
const est = document.getElementById('v-estado')?.value;
const box = document.getElementById('box-deuda');
if(box) box.style.display = (est === 'FIADO') ? 'block' : 'none';
}
function agregarProducto(e) {
e.preventDefault();
const stock = parseInt(document.getElementById('p-stock').value);
const precio = parseFloat(document.getElementById('p-precio').value);
const tipoPrecio = document.getElementById('p-tipoprecio').value;
const costo = parseFloat(document.getElementById('p-costo').value);
let gastosExtras = [];
let totalGastosExtras = 0;
document.querySelectorAll('.gasto-row').forEach(row => {
const nombre = row.querySelector('.gasto-nombre').value.trim() || 'Gasto extra';
const monto = parseFloat(row.querySelector('.gasto-monto').value) || 0;
if(monto > 0) {
gastosExtras.push({ nombre, monto });
totalGastosExtras += monto;
}
});
db.productos.unshift({
id: Date.now(),
nombre: document.getElementById('p-nombre').value.trim(),
inversion: document.getElementById('p-inversion').value.trim() || 'General',
costo: costo,
gastosExtras: gastosExtras,
extraTotal: totalGastosExtras,
tipoPrecio: tipoPrecio,
precio: precio,
stockInicial: stock,
stock: stock
});
guardar();
e.target.reset();
document.getElementById('lista-gastos-inv').innerHTML = '';
calcularGananciaPrevia();
mostrarToast(t('msgProdOk'));
}
function renderInventario() {
const div = document.getElementById('lista-inventario');
if(!div) return;
if(db.productos.length === 0) { div.innerHTML = <p class="text-center text-slate-400 py-3 text-xs">${t('sinDatos')}</p>; return; }
div.innerHTML = db.productos.map(p => {
let extrasHtml = '';
if(p.gastosExtras && p.gastosExtras.length > 0) {
extrasHtml = <br><small class="text-amber-600">Gastos:  + p.gastosExtras.map(g => ${g.nombre}: $${g.monto.toFixed(2)}).join(' • ') + </small>;
}
return <div class="item-row flex justify-between items-center"> <div> <b class="text-slate-800">${p.nombre}</b><br> <small class="text-slate-500">Costo: $${p.costo.toFixed(2)} | ${p.tipoPrecio === 'MAYOR' ? t('alMayor') : t('alDetal')}: $${p.precio.toFixed(2)}</small> ${extrasHtml}<br> <small class="text-slate-500">Cant: <b>${p.stock}</b> • <span class="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">${p.inversion}</span></small> </div> <button class="btn-del" onclick="eliminar(${p.id})">X</button> </div>}).join('');
}
function eliminar(id) {
if(confirm(t('confBorrarProd'))) {
db.productos = db.productos.filter(p => p.id !== id);
guardar();
mostrarToast("✓ Producto eliminado");
}
}
function actualizarSelect() {
const sel = document.getElementById('v-producto');
if(!sel) return;
const disp = db.productos.filter(p => p.stock > 0);
sel.innerHTML = <option value="">${t('selProd')}</option> +
disp.map(p => <option value="${p.id}">${p.nombre} (${p.tipoPrecio === 'MAYOR' ? t('alMayor') : t('alDetal')} - $${p.precio}) (Stock: ${p.stock})</option>).join('');
}
function autoPrecio() {
const id = parseInt(document.getElementById('v-producto').value);
const p = db.productos.find(x => x.id === id);
if(p) {
const precioInput = document.getElementById('v-precio');
if(precioInput) precioInput.value = p.precio;
}
}
function registrarVenta(e) {
e.preventDefault();
const id = parseInt(document.getElementById('v-producto').value);
const cant = parseInt(document.getElementById('v-cantidad').value);
const precioCobrado = parseFloat(document.getElementById('v-precio').value);
const estado = document.getElementById('v-estado').value;
const cliente = document.getElementById('v-cliente')?.value.trim() || 'Cliente';
let abono = parseFloat(document.getElementById('v-abono')?.value) || 0;
const p = db.productos.find(x => x.id === id);
if(!p || p.stock < cant) { mostrarToast(t('msgStockIns')); return; }
const total = cant * precioCobrado;
if(estado === 'PAGADO') abono = total;
if(abono > total) abono = total;
const deudaPendiente = total - abono;
const gananciaTotal = total - (cant * p.costo);
p.stock -= cant;
db.ventas.unshift({
id: Date.now(),
producto: p.nombre,
inversion: p.inversion,
cant,
total,
abono,
deuda: deudaPendiente,
ganancia: gananciaTotal,
cliente,
fecha: new Date().toLocaleDateString()
});
guardar();
e.target.reset();
toggleAbono();
mostrarToast(deudaPendiente > 0 ? ${t('msgFiadoOk')} $${deudaPendiente.toFixed(2)} : ${t('msgVentaOk')} $${gananciaTotal.toFixed(2)});
}
function saldarDeuda(id) {
const v = db.ventas.find(x => x.id === id);
if(!v) return;
v.abono = v.total;
v.deuda = 0;
guardar();
cerrarModal();
mostrarToast(✓ Pagado);
}
function verDetalleVenta(id) {
const v = db.ventas.find(x => x.id === id);
if(!v) return;
const modal = document.getElementById('modal-detalle');
const body = document.getElementById('modal-body');
const acciones = document.getElementById('modal-acciones');
const esDeuda = v.deuda > 0;
body.innerHTML = <b>Producto:</b> ${v.producto} (x${v.cant})<br> <b>Fecha:</b> ${v.fecha}<br> <b>Cliente:</b> ${v.cliente}<br> <b>Lote/Inversión:</b> ${v.inversion}<br> <b>Total Venta:</b> $${v.total.toFixed(2)}<br> <b>Ganancia:</b> +$${v.ganancia.toFixed(2)}<br> <b>Estado:</b> ${esDeuda ?<span class="text-amber-600 font-bold">Debe: $${v.deuda.toFixed(2)}</span>:<span class="text-emerald-600 font-bold">Pagado</span>} ;
acciones.innerHTML = ${esDeuda ?<button class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-1.5 rounded text-xs mb-1" onclick="saldarDeuda(${v.id})">Cobrar</button>: ''} <button class="w-full bg-red-50 text-red-600 font-bold py-1.5 rounded text-xs border border-red-200" onclick="confirmarEliminarVenta(${v.id})">Eliminar Venta</button>;      modal.style.display = 'flex'; }  function cerrarModal() { document.getElementById('modal-detalle').style.display = 'none'; }  function confirmarEliminarVenta(id) { if(confirm('¿Estás seguro de eliminar este registro de venta?')) { db.ventas = db.ventas.filter(v => v.id !== id); guardar(); cerrarModal(); mostrarToast("✓ Venta eliminada"); } }  function abrirPlanilla() { if (!esProActivo()) { abrirModalPro(); return; }      const modal = document.getElementById('modal-planilla'); const contenido = document.getElementById('contenido-planilla'); if(!modal \vert{}\vert{} !contenido) return;      let totalInvertido = 0; db.productos.forEach(p => { totalInvertido += (p.costo * p.stockInicial) + (p.extraTotal \vert{}\vert{} 0); }); let totalVentas = 0; let gananciaNeta = 0; db.ventas.forEach(v => { totalVentas += v.total; const ratio = v.total > 0 ? (v.abono / v.total) : 1; gananciaNeta += (v.ganancia * ratio); });      let html =  <div class="space-y-3"> <div class="bg-slate-900 text-white p-3 rounded-lg"> <h3 class="font-bold text-sky-400">SISTEMA DE CONTROL DE INVENTARIO Y VENTAS</h3> <p class="text-[10px] text-slate-400">Negocio: <b>${db.negocio}</b> • Fecha: ${new Date().toLocaleDateString()}</p> </div>  <div class="grid grid-cols-2 gap-2"> <div class="bg-slate-50 border p-2 rounded"> <span class="text-[10px] text-slate-400 block">TOTAL INVERTIDO</span> <b class="text-sm text-slate-800">$${totalInvertido.toFixed(2)}</b> </div> <div class="bg-slate-50 border p-2 rounded"> <span class="text-[10px] text-slate-400 block">INGRESOS VENTAS</span> <b class="text-sm text-sky-600">$${totalVentas.toFixed(2)}</b> </div> <div class="bg-slate-
