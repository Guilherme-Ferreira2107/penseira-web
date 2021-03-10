export function alertaExibir(alerta) {
  return {
    type: "@alertas/alertaExibir",
    payload: alerta
  };
}

export function alertaRemover(alerta) {
  return {
    type: "@alertas/alertaRemover",
    payload: { alerta }
  };
}

export function alertaFechar() {
  return {
    type: "@alertas/alertaFechar"
  };
}

export function alertaConfirmar(titulo, texto, textoOk, textoCancelar) {
  return {
    type: "@alertas/alertaConfirmar",
    payload: {
      titulo,
      texto,
      textoOk,
      textoCancelar
    }
  };
}
