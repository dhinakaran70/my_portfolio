import { motion } from "framer-motion";

/**
 * Animated SVG character based on Dhinakaran's appearance:
 * - Dark short hair, brown skin
 * - Dark polo shirt (Intel style)
 * - Khaki pants, pink wristband
 *
 * Poses: "wave", "code", "present", "sit", "walk", "celebrate"
 */
const Character = ({ pose = "wave", size = 200, className = "" }) => {
    const scale = size / 200;

    const poseConfigs = {
        wave: {
            leftArm: { rotate: 0, originX: "100%", originY: "0%" },
            rightArm: { rotate: [-20, 30, -20], originX: "0%", originY: "0%" },
            body: { y: 0 },
            leftLeg: { rotate: 0 },
            rightLeg: { rotate: 0 },
            eyes: { scaleY: [1, 0.1, 1] },
            eyeTransition: { duration: 3, repeat: Infinity, repeatDelay: 2 },
        },
        code: {
            leftArm: { rotate: -40, originX: "100%", originY: "0%" },
            rightArm: { rotate: -35, originX: "0%", originY: "0%" },
            body: { y: 0, rotate: 5 },
            leftLeg: { rotate: 20 },
            rightLeg: { rotate: -10 },
            eyes: { scaleY: 1 },
            eyeTransition: { duration: 0 },
        },
        present: {
            leftArm: { rotate: [-10, -30, -10], originX: "100%", originY: "0%" },
            rightArm: { rotate: [10, 30, 10], originX: "0%", originY: "0%" },
            body: { y: 0 },
            leftLeg: { rotate: 0 },
            rightLeg: { rotate: 0 },
            eyes: { scaleY: 1 },
            eyeTransition: { duration: 0 },
        },
        sit: {
            leftArm: { rotate: 10, originX: "100%", originY: "0%" },
            rightArm: { rotate: -10, originX: "0%", originY: "0%" },
            body: { y: 10 },
            leftLeg: { rotate: 70 },
            rightLeg: { rotate: 70 },
            eyes: { scaleY: 1 },
            eyeTransition: { duration: 0 },
        },
        walk: {
            leftArm: { rotate: [15, -15, 15], originX: "100%", originY: "0%" },
            rightArm: { rotate: [-15, 15, -15], originX: "0%", originY: "0%" },
            body: { y: [0, -3, 0] },
            leftLeg: { rotate: [15, -15, 15] },
            rightLeg: { rotate: [-15, 15, -15] },
            eyes: { scaleY: 1 },
            eyeTransition: { duration: 0 },
        },
        celebrate: {
            leftArm: { rotate: [-50, -70, -50], originX: "100%", originY: "0%" },
            rightArm: { rotate: [-50, -70, -50], originX: "0%", originY: "0%" },
            body: { y: [0, -8, 0] },
            leftLeg: { rotate: 0 },
            rightLeg: { rotate: 0 },
            eyes: { scaleY: [1, 0.1, 1] },
            eyeTransition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 },
        },
    };

    const p = poseConfigs[pose] || poseConfigs.wave;

    const limbTransition = {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
    };

    const bodyTransition = {
        duration: 1.0,
        repeat: Infinity,
        ease: "easeInOut",
    };

    return (
        <motion.svg
            width={size}
            height={size * 1.3}
            viewBox="0 0 200 260"
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
        >
            {/* Shadow */}
            <motion.ellipse
                cx="100"
                cy="250"
                rx="40"
                ry="8"
                fill="rgba(0,0,0,0.2)"
                animate={{ rx: [40, 35, 40] }}
                transition={bodyTransition}
            />

            {/* Left Leg */}
            <motion.g
                animate={{ rotate: p.leftLeg.rotate }}
                transition={limbTransition}
                style={{ originX: "80px", originY: "185px" }}
            >
                <rect x="72" y="185" width="16" height="55" rx="8" fill="#c4a882" />
                {/* Shoe */}
                <rect x="68" y="232" width="24" height="12" rx="6" fill="#2d2d2d" />
            </motion.g>

            {/* Right Leg */}
            <motion.g
                animate={{ rotate: p.rightLeg.rotate }}
                transition={limbTransition}
                style={{ originX: "120px", originY: "185px" }}
            >
                <rect x="112" y="185" width="16" height="55" rx="8" fill="#c4a882" />
                {/* Shoe */}
                <rect x="108" y="232" width="24" height="12" rx="6" fill="#2d2d2d" />
            </motion.g>

            {/* Body / Polo Shirt */}
            <motion.g animate={p.body} transition={bodyTransition}>
                {/* Torso */}
                <rect x="68" y="110" width="64" height="80" rx="12" fill="#1a1a2e" />
                {/* Collar */}
                <path
                    d="M88 110 L100 122 L112 110"
                    fill="none"
                    stroke="#2a2a3e"
                    strokeWidth="2"
                />
                {/* Intel-style text on shirt */}
                <text
                    x="100"
                    y="152"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontFamily="sans-serif"
                    fontWeight="600"
                >
                    intel
                </text>

                {/* Neck */}
                <rect x="90" y="95" width="20" height="20" rx="5" fill="#8B6914" />

                {/* Head */}
                <circle cx="100" cy="72" r="32" fill="#c68642" />

                {/* Hair */}
                <ellipse cx="100" cy="50" rx="33" ry="18" fill="#1a1a1a" />
                <ellipse cx="75" cy="60" rx="10" ry="15" fill="#1a1a1a" />
                <ellipse cx="125" cy="60" rx="10" ry="15" fill="#1a1a1a" />

                {/* Eyes */}
                <motion.g animate={p.eyes} transition={p.eyeTransition}>
                    <ellipse cx="88" cy="72" rx="4" ry="5" fill="#1a1a1a" />
                    <ellipse cx="112" cy="72" rx="4" ry="5" fill="#1a1a1a" />
                    {/* Eye highlights */}
                    <circle cx="90" cy="70" r="1.5" fill="white" />
                    <circle cx="114" cy="70" r="1.5" fill="white" />
                </motion.g>

                {/* Eyebrows */}
                <rect x="82" y="62" width="14" height="3" rx="1.5" fill="#1a1a1a" />
                <rect x="106" y="62" width="14" height="3" rx="1.5" fill="#1a1a1a" />

                {/* Smile */}
                <path
                    d="M90 82 Q100 92 110 82"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                {/* Left Arm */}
                <motion.g
                    animate={p.leftArm}
                    transition={limbTransition}
                    style={{ originX: "68px", originY: "118px" }}
                >
                    <rect x="40" y="115" width="32" height="14" rx="7" fill="#1a1a2e" />
                    {/* Hand */}
                    <circle cx="42" cy="122" r="8" fill="#c68642" />
                    {/* Pink wristband */}
                    <rect x="48" y="118" width="6" height="10" rx="3" fill="#e91e8c" />
                </motion.g>

                {/* Right Arm */}
                <motion.g
                    animate={p.rightArm}
                    transition={limbTransition}
                    style={{ originX: "132px", originY: "118px" }}
                >
                    <rect x="128" y="115" width="32" height="14" rx="7" fill="#1a1a2e" />
                    {/* Hand */}
                    <circle cx="158" cy="122" r="8" fill="#c68642" />
                </motion.g>
            </motion.g>
        </motion.svg>
    );
};

export default Character;
