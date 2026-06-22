/* ============================================================
   InfoIA — Chatbot Widget
   ============================================================ */
(function () {
  'use strict';

  /* ── Response knowledge base (basada en el contenido real de InfoIA) ── */
  const KB = {

    greeting: {
      text: '¡Hola! 👋 Soy el asistente de <strong>InfoIA</strong>. Ayudamos a empresas a <strong>automatizar procesos, crear webs que generan clientes e implementar soluciones de IA</strong>. Sin tecnicismos, con resultados reales.\n\n¿En qué puedo ayudarte?',
      replies: ['¿Qué servicios ofrecéis?', '¿Cuánto cuesta?', 'Agendar consulta gratis', 'Ver casos de éxito']
    },

    servicios: {
      text: 'En InfoIA ofrecemos <strong>3 servicios</strong> diseñados para que tu empresa crezca:\n\n🤖 <strong>Automatización de procesos</strong>\nRecupera más de 15 horas a la semana. Eliminamos las tareas manuales que le roban tiempo a tu equipo.\n\n🌐 <strong>Webs que convierten</strong>\nHasta 3× más clientes. Diseñamos tu web para que traiga resultados reales, con SEO desde el primer día.\n\n🧠 <strong>Soluciones de IA</strong>\nChatbots, análisis predictivo y automatización con IA generativa adaptada a tu negocio.\n\n¿Cuál te interesa más?',
      replies: ['Automatización de procesos', 'Webs que convierten', 'Soluciones de IA', 'Agendar consulta gratis']
    },

    automatizacion: {
      text: '🤖 <strong>Automatización de procesos</strong>\n\nConectamos tus aplicaciones y eliminamos el trabajo repetitivo que le roba tiempo a tu equipo:\n\n✓ Gestión de pedidos y proveedores\n✓ Informes automáticos\n✓ Sincronización entre apps\n✓ Emails y notificaciones automáticas\n\n📊 <strong>Resultado medio: 15 horas semanales recuperadas</strong> y una reducción del 40% del tiempo en tareas manuales.\n\nEjemplo real: Ferretería González (Valencia) ahorra <strong>8h/semana</strong> y tiene cero errores de inventario desde el primer mes.',
      replies: ['¿Cuánto cuesta?', 'Agendar consulta gratis', 'Ver más servicios', 'Ver casos de éxito']
    },

    webs: {
      text: '🌐 <strong>Webs que convierten</strong>\n\nDiseñamos y desarrollamos tu web con un único objetivo: que te traiga clientes. Velocidad extrema, mensaje claro y SEO incluido desde el primer día.\n\n✓ Landing pages de alto impacto\n✓ Webs corporativas\n✓ Tiendas y catálogos online\n✓ Sistemas de reserva y citas\n\n📊 <strong>Resultado medio: 3× más conversiones</strong> en las webs que creamos.\n\nEjemplo real: Modas Belén (Alicante) triplicó sus consultas y recibió pedidos online el mismo día del lanzamiento.',
      replies: ['¿Cuánto cuesta?', 'Agendar consulta gratis', 'Ver más servicios', 'Ver casos de éxito']
    },

    ia: {
      text: '🧠 <strong>Soluciones de IA</strong>\n\nImplementamos inteligencia artificial adaptada a tu negocio, sin complicaciones técnicas. Tú hablas de tu negocio; nosotros lo traducimos en tecnología.\n\n✓ Chatbots y asistentes virtuales\n✓ Análisis predictivo\n✓ Procesamiento automático de documentos\n✓ Automatización con IA generativa\n\nDecisiones basadas en datos, no en intuición. Sin tecnicismos. Con resultados reales.',
      replies: ['¿Cuánto cuesta?', 'Agendar consulta gratis', 'Ver más servicios', 'Ver casos de éxito']
    },

    precio: {
      text: '💰 <strong>¿Cuánto cuesta trabajar con InfoIA?</strong>\n\nDepende del proyecto. Trabajamos con <strong>presupuestos adaptados a cada empresa</strong>, desde automatizaciones puntuales hasta soluciones completas de IA o desarrollo web.\n\n⭐ Lo que siempre es <strong>gratuito</strong> es la primera consulta: analizamos tu situación y te decimos exactamente qué podemos ofrecerte y cuánto valdría. Sin compromiso.\n\nLa mayoría de proyectos están en marcha en <strong>1 a 4 semanas</strong>.',
      replies: ['Agendar consulta gratis', 'Contactar por WhatsApp', '¿Cuánto tiempo tarda?']
    },

    tiempo: {
      text: '⏱️ <strong>¿Cuánto tiempo tarda la implementación?</strong>\n\nLa mayoría de proyectos están en marcha en <strong>1 a 4 semanas</strong>. Siempre acordamos una fecha de entrega clara desde el principio y la cumplimos.\n\nSi el proyecto es más amplio, lo dividimos en fases para que empieces a ver resultados cuanto antes.\n\nDe la primera llamada a los primeros resultados: <strong>en semanas, no en meses</strong>.',
      replies: ['Agendar consulta gratis', '¿Cuánto cuesta?', 'Ver servicios']
    },

    proceso: {
      text: '⚙️ <strong>Así de sencillo trabajamos</strong>\n\nSin reuniones interminables. Sin burocracia.\n\n<strong>1. Consulta gratuita</strong>\nLlamada de 30 minutos. Entendemos tus procesos, objetivos y dónde estás perdiendo tiempo o dinero. Sin compromisos.\n\n<strong>2. Plan a medida</strong>\nPropuesta personalizada con las herramientas que mejor encajan, el tiempo estimado y el retorno que puedes esperar. Nada de plantillas genéricas.\n\n<strong>3. Implementamos y medimos</strong>\nConstruimos, probamos y ponemos en marcha. Te formamos, hacemos seguimiento y te acompañamos en las semanas posteriores.',
      replies: ['Agendar consulta gratis', '¿Cuánto cuesta?', '¿Cuánto tiempo tarda?']
    },

    casos: {
      text: '🏆 <strong>Casos de éxito reales</strong>\n\n🔧 <strong>Ferretería González (Valencia)</strong>\nReto: 6 proveedores, pedidos manuales, errores de inventario.\nSolución: Automatización de pedidos y notificaciones.\nResultado: <strong>8h/semana ahorradas, cero errores de inventario</strong>.\n\n🏥 <strong>Clínica DentaSur (Murcia)</strong>\nReto: Recordatorios manuales, muchas ausencias, recepcionista saturada.\nSolución: CRM con recordatorios por WhatsApp y lista de espera automática.\nResultado: <strong>60% menos ausencias</strong>, recepcionista recuperó 3h diarias.\n\n👗 <strong>Modas Belén (Alicante)</strong>\nReto: Web antigua sin tienda online, perdiendo clientes.\nSolución: Nueva web con tienda, SEO local y botón de WhatsApp.\nResultado: <strong>3× más consultas</strong>, primeros pedidos el día del lanzamiento.',
      replies: ['Agendar consulta gratis', '¿Cuánto cuesta?', 'Ver servicios']
    },

    tecnologia: {
      text: '💡 <strong>¿Necesito saber de tecnología?</strong>\n\nPara nada. Nos encargamos de <strong>todo el lado técnico</strong> y, cuando entregamos el proyecto, te formamos para que puedas usarlo con total autonomía.\n\nTú hablas de tu negocio; nosotros traducimos eso en tecnología.',
      replies: ['Ver servicios', 'Agendar consulta gratis', '¿Cuánto cuesta?']
    },

    sector: {
      text: '🏢 <strong>¿Funciona para mi sector?</strong>\n\nHemos trabajado con empresas de:\n✓ Hostelería\n✓ Salud\n✓ Comercio minorista\n✓ Servicios profesionales\n✓ Formación\n✓ Y más sectores\n\nSi tienes procesos repetitivos, datos que no se están usando o una web que no convierte, podemos ayudarte. La primera consulta es precisamente para descubrirlo juntos.',
      replies: ['Ver casos de éxito', 'Agendar consulta gratis', 'Ver servicios']
    },

    garantia: {
      text: '🛡️ <strong>¿Qué pasa si no funciona?</strong>\n\nHacemos la consulta gratuita antes de proponer nada. Si no vemos claro que podemos aportarte valor real, <strong>te lo decimos sin rodeos</strong>.\n\nSi empezamos el proyecto y aparece algo inesperado, lo afrontamos juntos con total transparencia. <strong>Nunca te dejamos con algo que no funciona</strong>.',
      replies: ['Agendar consulta gratis', 'Ver casos de éxito', 'Contactar']
    },

    herramientas: {
      text: '🛠️ <strong>¿Qué herramientas utilizamos?</strong>\n\nUsamos las mejores del mercado, adaptadas a cada proyecto:\n\n⚙️ <strong>Automatización:</strong> Make (Integromat), n8n, Zapier\n🌐 <strong>Webs:</strong> Astro, WordPress, Shopify\n🧠 <strong>IA:</strong> OpenAI, Claude, modelos personalizados\n📊 <strong>Datos:</strong> Airtable, Notion, Google Sheets\n\nSiempre elegimos la herramienta que mejor encaja con tu negocio, no al revés.',
      replies: ['Agendar consulta gratis', '¿Cuánto cuesta?', 'Ver servicios']
    },

    mantenimiento: {
      text: '🔧 <strong>Soporte tras la entrega</strong>\n\nNo desaparecemos cuando entregamos el proyecto:\n\n✓ Te formamos para que uses todo con autonomía\n✓ Seguimiento de resultados las primeras semanas\n✓ Soporte ante incidencias\n✓ Ajustes y mejoras según evolucione tu negocio\n\n<strong>Nunca te dejamos con algo que no funciona.</strong>',
      replies: ['Agendar consulta gratis', '¿Cuánto cuesta?', 'Ver servicios']
    },

    diferenciacion: {
      text: '✨ <strong>¿Por qué InfoIA y no otra agencia?</strong>\n\n🎯 <strong>Sin tecnicismos</strong> — Te hablamos en el idioma de tu negocio\n⚡ <strong>Velocidad real</strong> — La mayoría de proyectos en 1–4 semanas\n🤝 <strong>Transparencia total</strong> — Si no podemos ayudarte, te lo decimos\n📊 <strong>Resultados medibles</strong> — No vendemos promesas, medimos el impacto\n🔒 <strong>Sin permanencia</strong> — Sin contratos forzosos\n\nY la primera consulta siempre es <strong>gratuita y sin compromiso</strong>.',
      replies: ['Agendar consulta gratis', 'Ver casos de éxito', '¿Cuánto cuesta?']
    },

    remoto: {
      text: '📍 <strong>¿Trabajáis en remoto?</strong>\n\nSí, trabajamos 100% en remoto con empresas de toda España. La comunicación es fluida por videollamada, email y WhatsApp.\n\nHemos trabajado con clientes en Valencia, Murcia, Alicante y más ciudades. <strong>La distancia no es un obstáculo.</strong>',
      replies: ['Agendar consulta gratis', 'Contactar por WhatsApp', 'Ver casos de éxito']
    },

    resultados: {
      text: '📊 <strong>Resultados que obtenemos</strong>\n\n🔻 <strong>40%</strong> de reducción media del tiempo en tareas manuales\n⏰ <strong>15h semanales</strong> recuperadas de media por empresa\n📈 <strong>3×</strong> más conversiones en las webs que creamos\n💬 <strong>0€</strong> cuesta la primera consulta\n\nEstos son promedios obtenidos en proyectos reales con pymes de hostelería, salud, comercio y servicios.',
      replies: ['Ver casos de éxito', 'Agendar consulta gratis', 'Ver servicios']
    },

    contacto: {
      text: '📬 <strong>¿Cómo contactarnos?</strong>\n\n💬 <strong>WhatsApp</strong> — Respuesta rápida\n📧 <strong>Email</strong> — hola@infoia.es\n📋 <strong>Formulario</strong> — En esta misma página\n\nRespondemos en <strong>menos de 24 horas</strong>. La primera consulta es gratuita y sin compromiso.',
      replies: ['Agendar consulta gratis', 'WhatsApp', 'Ir al formulario de contacto']
    },

    fallback: {
      text: 'No he entendido bien esa pregunta 😊. Puedo ayudarte con información sobre nuestros servicios, precios, cómo trabajamos o agendar una consulta gratuita. ¿Qué te interesa?',
      replies: ['¿Qué servicios ofrecéis?', '¿Cuánto cuesta?', 'Agendar consulta gratis', 'Ver casos de éxito']
    },

    booking_start: {
      text: '¡Genial! 🎉 La consulta es <strong>gratuita y sin compromiso</strong>. En 30 minutos analizamos tu situación y te decimos exactamente cómo podemos ayudarte.\n\nEmpecemos. ¿Cuál es tu <strong>nombre</strong>?',
      replies: []
    },
    booking_email: function(name) {
      return {
        text: '¡Encantado, <strong>' + name + '</strong>! 😊\n\n¿Cuál es tu <strong>email</strong> para confirmarte la cita?',
        replies: []
      };
    },
    booking_service: {
      text: '¿Qué área te interesa principalmente? (Puedes contarme también lo que necesitas en el campo de texto)',
      replies: ['Automatización de procesos', 'Desarrollo web', 'Soluciones de IA', 'No lo sé aún']
    },
    booking_done: function(name, email, service) {
      return {
        text: '✅ ¡Todo listo, <strong>' + name + '</strong>!\n\nHemos recibido tu solicitud:\n📧 ' + email + '\n🎯 ' + service + '\n\nTe contactaremos en <strong>menos de 24 horas</strong>. También puedes escribirnos ahora mismo por WhatsApp si prefieres respuesta inmediata.',
        replies: ['WhatsApp', 'Volver al inicio']
      };
    }
  };

  /* ── Keyword matching ── */
  function norm(text) {
    return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function matchIntent(text) {
    var t = norm(text);

    // Saludos
    if (/^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|saludos|ey)\b/.test(t)) return 'greeting';

    // Servicios general
    if (/(que (servicios|haceis|ofreceis|hacen|ofrecen)|servicios (teneis|tienen|disponibles)|que haces|que hace infoia|a que os dedicais|en que ayudais)/.test(t)) return 'servicios';
    if (/\bservicio(s)?\b/.test(t) && !/(automatiz|web|ia|inteligencia)/.test(t)) return 'servicios';

    // Automatización
    if (/(automatiz|automatico|automatica|tareas repetitivas|trabajo manual|horas perdidas|proceso(s)? manual|pedido(s)? proveedor|notificacion(es)? automatica|informe(s)? automatico|sincroniza|workflow|zapier|make|n8n)/.test(t)) return 'automatizacion';

    // Webs
    if (/(web|pagina web|landing|tienda online|ecommerce|seo|posicionamiento|diseno web|diseño web|conversion(es)?|visitas que no convierten|pagina que no convierte)/.test(t)) return 'webs';

    // IA
    if (/(inteligencia artificial|\bia\b|chatbot|asistente virtual|predicti|gpt|openai|machine learning|datos|documento(s)? automatico|ia generativa)/.test(t)) return 'ia';

    // Precio
    if (/(precio(s)?|cuanto cuesta|cuanto vale|cuanto cobran|cuanto cobr|tarifa(s)?|presupuesto|coste|costo|pagar|cuanto es|cuanto seria|es caro)/.test(t)) return 'precio';

    // Tiempo
    if (/(cuanto tarda|cuanto tiempo|plazo(s)?|tiempo de entrega|cuando estaria|cuando lo tendria|cuando empiezo|cuanto demora)/.test(t)) return 'tiempo';

    // Proceso / cómo trabajáis
    if (/(como (trabajais|trabajan|funciona|empezamos|empiezo)|proceso|pasos|metodologia|como es el proceso|que pasos|primeros pasos|como contratais)/.test(t)) return 'proceso';

    // Casos de éxito
    if (/(caso(s)? de exito|ejemplo(s)?|clientes|resultado(s)?|experiencia|ferreteria|clinica|modas belen|dentasur|gonzalez|proyecto(s)? real|han hecho|han trabajado)/.test(t)) return 'casos';

    // Resultados / métricas
    if (/(resultado(s)?|metrica(s)?|numero(s)?|estadistica(s)?|cuanto ahorra|horas ahorradas|ahorro|beneficio(s)?)/.test(t)) return 'resultados';

    // Tecnología necesaria
    if (/(necesito saber|conocimientos tecnicos|conocimiento(s)?|sin saber|no se de tecnologia|tengo que saber|hay que saber|formacion)/.test(t)) return 'tecnologia';

    // Sector
    if (/(mi sector|mi empresa|mi negocio|hosteleria|restaurante|clinica|salud|comercio|tienda|sector|tipo de empresa|para quien|para que empresa)/.test(t) && !/servicio/.test(t)) return 'sector';

    // Garantía / riesgos
    if (/(garantia|riesgo|si no funciona|si no me gusta|si no veo resultado|que pasa si|no funciona|devolucion|reembolso|permanencia|contrato|compromiso)/.test(t)) return 'garantia';

    // Herramientas / stack tecnológico
    if (/(herramienta(s)?|tecnologia|stack|\bmake\b|n8n|zapier|wordpress|shopify|\bastro\b|openai|claude|que usais|que usan|con que trabajan|que software|que plataforma|que tecnologia)/.test(t)) return 'herramientas';

    // Mantenimiento / soporte post-entrega
    if (/(mantenimiento|soporte|ayuda posterior|despues de entregar|tras la entrega|que pasa despues|seguimiento posterior|acompanamiento|me ayudais despues|atencion post)/.test(t)) return 'mantenimiento';

    // Diferenciación
    if (/(por que infoia|por que vosotros|que os diferencia|por que elegiros|mejor que|ventaja(s)?|lo que os hace|que teneis de especial|diferente(s)?|unico|por que contrataro)/.test(t)) return 'diferenciacion';

    // Trabajo remoto / ubicación
    if (/(remoto|en linea|\bonline\b|a distancia|donde estais|en que ciudad|presencial|venis a|venís|ubicacion|ubicados)/.test(t)) return 'remoto';

    // WhatsApp directo
    if (/(whatsapp|wsp|wa |hablar por whats)/.test(t)) return 'whatsapp';

    // Formulario
    if (/(formulario|form\b|rellenar|enviar mensaje)/.test(t)) return 'form';

    // Contacto
    if (/(contacto|contactar|email|correo|llamar|llamada|telefono|hablar con alguien|persona real|humano)/.test(t)) return 'contacto';

    // Agendar
    if (/(agendar|cita|consulta|reserva|llamada gratuita|reunion|quiero hablar|me interesa|quiero empezar|quiero saber mas)/.test(t)) return 'booking';

    return null;
  }

  /* ── State ── */
  let bookingStep = null; // null | 'name' | 'email' | 'service'
  const bookingData = {};
  let opened = false;

  /* ── DOM helpers ── */
  function $(id) { return document.getElementById(id); }

  function formatText(raw) {
    return raw
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  function addMessage(role, html) {
    const msgs = $('chat-messages');
    const row = document.createElement('div');
    row.className = 'chat-msg ' + role;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = html;
    row.appendChild(bubble);
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
    return row;
  }

  function showTyping() {
    const msgs = $('chat-messages');
    const el = document.createElement('div');
    el.className = 'chat-typing';
    el.id = 'chat-typing-indicator';
    el.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    return el;
  }

  function removeTyping() {
    const el = $('chat-typing-indicator');
    if (el) el.remove();
  }

  function setQuickReplies(replies) {
    const wrap = $('chat-quick-wrap');
    wrap.innerHTML = '';
    replies.forEach(function (label) {
      const btn = document.createElement('button');
      btn.className = 'chat-qr';
      btn.textContent = label;
      btn.addEventListener('click', function () {
        handleUserMessage(label);
      });
      wrap.appendChild(btn);
    });
  }

  function botReply(response, delay) {
    delay = delay || 650;
    showTyping();
    setTimeout(function () {
      removeTyping();
      var msgs = $('chat-messages');
      var row = document.createElement('div');
      row.className = 'chat-msg bot';
      var bubble = document.createElement('div');
      bubble.className = 'chat-bubble';
      bubble.innerHTML = formatText(response.text);
      row.appendChild(bubble);
      msgs.appendChild(row);
      setQuickReplies(response.replies || []);
      requestAnimationFrame(function() { msgs.scrollTop = msgs.scrollHeight; });
    }, delay);
  }

  function submitBooking(name, email, service) {
    var key = document.querySelector('[name="access_key"]');
    var accessKey = key ? key.value : '';
    if (!accessKey || accessKey === 'TU_CLAVE_WEB3FORMS_AQUI') return;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'Nueva solicitud de consulta desde el ChatBot — InfoIA',
        from_name: 'InfoIA ChatBot',
        nombre: name,
        email: email,
        servicio: service,
        mensaje: 'Solicitud de consulta gratuita enviada desde el chatbot.'
      })
    }).catch(function () {});
  }

  /* ── Message router ── */
  function handleUserMessage(text) {
    if (!text.trim()) return;
    addMessage('user', text);
    $('chat-input').value = '';
    $('chat-quick-wrap').innerHTML = '';

    /* Booking flow */
    if (bookingStep === 'name') {
      bookingData.name = text.trim();
      bookingStep = 'email';
      botReply(KB.booking_email(bookingData.name));
      return;
    }

    if (bookingStep === 'email') {
      bookingData.email = text.trim();
      bookingStep = 'service';
      botReply(KB.booking_service);
      return;
    }

    if (bookingStep === 'service') {
      bookingData.service = text.trim();
      bookingStep = null;
      submitBooking(bookingData.name, bookingData.email, bookingData.service);
      botReply(KB.booking_done(bookingData.name, bookingData.email, bookingData.service));
      return;
    }

    /* ── Exact quick-reply shortcuts ── */
    var n = norm(text);

    var WA_URL = 'https://wa.me/34641794007?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita%20con%20InfoIA.';

    function openWhatsApp() {
      botReply({ text: '💬 ¡Abriendo WhatsApp ahora mismo! Nos vemos allí 👋', replies: ['Volver al inicio'] }, 380);
      setTimeout(function () { window.open(WA_URL, '_blank', 'noopener'); }, 480);
    }

    function openForm() {
      botReply({ text: '📋 Te llevo al formulario de contacto. ¡Rellénalo y te respondemos en menos de 24h!', replies: ['Agendar consulta gratis', 'Volver al inicio'] }, 380);
      setTimeout(function () {
        var el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 520);
    }

    if (n === 'volver al inicio')                          { botReply(KB.greeting); return; }
    if (n === 'ver servicios' || n === '¿que servicios ofreceis?' || n === 'ver mas servicios') { botReply(KB.servicios); return; }
    if (n === 'agendar consulta gratis' || n === 'agendar consulta') { bookingStep = 'name'; botReply(KB.booking_start); return; }
    if (n === 'whatsapp')                                  { openWhatsApp(); return; }
    if (n === 'contactar por whatsapp')                    { openWhatsApp(); return; }
    if (n === 'ir al formulario de contacto')              { openForm(); return; }
    if (n === 'contactar')                                 { botReply(KB.contacto); return; }
    if (n === 'ver casos de exito' || n === 'ver casos de éxito') { botReply(KB.casos); return; }
    if (n === 'automatizacion de procesos' || n === 'automatizacion') { botReply(KB.automatizacion); return; }
    if (n === 'webs que convierten' || n === 'webs')       { botReply(KB.webs); return; }
    if (n === 'soluciones de ia' || n === 'soluciones ia') { botReply(KB.ia); return; }
    if (n === '¿cuanto cuesta?' || n === '¿cuanto cuesta')  { botReply(KB.precio); return; }
    if (n === '¿cuanto tiempo tarda?')                     { botReply(KB.tiempo); return; }

    /* ── Keyword intent fallback ── */
    var intent = matchIntent(text);
    switch (intent) {
      case 'greeting':      botReply(KB.greeting);       break;
      case 'servicios':     botReply(KB.servicios);      break;
      case 'automatizacion':botReply(KB.automatizacion); break;
      case 'webs':          botReply(KB.webs);           break;
      case 'ia':            botReply(KB.ia);             break;
      case 'precio':        botReply(KB.precio);         break;
      case 'tiempo':        botReply(KB.tiempo);         break;
      case 'proceso':       botReply(KB.proceso);        break;
      case 'casos':         botReply(KB.casos);          break;
      case 'resultados':    botReply(KB.resultados);     break;
      case 'tecnologia':    botReply(KB.tecnologia);     break;
      case 'sector':        botReply(KB.sector);         break;
      case 'garantia':      botReply(KB.garantia);       break;
      case 'herramientas':  botReply(KB.herramientas);   break;
      case 'mantenimiento': botReply(KB.mantenimiento);  break;
      case 'diferenciacion':botReply(KB.diferenciacion); break;
      case 'remoto':        botReply(KB.remoto);         break;
      case 'contacto':      botReply(KB.contacto);       break;
      case 'whatsapp':      openWhatsApp();              break;
      case 'form':          openForm();                  break;
      case 'booking':       bookingStep = 'name'; botReply(KB.booking_start); break;
      default:              botReply(KB.fallback);
    }
  }

  /* ── Open / Close ── */
  function openChat() {
    opened = true;
    $('chat-window').classList.add('chat-window-open');
    $('chat-toggle').classList.add('chat-open');
    $('chat-window').setAttribute('aria-hidden', 'false');
    $('chat-toggle').setAttribute('aria-expanded', 'true');
    $('chat-label').classList.add('label-hidden');
    var notif = $('chat-notif');
    if (notif) notif.remove();
    setTimeout(function () { $('chat-input').focus(); }, 350);
  }

  function closeChat() {
    $('chat-window').classList.remove('chat-window-open');
    $('chat-toggle').classList.remove('chat-open');
    $('chat-window').setAttribute('aria-hidden', 'true');
    $('chat-toggle').setAttribute('aria-expanded', 'false');
    $('chat-label').classList.remove('label-hidden');
  }

  /* ── Build HTML ── */
  function buildWidget() {
    var container = document.createElement('div');
    container.id = 'infoia-chatbot';
    container.innerHTML = [
      /* Toggle button */
      '<button id="chat-toggle" aria-label="Abrir chat con InfoIA" aria-expanded="false">',
      '  <span id="chat-icon-bot">',
      '    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">',
      '      <rect x="6" y="10" width="16" height="12" rx="4" stroke="white" stroke-width="1.8"/>',
      '      <circle cx="10.5" cy="16" r="1.5" fill="white"/>',
      '      <circle cx="17.5" cy="16" r="1.5" fill="white"/>',
      '      <path d="M14 10V7" stroke="white" stroke-width="1.8" stroke-linecap="round"/>',
      '      <circle cx="14" cy="5.5" r="1.5" fill="white"/>',
      '      <path d="M8 22l-2 2M20 22l2 2" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
      '      <path d="M6 16H4M22 16h2" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
      '    </svg>',
      '  </span>',
      '  <span id="chat-icon-close">',
      '    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">',
      '      <path d="M5 5l12 12M17 5L5 17" stroke="white" stroke-width="2.2" stroke-linecap="round"/>',
      '    </svg>',
      '  </span>',
      '</button>',

      /* Notification dot */
      '<div id="chat-notif" aria-hidden="true"></div>',

      /* Label pill */
      '<div id="chat-label" aria-hidden="true">¡Hablar con InfoIA!</div>',

      /* Chat window */
      '<div id="chat-window" role="dialog" aria-label="Chat con InfoIA" aria-hidden="true" aria-modal="true">',

      /* Header */
      '  <div id="chat-header">',
      '    <div class="chat-hdr-info">',
      '      <div class="chat-avatar">',
      '        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">',
      '          <rect x="6" y="10" width="16" height="12" rx="4" stroke="white" stroke-width="1.8"/>',
      '          <circle cx="10.5" cy="16" r="1.5" fill="white"/>',
      '          <circle cx="17.5" cy="16" r="1.5" fill="white"/>',
      '          <path d="M14 10V7" stroke="white" stroke-width="1.8" stroke-linecap="round"/>',
      '          <circle cx="14" cy="5.5" r="1.5" fill="white"/>',
      '          <path d="M8 22l-2 2M20 22l2 2" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
      '          <path d="M6 16H4M22 16h2" stroke="white" stroke-width="1.6" stroke-linecap="round"/>',
      '        </svg>',
      '      </div>',
      '      <div>',
      '        <div class="chat-hdr-name">Asistente InfoIA</div>',
      '        <div class="chat-hdr-status"><span class="status-dot"></span>En línea · 24/7</div>',
      '      </div>',
      '    </div>',
      '    <button id="chat-close-btn" aria-label="Cerrar chat">',
      '      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">',
      '        <path d="M2 2l10 10M12 2L2 12" stroke="white" stroke-width="2" stroke-linecap="round"/>',
      '      </svg>',
      '    </button>',
      '  </div>',

      /* Messages */
      '  <div id="chat-messages" role="log" aria-live="polite" aria-label="Mensajes del chat"></div>',

      /* Quick replies */
      '  <div id="chat-quick-wrap" role="group" aria-label="Respuestas rápidas"></div>',

      /* Input */
      '  <div id="chat-input-row">',
      '    <input type="text" id="chat-input" placeholder="Escribe tu mensaje…" autocomplete="off" aria-label="Escribe un mensaje" maxlength="300">',
      '    <button id="chat-send-btn" type="button" aria-label="Enviar mensaje">',
      '      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">',
      '        <path d="M2 8h12M8 3l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      '      </svg>',
      '    </button>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(container);
  }

  /* ── Init ── */
  function init() {
    buildWidget();

    /* Aparece a los 3 segundos con animación profesional */
    setTimeout(function () {
      document.getElementById('infoia-chatbot').classList.add('chatbot-visible');
    }, 3000);

    /* Events */
    $('chat-toggle').addEventListener('click', function () {
      if ($('chat-window').classList.contains('chat-window-open')) {
        closeChat();
      } else {
        var firstOpen = !opened;
        openChat();
        if (firstOpen) {
          botReply({ text: 'Hola, ¿en qué le podemos ayudar? 👋', replies: ['¿Qué servicios ofrecéis?', '¿Cuánto cuesta?', 'Agendar consulta gratis', 'Ver casos de éxito'] }, 400);
        }
      }
    });

    $('chat-close-btn').addEventListener('click', closeChat);

    $('chat-send-btn').addEventListener('click', function () {
      handleUserMessage($('chat-input').value.trim());
    });

    $('chat-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserMessage($('chat-input').value.trim());
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && $('chat-window').classList.contains('chat-window-open')) {
        closeChat();
        $('chat-toggle').focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
