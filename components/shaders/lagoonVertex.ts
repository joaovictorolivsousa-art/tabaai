const lagoonVertex = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  varying vec2 vUv;
  varying float vElevation;
  varying vec2 vPos;

  float wave(vec2 p, float freq, float amp, float speed, vec2 dir) {
    return sin(dot(p, dir) * freq + uTime * speed) * amp;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos.xz;

    float e = 0.0;

    // grande marolo — dá profundidade e uma sensação mais viva de água aberta
    e += wave(pos.xz, 0.10, 0.4, 0.22, normalize(vec2(1.0, 0.25)));
    // cadência principal da lagoa
    e += wave(pos.xz, 0.35, 0.42, 0.6, normalize(vec2(1.0, 0.4)));
    e += wave(pos.xz, 0.65, 0.22, 0.9, normalize(vec2(-0.6, 1.0)));
    // textura fina da superfície
    e += wave(pos.xz, 1.2, 0.09, 1.4, normalize(vec2(0.8, -0.6)));
    e += wave(pos.xz, 2.1, 0.035, 2.0, normalize(vec2(-0.3, -0.9)));

    // pulso ambiente periódico a partir do centro — a lagoa "respira" mesmo
    // sem interação do usuário, ecoando a mesma animação de ripple usada em
    // outros pontos do site (marcador do mapa, etc.)
    float ambientDist = length(pos.xz);
    float ambientPulse = sin(ambientDist * 1.1 - uTime * 0.9) * exp(-ambientDist * 0.16);
    e += ambientPulse * (0.14 + 0.05 * sin(uTime * 0.35));

    // ripple de interação (ponteiro/toque)
    float d = distance(pos.xz, uMouse);
    float ripple = sin(d * 1.6 - uTime * 2.2) * exp(-d * 0.28) * uMouseStrength;
    e += ripple;

    pos.y += e;
    vElevation = e;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export default lagoonVertex;
