export const openWhatsApp = () => {
  // Configurar mensaje de alto perfil
  const phoneNumber = "34600000000"; 
  const message = "Hola AvantGarde. Me gustaría verificar disponibilidad de agenda para una reforma integral y solicitar consultoría de viabilidad.";
  
  // Encode URI
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Simular evento de conversión para Pixel/Analytics
  console.log("Omega-7: Conversion Event Triggered - 'Lead Contact'");
  
  // Abrir en nueva pestaña
  window.open(url, '_blank');
};