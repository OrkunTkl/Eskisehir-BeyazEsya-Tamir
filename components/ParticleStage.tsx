"use client";
import { useEffect, useRef } from "react";
import { stage } from "@/lib/stage";

type Ctx = { hw: number; hh: number; desk: boolean };
type Gen = (u: number, r: () => number, c: Ctx) => [number, number, number];
type Place = { cx: number; cy: number; s: number };

const TAU = Math.PI * 2;
const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const ss = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/* ---- Şekiller: yerel koordinat, yaklaşık 2.4 birim yarıçap ---- */
const washer: Gen = (u, r) => {
  if (u < 0.3) {
    const a = r() * TAU,
      d = 2.2 + (r() - 0.5) * 0.14;
    return [Math.cos(a) * d, Math.sin(a) * d, (r() - 0.5) * 0.3];
  }
  if (u < 0.4) {
    const a = r() * TAU,
      d = 1.55 + (r() - 0.5) * 0.08;
    return [Math.cos(a) * d, Math.sin(a) * d, 0.2 + (r() - 0.5) * 0.2];
  }
  if (u < 0.86) {
    const t = r(),
      rad = t * 1.45,
      arm = Math.floor(r() * 3) * 2.094,
      a = rad * 5.2 + arm + (r() - 0.5) * 0.25;
    return [
      Math.cos(a) * rad,
      Math.sin(a) * rad,
      -0.15 + (1 - t) * 0.45 + (r() - 0.5) * 0.15,
    ];
  }
  const a = r() * TAU,
    d = Math.sqrt(r()) * 1.4;
  return [Math.cos(a) * d, Math.sin(a) * d, (r() - 0.5) * 0.9];
};
const dish: Gen = (u, r) => {
  if (u < 0.55) {
    const k = Math.floor(r() * 13),
      ang = (k / 12 - 0.5) * 1.7 + (r() - 0.5) * 0.04,
      d = Math.pow(r(), 0.8) * 3.9;
    return [Math.sin(ang) * d, 2.05 - Math.cos(ang) * d, (r() - 0.5) * 0.5];
  }
  if (u < 0.86) {
    const k = Math.floor(r() * 3),
      a = r() * TAU,
      rx = 1.9 - k * 0.18;
    return [
      Math.cos(a) * rx,
      -1.15 - k * 0.5 + Math.sin(a) * rx * 0.2,
      Math.sin(a) * rx * 0.25,
    ];
  }
  return [(r() - 0.5) * 4, (r() - 0.5) * 4.2, (r() - 0.5) * 0.8];
};
const fridge: Gen = (u, r) => {
  const w = 1.15,
    h = 2.0;
  if (u < 0.45) {
    const p = r() * 2 * (w + h) * 2;
    let x: number, y: number;
    if (p < 2 * w * 2) {
      x = (p / (4 * w) - 0.5) * 2 * w;
      y = (Math.floor(r() * 2) - 0.5) * 2 * h;
    } else {
      y = (r() - 0.5) * 2 * h;
      x = (Math.floor(r() * 2) - 0.5) * 2 * w;
    }
    return [x, y, (r() - 0.5) * 0.25];
  }
  if (u < 0.55) return [(r() - 0.5) * 2 * w, 0.9, (r() - 0.5) * 0.2];
  if (u < 0.63)
    return [
      0.78 + (r() - 0.5) * 0.06,
      (Math.floor(r() * 2) ? 1 : -0.1) + (r() - 0.5) * 0.9,
      0.15,
    ];
  const g = 0.26;
  return [
    Math.round(((r() - 0.5) * 2 * (w - 0.1)) / g) * g + (r() - 0.5) * 0.02,
    Math.round(((r() - 0.5) * 2 * (h - 0.1)) / g) * g + (r() - 0.5) * 0.02,
    (r() - 0.5) * 0.5,
  ];
};
const oven: Gen = (u, r) => {
  if (u < 0.34) {
    const p = r() * 4,
      a = 1.9,
      b = 1.45;
    const t = (r() - 0.5) * 2;
    return p < 1
      ? [t * a, -0.4 + b, 0]
      : p < 2
        ? [t * a, -0.4 - b, 0]
        : p < 3
          ? [-a, -0.4 + t * b, 0]
          : [a, -0.4 + t * b, 0];
  }
  if (u < 0.4) return [(r() - 0.5) * 3.8, 1.5 + (r() - 0.5) * 0.05, 0];
  if (u < 0.52) {
    const k = Math.floor(r() * 4),
      a = r() * TAU;
    return [-1.5 + k + Math.cos(a) * 0.22, 2.15 + Math.sin(a) * 0.22, 0.1];
  }
  const x = (r() - 0.5) * 3.2,
    hgt = 2.5 * (0.45 + 0.55 * Math.cos(x * 0.95)) * Math.pow(r(), 0.65);
  return [x + Math.sin(hgt * 3) * 0.12, -1.7 + hgt, (r() - 0.5) * 0.6];
};
const dryer: Gen = (u, r) => {
  if (u < 0.68) {
    const z = 1 - 2 * r(),
      a = r() * TAU,
      q = Math.sqrt(1 - z * z);
    return [Math.cos(a) * q * 1.9, Math.sin(a) * q * 1.9, z * 1.9];
  }
  if (u < 0.86) {
    const a = r() * TAU,
      tl = 1.2;
    return [
      Math.cos(a) * 2.35,
      Math.sin(a) * 2.35 * Math.cos(tl),
      Math.sin(a) * 2.35 * Math.sin(tl),
    ];
  }
  const z = 1 - 2 * r(),
    a = r() * TAU,
    q = Math.sqrt(1 - z * z),
    d = 0.75 * Math.cbrt(r());
  return [Math.cos(a) * q * d, Math.sin(a) * q * d, z * d];
};
const flow: Gen = (_u, r, c) => {
  const k = Math.floor(r() * 6),
    x = (r() - 0.5) * 2 * (c.hw * 1.06);
  return [
    x,
    (k - 2.5) * (c.desk ? 0.85 : 0.7) + Math.sin(x * 0.9 + k * 1.3) * 0.55,
    (r() - 0.5) * 1.6,
  ];
};
const split: Gen = (u, r, c) => {
  const R = c.desk ? 1.45 : Math.min(1.1, c.hw * 0.7),
    sp = c.desk ? c.hw * 0.55 : c.hh * 0.42;
  if (u < 0.82) {
    const side = u < 0.41 ? -1 : 1,
      z = 1 - 2 * r(),
      a = r() * TAU,
      q = Math.sqrt(1 - z * z),
      d = R * Math.cbrt(r());
    const x = Math.cos(a) * q * d,
      y = Math.sin(a) * q * d;
    return c.desk ? [side * sp + x, y, z * d] : [x, side * sp + y, z * d];
  }
  const t = r() - 0.5,
    arc = Math.sin(r() * 6) * 0.25;
  return c.desk
    ? [t * 2 * sp, arc + Math.sin(t * 8) * 0.4, (r() - 0.5) * 0.4]
    : [arc + Math.sin(t * 8) * 0.3, t * 2 * sp, (r() - 0.5) * 0.4];
};
const helix: Gen = (_u, r, c) => {
  const t = r(),
    ang = t * TAU * (c.desk ? 3 : 2.2),
    rad = (c.desk ? 1.3 : 0.7) * (0.75 + 0.25 * Math.sin(t * 9)),
    j = 0.07;
  const a = (t - 0.5) * 2 * (c.desk ? c.hw * 0.92 : c.hh * 0.9),
    x = Math.cos(ang) * rad + (r() - 0.5) * j,
    z = Math.sin(ang) * rad + (r() - 0.5) * j;
  return c.desk ? [a, x, z] : [x, a, z];
};
const ring: Gen = (u, r) => {
  if (u < 0.52) {
    const a = r() * TAU,
      d = 2.3 + (r() - 0.5) * 0.12;
    return [Math.cos(a) * d, Math.sin(a) * d, (r() - 0.5) * 0.2];
  }
  if (u < 0.8) {
    const a = (Math.floor(r() * 12) / 12) * TAU + (r() - 0.5) * 0.06,
      d = 2.55 + r() * 0.45;
    return [Math.cos(a) * d, Math.sin(a) * d, (r() - 0.5) * 0.2];
  }
  if (u < 0.9) {
    const a = r() * TAU,
      d = 1.3 + (r() - 0.5) * 0.04,
      g = a < Math.PI * 1.6 ? 1 : 0;
    return [Math.cos(a) * d * (g ? 1 : 0.9), Math.sin(a) * d, 0.1];
  }
  const a = r() * TAU,
    d = 0.38 * Math.sqrt(r());
  return [Math.cos(a) * d, Math.sin(a) * d, (r() - 0.5) * 0.3];
};

const GEN: Record<string, Gen> = {
  a0: washer,
  a1: dish,
  a2: fridge,
  a3: oven,
  a4: dryer,
  flow,
  split,
  helix,
  ring,
};
const META: Record<string, { c: string; spin: number; alpha: number }> = {
  a0: { c: "#1fe0c4", spin: 0.9, alpha: 0.95 },
  a1: { c: "#3fb8ff", spin: 0.1, alpha: 0.95 },
  a2: { c: "#5cc8f0", spin: 0, alpha: 0.95 },
  a3: { c: "#ffb224", spin: 0, alpha: 0.95 },
  a4: { c: "#ff7a66", spin: 1.1, alpha: 0.95 },
  flow: { c: "#1fe0c4", spin: 0, alpha: 0.42 },
  split: { c: "#ffb224", spin: 0.08, alpha: 0.38 },
  helix: { c: "#1fe0c4", spin: 0, alpha: 0.45 },
  ring: { c: "#1fe0c4", spin: 0.12, alpha: 0.6 },
};
const STAGE_KEYS = ["", "flow", "split", "helix", "ring"];
const keyOf = (i: number) =>
  i === 0 ? `a${stage.hero}` : STAGE_KEYS[Math.min(i, 4)];

function placeOf(key: string, c: Ctx): Place {
  const hero = key[0] === "a";
  if (hero)
    return c.desk
      ? { cx: c.hw * 0.48, cy: c.hh * 0.3, s: 0.58 }
      : { cx: 0, cy: -c.hh * 0.14, s: Math.min(0.44, (c.hw * 0.8) / 2.3) };
  if (key === "ring")
    return { cx: 0, cy: 0, s: c.desk ? 1 : Math.min(1, c.hw / 2.9) };
  return { cx: 0, cy: 0, s: 1 };
}

const VERT = /* glsl */ `
attribute vec3 aB; attribute vec4 aR;
uniform float uMix,uTime,uSize,uDark,uAlpha,uSpin,uVel;
uniform vec2 uCenter; uniform vec3 uMouse; uniform vec3 uAccent;
varying vec3 vC; varying float vA;
void main(){
  float m = smoothstep(aR.x*0.45, 0.55+aR.x*0.45, uMix);
  vec3 p = mix(position, aB, m);
  float tr = sin(m*3.14159265);
  p += vec3(sin(aR.y*6.2831+uTime*.6), cos(aR.z*6.2831+uTime*.5), sin(aR.w*6.2831+uTime*.4))*tr*(0.6+aR.w*1.6);
  vec2 q = p.xy - uCenter;
  float ang = uTime*uSpin*0.25*(1.6 - min(length(q),1.5)*0.7);
  float cs = cos(ang), sn = sin(ang);
  p.xy = uCenter + vec2(q.x*cs - q.y*sn, q.x*sn + q.y*cs);
  p += 0.05*vec3(sin(uTime*.7+aR.y*40.), cos(uTime*.6+aR.z*40.), sin(uTime*.5+aR.w*40.));
  p.y += uVel*(aR.z-0.5)*1.6;
  vec2 d = p.xy - uMouse.xy; float l = length(d);
  float f = exp(-l*l*1.6);
  p.xy += d/(l+1e-3)*f*0.6; p.z += f*0.5;
  vec4 mv = modelViewMatrix*vec4(p,1.);
  gl_Position = projectionMatrix*mv;
  gl_PointSize = uSize*(0.55+aR.y)*(10./-mv.z);
  vec3 ink = mix(vec3(.078,.09,.102), vec3(.93,.95,.94), uDark);
  vec3 steel = mix(vec3(.45,.5,.54), vec3(.67,.7,.73), uDark);
  vec3 c = mix(ink, steel, step(.6,aR.z)*.8);
  c = mix(c, uAccent, step(.84,aR.w));
  vC = c; vA = uAlpha*(0.45+0.55*aR.y);
}`;
const FRAG = /* glsl */ `
varying vec3 vC; varying float vA;
void main(){ float d = length(gl_PointCoord-.5); float a = smoothstep(.5,.2,d); if(a<.01) discard; gl_FragColor = vec4(vC, a*vA); }`;

export function ParticleStage() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let dead = false;
    let cleanup = () => {};
    (async () => {
      const THREE = await import("three");
      if (dead) return;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }
      const small = innerWidth < 768 || matchMedia("(pointer: coarse)").matches;
      const N = small ? 6500 : 15000;
      const dpr = Math.min(devicePixelRatio || 1, 1.75);
      renderer.setPixelRatio(dpr);
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
      camera.position.z = 10;
      const scene = new THREE.Scene();
      const geo = new THREE.BufferGeometry();
      const aA = new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(
        THREE.DynamicDrawUsage,
      );
      const aB = new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(
        THREE.DynamicDrawUsage,
      );
      const rr = rng(7),
        rnd = new Float32Array(N * 4);
      for (let i = 0; i < rnd.length; i++) rnd[i] = rr();
      geo.setAttribute("position", aA);
      geo.setAttribute("aB", aB);
      geo.setAttribute("aR", new THREE.BufferAttribute(rnd, 4));
      const uni = {
        uMix: { value: 0 },
        uTime: { value: 0 },
        uSize: { value: (small ? 2.7 : 2.4) * dpr },
        uDark: { value: 0 },
        uAlpha: { value: 0.95 },
        uSpin: { value: 0 },
        uVel: { value: 0 },
        uCenter: { value: new THREE.Vector2() },
        uMouse: { value: new THREE.Vector3(99, 99, 0) },
        uAccent: { value: new THREE.Color("#1fe0c4") },
      };
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: uni,
        transparent: true,
        depthWrite: false,
      });
      const pts = new THREE.Points(geo, mat);
      pts.frustumCulled = false;
      scene.add(pts);

      const ctx: Ctx = { hw: 5, hh: 3.15, desk: true };
      let shapes: Record<string, Float32Array> = {};
      const places: Record<string, Place> = {};
      const build = () => {
        shapes = {};
        for (const k of Object.keys(GEN)) {
          const g = GEN[k],
            p = placeOf(k, ctx),
            r = rng(k.charCodeAt(0) * 131 + k.length * 17 + 3),
            out = new Float32Array(N * 3);
          for (let i = 0; i < N; i++) {
            const [x, y, z] = g(i / N, r, ctx);
            out[i * 3] = x * p.s + p.cx;
            out[i * 3 + 1] = y * p.s + p.cy;
            out[i * 3 + 2] = z * p.s;
          }
          shapes[k] = out;
          places[k] = p;
        }
      };
      let tops: number[] = [],
        darkTop = 0,
        darkBot = 0;
      let curKey = "";
      const measure = () => {
        const sy = scrollY;
        tops = [...document.querySelectorAll<HTMLElement>("[data-stage]")].map(
          (e) => e.getBoundingClientRect().top + sy,
        );
        const d = document.querySelector<HTMLElement>("[data-stage-dark]");
        if (d) {
          const b = d.getBoundingClientRect();
          darkTop = b.top + sy;
          darkBot = b.bottom + sy;
        }
      };
      const resize = () => {
        const w = innerWidth,
          h = innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        ctx.hh = Math.tan((35 / 2) * (Math.PI / 180)) * 10;
        ctx.hw = ctx.hh * camera.aspect;
        ctx.desk = w >= 1024;
        build();
        curKey = "";
        measure();
      };
      let rt = 0;
      const onResize = () => {
        clearTimeout(rt);
        rt = window.setTimeout(resize, 120);
      };
      resize();
      renderer.setSize(innerWidth, innerHeight, false);
      addEventListener("resize", onResize);
      const ro = new ResizeObserver(() => measure());
      ro.observe(document.body);

      const mouse = { x: 99, y: 99, tx: 99, ty: 99 };
      const onMove = (e: PointerEvent) => {
        if (e.pointerType === "touch") return;
        mouse.tx = ((e.clientX / innerWidth) * 2 - 1) * ctx.hw;
        mouse.ty = -((e.clientY / innerHeight) * 2 - 1) * ctx.hh;
      };
      const onLeave = () => {
        mouse.tx = 99;
        mouse.ty = 99;
      };
      addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);

      const cLight = new THREE.Color("#f1f2ef"),
        cDark = new THREE.Color("#14171a"),
        bg = new THREE.Color();
      const cA = new THREE.Color(),
        cB = new THREE.Color();
      let dark = 0,
        vel = 0,
        lastY = scrollY,
        last = performance.now(),
        time = 0;
      let lastHero = stage.hero,
        ov: { t0: number; from: number; to: number } | null = null;
      document.documentElement.classList.add("has-stage");

      let raf = 0;
      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        if (document.hidden) {
          last = now;
          return;
        }
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (!reduce) time += dt;
        const sy = scrollY,
          vh = innerHeight;
        vel +=
          (Math.min(
            1.2,
            (Math.abs(sy - lastY) / Math.max(1, dt * 1000)) * 0.18,
          ) -
            vel) *
          0.12;
        lastY = sy;

        const y = sy + vh * 0.5,
          n = tops.length || 1;
        let i = 0;
        for (let k = 1; k < n; k++) if (y >= tops[k]) i = k;
        let f = 0;
        if (i + 1 < n)
          f = ss(0.62, 1, (y - tops[i]) / Math.max(1, tops[i + 1] - tops[i]));
        if (stage.hero !== lastHero) {
          if (i === 0 && f < 0.02 && !reduce)
            ov = { t0: now, from: lastHero, to: stage.hero };
          lastHero = stage.hero;
        }
        let kA = keyOf(i),
          kB = keyOf(Math.min(i + 1, Math.max(n - 1, 0))),
          m = f;
        if (ov) {
          if (f > 0.02) ov = null;
          else {
            const p = Math.min(1, (now - ov.t0) / 1300);
            kA = `a${ov.from}`;
            kB = `a${ov.to}`;
            m = ease(p);
            if (p >= 1) ov = null;
          }
        }
        const sig = kA + "|" + kB;
        if (sig !== curKey) {
          aA.array.set(shapes[kA]);
          aB.array.set(shapes[kB]);
          aA.needsUpdate = true;
          aB.needsUpdate = true;
          curKey = sig;
        }
        uni.uMix.value = m;
        uni.uTime.value = time;
        uni.uVel.value = reduce ? 0 : vel;
        const mA = META[kA],
          mB = META[kB],
          pA = places[kA],
          pB = places[kB];
        uni.uAlpha.value = mA.alpha + (mB.alpha - mA.alpha) * m;
        uni.uSpin.value = mA.spin + (mB.spin - mA.spin) * m;
        uni.uCenter.value.set(
          pA.cx + (pB.cx - pA.cx) * m,
          pA.cy + (pB.cy - pA.cy) * m,
        );
        uni.uAccent.value.copy(cA.set(mA.c).lerp(cB.set(mB.c), m));

        const dT = Math.min(
          ss(vh * 0.55, vh * 0.25, darkTop - sy),
          ss(vh * 0.45, vh * 0.7, darkBot - sy),
        );
        dark += (dT - dark) * 0.14;
        uni.uDark.value = dark;
        renderer.setClearColor(bg.copy(cLight).lerp(cDark, dark), 1);

        mouse.x += (mouse.tx - mouse.x) * 0.14;
        mouse.y += (mouse.ty - mouse.y) * 0.14;
        uni.uMouse.value.set(mouse.x, mouse.y, 0);
        pts.rotation.y = reduce
          ? 0
          : (mouse.x > 50 ? 0 : mouse.x / ctx.hw) * 0.06;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(raf);
        clearTimeout(rt);
        ro.disconnect();
        removeEventListener("resize", onResize);
        removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerleave", onLeave);
        document.documentElement.classList.remove("has-stage");
        geo.dispose();
        mat.dispose();
        renderer.dispose();
      };
    })();
    return () => {
      dead = true;
      cleanup();
    };
  }, []);
  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
