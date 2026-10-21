// Medidas del layout de celular/tablet de cada bloque (tomadas de chery.com.ar a 393px) como variables CSS --m-*.
export const mVars = (m) =>
  m
    ? {
        '--m-pad': m.pad,
        '--m-cp': m.cpad,
        '--m-cmr': m.cmr,
        '--m-gp': m.gpad,
        '--m-pmb': m.pmb !== undefined ? `${m.pmb}px` : undefined,
        '--m-logo-w': m.logoW ? `${m.logoW}px` : undefined,
      }
    : undefined;
