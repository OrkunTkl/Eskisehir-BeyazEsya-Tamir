"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { MotionValue } from "framer-motion";

const DY = -0.45; // tambur merkezi
const sm = (t: number) => {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function perforation() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#a4adb7";
  g.fillRect(0, 0, 256, 256);
  g.fillStyle = "#14171c";
  for (let y = 0; y < 8; y++)
    for (let x = 0; x < 8; x++) {
      g.beginPath();
      g.arc(16 + x * 32 + (y % 2) * 16, 16 + y * 32, 6, 0, 7);
      g.fill();
    }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(14, 5);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Kapağı açık çamaşır makinesi. Kaydırma ilerlemesi (p) kamerayı tamburun içine sokar. */
export default function Machine({
  p,
  onReady,
}: {
  p: MotionValue<number>;
  onReady?: () => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const cb = useRef(onReady);
  cb.current = onReady;
  useEffect(() => {
    const el = box.current!;
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    r.setPixelRatio(Math.min(devicePixelRatio, 2));
    r.setClearColor(0x000000, 0);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    el.appendChild(r.domElement);
    r.domElement.style.cssText = "width:100%;height:100%;display:block";
    const scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    const room = new RoomEnvironment();
    scene.environment = pm.fromScene(room, 0.04).texture;
    const cam = new THREE.PerspectiveCamera(35, 1, 0.1, 160);

    const white = new THREE.MeshPhysicalMaterial({
      color: 0xf2f4f7,
      roughness: 0.3,
      metalness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
    });
    const chrome = new THREE.MeshStandardMaterial({
      color: 0xdfe3e8,
      metalness: 1,
      roughness: 0.14,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x0b0c0e,
      roughness: 0.55,
      metalness: 0.2,
    });
    const mach = new THREE.Group();
    scene.add(mach);

    // ön plaka (tambur deliği ile)
    const W = 4.4,
      H = 5.6,
      R = 0.28,
      s = new THREE.Shape();
    s.moveTo(-W / 2 + R, -H / 2);
    s.lineTo(W / 2 - R, -H / 2);
    s.quadraticCurveTo(W / 2, -H / 2, W / 2, -H / 2 + R);
    s.lineTo(W / 2, H / 2 - R);
    s.quadraticCurveTo(W / 2, H / 2, W / 2 - R, H / 2);
    s.lineTo(-W / 2 + R, H / 2);
    s.quadraticCurveTo(-W / 2, H / 2, -W / 2, H / 2 - R);
    s.lineTo(-W / 2, -H / 2 + R);
    s.quadraticCurveTo(-W / 2, -H / 2, -W / 2 + R, -H / 2);
    const hole = new THREE.Path();
    hole.absarc(0, DY, 1.62, 0, Math.PI * 2, true);
    s.holes.push(hole);
    const plate = new THREE.Mesh(
      new THREE.ExtrudeGeometry(s, {
        depth: 0.3,
        bevelEnabled: true,
        bevelSize: 0.05,
        bevelThickness: 0.05,
        bevelSegments: 4,
        curveSegments: 48,
      }),
      white,
    );
    plate.position.z = -0.3;
    mach.add(plate);
    // gövde (ön yüzü görünmez, delikten tambur görünsün)
    const hid = new THREE.MeshBasicMaterial({ visible: false });
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(W - 0.04, H - 0.04, 3.4),
      [white, white, white, white, hid, white],
    );
    body.position.z = -2.05;
    mach.add(body);
    // kontrol paneli
    const panel = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.55, 0.06), dark);
    panel.position.set(0, 2.2, 0.08);
    mach.add(panel);
    const knob = new THREE.Mesh(
      new THREE.CylinderGeometry(0.23, 0.23, 0.16, 40),
      chrome,
    );
    knob.rotation.x = Math.PI / 2;
    knob.position.set(-1.35, 2.2, 0.16);
    mach.add(knob);
    const disp = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.22, 0.02),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        emissive: 0xd4ff3a,
        emissiveIntensity: 1.6,
      }),
    );
    disp.position.set(0.5, 2.2, 0.12);
    mach.add(disp);
    [1.25, 1.55].forEach((x) => {
      const b = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 0.1, 24),
        chrome,
      );
      b.rotation.x = Math.PI / 2;
      b.position.set(x, 2.2, 0.13);
      mach.add(b);
    });
    // lastik conta
    const gasket = new THREE.Mesh(
      new THREE.TorusGeometry(1.66, 0.14, 24, 96),
      dark,
    );
    gasket.position.set(0, DY, 0.06);
    mach.add(gasket);
    // kapak: sol menteşe, dışarı doğru açık
    const hinge = new THREE.Group();
    hinge.position.set(-1.95, DY, 0.14);
    mach.add(hinge);
    const door = new THREE.Group();
    door.position.x = 1.95;
    hinge.add(door);
    door.add(
      new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.26, 32, 120), white),
    );
    door.add(
      new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.06, 16, 120), chrome),
    );
    const glass = new THREE.Mesh(
      new THREE.CircleGeometry(1.5, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0x9fd8ff,
        transparent: true,
        opacity: 0.2,
        roughness: 0.03,
        clearcoat: 1,
        side: THREE.DoubleSide,
      }),
    );
    glass.position.z = -0.02;
    door.add(glass);
    const handle = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.07, 0.8, 8, 16),
      chrome,
    );
    handle.position.set(1.95, 0, 0.16);
    door.add(handle);
    // tambur
    const drum = new THREE.Group();
    drum.position.set(0, DY, -1.9);
    mach.add(drum);
    const cyl = new THREE.Mesh(
      new THREE.CylinderGeometry(1.55, 1.55, 3.2, 64, 1, true),
      new THREE.MeshStandardMaterial({
        map: perforation(),
        metalness: 0.85,
        roughness: 0.38,
        side: THREE.BackSide,
      }),
    );
    cyl.rotation.x = Math.PI / 2;
    drum.add(cyl);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2,
        pd = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.45, 2.8), chrome);
      pd.position.set(Math.cos(a) * 1.35, Math.sin(a) * 1.35, 0);
      pd.rotation.z = a - Math.PI / 2;
      drum.add(pd);
    }
    // PORTAL: tambur ucu renk yazmaz → arkadaki site (hero) görünür. Çevresi simsiyah düzlem.
    const portal = new THREE.Mesh(
      new THREE.CircleGeometry(1.56, 64),
      new THREE.MeshBasicMaterial({ colorWrite: false }),
    );
    portal.position.set(0, DY, -3.5);
    portal.renderOrder = -10;
    mach.add(portal);
    const blackout = new THREE.Mesh(
      new THREE.PlaneGeometry(500, 500),
      new THREE.MeshBasicMaterial({ color: 0x000000 }),
    );
    blackout.position.z = -60;
    blackout.renderOrder = 10;
    scene.add(blackout);
    const l1 = new THREE.PointLight(0xbfe9ff, 40, 9, 2);
    l1.position.set(0, DY, -1.4);
    mach.add(l1);
    const l2 = new THREE.PointLight(0xd4ff3a, 25, 8, 2);
    l2.position.set(0, DY, -3.0);
    mach.add(l2);
    const sun = new THREE.DirectionalLight(0xffffff, 2.4);
    sun.position.set(-4, 6, 8);
    scene.add(sun);

    const size = () => {
      const w = el.clientWidth,
        h = el.clientHeight;
      r.setSize(w, h, false);
      cam.aspect = w / h;
    };
    size();
    addEventListener("resize", size);
    let mx = 0;
    const move = (e: PointerEvent) => {
      mx = e.clientX / innerWidth - 0.5;
    };
    addEventListener("pointermove", move);
    const t0 = performance.now();
    let id = 0,
      done = false,
      ready = false;
    const loop = () => {
      const t = (performance.now() - t0) / 1000,
        q = p.get(),
        m = sm(q / 0.7);
      hinge.rotation.y = lerp(0, -1.95, sm((t - 1.5) / 1.9)); // kapak açılır
      drum.rotation.z = t * 0.35 + q * 14;
      mach.rotation.y +=
        ((1 - m) * (Math.sin(t * 0.6) * 0.06 + mx * 0.35) - mach.rotation.y) *
        0.06;
      const z0 = Math.max(10.8, 8.4 / cam.aspect),
        mm = m * m * (3 - 2 * m);
      cam.position.set(
        lerp(1.5, 0, mm),
        lerp(0.7, DY, mm),
        lerp(z0, -3.0, Math.pow(m, 1.15)),
      );
      cam.fov = lerp(35, 62, m * m);
      cam.updateProjectionMatrix();
      cam.lookAt(0, lerp(0, DY, mm), lerp(0, -9, mm));
      if (!(q > 0.78 && done)) r.render(scene, cam);
      done = q > 0.78;
      if (!ready) {
        ready = true;
        cb.current?.();
      }
      id = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(id);
      removeEventListener("resize", size);
      removeEventListener("pointermove", move);
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        mesh.geometry?.dispose();
      });
      room.dispose();
      pm.dispose();
      r.dispose();
      r.domElement.remove();
    };
  }, [p]);
  return <div ref={box} className="absolute inset-0" aria-hidden />;
}
