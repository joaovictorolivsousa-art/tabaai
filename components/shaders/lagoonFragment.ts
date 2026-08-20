const lagoonFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  varying float vElevation;
  varying vec2 vPos;
  uniform vec3 uColorDeep;
  uniform vec3 uColorMid;
  uniform vec3 uColorFoam;
  uniform float uTime;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    float e = clamp(vElevation * 0.9 + 0.5, 0.0, 1.0);
    vec3 base = mix(uColorDeep, uColorMid, e);

    // espuma orgânica nas cristas — textura de ruído em vez de uma banda uniforme
    float crest = smoothstep(0.6, 0.95, e);
    float foamNoise = hash(floor(vPos * 3.2) + floor(uTime * 0.6));
    float foam = crest * smoothstep(0.25, 0.9, foamNoise);
    base = mix(base, uColorFoam, foam * 0.6);

    // glints esparsos de luz na água, cintilando com o tempo
    float sparkleCell = hash(floor(vPos * 9.0) + floor(uTime * 2.4));
    float sparkle = step(0.982, sparkleCell) * smoothstep(0.35, 1.0, e);
    base += uColorFoam * sparkle * 0.9;

    // profundidade sutil perto da base da tela
    float fresnelLike = pow(1.0 - vUv.y, 2.2);
    base += uColorMid * fresnelLike * 0.14;

    // faixas finas de luz cruzando a superfície, lentas e discretas
    float band = sin(vUv.x * 32.0 + vPos.y * 0.4 + uTime * 0.12) * 0.012;
    base += band;

    gl_FragColor = vec4(base, 1.0);
  }
`;

export default lagoonFragment;
