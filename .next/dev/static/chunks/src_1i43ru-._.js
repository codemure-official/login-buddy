(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mascot/robot-canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RobotCanvas",
    ()=>RobotCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.6_@babel+core@7.2_635f772004b94ff6a1ac783d1816445f/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$8$2e$0_$40$t_32e1ad4942a5557a4650675ac7447883$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.8.0_@t_32e1ad4942a5557a4650675ac7447883/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$8$2e$0_$40$t_32e1ad4942a5557a4650675ac7447883$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$803f4abc$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.8.0_@t_32e1ad4942a5557a4650675ac7447883/node_modules/@react-three/fiber/dist/events-803f4abc.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+drei@10.7.8_@r_a82d52992da1675fb9c092e903dabc08/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+drei@10.7.8_@r_a82d52992da1675fb9c092e903dabc08/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+drei@10.7.8_@r_a82d52992da1675fb9c092e903dabc08/node_modules/@react-three/drei/core/RoundedBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.6_@babel+core@7.2_635f772004b94ff6a1ac783d1816445f/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$186$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/three@0.186.1/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mascot$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mascot-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/interaction-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const damp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$186$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp;
function RobotCanvas() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "robot-canvas",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$8$2e$0_$40$t_32e1ad4942a5557a4650675ac7447883$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            dpr: [
                1,
                1.65
            ],
            camera: {
                position: [
                    0,
                    0.45,
                    6.5
                ],
                fov: 39
            },
            gl: {
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            },
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Interactive mascot unavailable"
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 19,
                columnNumber: 19
            }, this),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.72,
                    color: "#c7d2fe"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -3,
                        5,
                        5
                    ],
                    intensity: 2.8,
                    color: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        3,
                        1.5,
                        3
                    ],
                    intensity: 12,
                    distance: 8,
                    color: "#7467ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        -3,
                        0,
                        2
                    ],
                    intensity: 8,
                    distance: 7,
                    color: "#42c8ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        -2,
                        3
                    ],
                    intensity: 4,
                    distance: 5,
                    color: "#86b8ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Robot, {}, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactShadows"], {
                    position: [
                        0,
                        -2.08,
                        0
                    ],
                    opacity: 0.38,
                    scale: 5,
                    blur: 2.6,
                    far: 3.3,
                    color: "#111a62"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mascot/robot-canvas.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RobotCanvas;
function Robot() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftArm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightArm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftEye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightEye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftPupil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightPupil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const emblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const typingAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const previousTypingPulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const focus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"])({
        "Robot.useInteractionStore[focus]": (state)=>state.focus
    }["Robot.useInteractionStore[focus]"]);
    const authStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"])({
        "Robot.useInteractionStore[authStatus]": (state)=>state.authStatus
    }["Robot.useInteractionStore[authStatus]"]);
    const passwordVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"])({
        "Robot.useInteractionStore[passwordVisible]": (state)=>state.passwordVisible
    }["Robot.useInteractionStore[passwordVisible]"]);
    const typingPulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"])({
        "Robot.useInteractionStore[typingPulse]": (state)=>state.typingPulse
    }["Robot.useInteractionStore[typingPulse]"]);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mascot$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMascotMode"])(authStatus, focus, passwordVisible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Robot.useEffect": ()=>{
            const media = window.matchMedia("(prefers-reduced-motion: reduce)");
            const updateMotionPreference = {
                "Robot.useEffect.updateMotionPreference": ()=>setReducedMotion(media.matches)
            }["Robot.useEffect.updateMotionPreference"];
            updateMotionPreference();
            media.addEventListener("change", updateMotionPreference);
            const updatePointer = {
                "Robot.useEffect.updatePointer": (event)=>{
                    pointer.current.x = event.clientX / window.innerWidth * 2 - 1;
                    pointer.current.y = -(event.clientY / window.innerHeight * 2 - 1);
                }
            }["Robot.useEffect.updatePointer"];
            window.addEventListener("pointermove", updatePointer, {
                passive: true
            });
            return ({
                "Robot.useEffect": ()=>{
                    media.removeEventListener("change", updateMotionPreference);
                    window.removeEventListener("pointermove", updatePointer);
                }
            })["Robot.useEffect"];
        }
    }["Robot.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Robot.useEffect": ()=>{
            if (typingPulse !== previousTypingPulse.current) {
                previousTypingPulse.current = typingPulse;
                typingAt.current = performance.now();
            }
        }
    }["Robot.useEffect"], [
        typingPulse
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$8$2e$0_$40$t_32e1ad4942a5557a4650675ac7447883$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$803f4abc$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Robot.useFrame": ({ clock }, delta)=>{
            if (!root.current || !head.current || !leftArm.current || !rightArm.current || !leftEye.current || !rightEye.current) return;
            const currentMode = mode;
            const reduce = reducedMotion;
            leftEye.current.visible = currentMode !== "passwordHidden" && currentMode !== "passwordVisible" && currentMode !== "success";
            rightEye.current.visible = currentMode !== "passwordHidden" && currentMode !== "success";
            const t = clock.getElapsedTime();
            const speed = reduce ? 10 : 5.5;
            let headX = 0;
            let headY = 0;
            let headZ = 0;
            let rootY = reduce ? 0 : Math.sin(t * 1.35) * 0.035;
            let rootZ = 0;
            let leftZ = -0.1;
            let rightZ = 0.1;
            const leftArmY = -0.22;
            const rightArmY = -0.22;
            const armDepth = 0.42;
            let eyeY = 1;
            let leftEyeX = 1;
            let rightEyeX = 1;
            let eyeLeftRotation = 0;
            let eyeRightRotation = 0;
            let pupilX = 0;
            let pupilY = 0;
            let emblemGlow = 1.7;
            if (currentMode === "idle") {
                headY = pointer.current.x * 0.2;
                headX = -pointer.current.y * 0.11;
                pupilX = pointer.current.x * 0.1;
                pupilY = pointer.current.y * 0.07;
                if (!reduce && Math.sin(t * 0.57) > 0.996) eyeY = 0.07;
            } else if (currentMode === "emailFocused") {
                headY = 0.26;
                headX = -0.035;
                pupilX = 0.1;
                const typedRecently = performance.now() - typingAt.current < 170;
                rootY += typedRecently && !reduce ? 0.045 : 0;
            } else if (currentMode === "passwordHidden") {
                headY = 0.2;
                headX = 0.08;
                eyeY = 0.06;
                leftEyeX = 0.001;
                rightEyeX = 0.001;
                leftZ = 2.8;
                rightZ = -2.8;
            } else if (currentMode === "passwordVisible") {
                headY = 0.14;
                headZ = -0.09;
                eyeY = 0.9;
                leftEyeX = 0.001;
                pupilX = 0.12;
                leftZ = 2.8;
                leftEye.current.scale.y = damp(leftEye.current.scale.y, 0.06, speed, delta);
            } else if (currentMode === "validationError") {
                headY = 0.12 + (reduce ? 0 : Math.sin(t * 17) * 0.055);
                headZ = -0.12;
                eyeLeftRotation = 0.14;
                eyeRightRotation = -0.17;
                leftEye.current.scale.y = damp(leftEye.current.scale.y, 0.65, speed, delta);
                rightEye.current.scale.y = damp(rightEye.current.scale.y, 0.92, speed, delta);
            } else if (currentMode === "submitting") {
                headY = 0.28;
                headX = -0.12;
                rootZ = 0.08;
                pupilX = 0.08;
                eyeY = 0.75 + Math.sin(t * 4) * 0.18;
                emblemGlow = 3 + Math.sin(t * 4) * 0.8;
            } else if (currentMode === "success") {
                rootY += reduce ? 0 : Math.sin(t * 4.5) * 0.09;
                headZ = -0.08;
                leftZ = -2.72;
                rightZ = 2.72;
                emblemGlow = 5;
            }
            root.current.position.y = damp(root.current.position.y, rootY, speed, delta);
            root.current.position.z = damp(root.current.position.z, rootZ, speed, delta);
            head.current.rotation.x = damp(head.current.rotation.x, headX, speed, delta);
            head.current.rotation.y = damp(head.current.rotation.y, headY, speed, delta);
            head.current.rotation.z = damp(head.current.rotation.z, headZ, speed, delta);
            const armPoseSpeed = speed * 0.82;
            leftArm.current.rotation.z = damp(leftArm.current.rotation.z, leftZ, armPoseSpeed, delta);
            rightArm.current.rotation.z = damp(rightArm.current.rotation.z, rightZ, armPoseSpeed, delta);
            leftArm.current.position.y = damp(leftArm.current.position.y, leftArmY, armPoseSpeed, delta);
            rightArm.current.position.y = damp(rightArm.current.position.y, rightArmY, armPoseSpeed, delta);
            leftArm.current.position.z = damp(leftArm.current.position.z, armDepth, speed, delta);
            rightArm.current.position.z = damp(rightArm.current.position.z, armDepth, speed, delta);
            if (currentMode !== "passwordVisible" && currentMode !== "validationError") {
                leftEye.current.scale.y = damp(leftEye.current.scale.y, eyeY, 11, delta);
            }
            if (currentMode !== "validationError") rightEye.current.scale.y = damp(rightEye.current.scale.y, eyeY, 11, delta);
            leftEye.current.scale.x = damp(leftEye.current.scale.x, leftEyeX, 11, delta);
            rightEye.current.scale.x = damp(rightEye.current.scale.x, rightEyeX, 11, delta);
            leftEye.current.rotation.z = damp(leftEye.current.rotation.z, eyeLeftRotation, speed, delta);
            rightEye.current.rotation.z = damp(rightEye.current.rotation.z, eyeRightRotation, speed, delta);
            if (leftPupil.current && rightPupil.current) {
                leftPupil.current.position.x = damp(leftPupil.current.position.x, pupilX, speed, delta);
                rightPupil.current.position.x = damp(rightPupil.current.position.x, pupilX, speed, delta);
                leftPupil.current.position.y = damp(leftPupil.current.position.y, pupilY, speed, delta);
                rightPupil.current.position.y = damp(rightPupil.current.position.y, pupilY, speed, delta);
            }
            const material = emblem.current?.material;
            if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$186$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) material.emissiveIntensity = damp(material.emissiveIntensity, emblemGlow, speed, delta);
        }
    }["Robot.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: 1.2,
        rotationIntensity: 0.025,
        floatIntensity: 0.08,
        enabled: !reducedMotion,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: root,
            scale: 0.92,
            position: [
                0,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RobotBody, {
                    emblem: emblem
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RobotHead, {
                    head: head,
                    leftEye: leftEye,
                    rightEye: rightEye,
                    leftPupil: leftPupil,
                    rightPupil: rightPupil,
                    happy: mode === "success"
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RobotArm, {
                    side: "left",
                    armRef: leftArm
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RobotArm, {
                    side: "right",
                    armRef: rightArm
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mascot/robot-canvas.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(Robot, "3oRAjgTOGVlPRDbFBqTIekHYh7A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$interaction$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$8$2e$0_$40$t_32e1ad4942a5557a4650675ac7447883$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$803f4abc$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = Robot;
function RobotArm({ side, armRef }) {
    const direction = side === "left" ? -1 : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: armRef,
        position: [
            direction * 0.94,
            -0.22,
            0.42
        ],
        rotation: [
            0,
            0,
            direction * 0.1
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                scale: [
                    0.23,
                    0.23,
                    0.2
                ],
                renderOrder: 9,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            24,
                            20
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        depthTest: false,
                        depthWrite: false,
                        color: "#252d65",
                        metalness: 0.68,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.53,
                    0
                ],
                renderOrder: 10,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.18,
                            0.72,
                            10,
                            24
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        depthTest: false,
                        depthWrite: false,
                        color: "#edf1ff",
                        roughness: 0.16,
                        metalness: 0.08,
                        clearcoat: 0.9,
                        clearcoatRoughness: 0.12
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    -1.27,
                    0.06
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        scale: [
                            1,
                            1,
                            0.82
                        ],
                        renderOrder: 11,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                                args: [
                                    0.27,
                                    0.14,
                                    10,
                                    28
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                                depthTest: false,
                                depthWrite: false,
                                color: "#f5f7ff",
                                roughness: 0.14,
                                metalness: 0.06,
                                clearcoat: 1,
                                clearcoatRoughness: 0.1
                            }, void 0, false, {
                                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            direction * -0.22,
                            0.06,
                            0.015
                        ],
                        rotation: [
                            0,
                            0,
                            direction * 0.48
                        ],
                        scale: [
                            0.14,
                            0.19,
                            0.14
                        ],
                        renderOrder: 12,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    1,
                                    22,
                                    18
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                                depthTest: false,
                                depthWrite: false,
                                color: "#eef2ff",
                                roughness: 0.16,
                                metalness: 0.06,
                                clearcoat: 0.9
                            }, void 0, false, {
                                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -1.03,
                    0.01
                ],
                renderOrder: 12,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.215,
                            0.205,
                            0.12,
                            28
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        depthTest: false,
                        depthWrite: false,
                        color: "#333d85",
                        metalness: 0.6,
                        roughness: 0.22
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_c2 = RobotArm;
function RobotHead({ head, leftEye, rightEye, leftPupil, rightPupil, happy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: head,
        position: [
            0,
            0.88,
            0.05
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    2.4,
                    1.72,
                    1.34
                ],
                radius: 0.52,
                smoothness: 8,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: "#eef2ff",
                    roughness: 0.15,
                    metalness: 0.1,
                    clearcoat: 1,
                    clearcoatRoughness: 0.1
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    2.08,
                    1.39,
                    0.15
                ],
                radius: 0.41,
                smoothness: 8,
                position: [
                    0,
                    -0.015,
                    0.705
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: "#aebaff",
                    roughness: 0.12,
                    metalness: 0.55,
                    clearcoat: 1
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    1.96,
                    1.27,
                    0.19
                ],
                radius: 0.36,
                smoothness: 8,
                position: [
                    0,
                    -0.02,
                    0.79
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: "#030616",
                    roughness: 0.1,
                    metalness: 0.58,
                    clearcoat: 1,
                    clearcoatRoughness: 0.08
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeMesh, {
                position: [
                    -0.5,
                    0.06,
                    0.91
                ],
                eyeRef: leftEye,
                pupilRef: leftPupil
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeMesh, {
                position: [
                    0.5,
                    0.06,
                    0.91
                ],
                eyeRef: rightEye,
                pupilRef: rightPupil
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HappyEyeMesh, {
                position: [
                    -0.5,
                    0.02,
                    0.93
                ],
                rotation: -0.08,
                visible: happy
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HappyEyeMesh, {
                position: [
                    0.5,
                    0.02,
                    0.93
                ],
                rotation: 0.08,
                visible: happy
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.24,
                    -0.02,
                    0
                ],
                rotation: [
                    0,
                    0,
                    Math.PI / 2
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.38,
                            0.38,
                            0.22,
                            40
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: "#293378",
                        metalness: 0.68,
                        roughness: 0.18,
                        clearcoat: 0.85,
                        emissive: "#343cf0",
                        emissiveIntensity: 0.55
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.24,
                    -0.02,
                    0
                ],
                rotation: [
                    0,
                    0,
                    Math.PI / 2
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.38,
                            0.38,
                            0.22,
                            40
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: "#293378",
                        metalness: 0.68,
                        roughness: 0.18,
                        clearcoat: 0.85,
                        emissive: "#343cf0",
                        emissiveIntensity: 0.55
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.93,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.09,
                            20,
                            20
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#95e7ff",
                        emissive: "#38bdf8",
                        emissiveIntensity: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c3 = RobotHead;
function HappyEyeMesh({ position, rotation, visible }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        position: position,
        rotation: [
            0,
            0,
            rotation
        ],
        visible: visible,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                args: [
                    0.23,
                    0.06,
                    12,
                    32,
                    Math.PI
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#a5f3fc",
                emissive: "#536dfe",
                emissiveIntensity: 4.5,
                toneMapped: false
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_c4 = HappyEyeMesh;
function EyeMesh({ position, eyeRef, pupilRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: eyeRef,
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                scale: [
                    0.32,
                    0.45,
                    0.09
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            28,
                            24
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#89edff",
                        emissive: "#536dfe",
                        emissiveIntensity: 4.2,
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: pupilRef,
                position: [
                    0,
                    -0.09,
                    0.095
                ],
                scale: [
                    0.19,
                    0.27,
                    0.04
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            20,
                            18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#071021"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c5 = EyeMesh;
function RobotBody({ emblem }) {
    _s1();
    const shieldShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RobotBody.useMemo[shieldShape]": ()=>{
            const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$186$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
            shape.moveTo(0, 0.45);
            shape.lineTo(0.36, 0.28);
            shape.lineTo(0.3, -0.2);
            shape.quadraticCurveTo(0, -0.5, 0, -0.5);
            shape.quadraticCurveTo(-0.3, -0.2, -0.3, -0.2);
            shape.lineTo(-0.36, 0.28);
            shape.closePath();
            return shape;
        }
    }["RobotBody.useMemo[shieldShape]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            -0.78,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.02,
                    0
                ],
                scale: [
                    0.55,
                    0.16,
                    0.48
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            28,
                            18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: "#20285d",
                        metalness: 0.7,
                        roughness: 0.18,
                        clearcoat: 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    1.82,
                    1.72,
                    1.22
                ],
                radius: 0.56,
                smoothness: 8,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: "#e7ecff",
                    roughness: 0.17,
                    metalness: 0.12,
                    clearcoat: 0.95,
                    clearcoatRoughness: 0.12
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$8_$40$r_a82d52992da1675fb9c092e903dabc08$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    1.48,
                    0.87,
                    0.17
                ],
                radius: 0.3,
                smoothness: 7,
                position: [
                    0,
                    0.05,
                    0.67
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: "#111737",
                    metalness: 0.58,
                    roughness: 0.18,
                    clearcoat: 0.9
                }, void 0, false, {
                    fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: emblem,
                position: [
                    0,
                    0.04,
                    0.82
                ],
                scale: 0.68,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shapeGeometry", {
                        args: [
                            shieldShape
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#a5f3fc",
                        emissive: "#4f46e5",
                        emissiveIntensity: 1.7,
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.04,
                    0.835
                ],
                scale: 0.36,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shapeGeometry", {
                        args: [
                            shieldShape
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#111638"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.95,
                    0
                ],
                scale: [
                    0.62,
                    0.22,
                    0.54
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            24,
                            20
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$2_635f772004b94ff6a1ac783d1816445f$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#293475",
                        metalness: 0.7,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mascot/robot-canvas.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mascot/robot-canvas.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
_s1(RobotBody, "rBFWjYRcSGThcsCzlUUgnoZgHEs=");
_c6 = RobotBody;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "RobotCanvas");
__turbopack_context__.k.register(_c1, "Robot");
__turbopack_context__.k.register(_c2, "RobotArm");
__turbopack_context__.k.register(_c3, "RobotHead");
__turbopack_context__.k.register(_c4, "HappyEyeMesh");
__turbopack_context__.k.register(_c5, "EyeMesh");
__turbopack_context__.k.register(_c6, "RobotBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mascot/robot-canvas.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/mascot/robot-canvas.tsx [app-client] (ecmascript)"));
}),
"[project]/src/lib/mascot-state.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveMascotMode",
    ()=>resolveMascotMode
]);
function resolveMascotMode(status, focus, passwordVisible) {
    if (status === "success") return "success";
    if (status === "submitting") return "submitting";
    if (status === "error") return "validationError";
    if (focus === "password" && passwordVisible) return "passwordVisible";
    if (focus === "password") return "passwordHidden";
    if (focus === "email") return "emailFocused";
    return "idle";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1i43ru-._.js.map