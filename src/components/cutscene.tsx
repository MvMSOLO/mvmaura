import { useEffect, useState } from "react";

export function Cutscene({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 800),   // Singularity
      setTimeout(() => setStage(2), 2500),  // Expansion
      setTimeout(() => setStage(3), 5500),  // The Aura Matrix
      setTimeout(() => setStage(4), 8500),  // Resonance Flux
      setTimeout(() => setStage(5), 11000), // Final Ascension
      setTimeout(() => onComplete(), 13500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <div className="relative w-full h-full flex items-center justify-center perspective-[2500px] preserve-3d">

        {/* Stage 0-1: Initial Singularity Ignition */}
        {stage < 2 && (
          <div
            className={`absolute size-1 bg-white rounded-full transition-all duration-[2500ms] ease-out ${
              stage === 0 ? "scale-0 opacity-0" : "scale-[300] opacity-100 blur-[3px]"
            }`}
            style={{ boxShadow: "0 0 120px 60px white" }}
          />
        )}

        {/* Stage 2+: Cosmic Starfield Distribution */}
        <div className={`absolute inset-0 transition-opacity duration-[4000ms] ${ stage >= 2 ? "opacity-100" : "opacity-0" }`}>
          <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-80 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
            <circle cx="500.0" cy="500.0" r="0.6" fill="white" className="star-0" />
            <circle cx="500.37" cy="500.05" r="0.6" fill="white" className="star-1" />
            <circle cx="500.72" cy="500.19" r="0.6" fill="white" className="star-2" />
            <circle cx="501.04" cy="500.43" r="0.6" fill="white" className="star-3" />
            <circle cx="501.3" cy="500.75" r="0.6" fill="white" className="star-4" />
            <circle cx="501.49" cy="501.13" r="0.6" fill="white" className="star-0" />
            <circle cx="501.6" cy="501.58" r="0.6" fill="white" className="star-1" />
            <circle cx="501.61" cy="502.07" r="0.6" fill="white" className="star-2" />
            <circle cx="501.52" cy="502.59" r="0.6" fill="white" className="star-3" />
            <circle cx="501.32" cy="503.11" r="0.6" fill="white" className="star-4" />
            <circle cx="501.0" cy="503.61" r="0.6" fill="white" className="star-0" />
            <circle cx="500.58" cy="504.08" r="0.6" fill="white" className="star-1" />
            <circle cx="500.05" cy="504.5" r="0.6" fill="white" className="star-2" />
            <circle cx="499.42" cy="504.84" r="0.6" fill="white" className="star-3" />
            <circle cx="498.71" cy="505.09" r="0.6" fill="white" className="star-4" />
            <circle cx="497.92" cy="505.23" r="0.6" fill="white" className="star-0" />
            <circle cx="497.08" cy="505.24" r="0.6" fill="white" className="star-1" />
            <circle cx="496.2" cy="505.12" r="0.6" fill="white" className="star-2" />
            <circle cx="495.3" cy="504.85" r="0.6" fill="white" className="star-3" />
            <circle cx="494.42" cy="504.43" r="0.6" fill="white" className="star-4" />
            <circle cx="493.57" cy="503.87" r="0.6" fill="white" className="star-0" />
            <circle cx="492.78" cy="503.15" r="0.6" fill="white" className="star-1" />
            <circle cx="492.07" cy="502.29" r="0.6" fill="white" className="star-2" />
            <circle cx="491.47" cy="501.3" r="0.6" fill="white" className="star-3" />
            <circle cx="491.0" cy="500.19" r="0.6" fill="white" className="star-4" />
            <circle cx="490.68" cy="498.99" r="0.6" fill="white" className="star-0" />
            <circle cx="490.53" cy="497.7" r="0.6" fill="white" className="star-1" />
            <circle cx="490.55" cy="496.35" r="0.6" fill="white" className="star-2" />
            <circle cx="490.78" cy="494.98" r="0.6" fill="white" className="star-3" />
            <circle cx="491.2" cy="493.61" r="0.6" fill="white" className="star-4" />
            <circle cx="491.83" cy="492.26" r="0.6" fill="white" className="star-0" />
            <circle cx="492.67" cy="490.98" r="0.6" fill="white" className="star-1" />
            <circle cx="493.7" cy="489.78" r="0.6" fill="white" className="star-2" />
            <circle cx="494.93" cy="488.71" r="0.6" fill="white" className="star-3" />
            <circle cx="496.32" cy="487.79" r="0.6" fill="white" className="star-4" />
            <circle cx="497.88" cy="487.05" r="0.6" fill="white" className="star-0" />
            <circle cx="499.56" cy="486.51" r="0.6" fill="white" className="star-1" />
            <circle cx="501.35" cy="486.19" r="0.6" fill="white" className="star-2" />
            <circle cx="503.22" cy="486.12" r="0.6" fill="white" className="star-3" />
            <circle cx="505.12" cy="486.3" r="0.6" fill="white" className="star-4" />
            <circle cx="507.03" cy="486.75" r="0.6" fill="white" className="star-0" />
            <circle cx="508.9" cy="487.47" r="0.6" fill="white" className="star-1" />
            <circle cx="510.71" cy="488.45" r="0.6" fill="white" className="star-2" />
            <circle cx="512.4" cy="489.7" r="0.6" fill="white" className="star-3" />
            <circle cx="513.95" cy="491.19" r="0.6" fill="white" className="star-4" />
            <circle cx="515.32" cy="492.92" r="0.6" fill="white" className="star-0" />
            <circle cx="516.46" cy="494.85" r="0.6" fill="white" className="star-1" />
            <circle cx="517.36" cy="496.96" r="0.6" fill="white" className="star-2" />
            <circle cx="517.98" cy="499.22" r="0.6" fill="white" className="star-3" />
            <circle cx="518.31" cy="501.59" r="0.6" fill="white" className="star-4" />
            <circle cx="518.31" cy="504.03" r="0.6" fill="white" className="star-0" />
            <circle cx="517.99" cy="506.5" r="0.6" fill="white" className="star-1" />
            <circle cx="517.32" cy="508.95" r="0.6" fill="white" className="star-2" />
            <circle cx="516.33" cy="511.33" r="0.6" fill="white" className="star-3" />
            <circle cx="515.0" cy="513.61" r="0.6" fill="white" className="star-4" />
            <circle cx="513.35" cy="515.72" r="0.6" fill="white" className="star-0" />
            <circle cx="511.4" cy="517.63" r="0.6" fill="white" className="star-1" />
            <circle cx="509.18" cy="519.3" r="0.6" fill="white" className="star-2" />
            <circle cx="506.72" cy="520.69" r="0.6" fill="white" className="star-3" />
            <circle cx="504.05" cy="521.75" r="0.6" fill="white" className="star-4" />
            <circle cx="501.21" cy="522.47" r="0.6" fill="white" className="star-0" />
            <circle cx="498.26" cy="522.81" r="0.6" fill="white" className="star-1" />
            <circle cx="495.24" cy="522.76" r="0.6" fill="white" className="star-2" />
            <circle cx="492.21" cy="522.3" r="0.6" fill="white" className="star-3" />
            <circle cx="489.22" cy="521.44" r="0.6" fill="white" className="star-4" />
            <circle cx="486.32" cy="520.17" r="0.6" fill="white" className="star-0" />
            <circle cx="483.57" cy="518.51" r="0.6" fill="white" className="star-1" />
            <circle cx="481.02" cy="516.47" r="0.6" fill="white" className="star-2" />
            <circle cx="478.74" cy="514.08" r="0.6" fill="white" className="star-3" />
            <circle cx="476.75" cy="511.37" r="0.6" fill="white" className="star-4" />
            <circle cx="475.12" cy="508.38" r="0.6" fill="white" className="star-0" />
            <circle cx="473.88" cy="505.15" r="0.6" fill="white" className="star-1" />
            <circle cx="473.06" cy="501.75" r="0.6" fill="white" className="star-2" />
            <circle cx="472.68" cy="498.22" r="0.6" fill="white" className="star-3" />
            <circle cx="472.78" cy="494.62" r="0.6" fill="white" className="star-4" />
            <circle cx="473.35" cy="491.01" r="0.6" fill="white" className="star-0" />
            <circle cx="474.4" cy="487.47" r="0.6" fill="white" className="star-1" />
            <circle cx="475.93" cy="484.05" r="0.6" fill="white" className="star-2" />
            <circle cx="477.92" cy="480.82" r="0.6" fill="white" className="star-3" />
            <circle cx="480.34" cy="477.84" r="0.6" fill="white" className="star-4" />
            <circle cx="483.17" cy="475.17" r="0.6" fill="white" className="star-0" />
            <circle cx="486.36" cy="472.86" r="0.6" fill="white" className="star-1" />
            <circle cx="489.87" cy="470.97" r="0.6" fill="white" className="star-2" />
            <circle cx="493.65" cy="469.53" r="0.6" fill="white" className="star-3" />
            <circle cx="497.62" cy="468.59" r="0.6" fill="white" className="star-4" />
            <circle cx="501.73" cy="468.17" r="0.6" fill="white" className="star-0" />
            <circle cx="505.91" cy="468.3" r="0.6" fill="white" className="star-1" />
            <circle cx="510.09" cy="468.97" r="0.6" fill="white" className="star-2" />
            <circle cx="514.19" cy="470.21" r="0.6" fill="white" className="star-3" />
            <circle cx="518.13" cy="471.98" r="0.6" fill="white" className="star-4" />
            <circle cx="521.86" cy="474.28" r="0.6" fill="white" className="star-0" />
            <circle cx="525.28" cy="477.08" r="0.6" fill="white" className="star-1" />
            <circle cx="528.35" cy="480.34" r="0.6" fill="white" className="star-2" />
            <circle cx="530.99" cy="484.01" r="0.6" fill="white" className="star-3" />
            <circle cx="533.16" cy="488.03" r="0.6" fill="white" className="star-4" />
            <circle cx="534.79" cy="492.35" r="0.6" fill="white" className="star-0" />
            <circle cx="535.87" cy="496.89" r="0.6" fill="white" className="star-1" />
            <circle cx="536.34" cy="501.59" r="0.6" fill="white" className="star-2" />
            <circle cx="536.2" cy="506.35" r="0.6" fill="white" className="star-3" />
            <circle cx="535.43" cy="511.1" r="0.6" fill="white" className="star-4" />
            <circle cx="534.03" cy="515.76" r="0.6" fill="white" className="star-0" />
            <circle cx="532.02" cy="520.24" r="0.6" fill="white" className="star-1" />
            <circle cx="529.41" cy="524.45" r="0.6" fill="white" className="star-2" />
            <circle cx="526.25" cy="528.34" r="0.6" fill="white" className="star-3" />
            <circle cx="522.57" cy="531.81" r="0.6" fill="white" className="star-4" />
            <circle cx="518.43" cy="534.79" r="0.6" fill="white" className="star-0" />
            <circle cx="513.9" cy="537.24" r="0.6" fill="white" className="star-1" />
            <circle cx="509.04" cy="539.09" r="0.6" fill="white" className="star-2" />
            <circle cx="503.93" cy="540.31" r="0.6" fill="white" className="star-3" />
            <circle cx="498.66" cy="540.85" r="0.6" fill="white" className="star-4" />
            <circle cx="493.31" cy="540.7" r="0.6" fill="white" className="star-0" />
            <circle cx="487.98" cy="539.85" r="0.6" fill="white" className="star-1" />
            <circle cx="482.77" cy="538.3" r="0.6" fill="white" className="star-2" />
            <circle cx="477.75" cy="536.06" r="0.6" fill="white" className="star-3" />
            <circle cx="473.03" cy="533.16" r="0.6" fill="white" className="star-4" />
            <circle cx="468.68" cy="529.65" r="0.6" fill="white" className="star-0" />
            <circle cx="464.8" cy="525.56" r="0.6" fill="white" className="star-1" />
            <circle cx="461.45" cy="520.96" r="0.6" fill="white" className="star-2" />
            <circle cx="458.71" cy="515.92" r="0.6" fill="white" className="star-3" />
            <circle cx="456.63" cy="510.52" r="0.6" fill="white" className="star-4" />
            <circle cx="455.26" cy="504.85" r="0.6" fill="white" className="star-0" />
            <circle cx="454.64" cy="499.0" r="0.6" fill="white" className="star-1" />
            <circle cx="454.78" cy="493.07" r="0.6" fill="white" className="star-2" />
            <circle cx="455.7" cy="487.16" r="0.6" fill="white" className="star-3" />
            <circle cx="457.39" cy="481.38" r="0.6" fill="white" className="star-4" />
            <circle cx="459.84" cy="475.82" r="0.6" fill="white" className="star-0" />
            <circle cx="463.02" cy="470.58" r="0.6" fill="white" className="star-1" />
            <circle cx="466.89" cy="465.77" r="0.6" fill="white" className="star-2" />
            <circle cx="471.38" cy="461.46" r="0.6" fill="white" className="star-3" />
            <circle cx="476.44" cy="457.75" r="0.6" fill="white" className="star-4" />
            <circle cx="481.97" cy="454.71" r="0.6" fill="white" className="star-0" />
            <circle cx="487.91" cy="452.39" r="0.6" fill="white" className="star-1" />
            <circle cx="494.14" cy="450.85" r="0.6" fill="white" className="star-2" />
            <circle cx="500.56" cy="450.13" r="0.6" fill="white" className="star-3" />
            <circle cx="507.07" cy="450.25" r="0.6" fill="white" className="star-4" />
            <circle cx="513.56" cy="451.23" r="0.6" fill="white" className="star-0" />
            <circle cx="519.92" cy="453.05" r="0.6" fill="white" className="star-1" />
            <circle cx="526.03" cy="455.71" r="0.6" fill="white" className="star-2" />
            <circle cx="531.78" cy="459.16" r="0.6" fill="white" className="star-3" />
            <circle cx="537.07" cy="463.36" r="0.6" fill="white" className="star-4" />
            <circle cx="541.81" cy="468.25" r="0.6" fill="white" className="star-0" />
            <circle cx="545.9" cy="473.75" r="0.6" fill="white" className="star-1" />
            <circle cx="549.26" cy="479.78" r="0.6" fill="white" className="star-2" />
            <circle cx="551.83" cy="486.24" r="0.6" fill="white" className="star-3" />
            <circle cx="553.55" cy="493.02" r="0.6" fill="white" className="star-4" />
            <circle cx="554.37" cy="500.02" r="0.6" fill="white" className="star-0" />
            <circle cx="554.28" cy="507.12" r="0.6" fill="white" className="star-1" />
            <circle cx="553.27" cy="514.2" r="0.6" fill="white" className="star-2" />
            <circle cx="551.32" cy="521.12" r="0.6" fill="white" className="star-3" />
            <circle cx="548.48" cy="527.78" r="0.6" fill="white" className="star-4" />
            <circle cx="544.76" cy="534.06" r="0.6" fill="white" className="star-0" />
            <circle cx="540.24" cy="539.84" r="0.6" fill="white" className="star-1" />
            <circle cx="534.96" cy="545.02" r="0.6" fill="white" className="star-2" />
            <circle cx="529.02" cy="549.49" r="0.6" fill="white" className="star-3" />
            <circle cx="522.51" cy="553.18" r="0.6" fill="white" className="star-4" />
            <circle cx="515.52" cy="556.01" r="0.6" fill="white" className="star-0" />
            <circle cx="508.18" cy="557.92" r="0.6" fill="white" className="star-1" />
            <circle cx="500.61" cy="558.87" r="0.6" fill="white" className="star-2" />
            <circle cx="492.93" cy="558.83" r="0.6" fill="white" className="star-3" />
            <circle cx="485.27" cy="557.78" r="0.6" fill="white" className="star-4" />
            <circle cx="477.76" cy="555.73" r="0.6" fill="white" className="star-0" />
            <circle cx="470.54" cy="552.7" r="0.6" fill="white" className="star-1" />
            <circle cx="463.74" cy="548.74" r="0.6" fill="white" className="star-2" />
            <circle cx="457.46" cy="543.9" r="0.6" fill="white" className="star-3" />
            <circle cx="451.84" cy="538.25" r="0.6" fill="white" className="star-4" />
            <circle cx="446.97" cy="531.87" r="0.6" fill="white" className="star-0" />
            <circle cx="442.94" cy="524.88" r="0.6" fill="white" className="star-1" />
            <circle cx="439.83" cy="517.38" r="0.6" fill="white" className="star-2" />
            <circle cx="437.72" cy="509.49" r="0.6" fill="white" className="star-3" />
            <circle cx="436.64" cy="501.34" r="0.6" fill="white" className="star-4" />
            <circle cx="436.63" cy="493.07" r="0.6" fill="white" className="star-0" />
            <circle cx="437.7" cy="484.83" r="0.6" fill="white" className="star-1" />
            <circle cx="439.84" cy="476.74" r="0.6" fill="white" className="star-2" />
            <circle cx="443.03" cy="468.96" r="0.6" fill="white" className="star-3" />
            <circle cx="447.23" cy="461.62" r="0.6" fill="white" className="star-4" />
            <circle cx="452.38" cy="454.84" r="0.6" fill="white" className="star-0" />
            <circle cx="458.4" cy="448.76" r="0.6" fill="white" className="star-1" />
            <circle cx="465.2" cy="443.48" r="0.6" fill="white" className="star-2" />
            <circle cx="472.66" cy="439.1" r="0.6" fill="white" className="star-3" />
            <circle cx="480.68" cy="435.72" r="0.6" fill="white" className="star-4" />
            <circle cx="489.12" cy="433.38" r="0.6" fill="white" className="star-0" />
            <circle cx="497.83" cy="432.16" r="0.6" fill="white" className="star-1" />
            <circle cx="506.68" cy="432.08" r="0.6" fill="white" className="star-2" />
            <circle cx="515.51" cy="433.15" r="0.6" fill="white" className="star-3" />
            <circle cx="524.18" cy="435.38" r="0.6" fill="white" className="star-4" />
            <circle cx="532.53" cy="438.72" r="0.6" fill="white" className="star-0" />
            <circle cx="540.42" cy="443.15" r="0.6" fill="white" className="star-1" />
            <circle cx="547.7" cy="448.6" r="0.6" fill="white" className="star-2" />
            <circle cx="554.25" cy="454.98" r="0.6" fill="white" className="star-3" />
            <circle cx="559.95" cy="462.19" r="0.6" fill="white" className="star-4" />
            <circle cx="564.68" cy="470.12" r="0.6" fill="white" className="star-0" />
            <circle cx="568.37" cy="478.65" r="0.6" fill="white" className="star-1" />
            <circle cx="570.93" cy="487.62" r="0.6" fill="white" className="star-2" />
            <circle cx="572.31" cy="496.91" r="0.6" fill="white" className="star-3" />
            <circle cx="572.47" cy="506.34" r="0.6" fill="white" className="star-4" />
            <circle cx="571.41" cy="515.76" r="0.6" fill="white" className="star-0" />
            <circle cx="569.11" cy="525.01" r="0.6" fill="white" className="star-1" />
            <circle cx="565.62" cy="533.93" r="0.6" fill="white" className="star-2" />
            <circle cx="560.98" cy="542.37" r="0.6" fill="white" className="star-3" />
            <circle cx="555.25" cy="550.17" r="0.6" fill="white" className="star-4" />
            <circle cx="548.52" cy="557.19" r="0.6" fill="white" className="star-0" />
            <circle cx="540.9" cy="563.31" r="0.6" fill="white" className="star-1" />
            <circle cx="532.51" cy="568.42" r="0.6" fill="white" className="star-2" />
            <circle cx="523.48" cy="572.41" r="0.6" fill="white" className="star-3" />
            <circle cx="513.96" cy="575.22" r="0.6" fill="white" className="star-4" />
            <circle cx="504.11" cy="576.76" r="0.6" fill="white" className="star-0" />
            <circle cx="494.1" cy="577.02" r="0.6" fill="white" className="star-1" />
            <circle cx="484.09" cy="575.98" r="0.6" fill="white" className="star-2" />
            <circle cx="474.25" cy="573.63" r="0.6" fill="white" className="star-3" />
            <circle cx="464.75" cy="570.0" r="0.6" fill="white" className="star-4" />
            <circle cx="455.76" cy="565.15" r="0.6" fill="white" className="star-0" />
            <circle cx="447.44" cy="559.15" r="0.6" fill="white" className="star-1" />
            <circle cx="439.94" cy="552.08" r="0.6" fill="white" className="star-2" />
            <circle cx="433.38" cy="544.06" r="0.6" fill="white" className="star-3" />
            <circle cx="427.89" cy="535.22" r="0.6" fill="white" className="star-4" />
            <circle cx="423.58" cy="525.69" r="0.6" fill="white" className="star-0" />
            <circle cx="420.52" cy="515.64" r="0.6" fill="white" className="star-1" />
            <circle cx="418.79" cy="505.23" r="0.6" fill="white" className="star-2" />
            <circle cx="418.43" cy="494.64" r="0.6" fill="white" className="star-3" />
            <circle cx="419.44" cy="484.03" r="0.6" fill="white" className="star-4" />
            <circle cx="421.84" cy="473.6" r="0.6" fill="white" className="star-0" />
            <circle cx="425.58" cy="463.53" r="0.6" fill="white" className="star-1" />
            <circle cx="430.62" cy="453.98" r="0.6" fill="white" className="star-2" />
            <circle cx="436.89" cy="445.13" r="0.6" fill="white" className="star-3" />
            <circle cx="444.29" cy="437.13" r="0.6" fill="white" className="star-4" />
            <circle cx="452.7" cy="430.13" r="0.6" fill="white" className="star-0" />
            <circle cx="461.99" cy="424.25" r="0.6" fill="white" className="star-1" />
            <circle cx="472.0" cy="419.61" r="0.6" fill="white" className="star-2" />
            <circle cx="482.58" cy="416.29" r="0.6" fill="white" className="star-3" />
            <circle cx="493.55" cy="414.37" r="0.6" fill="white" className="star-4" />
            <circle cx="504.73" cy="413.88" r="0.6" fill="white" className="star-0" />
            <circle cx="515.92" cy="414.85" r="0.6" fill="white" className="star-1" />
            <circle cx="526.94" cy="417.28" r="0.6" fill="white" className="star-2" />
            <circle cx="537.6" cy="421.13" r="0.6" fill="white" className="star-3" />
            <circle cx="547.71" cy="426.35" r="0.6" fill="white" className="star-4" />
            <circle cx="557.1" cy="432.88" r="0.6" fill="white" className="star-0" />
            <circle cx="565.6" cy="440.59" r="0.6" fill="white" className="star-1" />
            <circle cx="573.05" cy="449.38" r="0.6" fill="white" className="star-2" />
            <circle cx="579.33" cy="459.11" r="0.6" fill="white" className="star-3" />
            <circle cx="584.32" cy="469.61" r="0.6" fill="white" className="star-4" />
            <circle cx="587.91" cy="480.72" r="0.6" fill="white" className="star-0" />
            <circle cx="590.04" cy="492.24" r="0.6" fill="white" className="star-1" />
            <circle cx="590.66" cy="504.0" r="0.6" fill="white" className="star-2" />
            <circle cx="589.75" cy="515.78" r="0.6" fill="white" className="star-3" />
            <circle cx="587.3" cy="527.4" r="0.6" fill="white" className="star-4" />
            <circle cx="583.35" cy="538.64" r="0.6" fill="white" className="star-0" />
            <circle cx="577.96" cy="549.32" r="0.6" fill="white" className="star-1" />
            <circle cx="571.2" cy="559.25" r="0.6" fill="white" className="star-2" />
            <circle cx="563.17" cy="568.25" r="0.6" fill="white" className="star-3" />
            <circle cx="554.0" cy="576.17" r="0.6" fill="white" className="star-4" />
            <circle cx="543.85" cy="582.86" r="0.6" fill="white" className="star-0" />
            <circle cx="532.87" cy="588.2" r="0.6" fill="white" className="star-1" />
            <circle cx="521.24" cy="592.08" r="0.6" fill="white" className="star-2" />
            <circle cx="509.16" cy="594.43" r="0.6" fill="white" className="star-3" />
            <circle cx="496.83" cy="595.2" r="0.6" fill="white" className="star-4" />
            <circle cx="484.46" cy="594.35" r="0.6" fill="white" className="star-0" />
            <circle cx="472.25" cy="591.9" r="0.6" fill="white" className="star-1" />
            <circle cx="460.41" cy="587.87" r="0.6" fill="white" className="star-2" />
            <circle cx="449.16" cy="582.32" r="0.6" fill="white" className="star-3" />
            <circle cx="438.68" cy="575.32" r="0.6" fill="white" className="star-4" />
            <circle cx="429.16" cy="566.99" r="0.6" fill="white" className="star-0" />
            <circle cx="420.77" cy="557.47" r="0.6" fill="white" className="star-1" />
            <circle cx="413.66" cy="546.89" r="0.6" fill="white" className="star-2" />
            <circle cx="407.96" cy="535.44" r="0.6" fill="white" className="star-3" />
            <circle cx="403.78" cy="523.29" r="0.6" fill="white" className="star-4" />
            <circle cx="401.2" cy="510.66" r="0.6" fill="white" className="star-0" />
            <circle cx="400.28" cy="497.76" r="0.6" fill="white" className="star-1" />
            <circle cx="401.04" cy="484.79" r="0.6" fill="white" className="star-2" />
            <circle cx="403.48" cy="471.99" r="0.6" fill="white" className="star-3" />
            <circle cx="407.59" cy="459.56" r="0.6" fill="white" className="star-4" />
            <circle cx="413.29" cy="447.73" r="0.6" fill="white" className="star-0" />
            <circle cx="420.5" cy="436.69" r="0.6" fill="white" className="star-1" />
            <circle cx="429.12" cy="426.65" r="0.6" fill="white" className="star-2" />
            <circle cx="439.0" cy="417.78" r="0.6" fill="white" className="star-3" />
            <circle cx="449.99" cy="410.24" r="0.6" fill="white" className="star-4" />
            <circle cx="461.91" cy="404.17" r="0.6" fill="white" className="star-0" />
            <circle cx="474.56" cy="399.67" r="0.6" fill="white" className="star-1" />
            <circle cx="487.74" cy="396.85" r="0.6" fill="white" className="star-2" />
            <circle cx="501.22" cy="395.76" r="0.6" fill="white" className="star-3" />
            <circle cx="514.77" cy="396.42" r="0.6" fill="white" className="star-4" />
            <circle cx="528.18" cy="398.85" r="0.6" fill="white" className="star-0" />
            <circle cx="541.2" cy="403.01" r="0.6" fill="white" className="star-1" />
            <circle cx="553.61" cy="408.85" r="0.6" fill="white" className="star-2" />
            <circle cx="565.21" cy="416.27" r="0.6" fill="white" className="star-3" />
            <circle cx="575.78" cy="425.17" r="0.6" fill="white" className="star-4" />
            <circle cx="585.14" cy="435.4" r="0.6" fill="white" className="star-0" />
            <circle cx="593.12" cy="446.79" r="0.6" fill="white" className="star-1" />
            <circle cx="599.58" cy="459.17" r="0.6" fill="white" className="star-2" />
            <circle cx="604.39" cy="472.33" r="0.6" fill="white" className="star-3" />
            <circle cx="607.47" cy="486.05" r="0.6" fill="white" className="star-4" />
            <circle cx="608.75" cy="500.1" r="0.6" fill="white" className="star-0" />
            <circle cx="608.19" cy="514.24" r="0.6" fill="white" className="star-1" />
            <circle cx="605.79" cy="528.24" r="0.6" fill="white" className="star-2" />
            <circle cx="601.59" cy="541.86" r="0.6" fill="white" className="star-3" />
            <circle cx="595.63" cy="554.87" r="0.6" fill="white" className="star-4" />
            <circle cx="588.01" cy="567.03" r="0.6" fill="white" className="star-0" />
            <circle cx="578.84" cy="578.13" r="0.6" fill="white" className="star-1" />
            <circle cx="568.28" cy="587.99" r="0.6" fill="white" className="star-2" />
            <circle cx="556.48" cy="596.42" r="0.6" fill="white" className="star-3" />
            <circle cx="543.65" cy="603.28" r="0.6" fill="white" className="star-4" />
            <circle cx="530.0" cy="608.43" r="0.6" fill="white" className="star-0" />
            <circle cx="515.74" cy="611.77" r="0.6" fill="white" className="star-1" />
            <circle cx="501.12" cy="613.24" r="0.6" fill="white" className="star-2" />
            <circle cx="486.39" cy="612.81" r="0.6" fill="white" className="star-3" />
            <circle cx="471.79" cy="610.45" r="0.6" fill="white" className="star-4" />
            <circle cx="457.57" cy="606.21" r="0.6" fill="white" className="star-0" />
            <circle cx="443.97" cy="600.14" r="0.6" fill="white" className="star-1" />
            <circle cx="431.24" cy="592.33" r="0.6" fill="white" className="star-2" />
            <circle cx="419.59" cy="582.91" r="0.6" fill="white" className="star-3" />
            <circle cx="409.23" cy="572.02" r="0.6" fill="white" className="star-4" />
            <circle cx="400.33" cy="559.84" r="0.6" fill="white" className="star-0" />
            <circle cx="393.07" cy="546.56" r="0.6" fill="white" className="star-1" />
            <circle cx="387.58" cy="532.41" r="0.6" fill="white" className="star-2" />
            <circle cx="383.96" cy="517.62" r="0.6" fill="white" className="star-3" />
            <circle cx="382.28" cy="502.44" r="0.6" fill="white" className="star-4" />
            <circle cx="382.58" cy="487.12" r="0.6" fill="white" className="star-0" />
            <circle cx="384.88" cy="471.91" r="0.6" fill="white" className="star-1" />
            <circle cx="389.14" cy="457.09" r="0.6" fill="white" className="star-2" />
            <circle cx="395.31" cy="442.9" r="0.6" fill="white" className="star-3" />
            <circle cx="403.29" cy="429.59" r="0.6" fill="white" className="star-4" />
            <circle cx="412.96" cy="417.39" r="0.6" fill="white" className="star-0" />
            <circle cx="424.17" cy="406.51" r="0.6" fill="white" className="star-1" />
            <circle cx="436.73" cy="397.15" r="0.6" fill="white" className="star-2" />
            <circle cx="450.44" cy="389.48" r="0.6" fill="white" className="star-3" />
            <circle cx="465.08" cy="383.63" r="0.6" fill="white" className="star-4" />
            <circle cx="480.4" cy="379.71" r="0.6" fill="white" className="star-0" />
            <circle cx="496.15" cy="377.81" r="0.6" fill="white" className="star-1" />
            <circle cx="512.06" cy="377.97" r="0.6" fill="white" className="star-2" />
            <circle cx="527.86" cy="380.2" r="0.6" fill="white" className="star-3" />
            <circle cx="543.29" cy="384.47" r="0.6" fill="white" className="star-4" />
            <circle cx="558.08" cy="390.72" r="0.6" fill="white" className="star-0" />
            <circle cx="571.97" cy="398.87" r="0.6" fill="white" className="star-1" />
            <circle cx="584.73" cy="408.78" r="0.6" fill="white" className="star-2" />
            <circle cx="596.13" cy="420.29" r="0.6" fill="white" className="star-3" />
            <circle cx="605.97" cy="433.23" r="0.6" fill="white" className="star-4" />
            <circle cx="614.07" cy="447.37" r="0.6" fill="white" className="star-0" />
            <circle cx="620.29" cy="462.49" r="0.6" fill="white" className="star-1" />
            <circle cx="624.5" cy="478.33" r="0.6" fill="white" className="star-2" />
            <circle cx="626.64" cy="494.64" r="0.6" fill="white" className="star-3" />
            <circle cx="626.64" cy="511.13" r="0.6" fill="white" className="star-4" />
            <circle cx="624.49" cy="527.54" r="0.6" fill="white" className="star-0" />
            <circle cx="620.22" cy="543.57" r="0.6" fill="white" className="star-1" />
            <circle cx="613.89" cy="558.96" r="0.6" fill="white" className="star-2" />
            <circle cx="605.6" cy="573.44" r="0.6" fill="white" className="star-3" />
            <circle cx="595.46" cy="586.76" r="0.6" fill="white" className="star-4" />
            <circle cx="583.65" cy="598.69" r="0.6" fill="white" className="star-0" />
            <circle cx="570.35" cy="609.02" r="0.6" fill="white" className="star-1" />
            <circle cx="555.79" cy="617.56" r="0.6" fill="white" className="star-2" />
            <circle cx="540.19" cy="624.16" r="0.6" fill="white" className="star-3" />
            <circle cx="523.83" cy="628.69" r="0.6" fill="white" className="star-4" />
            <circle cx="506.97" cy="631.07" r="0.6" fill="white" className="star-0" />
            <circle cx="489.89" cy="631.24" r="0.6" fill="white" className="star-1" />
            <circle cx="472.88" cy="629.18" r="0.6" fill="white" className="star-2" />
            <circle cx="456.24" cy="624.93" r="0.6" fill="white" className="star-3" />
            <circle cx="440.25" cy="618.54" r="0.6" fill="white" className="star-4" />
            <circle cx="425.17" cy="610.1" r="0.6" fill="white" className="star-0" />
            <circle cx="411.28" cy="599.76" r="0.6" fill="white" className="star-1" />
            <circle cx="398.81" cy="587.66" r="0.6" fill="white" className="star-2" />
            <circle cx="387.99" cy="574.01" r="0.6" fill="white" className="star-3" />
            <circle cx="379.01" cy="559.03" r="0.6" fill="white" className="star-4" />
            <circle cx="372.02" cy="542.96" r="0.6" fill="white" className="star-0" />
            <circle cx="367.16" cy="526.08" r="0.6" fill="white" className="star-1" />
            <circle cx="364.53" cy="508.67" r="0.6" fill="white" className="star-2" />
            <circle cx="364.17" cy="491.01" r="0.6" fill="white" className="star-3" />
            <circle cx="366.12" cy="473.4" r="0.6" fill="white" className="star-4" />
            <circle cx="370.34" cy="456.15" r="0.6" fill="white" className="star-0" />
            <circle cx="376.78" cy="439.55" r="0.6" fill="white" className="star-1" />
            <circle cx="385.34" cy="423.88" r="0.6" fill="white" className="star-2" />
            <circle cx="395.9" cy="409.41" r="0.6" fill="white" className="star-3" />
            <circle cx="408.27" cy="396.4" r="0.6" fill="white" className="star-4" />
            <circle cx="422.27" cy="385.07" r="0.6" fill="white" className="star-0" />
            <circle cx="437.65" cy="375.63" r="0.6" fill="white" className="star-1" />
            <circle cx="454.18" cy="368.24" r="0.6" fill="white" className="star-2" />
            <circle cx="471.57" cy="363.04" r="0.6" fill="white" className="star-3" />
            <circle cx="489.54" cy="360.14" r="0.6" fill="white" className="star-4" />
            <circle cx="507.77" cy="359.59" r="0.6" fill="white" className="star-0" />
            <circle cx="525.98" cy="361.41" r="0.6" fill="white" className="star-1" />
            <circle cx="543.84" cy="365.59" r="0.6" fill="white" className="star-2" />
            <circle cx="561.06" cy="372.07" r="0.6" fill="white" className="star-3" />
            <circle cx="577.33" cy="380.75" r="0.6" fill="white" className="star-4" />
            <circle cx="592.38" cy="391.5" r="0.6" fill="white" className="star-0" />
            <circle cx="605.94" cy="404.14" r="0.6" fill="white" className="star-1" />
            <circle cx="617.78" cy="418.47" r="0.6" fill="white" className="star-2" />
            <circle cx="627.69" cy="434.25" r="0.6" fill="white" className="star-3" />
            <circle cx="635.49" cy="451.23" r="0.6" fill="white" className="star-4" />
            <circle cx="641.04" cy="469.13" r="0.6" fill="white" className="star-0" />
            <circle cx="644.22" cy="487.64" r="0.6" fill="white" className="star-1" />
            <circle cx="644.98" cy="506.46" r="0.6" fill="white" className="star-2" />
            <circle cx="643.29" cy="525.26" r="0.6" fill="white" className="star-3" />
            <circle cx="639.16" cy="543.74" r="0.6" fill="white" className="star-4" />
            <circle cx="632.66" cy="561.57" r="0.6" fill="white" className="star-0" />
            <circle cx="623.88" cy="578.45" r="0.6" fill="white" className="star-1" />
            <circle cx="612.95" cy="594.08" r="0.6" fill="white" className="star-2" />
            <circle cx="600.05" cy="608.21" r="0.6" fill="white" className="star-3" />
            <circle cx="585.4" cy="620.57" r="0.6" fill="white" className="star-4" />
            <circle cx="569.22" cy="630.95" r="0.6" fill="white" className="star-0" />
            <circle cx="551.8" cy="639.17" r="0.6" fill="white" className="star-1" />
            <circle cx="533.4" cy="645.08" r="0.6" fill="white" className="star-2" />
            <circle cx="514.35" cy="648.56" r="0.6" fill="white" className="star-3" />
            <circle cx="494.96" cy="649.54" r="0.6" fill="white" className="star-4" />
            <circle cx="475.55" cy="647.99" r="0.6" fill="white" className="star-0" />
            <circle cx="456.46" cy="643.93" r="0.6" fill="white" className="star-1" />
            <circle cx="438.02" cy="637.42" r="0.6" fill="white" className="star-2" />
            <circle cx="420.53" cy="628.54" r="0.6" fill="white" className="star-3" />
            <circle cx="404.3" cy="617.45" r="0.6" fill="white" className="star-4" />
            <circle cx="389.61" cy="604.31" r="0.6" fill="white" className="star-0" />
            <circle cx="376.72" cy="589.34" r="0.6" fill="white" className="star-1" />
            <circle cx="365.85" cy="572.78" r="0.6" fill="white" className="star-2" />
            <circle cx="357.19" cy="554.91" r="0.6" fill="white" className="star-3" />
            <circle cx="350.92" cy="536.02" r="0.6" fill="white" className="star-4" />
            <circle cx="347.13" cy="516.43" r="0.6" fill="white" className="star-0" />
            <circle cx="345.92" cy="496.47" r="0.6" fill="white" className="star-1" />
            <circle cx="347.3" cy="476.47" r="0.6" fill="white" className="star-2" />
            <circle cx="351.28" cy="456.76" r="0.6" fill="white" className="star-3" />
            <circle cx="357.8" cy="437.7" r="0.6" fill="white" className="star-4" />
            <circle cx="366.75" cy="419.6" r="0.6" fill="white" className="star-0" />
            <circle cx="378.01" cy="402.77" r="0.6" fill="white" className="star-1" />
            <circle cx="391.38" cy="387.51" r="0.6" fill="white" className="star-2" />
            <circle cx="406.66" cy="374.07" r="0.6" fill="white" className="star-3" />
            <circle cx="423.59" cy="362.71" r="0.6" fill="white" className="star-4" />
            <circle cx="441.89" cy="353.61" r="0.6" fill="white" className="star-0" />
            <circle cx="461.27" cy="346.95" r="0.6" fill="white" className="star-1" />
            <circle cx="481.39" cy="342.85" r="0.6" fill="white" className="star-2" />
            <circle cx="501.92" cy="341.39" r="0.6" fill="white" className="star-3" />
            <circle cx="522.52" cy="342.6" r="0.6" fill="white" className="star-4" />
            <circle cx="542.84" cy="346.49" r="0.6" fill="white" className="star-0" />
            <circle cx="562.52" cy="352.99" r="0.6" fill="white" className="star-1" />
            <circle cx="581.24" cy="362.02" r="0.6" fill="white" className="star-2" />
            <circle cx="598.67" cy="373.42" r="0.6" fill="white" className="star-3" />
            <circle cx="614.52" cy="387.01" r="0.6" fill="white" className="star-4" />
            <circle cx="628.5" cy="402.58" r="0.6" fill="white" className="star-0" />
            <circle cx="640.37" cy="419.88" r="0.6" fill="white" className="star-1" />
            <circle cx="649.92" cy="438.61" r="0.6" fill="white" className="star-2" />
            <circle cx="656.97" cy="458.47" r="0.6" fill="white" className="star-3" />
            <circle cx="661.4" cy="479.12" r="0.6" fill="white" className="star-4" />
            <circle cx="663.12" cy="500.22" r="0.6" fill="white" className="star-0" />
            <circle cx="662.09" cy="521.41" r="0.6" fill="white" className="star-1" />
            <circle cx="658.31" cy="542.34" r="0.6" fill="white" className="star-2" />
            <circle cx="651.83" cy="562.65" r="0.6" fill="white" className="star-3" />
            <circle cx="642.76" cy="581.99" r="0.6" fill="white" className="star-4" />
            <circle cx="631.22" cy="600.03" r="0.6" fill="white" className="star-0" />
            <circle cx="617.41" cy="616.46" r="0.6" fill="white" className="star-1" />
            <circle cx="601.55" cy="631.0" r="0.6" fill="white" className="star-2" />
            <circle cx="583.9" cy="643.38" r="0.6" fill="white" className="star-3" />
            <circle cx="564.76" cy="653.39" r="0.6" fill="white" className="star-4" />
            <circle cx="544.42" cy="660.85" r="0.6" fill="white" className="star-0" />
            <circle cx="523.25" cy="665.63" r="0.6" fill="white" className="star-1" />
            <circle cx="501.59" cy="667.62" r="0.6" fill="white" className="star-2" />
            <circle cx="479.8" cy="666.78" r="0.6" fill="white" className="star-3" />
            <circle cx="458.26" cy="663.12" r="0.6" fill="white" className="star-4" />
            <circle cx="437.32" cy="656.68" r="0.6" fill="white" className="star-0" />
            <circle cx="417.36" cy="647.56" r="0.6" fill="white" className="star-1" />
            <circle cx="398.7" cy="635.9" r="0.6" fill="white" className="star-2" />
            <circle cx="381.68" cy="621.89" r="0.6" fill="white" className="star-3" />
            <circle cx="366.58" cy="605.76" r="0.6" fill="white" className="star-4" />
            <circle cx="353.68" cy="587.76" r="0.6" fill="white" className="star-0" />
            <circle cx="343.19" cy="568.2" r="0.6" fill="white" className="star-1" />
            <circle cx="335.31" cy="547.4" r="0.6" fill="white" className="star-2" />
            <circle cx="330.19" cy="525.71" r="0.6" fill="white" className="star-3" />
            <circle cx="327.91" cy="503.49" r="0.6" fill="white" className="star-4" />
            <circle cx="328.54" cy="481.11" r="0.6" fill="white" className="star-0" />
            <circle cx="332.07" cy="458.95" r="0.6" fill="white" className="star-1" />
            <circle cx="338.46" cy="437.39" r="0.6" fill="white" className="star-2" />
            <circle cx="347.61" cy="416.8" r="0.6" fill="white" className="star-3" />
            <circle cx="359.38" cy="397.53" r="0.6" fill="white" className="star-4" />
            <circle cx="373.58" cy="379.9" r="0.6" fill="white" className="star-0" />
            <circle cx="389.97" cy="364.24" r="0.6" fill="white" className="star-1" />
            <circle cx="408.31" cy="350.8" r="0.6" fill="white" className="star-2" />
            <circle cx="428.27" cy="339.83" r="0.6" fill="white" className="star-3" />
            <circle cx="449.53" cy="331.52" r="0.6" fill="white" className="star-4" />
            <circle cx="471.74" cy="326.03" r="0.6" fill="white" className="star-0" />
            <circle cx="494.52" cy="323.46" r="0.6" fill="white" className="star-1" />
            <circle cx="517.48" cy="323.87" r="0.6" fill="white" className="star-2" />
            <circle cx="540.25" cy="327.25" r="0.6" fill="white" className="star-3" />
            <circle cx="562.44" cy="333.58" r="0.6" fill="white" className="star-4" />
            <circle cx="583.66" cy="342.75" r="0.6" fill="white" className="star-0" />
            <circle cx="603.56" cy="354.61" r="0.6" fill="white" className="star-1" />
            <circle cx="621.79" cy="368.99" r="0.6" fill="white" className="star-2" />
            <circle cx="638.03" cy="385.64" r="0.6" fill="white" className="star-3" />
            <circle cx="652.01" cy="404.3" r="0.6" fill="white" className="star-4" />
            <circle cx="663.47" cy="424.66" r="0.6" fill="white" className="star-0" />
            <circle cx="672.22" cy="446.38" r="0.6" fill="white" className="star-1" />
            <circle cx="678.09" cy="469.09" r="0.6" fill="white" className="star-2" />
            <circle cx="680.97" cy="492.42" r="0.6" fill="white" className="star-3" />
            <circle cx="680.8" cy="515.98" r="0.6" fill="white" className="star-4" />
            <circle cx="677.56" cy="539.36" r="0.6" fill="white" className="star-0" />
            <circle cx="671.32" cy="562.18" r="0.6" fill="white" className="star-1" />
            <circle cx="662.14" cy="584.03" r="0.6" fill="white" className="star-2" />
            <circle cx="650.19" cy="604.56" r="0.6" fill="white" className="star-3" />
            <circle cx="635.65" cy="623.4" r="0.6" fill="white" className="star-4" />
            <circle cx="618.75" cy="640.23" r="0.6" fill="white" className="star-0" />
            <circle cx="599.77" cy="654.75" r="0.6" fill="white" className="star-1" />
            <circle cx="579.03" cy="666.72" r="0.6" fill="white" className="star-2" />
            <circle cx="556.86" cy="675.91" r="0.6" fill="white" className="star-3" />
            <circle cx="533.65" cy="682.17" r="0.6" fill="white" className="star-4" />
            <circle cx="509.77" cy="685.37" r="0.6" fill="white" className="star-0" />
            <circle cx="485.63" cy="685.44" r="0.6" fill="white" className="star-1" />
            <circle cx="461.63" cy="682.38" r="0.6" fill="white" className="star-2" />
            <circle cx="438.19" cy="676.22" r="0.6" fill="white" className="star-3" />
            <circle cx="415.7" cy="667.06" r="0.6" fill="white" className="star-4" />
            <circle cx="394.54" cy="655.03" r="0.6" fill="white" className="star-0" />
            <circle cx="375.08" cy="640.33" r="0.6" fill="white" className="star-1" />
            <circle cx="357.66" cy="623.2" r="0.6" fill="white" className="star-2" />
            <circle cx="342.58" cy="603.91" r="0.6" fill="white" className="star-3" />
            <circle cx="330.1" cy="582.79" r="0.6" fill="white" className="star-4" />
            <circle cx="320.44" cy="560.19" r="0.6" fill="white" className="star-0" />
            <circle cx="313.79" cy="536.48" r="0.6" fill="white" className="star-1" />
            <circle cx="310.26" cy="512.05" r="0.6" fill="white" className="star-2" />
            <circle cx="309.92" cy="487.33" r="0.6" fill="white" className="star-3" />
            <circle cx="312.8" cy="462.72" r="0.6" fill="white" className="star-4" />
            <circle cx="318.86" cy="438.65" r="0.6" fill="white" className="star-0" />
            <circle cx="328.0" cy="415.52" r="0.6" fill="white" className="star-1" />
            <circle cx="340.09" cy="393.73" r="0.6" fill="white" className="star-2" />
            <circle cx="354.94" cy="373.65" r="0.6" fill="white" className="star-3" />
            <circle cx="372.29" cy="355.63" r="0.6" fill="white" className="star-4" />
            <circle cx="391.87" cy="339.98" r="0.6" fill="white" className="star-0" />
            <circle cx="413.36" cy="326.98" r="0.6" fill="white" className="star-1" />
            <circle cx="436.4" cy="316.85" r="0.6" fill="white" className="star-2" />
            <circle cx="460.6" cy="309.79" r="0.6" fill="white" className="star-3" />
            <circle cx="485.56" cy="305.91" r="0.6" fill="white" className="star-4" />
            <circle cx="510.87" cy="305.3" r="0.6" fill="white" className="star-0" />
            <circle cx="536.08" cy="307.99" r="0.6" fill="white" className="star-1" />
            <circle cx="560.79" cy="313.93" r="0.6" fill="white" className="star-2" />
            <circle cx="584.56" cy="323.04" r="0.6" fill="white" className="star-3" />
            <circle cx="606.99" cy="335.18" r="0.6" fill="white" className="star-4" />
            <circle cx="627.7" cy="350.15" r="0.6" fill="white" className="star-0" />
            <circle cx="646.32" cy="367.72" r="0.6" fill="white" className="star-1" />
            <circle cx="662.54" cy="387.59" r="0.6" fill="white" className="star-2" />
            <circle cx="676.08" cy="409.44" r="0.6" fill="white" className="star-3" />
            <circle cx="686.68" cy="432.9" r="0.6" fill="white" className="star-4" />
            <circle cx="694.17" cy="457.59" r="0.6" fill="white" className="star-0" />
            <circle cx="698.41" cy="483.09" r="0.6" fill="white" className="star-1" />
            <circle cx="699.3" cy="508.97" r="0.6" fill="white" className="star-2" />
            <circle cx="696.82" cy="534.79" r="0.6" fill="white" className="star-3" />
            <circle cx="691.01" cy="560.13" r="0.6" fill="white" className="star-4" />
            <circle cx="681.94" cy="584.54" r="0.6" fill="white" className="star-0" />
            <circle cx="669.77" cy="607.61" r="0.6" fill="white" className="star-1" />
            <circle cx="654.67" cy="628.95" r="0.6" fill="white" className="star-2" />
            <circle cx="636.9" cy="648.19" r="0.6" fill="white" className="star-3" />
            <circle cx="616.76" cy="664.99" r="0.6" fill="white" className="star-4" />
            <circle cx="594.56" cy="679.07" r="0.6" fill="white" className="star-0" />
            <circle cx="570.68" cy="690.17" r="0.6" fill="white" className="star-1" />
            <circle cx="545.51" cy="698.09" r="0.6" fill="white" className="star-2" />
            <circle cx="519.48" cy="702.69" r="0.6" fill="white" className="star-3" />
            <circle cx="493.03" cy="703.88" r="0.6" fill="white" className="star-4" />
            <circle cx="466.6" cy="701.63" r="0.6" fill="white" className="star-0" />
            <circle cx="440.63" cy="695.95" r="0.6" fill="white" className="star-1" />
            <circle cx="415.58" cy="686.95" r="0.6" fill="white" className="star-2" />
            <circle cx="391.86" cy="674.74" r="0.6" fill="white" className="star-3" />
            <circle cx="369.88" cy="659.54" r="0.6" fill="white" className="star-4" />
            <circle cx="350.02" cy="641.59" r="0.6" fill="white" className="star-0" />
            <circle cx="332.63" cy="621.17" r="0.6" fill="white" className="star-1" />
            <circle cx="318.01" cy="598.63" r="0.6" fill="white" className="star-2" />
            <circle cx="306.41" cy="574.34" r="0.6" fill="white" className="star-3" />
            <circle cx="298.04" cy="548.7" r="0.6" fill="white" className="star-4" />
            <circle cx="293.06" cy="522.15" r="0.6" fill="white" className="star-0" />
            <circle cx="291.56" cy="495.13" r="0.6" fill="white" className="star-1" />
            <circle cx="293.58" cy="468.09" r="0.6" fill="white" className="star-2" />
            <circle cx="299.1" cy="441.5" r="0.6" fill="white" className="star-3" />
            <circle cx="308.03" cy="415.79" r="0.6" fill="white" className="star-4" />
            <circle cx="320.25" cy="391.43" r="0.6" fill="white" className="star-0" />
            <circle cx="335.54" cy="368.81" r="0.6" fill="white" className="star-1" />
            <circle cx="353.68" cy="348.32" r="0.6" fill="white" className="star-2" />
            <circle cx="374.35" cy="330.33" r="0.6" fill="white" className="star-3" />
            <circle cx="397.23" cy="315.15" r="0.6" fill="white" className="star-4" />
            <circle cx="421.92" cy="303.04" r="0.6" fill="white" className="star-0" />
            <circle cx="448.02" cy="294.21" r="0.6" fill="white" className="star-1" />
            <circle cx="475.09" cy="288.84" r="0.6" fill="white" className="star-2" />
            <circle cx="502.68" cy="287.02" r="0.6" fill="white" className="star-3" />
            <circle cx="530.32" cy="288.79" r="0.6" fill="white" className="star-4" />
            <circle cx="557.54" cy="294.14" r="0.6" fill="white" className="star-0" />
            <circle cx="583.89" cy="302.99" r="0.6" fill="white" className="star-1" />
            <circle cx="608.91" cy="315.21" r="0.6" fill="white" className="star-2" />
            <circle cx="632.18" cy="330.59" r="0.6" fill="white" className="star-3" />
            <circle cx="653.29" cy="348.89" r="0.6" fill="white" className="star-4" />
            <circle cx="671.89" cy="369.81" r="0.6" fill="white" className="star-0" />
            <circle cx="687.64" cy="393.01" r="0.6" fill="white" className="star-1" />
            <circle cx="700.27" cy="418.09" r="0.6" fill="white" className="star-2" />
            <circle cx="709.56" cy="444.65" r="0.6" fill="white" className="star-3" />
            <circle cx="715.34" cy="472.24" r="0.6" fill="white" className="star-4" />
            <circle cx="717.5" cy="500.39" r="0.6" fill="white" className="star-0" />
            <circle cx="715.99" cy="528.63" r="0.6" fill="white" className="star-1" />
            <circle cx="710.81" cy="556.48" r="0.6" fill="white" className="star-2" />
            <circle cx="702.06" cy="583.48" r="0.6" fill="white" className="star-3" />
            <circle cx="689.86" cy="609.15" r="0.6" fill="white" className="star-4" />
            <circle cx="674.4" cy="633.07" r="0.6" fill="white" className="star-0" />
            <circle cx="655.95" cy="654.82" r="0.6" fill="white" className="star-1" />
            <circle cx="634.79" cy="674.03" r="0.6" fill="white" className="star-2" />
            <circle cx="611.28" cy="690.36" r="0.6" fill="white" className="star-3" />
            <circle cx="585.81" cy="703.52" r="0.6" fill="white" className="star-4" />
            <circle cx="558.81" cy="713.29" r="0.6" fill="white" className="star-0" />
            <circle cx="530.71" cy="719.49" r="0.6" fill="white" className="star-1" />
            <circle cx="502.0" cy="721.99" r="0.6" fill="white" className="star-2" />
            <circle cx="473.16" cy="720.75" r="0.6" fill="white" className="star-3" />
            <circle cx="444.68" cy="715.77" r="0.6" fill="white" className="star-4" />
            <circle cx="417.04" cy="707.13" r="0.6" fill="white" className="star-0" />
            <circle cx="390.7" cy="694.95" r="0.6" fill="white" className="star-1" />
            <circle cx="366.13" cy="679.44" r="0.6" fill="white" className="star-2" />
            <circle cx="343.73" cy="660.84" r="0.6" fill="white" className="star-3" />
            <circle cx="323.91" cy="639.46" r="0.6" fill="white" className="star-4" />
            <circle cx="306.99" cy="615.65" r="0.6" fill="white" className="star-0" />
            <circle cx="293.29" cy="589.8" r="0.6" fill="white" className="star-1" />
            <circle cx="283.03" cy="562.35" r="0.6" fill="white" className="star-2" />
            <circle cx="276.41" cy="533.75" r="0.6" fill="white" className="star-3" />
            <circle cx="273.54" cy="504.49" r="0.6" fill="white" className="star-4" />
            <circle cx="274.5" cy="475.05" r="0.6" fill="white" className="star-0" />
            <circle cx="279.27" cy="445.94" r="0.6" fill="white" className="star-1" />
            <circle cx="287.79" cy="417.65" r="0.6" fill="white" className="star-2" />
            <circle cx="299.93" cy="390.65" r="0.6" fill="white" className="star-3" />
            <circle cx="315.49" cy="365.42" r="0.6" fill="white" className="star-4" />
            <circle cx="334.22" cy="342.38" r="0.6" fill="white" className="star-0" />
            <circle cx="355.82" cy="321.93" r="0.6" fill="white" className="star-1" />
            <circle cx="379.92" cy="304.42" r="0.6" fill="white" className="star-2" />
            <circle cx="406.14" cy="290.16" r="0.6" fill="white" className="star-3" />
            <circle cx="434.02" cy="279.4" r="0.6" fill="white" className="star-4" />
            <circle cx="463.12" cy="272.34" r="0.6" fill="white" className="star-0" />
            <circle cx="492.93" cy="269.11" r="0.6" fill="white" className="star-1" />
            <circle cx="522.96" cy="269.77" r="0.6" fill="white" className="star-2" />
            <circle cx="552.7" cy="274.32" r="0.6" fill="white" className="star-3" />
            <circle cx="581.64" cy="282.7" r="0.6" fill="white" className="star-4" />
            <circle cx="609.29" cy="294.79" r="0.6" fill="white" className="star-0" />
            <circle cx="635.19" cy="310.39" r="0.6" fill="white" className="star-1" />
            <circle cx="658.89" cy="329.24" r="0.6" fill="white" className="star-2" />
            <circle cx="679.97" cy="351.04" r="0.6" fill="white" className="star-3" />
            <circle cx="698.08" cy="375.42" r="0.6" fill="white" className="star-4" />
            <circle cx="712.9" cy="402.0" r="0.6" fill="white" className="star-0" />
            <circle cx="724.17" cy="430.31" r="0.6" fill="white" className="star-1" />
            <circle cx="731.68" cy="459.89" r="0.6" fill="white" className="star-2" />
            <circle cx="735.3" cy="490.25" r="0.6" fill="white" className="star-3" />
            <circle cx="734.95" cy="520.87" r="0.6" fill="white" className="star-4" />
            <circle cx="730.63" cy="551.23" r="0.6" fill="white" className="star-0" />
            <circle cx="722.39" cy="580.82" r="0.6" fill="white" className="star-1" />
            <circle cx="710.37" cy="609.15" r="0.6" fill="white" className="star-2" />
            <circle cx="694.76" cy="635.71" r="0.6" fill="white" className="star-3" />
            <circle cx="675.8" cy="660.06" r="0.6" fill="white" className="star-4" />
            <circle cx="653.81" cy="681.79" r="0.6" fill="white" className="star-0" />
            <circle cx="629.14" cy="700.51" r="0.6" fill="white" className="star-1" />
            <circle cx="602.22" cy="715.9" r="0.6" fill="white" className="star-2" />
            <circle cx="573.49" cy="727.68" r="0.6" fill="white" className="star-3" />
            <circle cx="543.42" cy="735.66" r="0.6" fill="white" className="star-4" />
            <circle cx="512.52" cy="739.67" r="0.6" fill="white" className="star-0" />
            <circle cx="481.32" cy="739.65" r="0.6" fill="white" className="star-1" />
            <circle cx="450.33" cy="735.57" r="0.6" fill="white" className="star-2" />
            <circle cx="420.09" cy="727.5" r="0.6" fill="white" className="star-3" />
            <circle cx="391.1" cy="715.55" r="0.6" fill="white" className="star-4" />
            <circle cx="363.87" cy="699.93" r="0.6" fill="white" className="star-0" />
            <circle cx="338.85" cy="680.87" r="0.6" fill="white" className="star-1" />
            <circle cx="316.48" cy="658.7" r="0.6" fill="white" className="star-2" />
            <circle cx="297.14" cy="633.78" r="0.6" fill="white" className="star-3" />
            <circle cx="281.17" cy="606.52" r="0.6" fill="white" className="star-4" />
            <circle cx="268.86" cy="577.37" r="0.6" fill="white" className="star-0" />
            <circle cx="260.41" cy="546.82" r="0.6" fill="white" className="star-1" />
            <circle cx="255.99" cy="515.39" r="0.6" fill="white" className="star-2" />
            <circle cx="255.67" cy="483.61" r="0.6" fill="white" className="star-3" />
            <circle cx="259.49" cy="452.0" r="0.6" fill="white" className="star-4" />
            <circle cx="267.39" cy="421.1" r="0.6" fill="white" className="star-0" />
            <circle cx="279.24" cy="391.45" r="0.6" fill="white" className="star-1" />
            <circle cx="294.87" cy="363.54" r="0.6" fill="white" className="star-2" />
            <circle cx="314.0" cy="337.85" r="0.6" fill="white" className="star-3" />
            <circle cx="336.35" cy="314.83" r="0.6" fill="white" className="star-4" />
            <circle cx="361.52" cy="294.87" r="0.6" fill="white" className="star-0" />
            <circle cx="389.11" cy="278.31" r="0.6" fill="white" className="star-1" />
            <circle cx="418.66" cy="265.45" r="0.6" fill="white" className="star-2" />
            <circle cx="449.68" cy="256.52" r="0.6" fill="white" className="star-3" />
            <circle cx="481.64" cy="251.68" r="0.6" fill="white" className="star-4" />
            <circle cx="514.01" cy="251.02" r="0.6" fill="white" className="star-0" />
            <circle cx="546.24" cy="254.57" r="0.6" fill="white" className="star-1" />
            <circle cx="577.78" cy="262.28" r="0.6" fill="white" className="star-2" />
            <circle cx="608.1" cy="274.03" r="0.6" fill="white" className="star-3" />
            <circle cx="636.69" cy="289.63" r="0.6" fill="white" className="star-4" />
            <circle cx="663.05" cy="308.84" r="0.6" fill="white" className="star-0" />
            <circle cx="686.73" cy="331.34" r="0.6" fill="white" className="star-1" />
            <circle cx="707.33" cy="356.76" r="0.6" fill="white" className="star-2" />
            <circle cx="724.48" cy="384.67" r="0.6" fill="white" className="star-3" />
            <circle cx="737.89" cy="414.62" r="0.6" fill="white" className="star-4" />
            <circle cx="747.32" cy="446.1" r="0.6" fill="white" className="star-0" />
            <circle cx="752.59" cy="478.58" r="0.6" fill="white" className="star-1" />
            <circle cx="753.61" cy="511.52" r="0.6" fill="white" className="star-2" />
            <circle cx="750.35" cy="544.37" r="0.6" fill="white" className="star-3" />
            <circle cx="742.84" cy="576.56" r="0.6" fill="white" className="star-4" />
            <circle cx="731.21" cy="607.55" r="0.6" fill="white" className="star-0" />
            <circle cx="715.63" cy="636.82" r="0.6" fill="white" className="star-1" />
            <circle cx="696.36" cy="663.86" r="0.6" fill="white" className="star-2" />
            <circle cx="673.72" cy="688.21" r="0.6" fill="white" className="star-3" />
            <circle cx="648.07" cy="709.44" r="0.6" fill="white" className="star-4" />
            <circle cx="619.85" cy="727.2" r="0.6" fill="white" className="star-0" />
            <circle cx="589.51" cy="741.17" r="0.6" fill="white" className="star-1" />
            <circle cx="557.58" cy="751.11" r="0.6" fill="white" className="star-2" />
            <circle cx="524.57" cy="756.83" r="0.6" fill="white" className="star-3" />
            <circle cx="491.06" cy="758.22" r="0.6" fill="white" className="star-4" />
            <circle cx="457.6" cy="755.25" r="0.6" fill="white" className="star-0" />
            <circle cx="424.76" cy="747.96" r="0.6" fill="white" className="star-1" />
            <circle cx="393.1" cy="736.46" r="0.6" fill="white" className="star-2" />
            <circle cx="363.15" cy="720.92" r="0.6" fill="white" className="star-3" />
            <circle cx="335.43" cy="701.61" r="0.6" fill="white" className="star-4" />
            <circle cx="310.41" cy="678.83" r="0.6" fill="white" className="star-0" />
            <circle cx="288.52" cy="652.96" r="0.6" fill="white" className="star-1" />
            <circle cx="270.15" cy="624.43" r="0.6" fill="white" className="star-2" />
            <circle cx="255.6" cy="593.72" r="0.6" fill="white" className="star-3" />
            <circle cx="245.15" cy="561.34" r="0.6" fill="white" className="star-4" />
            <circle cx="238.98" cy="527.82" r="0.6" fill="white" className="star-0" />
            <circle cx="237.2" cy="493.74" r="0.6" fill="white" className="star-1" />
            <circle cx="239.86" cy="459.67" r="0.6" fill="white" className="star-2" />
            <circle cx="246.92" cy="426.18" r="0.6" fill="white" className="star-3" />
            <circle cx="258.28" cy="393.84" r="0.6" fill="white" className="star-4" />
            <circle cx="273.76" cy="363.21" r="0.6" fill="white" className="star-0" />
            <circle cx="293.11" cy="334.8" r="0.6" fill="white" className="star-1" />
            <circle cx="316.01" cy="309.11" r="0.6" fill="white" className="star-2" />
            <circle cx="342.09" cy="286.57" r="0.6" fill="white" className="star-3" />
            <circle cx="370.91" cy="267.57" r="0.6" fill="white" className="star-4" />
            <circle cx="401.99" cy="252.45" r="0.6" fill="white" className="star-0" />
            <circle cx="434.82" cy="241.47" r="0.6" fill="white" className="star-1" />
            <circle cx="468.84" cy="234.82" r="0.6" fill="white" className="star-2" />
            <circle cx="503.48" cy="232.65" r="0.6" fill="white" className="star-3" />
            <circle cx="538.16" cy="234.98" r="0.6" fill="white" className="star-4" />
            <circle cx="572.3" cy="241.81" r="0.6" fill="white" className="star-0" />
            <circle cx="605.3" cy="253.01" r="0.6" fill="white" className="star-1" />
            <circle cx="636.62" cy="268.42" r="0.6" fill="white" className="star-2" />
            <circle cx="665.72" cy="287.79" r="0.6" fill="white" className="star-3" />
            <circle cx="692.1" cy="310.8" r="0.6" fill="white" className="star-4" />
            <circle cx="715.3" cy="337.08" r="0.6" fill="white" className="star-0" />
            <circle cx="734.93" cy="366.18" r="0.6" fill="white" className="star-1" />
            <circle cx="750.65" cy="397.62" r="0.6" fill="white" className="star-2" />
            <circle cx="762.17" cy="430.88" r="0.6" fill="white" className="star-3" />
            <circle cx="769.29" cy="465.4" r="0.6" fill="white" className="star-4" />
            <circle cx="771.87" cy="500.6" r="0.6" fill="white" className="star-0" />
            <circle cx="769.87" cy="535.89" r="0.6" fill="white" className="star-1" />
            <circle cx="763.31" cy="570.67" r="0.6" fill="white" className="star-2" />
            <circle cx="752.27" cy="604.35" r="0.6" fill="white" className="star-3" />
            <circle cx="736.94" cy="636.36" r="0.6" fill="white" className="star-4" />
            <circle cx="717.56" cy="666.15" r="0.6" fill="white" className="star-0" />
            <circle cx="694.45" cy="693.22" r="0.6" fill="white" className="star-1" />
            <circle cx="667.99" cy="717.09" r="0.6" fill="white" className="star-2" />
            <circle cx="638.62" cy="737.36" r="0.6" fill="white" className="star-3" />
            <circle cx="606.83" cy="753.67" r="0.6" fill="white" className="star-4" />
            <circle cx="573.14" cy="765.74" r="0.6" fill="white" className="star-0" />
            <circle cx="538.12" cy="773.35" r="0.6" fill="white" className="star-1" />
            <circle cx="502.37" cy="776.36" r="0.6" fill="white" className="star-2" />
            <circle cx="466.48" cy="774.71" r="0.6" fill="white" className="star-3" />
            <circle cx="431.06" cy="768.41" r="0.6" fill="white" className="star-4" />
            <circle cx="396.7" cy="757.56" r="0.6" fill="white" className="star-0" />
            <circle cx="364.0" cy="742.32" r="0.6" fill="white" className="star-1" />
            <circle cx="333.51" cy="722.95" r="0.6" fill="white" className="star-2" />
            <circle cx="305.75" cy="699.75" r="0.6" fill="white" className="star-3" />
            <circle cx="281.21" cy="673.12" r="0.6" fill="white" className="star-4" />
            <circle cx="260.29" cy="643.49" r="0.6" fill="white" className="star-0" />
            <circle cx="243.37" cy="611.35" r="0.6" fill="white" className="star-1" />
            <circle cx="230.74" cy="577.25" r="0.6" fill="white" className="star-2" />
            <circle cx="222.62" cy="541.74" r="0.6" fill="white" className="star-3" />
            <circle cx="219.18" cy="505.44" r="0.6" fill="white" className="star-4" />
            <circle cx="220.47" cy="468.95" r="0.6" fill="white" className="star-0" />
            <circle cx="226.49" cy="432.89" r="0.6" fill="white" className="star-1" />
            <circle cx="237.15" cy="397.86" r="0.6" fill="white" className="star-2" />
            <circle cx="252.28" cy="364.47" r="0.6" fill="white" className="star-3" />
            <circle cx="271.63" cy="333.28" r="0.6" fill="white" className="star-4" />
            <circle cx="294.9" cy="304.82" r="0.6" fill="white" className="star-0" />
            <circle cx="321.7" cy="279.59" r="0.6" fill="white" className="star-1" />
            <circle cx="351.58" cy="258.01" r="0.6" fill="white" className="star-2" />
            <circle cx="384.05" cy="240.47" r="0.6" fill="white" className="star-3" />
            <circle cx="418.56" cy="227.27" r="0.6" fill="white" className="star-4" />
            <circle cx="454.55" cy="218.65" r="0.6" fill="white" className="star-0" />
            <circle cx="491.39" cy="214.75" r="0.6" fill="white" className="star-1" />
            <circle cx="528.48" cy="215.67" r="0.6" fill="white" className="star-2" />
            <circle cx="565.18" cy="221.4" r="0.6" fill="white" className="star-3" />
            <circle cx="600.88" cy="231.85" r="0.6" fill="white" className="star-4" />
            <circle cx="634.97" cy="246.86" r="0.6" fill="white" className="star-0" />
            <circle cx="666.86" cy="266.19" r="0.6" fill="white" className="star-1" />
            <circle cx="696.02" cy="289.51" r="0.6" fill="white" className="star-2" />
            <circle cx="721.94" cy="316.46" r="0.6" fill="white" className="star-3" />
            <circle cx="744.18" cy="346.58" r="0.6" fill="white" className="star-4" />
            <circle cx="762.35" cy="379.38" r="0.6" fill="white" className="star-0" />
            <circle cx="776.13" cy="414.29" r="0.6" fill="white" className="star-1" />
            <circle cx="785.28" cy="450.75" r="0.6" fill="white" className="star-2" />
            <circle cx="789.63" cy="488.13" r="0.6" fill="white" className="star-3" />
            <circle cx="789.1" cy="525.81" r="0.6" fill="white" className="star-4" />
            <circle cx="783.68" cy="563.15" r="0.6" fill="white" className="star-0" />
            <circle cx="773.45" cy="599.52" r="0.6" fill="white" className="star-1" />
            <circle cx="758.58" cy="634.3" r="0.6" fill="white" className="star-2" />
            <circle cx="739.29" cy="666.9" r="0.6" fill="white" className="star-3" />
            <circle cx="715.92" cy="696.77" r="0.6" fill="white" className="star-4" />
            <circle cx="688.83" cy="723.38" r="0.6" fill="white" className="star-0" />
            <circle cx="658.48" cy="746.29" r="0.6" fill="white" className="star-1" />
            <circle cx="625.37" cy="765.1" r="0.6" fill="white" className="star-2" />
            <circle cx="590.07" cy="779.47" r="0.6" fill="white" className="star-3" />
            <circle cx="553.14" cy="789.16" r="0.6" fill="white" className="star-4" />
            <circle cx="515.23" cy="793.98" r="0.6" fill="white" className="star-0" />
            <circle cx="476.96" cy="793.85" r="0.6" fill="white" className="star-1" />
            <circle cx="438.99" cy="788.75" r="0.6" fill="white" className="star-2" />
            <circle cx="401.95" cy="778.76" r="0.6" fill="white" className="star-3" />
            <circle cx="366.47" cy="764.03" r="0.6" fill="white" className="star-4" />
            <circle cx="333.16" cy="744.8" r="0.6" fill="white" className="star-0" />
            <circle cx="302.58" cy="721.39" r="0.6" fill="white" className="star-1" />
            <circle cx="275.26" cy="694.17" r="0.6" fill="white" className="star-2" />
            <circle cx="251.67" cy="663.6" r="0.6" fill="white" className="star-3" />
            <circle cx="232.22" cy="630.2" r="0.6" fill="white" className="star-4" />
            <circle cx="217.25" cy="594.5" r="0.6" fill="white" className="star-0" />
            <circle cx="207.02" cy="557.12" r="0.6" fill="white" className="star-1" />
            <circle cx="201.71" cy="518.68" r="0.6" fill="white" className="star-2" />
            <circle cx="201.43" cy="479.83" r="0.6" fill="white" className="star-3" />
            <circle cx="206.2" cy="441.22" r="0.6" fill="white" className="star-4" />
            <circle cx="215.94" cy="403.51" r="0.6" fill="white" className="star-0" />
            <circle cx="230.51" cy="367.34" r="0.6" fill="white" className="star-1" />
            <circle cx="249.67" cy="333.31" r="0.6" fill="white" className="star-2" />
            <circle cx="273.11" cy="302.02" r="0.6" fill="white" className="star-3" />
            <circle cx="300.44" cy="274.0" r="0.6" fill="white" className="star-4" />
            <circle cx="331.21" cy="249.72" r="0.6" fill="white" className="star-0" />
            <circle cx="364.91" cy="229.62" r="0.6" fill="white" className="star-1" />
            <circle cx="400.98" cy="214.03" r="0.6" fill="white" className="star-2" />
            <circle cx="438.81" cy="203.24" r="0.6" fill="white" className="star-3" />
            <circle cx="477.77" cy="197.44" r="0.6" fill="white" className="star-4" />
            <circle cx="517.2" cy="196.74" r="0.6" fill="white" className="star-0" />
            <circle cx="556.43" cy="201.16" r="0.6" fill="white" className="star-1" />
            <circle cx="594.82" cy="210.64" r="0.6" fill="white" className="star-2" />
            <circle cx="631.69" cy="225.03" r="0.6" fill="white" className="star-3" />
            <circle cx="666.43" cy="244.11" r="0.6" fill="white" className="star-4" />
            <circle cx="698.44" cy="267.56" r="0.6" fill="white" className="star-0" />
            <circle cx="727.17" cy="294.99" r="0.6" fill="white" className="star-1" />
            <circle cx="752.14" cy="325.96" r="0.6" fill="white" className="star-2" />
            <circle cx="772.91" cy="359.94" r="0.6" fill="white" className="star-3" />
            <circle cx="789.12" cy="396.38" r="0.6" fill="white" className="star-4" />
            <circle cx="800.48" cy="434.65" r="0.6" fill="white" className="star-0" />
            <circle cx="806.79" cy="474.12" r="0.6" fill="white" className="star-1" />
            <circle cx="807.93" cy="514.13" r="0.6" fill="white" className="star-2" />
            <circle cx="803.87" cy="553.99" r="0.6" fill="white" className="star-3" />
            <circle cx="794.66" cy="593.04" r="0.6" fill="white" className="star-4" />
            <circle cx="780.45" cy="630.61" r="0.6" fill="white" className="star-0" />
            <circle cx="761.47" cy="666.07" r="0.6" fill="white" className="star-1" />
            <circle cx="738.02" cy="698.8" r="0.6" fill="white" className="star-2" />
            <circle cx="710.5" cy="728.26" r="0.6" fill="white" className="star-3" />
            <circle cx="679.35" cy="753.92" r="0.6" fill="white" className="star-4" />
            <circle cx="645.09" cy="775.36" r="0.6" fill="white" className="star-0" />
            <circle cx="608.3" cy="792.2" r="0.6" fill="white" className="star-1" />
            <circle cx="569.59" cy="804.14" r="0.6" fill="white" className="star-2" />
            <circle cx="529.61" cy="810.97" r="0.6" fill="white" className="star-3" />
            <circle cx="489.04" cy="812.56" r="0.6" fill="white" className="star-4" />
            <circle cx="448.55" cy="808.87" r="0.6" fill="white" className="star-0" />
            <circle cx="408.84" cy="799.95" r="0.6" fill="white" className="star-1" />
            <circle cx="370.57" cy="785.95" r="0.6" fill="white" className="star-2" />
            <circle cx="334.39" cy="767.07" r="0.6" fill="white" className="star-3" />
            <circle cx="300.93" cy="743.64" r="0.6" fill="white" className="star-4" />
            <circle cx="270.75" cy="716.04" r="0.6" fill="white" className="star-0" />
            <circle cx="244.38" cy="684.71" r="0.6" fill="white" className="star-1" />
            <circle cx="222.26" cy="650.2" r="0.6" fill="white" className="star-2" />
            <circle cx="204.78" cy="613.06" r="0.6" fill="white" className="star-3" />
            <circle cx="192.25" cy="573.92" r="0.6" fill="white" className="star-4" />
            <circle cx="184.89" cy="533.44" r="0.6" fill="white" className="star-0" />
            <circle cx="182.84" cy="492.31" r="0.6" fill="white" className="star-1" />
            <circle cx="186.15" cy="451.2" r="0.6" fill="white" className="star-2" />
            <circle cx="194.76" cy="410.82" r="0.6" fill="white" className="star-3" />
            <circle cx="208.55" cy="371.85" r="0.6" fill="white" className="star-4" />
            <circle cx="227.31" cy="334.96" r="0.6" fill="white" className="star-0" />
            <circle cx="250.71" cy="300.76" r="0.6" fill="white" className="star-1" />
            <circle cx="278.38" cy="269.86" r="0.6" fill="white" className="star-2" />
            <circle cx="309.86" cy="242.77" r="0.6" fill="white" className="star-3" />
            <circle cx="344.63" cy="219.96" r="0.6" fill="white" className="star-4" />
            <circle cx="382.1" cy="201.84" r="0.6" fill="white" className="star-0" />
            <circle cx="421.66" cy="188.71" r="0.6" fill="white" className="star-1" />
            <circle cx="462.63" cy="180.8" r="0.6" fill="white" className="star-2" />
            <circle cx="504.33" cy="178.28" r="0.6" fill="white" className="star-3" />
            <circle cx="546.05" cy="181.18" r="0.6" fill="white" className="star-4" />
            <circle cx="587.1" cy="189.48" r="0.6" fill="white" className="star-0" />
            <circle cx="626.76" cy="203.05" r="0.6" fill="white" className="star-1" />
            <circle cx="664.38" cy="221.66" r="0.6" fill="white" className="star-2" />
            <circle cx="699.3" cy="245.03" r="0.6" fill="white" className="star-3" />
            <circle cx="730.94" cy="272.75" r="0.6" fill="white" className="star-4" />
            <circle cx="758.75" cy="304.38" r="0.6" fill="white" className="star-0" />
            <circle cx="782.25" cy="339.39" r="0.6" fill="white" className="star-1" />
            <circle cx="801.04" cy="377.19" r="0.6" fill="white" className="star-2" />
            <circle cx="814.78" cy="417.16" r="0.6" fill="white" className="star-3" />
            <circle cx="823.24" cy="458.62" r="0.6" fill="white" className="star-4" />
            <circle cx="826.25" cy="500.87" r="0.6" fill="white" className="star-0" />
            <circle cx="823.75" cy="543.2" r="0.6" fill="white" className="star-1" />
            <circle cx="815.78" cy="584.91" r="0.6" fill="white" className="star-2" />
            <circle cx="802.46" cy="625.27" r="0.6" fill="white" className="star-3" />
            <circle cx="783.99" cy="663.61" r="0.6" fill="white" className="star-4" />
            <circle cx="760.68" cy="699.27" r="0.6" fill="white" className="star-0" />
            <circle cx="732.92" cy="731.65" r="0.6" fill="white" className="star-1" />
            <circle cx="701.15" cy="760.18" r="0.6" fill="white" className="star-2" />
            <circle cx="665.92" cy="784.39" r="0.6" fill="white" className="star-3" />
            <circle cx="627.79" cy="803.84" r="0.6" fill="white" className="star-4" />
            <circle cx="587.43" cy="818.21" r="0.6" fill="white" className="star-0" />
            <circle cx="545.49" cy="827.23" r="0.6" fill="white" className="star-1" />
            <circle cx="502.69" cy="830.74" r="0.6" fill="white" className="star-2" />
            <circle cx="459.75" cy="828.67" r="0.6" fill="white" className="star-3" />
            <circle cx="417.39" cy="821.04" r="0.6" fill="white" className="star-4" />
            <circle cx="376.33" cy="807.97" r="0.6" fill="white" className="star-0" />
            <circle cx="337.26" cy="789.67" r="0.6" fill="white" className="star-1" />
            <circle cx="300.86" cy="766.43" r="0.6" fill="white" className="star-2" />
            <circle cx="267.74" cy="738.63" r="0.6" fill="white" className="star-3" />
            <circle cx="238.47" cy="706.74" r="0.6" fill="white" className="star-4" />
            <circle cx="213.56" cy="671.29" r="0.6" fill="white" className="star-0" />
            <circle cx="193.42" cy="632.86" r="0.6" fill="white" className="star-1" />
            <circle cx="178.43" cy="592.1" r="0.6" fill="white" className="star-2" />
            <circle cx="168.83" cy="549.69" r="0.6" fill="white" className="star-3" />
            <circle cx="164.81" cy="506.35" r="0.6" fill="white" className="star-4" />
            <circle cx="166.44" cy="462.8" r="0.6" fill="white" className="star-0" />
            <circle cx="173.72" cy="419.78" r="0.6" fill="white" className="star-1" />
            <circle cx="186.52" cy="378.03" r="0.6" fill="white" className="star-2" />
            <circle cx="204.65" cy="338.24" r="0.6" fill="white" className="star-3" />
            <circle cx="227.81" cy="301.09" r="0.6" fill="white" className="star-4" />
            <circle cx="255.62" cy="267.23" r="0.6" fill="white" className="star-0" />
            <circle cx="287.62" cy="237.22" r="0.6" fill="white" className="star-1" />
            <circle cx="323.28" cy="211.58" r="0.6" fill="white" className="star-2" />
            <circle cx="362.01" cy="190.77" r="0.6" fill="white" className="star-3" />
            <circle cx="403.15" cy="175.13" r="0.6" fill="white" className="star-4" />
            <circle cx="446.02" cy="164.94" r="0.6" fill="white" className="star-0" />
            <circle cx="489.9" cy="160.4" r="0.6" fill="white" className="star-1" />
            <circle cx="534.05" cy="161.58" r="0.6" fill="white" className="star-2" />
            <circle cx="577.72" cy="168.49" r="0.6" fill="white" className="star-3" />
            <circle cx="620.17" cy="181.01" r="0.6" fill="white" className="star-4" />
            <circle cx="660.68" cy="198.95" r="0.6" fill="white" className="star-0" />
            <circle cx="698.57" cy="222.01" r="0.6" fill="white" className="star-1" />
            <circle cx="733.19" cy="249.83" r="0.6" fill="white" className="star-2" />
            <circle cx="763.94" cy="281.93" r="0.6" fill="white" className="star-3" />
            <circle cx="790.3" cy="317.78" r="0.6" fill="white" className="star-4" />
            <circle cx="811.81" cy="356.8" r="0.6" fill="white" className="star-0" />
            <circle cx="828.11" cy="398.32" r="0.6" fill="white" className="star-1" />
            <circle cx="838.89" cy="441.65" r="0.6" fill="white" className="star-2" />
            <circle cx="843.97" cy="486.05" r="0.6" fill="white" className="star-3" />
            <circle cx="843.25" cy="530.8" r="0.6" fill="white" className="star-4" />
            <circle cx="836.72" cy="575.11" r="0.6" fill="white" className="star-0" />
            <circle cx="824.5" cy="618.26" r="0.6" fill="white" className="star-1" />
            <circle cx="806.76" cy="659.5" r="0.6" fill="white" className="star-2" />
            <circle cx="783.8" cy="698.14" r="0.6" fill="white" className="star-3" />
            <circle cx="756.0" cy="733.51" r="0.6" fill="white" className="star-4" />
            <circle cx="723.81" cy="765.01" r="0.6" fill="white" className="star-0" />
            <circle cx="687.77" cy="792.1" r="0.6" fill="white" className="star-1" />
            <circle cx="648.48" cy="814.32" r="0.6" fill="white" className="star-2" />
            <circle cx="606.6" cy="831.27" r="0.6" fill="white" className="star-3" />
            <circle cx="562.82" cy="842.66" r="0.6" fill="white" className="star-4" />
            <circle cx="517.89" cy="848.29" r="0.6" fill="white" className="star-0" />
            <circle cx="472.56" cy="848.04" r="0.6" fill="white" className="star-1" />
            <circle cx="427.59" cy="841.92" r="0.6" fill="white" className="star-2" />
            <circle cx="383.76" cy="830.0" r="0.6" fill="white" className="star-3" />
            <circle cx="341.79" cy="812.48" r="0.6" fill="white" className="star-4" />
            <circle cx="302.4" cy="789.64" r="0.6" fill="white" className="star-0" />
            <circle cx="266.27" cy="761.86" r="0.6" fill="white" className="star-1" />
            <circle cx="234.02" cy="729.6" r="0.6" fill="white" className="star-2" />
            <circle cx="206.18" cy="693.39" r="0.6" fill="white" className="star-3" />
            <circle cx="183.25" cy="653.83" r="0.6" fill="white" className="star-4" />
            <circle cx="165.63" cy="611.59" r="0.6" fill="white" className="star-0" />
            <circle cx="153.62" cy="567.38" r="0.6" fill="white" className="star-1" />
            <circle cx="147.43" cy="521.93" r="0.6" fill="white" className="star-2" />
            <circle cx="147.19" cy="476.01" r="0.6" fill="white" className="star-3" />
            <circle cx="152.91" cy="430.4" r="0.6" fill="white" className="star-4" />
            <circle cx="164.5" cy="385.88" r="0.6" fill="white" className="star-0" />
            <circle cx="181.79" cy="343.18" r="0.6" fill="white" className="star-1" />
            <circle cx="204.5" cy="303.05" r="0.6" fill="white" className="star-2" />
            <circle cx="232.24" cy="266.15" r="0.6" fill="white" className="star-3" />
            <circle cx="264.56" cy="233.14" r="0.6" fill="white" className="star-4" />
            <circle cx="300.94" cy="204.56" r="0.6" fill="white" className="star-0" />
            <circle cx="340.75" cy="180.91" r="0.6" fill="white" className="star-1" />
            <circle cx="383.33" cy="162.6" r="0.6" fill="white" className="star-2" />
            <circle cx="427.98" cy="149.96" r="0.6" fill="white" className="star-3" />
            <circle cx="473.94" cy="143.2" r="0.6" fill="white" className="star-4" />
            <circle cx="520.43" cy="142.46" r="0.6" fill="white" className="star-0" />
            <circle cx="566.68" cy="147.76" r="0.6" fill="white" className="star-1" />
            <circle cx="611.9" cy="159.02" r="0.6" fill="white" className="star-2" />
            <circle cx="655.32" cy="176.06" r="0.6" fill="white" className="star-3" />
            <circle cx="696.21" cy="198.61" r="0.6" fill="white" className="star-4" />
            <circle cx="733.86" cy="226.31" r="0.6" fill="white" className="star-0" />
            <circle cx="767.65" cy="258.68" r="0.6" fill="white" className="star-1" />
            <circle cx="796.98" cy="295.2" r="0.6" fill="white" className="star-2" />
            <circle cx="821.36" cy="335.26" r="0.6" fill="white" className="star-3" />
            <circle cx="840.36" cy="378.18" r="0.6" fill="white" className="star-4" />
            <circle cx="853.64" cy="423.25" r="0.6" fill="white" className="star-0" />
            <circle cx="860.98" cy="469.71" r="0.6" fill="white" className="star-1" />
            <circle cx="862.24" cy="516.78" r="0.6" fill="white" className="star-2" />
            <circle cx="857.37" cy="563.66" r="0.6" fill="white" className="star-3" />
            <circle cx="846.46" cy="609.57" r="0.6" fill="white" className="star-4" />
            <circle cx="829.68" cy="653.71" r="0.6" fill="white" className="star-0" />
            <circle cx="807.28" cy="695.36" r="0.6" fill="white" className="star-1" />
            <circle cx="779.65" cy="733.78" r="0.6" fill="white" className="star-2" />
            <circle cx="747.24" cy="768.34" r="0.6" fill="white" className="star-3" />
            <circle cx="710.59" cy="798.43" r="0.6" fill="white" className="star-4" />
            <circle cx="670.3" cy="823.54" r="0.6" fill="white" className="star-0" />
            <circle cx="627.05" cy="843.24" r="0.6" fill="white" className="star-1" />
            <circle cx="581.56" cy="857.18" r="0.6" fill="white" className="star-2" />
            <circle cx="534.61" cy="865.11" r="0.6" fill="white" className="star-3" />
            <circle cx="486.97" cy="866.89" r="0.6" fill="white" className="star-4" />
            <circle cx="439.46" cy="862.48" r="0.6" fill="white" className="star-0" />
            <circle cx="392.87" cy="851.93" r="0.6" fill="white" className="star-1" />
            <circle cx="348.0" cy="835.41" r="0.6" fill="white" className="star-2" />
            <circle cx="305.6" cy="813.2" r="0.6" fill="white" className="star-3" />
            <circle cx="266.4" cy="785.64" r="0.6" fill="white" className="star-4" />
            <circle cx="231.07" cy="753.21" r="0.6" fill="white" className="star-0" />
            <circle cx="200.21" cy="716.43" r="0.6" fill="white" className="star-1" />
            <circle cx="174.35" cy="675.92" r="0.6" fill="white" className="star-2" />
            <circle cx="153.95" cy="632.35" r="0.6" fill="white" className="star-3" />
            <circle cx="139.34" cy="586.46" r="0.6" fill="white" className="star-4" />
            <circle cx="130.81" cy="539.02" r="0.6" fill="white" className="star-0" />
            <circle cx="128.49" cy="490.82" r="0.6" fill="white" className="star-1" />
            <circle cx="132.44" cy="442.68" r="0.6" fill="white" className="star-2" />
            <circle cx="142.61" cy="395.41" r="0.6" fill="white" className="star-3" />
            <circle cx="158.85" cy="349.81" r="0.6" fill="white" className="star-4" />
            <circle cx="180.87" cy="306.66" r="0.6" fill="white" className="star-0" />
            <circle cx="208.34" cy="266.69" r="0.6" fill="white" className="star-1" />
            <circle cx="240.78" cy="230.58" r="0.6" fill="white" className="star-2" />
            <circle cx="277.67" cy="198.95" r="0.6" fill="white" className="star-3" />
            <circle cx="318.39" cy="172.34" r="0.6" fill="white" className="star-4" />
            <circle cx="362.27" cy="151.21" r="0.6" fill="white" className="star-0" />
            <circle cx="408.55" cy="135.93" r="0.6" fill="white" className="star-1" />
            <circle cx="456.48" cy="126.78" r="0.6" fill="white" className="star-2" />
            <circle cx="505.23" cy="123.91" r="0.6" fill="white" className="star-3" />
            <circle cx="553.99" cy="127.39" r="0.6" fill="white" className="star-4" />
            <circle cx="601.94" cy="137.17" r="0.6" fill="white" className="star-0" />
            <circle cx="648.26" cy="153.11" r="0.6" fill="white" className="star-1" />
            <circle cx="692.17" cy="174.93" r="0.6" fill="white" className="star-2" />
            <circle cx="732.92" cy="202.29" r="0.6" fill="white" className="star-3" />
            <circle cx="769.82" cy="234.73" r="0.6" fill="white" className="star-4" />
            <circle cx="802.23" cy="271.72" r="0.6" fill="white" className="star-0" />
            <circle cx="829.6" cy="312.64" r="0.6" fill="white" className="star-1" />
            <circle cx="851.45" cy="356.81" r="0.6" fill="white" className="star-2" />
            <circle cx="867.41" cy="403.48" r="0.6" fill="white" className="star-3" />
            <circle cx="877.19" cy="451.88" r="0.6" fill="white" className="star-4" />
            <circle cx="880.62" cy="501.18" r="0.6" fill="white" className="star-0" />
            <circle cx="877.63" cy="550.56" r="0.6" fill="white" className="star-1" />
            <circle cx="868.25" cy="599.19" r="0.6" fill="white" className="star-2" />
            <circle cx="852.63" cy="646.23" r="0.6" fill="white" className="star-3" />
            <circle cx="831.02" cy="690.9" r="0.6" fill="white" className="star-4" />
            <circle cx="803.78" cy="732.43" r="0.6" fill="white" className="star-0" />
            <circle cx="771.35" cy="770.11" r="0.6" fill="white" className="star-1" />
            <circle cx="734.28" cy="803.31" r="0.6" fill="white" className="star-2" />
            <circle cx="693.17" cy="831.44" r="0.6" fill="white" className="star-3" />
            <circle cx="648.72" cy="854.03" r="0.6" fill="white" className="star-4" />
            <circle cx="601.67" cy="870.69" r="0.6" fill="white" className="star-0" />
            <circle cx="552.81" cy="881.11" r="0.6" fill="white" className="star-1" />
            <circle cx="502.96" cy="885.11" r="0.6" fill="white" className="star-2" />
            <circle cx="452.97" cy="882.62" r="0.6" fill="white" className="star-3" />
            <circle cx="403.67" cy="873.66" r="0.6" fill="white" className="star-4" />
            <circle cx="355.9" cy="858.36" r="0.6" fill="white" className="star-0" />
            <circle cx="310.48" cy="836.99" r="0.6" fill="white" className="star-1" />
            <circle cx="268.17" cy="809.88" r="0.6" fill="white" className="star-2" />
            <circle cx="229.69" cy="777.48" r="0.6" fill="white" className="star-3" />
            <circle cx="195.71" cy="740.33" r="0.6" fill="white" className="star-4" />
            <circle cx="166.8" cy="699.04" r="0.6" fill="white" className="star-0" />
            <circle cx="143.46" cy="654.32" r="0.6" fill="white" className="star-1" />
            <circle cx="126.11" cy="606.9" r="0.6" fill="white" className="star-2" />
            <circle cx="115.03" cy="557.59" r="0.6" fill="white" className="star-3" />
            <circle cx="110.44" cy="507.2" r="0.6" fill="white" className="star-4" />
            <circle cx="112.42" cy="456.6" r="0.6" fill="white" className="star-0" />
            <circle cx="120.96" cy="406.63" r="0.6" fill="white" className="star-1" />
            <circle cx="135.91" cy="358.15" r="0.6" fill="white" className="star-2" />
            <circle cx="157.04" cy="311.96" r="0.6" fill="white" className="star-3" />
            <circle cx="184.01" cy="268.87" r="0.6" fill="white" className="star-4" />
            <circle cx="216.36" cy="229.6" r="0.6" fill="white" className="star-0" />
            <circle cx="253.58" cy="194.82" r="0.6" fill="white" className="star-1" />
            <circle cx="295.02" cy="165.13" r="0.6" fill="white" className="star-2" />
            <circle cx="340.01" cy="141.04" r="0.6" fill="white" className="star-3" />
            <circle cx="387.78" cy="122.97" r="0.6" fill="white" className="star-4" />
            <circle cx="437.55" cy="111.23" r="0.6" fill="white" className="star-0" />
            <circle cx="488.46" cy="106.04" r="0.6" fill="white" className="star-1" />
            <circle cx="539.67" cy="107.5" r="0.6" fill="white" className="star-2" />
            <circle cx="590.3" cy="115.59" r="0.6" fill="white" className="star-3" />
            <circle cx="639.5" cy="130.19" r="0.6" fill="white" className="star-4" />
            <circle cx="686.44" cy="151.06" r="0.6" fill="white" className="star-0" />
            <circle cx="730.32" cy="177.87" r="0.6" fill="white" className="star-1" />
            <circle cx="770.39" cy="210.17" r="0.6" fill="white" className="star-2" />
            <circle cx="805.97" cy="247.43" r="0.6" fill="white" className="star-3" />
            <circle cx="836.45" cy="289.03" r="0.6" fill="white" className="star-4" />
            <circle cx="861.3" cy="334.27" r="0.6" fill="white" className="star-0" />
            <circle cx="880.1" cy="382.39" r="0.6" fill="white" className="star-1" />
            <circle cx="892.5" cy="432.59" r="0.6" fill="white" className="star-2" />
            <circle cx="898.3" cy="484.03" r="0.6" fill="white" className="star-3" />
            <circle cx="897.39" cy="535.83" r="0.6" fill="white" className="star-4" />
            <circle cx="889.76" cy="587.13" r="0.6" fill="white" className="star-0" />
            <circle cx="875.52" cy="637.04" r="0.6" fill="white" className="star-1" />
            <circle cx="854.92" cy="684.74" r="0.6" fill="white" className="star-2" />
            <circle cx="828.29" cy="729.41" r="0.6" fill="white" className="star-3" />
            <circle cx="796.05" cy="770.28" r="0.6" fill="white" className="star-4" />
            <circle cx="758.76" cy="806.67" r="0.6" fill="white" className="star-0" />
            <circle cx="717.02" cy="837.94" r="0.6" fill="white" className="star-1" />
            <circle cx="671.55" cy="863.56" r="0.6" fill="white" className="star-2" />
            <circle cx="623.08" cy="883.09" r="0.6" fill="white" className="star-3" />
            <circle cx="572.45" cy="896.18" r="0.6" fill="white" className="star-4" />
            <circle cx="520.5" cy="902.6" r="0.6" fill="white" className="star-0" />
            <circle cx="468.11" cy="902.24" r="0.6" fill="white" className="star-1" />
            <circle cx="416.15" cy="895.08" r="0.6" fill="white" className="star-2" />
            <circle cx="365.52" cy="881.23" r="0.6" fill="white" className="star-3" />
            <circle cx="317.07" cy="860.91" r="0.6" fill="white" className="star-4" />
            <circle cx="271.61" cy="834.46" r="0.6" fill="white" className="star-0" />
            <circle cx="229.93" cy="802.31" r="0.6" fill="white" className="star-1" />
            <circle cx="192.74" cy="764.99" r="0.6" fill="white" className="star-2" />
            <circle cx="160.66" cy="723.13" r="0.6" fill="white" className="star-3" />
            <circle cx="134.26" cy="677.42" r="0.6" fill="white" className="star-4" />
            <circle cx="113.99" cy="628.63" r="0.6" fill="white" className="star-0" />
            <circle cx="100.21" cy="577.58" r="0.6" fill="white" className="star-1" />
            <circle cx="93.15" cy="525.12" r="0.6" fill="white" className="star-2" />
            <circle cx="92.95" cy="472.14" r="0.6" fill="white" className="star-3" />
            <circle cx="99.63" cy="419.54" r="0.6" fill="white" className="star-4" />
            <circle cx="113.08" cy="368.19" r="0.6" fill="white" className="star-0" />
            <circle cx="133.1" cy="318.98" r="0.6" fill="white" className="star-1" />
            <circle cx="159.35" cy="272.74" r="0.6" fill="white" className="star-2" />
            <circle cx="191.4" cy="230.25" r="0.6" fill="white" className="star-3" />
            <circle cx="228.73" cy="192.24" r="0.6" fill="white" className="star-4" />
            <circle cx="270.7" cy="159.36" r="0.6" fill="white" className="star-0" />
            <circle cx="316.63" cy="132.17" r="0.6" fill="white" className="star-1" />
            <circle cx="365.74" cy="111.15" r="0.6" fill="white" className="star-2" />
            <circle cx="417.2" cy="96.66" r="0.6" fill="white" className="star-3" />
            <circle cx="470.16" cy="88.96" r="0.6" fill="white" className="star-4" />
            <circle cx="523.72" cy="88.18" r="0.6" fill="white" className="star-0" />
            <circle cx="576.98" cy="94.36" r="0.6" fill="white" className="star-1" />
            <circle cx="629.03" cy="107.41" r="0.6" fill="white" className="star-2" />
            <circle cx="678.99" cy="127.11" r="0.6" fill="white" className="star-3" />
            <circle cx="726.03" cy="153.15" r="0.6" fill="white" className="star-4" />
            <circle cx="769.33" cy="185.09" r="0.6" fill="white" className="star-0" />
            <circle cx="808.16" cy="222.41" r="0.6" fill="white" className="star-1" />
            <circle cx="841.85" cy="264.49" r="0.6" fill="white" className="star-2" />
            <circle cx="869.83" cy="310.62" r="0.6" fill="white" className="star-3" />
            <circle cx="891.61" cy="360.03" r="0.6" fill="white" className="star-4" />
            <circle cx="906.82" cy="411.9" r="0.6" fill="white" className="star-0" />
            <circle cx="915.18" cy="465.35" r="0.6" fill="white" className="star-1" />
            <circle cx="916.54" cy="519.48" r="0.6" fill="white" className="star-2" />
            <circle cx="910.87" cy="573.38" r="0.6" fill="white" className="star-3" />
            <circle cx="898.25" cy="626.14" r="0.6" fill="white" className="star-4" />
            <circle cx="878.88" cy="676.86" r="0.6" fill="white" className="star-0" />
            <circle cx="853.07" cy="724.69" r="0.6" fill="white" className="star-1" />
            <circle cx="821.25" cy="768.8" r="0.6" fill="white" className="star-2" />
            <circle cx="783.95" cy="808.45" r="0.6" fill="white" className="star-3" />
            <circle cx="741.78" cy="842.97" r="0.6" fill="white" className="star-4" />
            <circle cx="695.46" cy="871.75" r="0.6" fill="white" className="star-0" />
            <circle cx="645.75" cy="894.3" r="0.6" fill="white" className="star-1" />
            <circle cx="593.49" cy="910.23" r="0.6" fill="white" className="star-2" />
            <circle cx="539.55" cy="919.26" r="0.6" fill="white" className="star-3" />
            <circle cx="484.85" cy="921.23" r="0.6" fill="white" className="star-4" />
            <circle cx="430.31" cy="916.08" r="0.6" fill="white" className="star-0" />
            <circle cx="376.85" cy="903.89" r="0.6" fill="white" className="star-1" />
            <circle cx="325.38" cy="884.86" r="0.6" fill="white" className="star-2" />
            <circle cx="276.76" cy="859.3" r="0.6" fill="white" className="star-3" />
            <circle cx="231.83" cy="827.62" r="0.6" fill="white" className="star-4" />
            <circle cx="191.35" cy="790.35" r="0.6" fill="white" className="star-0" />
            <circle cx="156.01" cy="748.1" r="0.6" fill="white" className="star-1" />
            <circle cx="126.42" cy="701.6" r="0.6" fill="white" className="star-2" />
            <circle cx="103.09" cy="651.6" r="0.6" fill="white" className="star-3" />
            <circle cx="86.42" cy="598.96" r="0.6" fill="white" className="star-4" />
            <circle cx="76.71" cy="544.55" r="0.6" fill="white" className="star-0" />
            <circle cx="74.13" cy="489.29" r="0.6" fill="white" className="star-1" />
            <circle cx="78.75" cy="434.11" r="0.6" fill="white" className="star-2" />
            <circle cx="90.48" cy="379.96" r="0.6" fill="white" className="star-3" />
            <circle cx="109.16" cy="327.73" r="0.6" fill="white" className="star-4" />
            <circle cx="134.47" cy="278.32" r="0.6" fill="white" className="star-0" />
            <circle cx="165.99" cy="232.57" r="0.6" fill="white" className="star-1" />
            <circle cx="203.22" cy="191.26" r="0.6" fill="white" className="star-2" />
            <circle cx="245.52" cy="155.09" r="0.6" fill="white" className="star-3" />
            <circle cx="292.2" cy="124.69" r="0.6" fill="white" className="star-4" />
            <circle cx="342.47" cy="100.57" r="0.6" fill="white" className="star-0" />
            <circle cx="395.49" cy="83.15" r="0.6" fill="white" className="star-1" />
            <circle cx="450.37" cy="72.75" r="0.6" fill="white" className="star-2" />
            <circle cx="506.18" cy="69.54" r="0.6" fill="white" className="star-3" />
            <circle cx="561.98" cy="73.61" r="0.6" fill="white" className="star-4" />
            <circle cx="616.83" cy="84.88" r="0.6" fill="white" className="star-0" />
            <circle cx="669.81" cy="103.18" r="0.6" fill="white" className="star-1" />
            <circle cx="720.01" cy="128.22" r="0.6" fill="white" className="star-2" />
            <circle cx="766.58" cy="159.58" r="0.6" fill="white" className="star-3" />
            <circle cx="808.73" cy="196.75" r="0.6" fill="white" className="star-4" />
            <circle cx="845.73" cy="239.11" r="0.6" fill="white" className="star-0" />
            <circle cx="876.96" cy="285.94" r="0.6" fill="white" className="star-1" />
            <circle cx="901.88" cy="336.47" r="0.6" fill="white" className="star-2" />
            <circle cx="920.05" cy="389.85" r="0.6" fill="white" className="star-3" />
            <circle cx="931.16" cy="445.19" r="0.6" fill="white" className="star-4" />
            <circle cx="935.0" cy="501.55" r="0.6" fill="white" className="star-0" />
            <circle cx="931.5" cy="557.97" r="0.6" fill="white" className="star-1" />
            <circle cx="920.7" cy="613.52" r="0.6" fill="white" className="star-2" />
            <circle cx="902.78" cy="667.24" r="0.6" fill="white" className="star-3" />
            <circle cx="878.03" cy="718.23" r="0.6" fill="white" className="star-4" />
            <circle cx="846.85" cy="765.62" r="0.6" fill="white" className="star-0" />
            <circle cx="809.75" cy="808.61" r="0.6" fill="white" className="star-1" />
            <circle cx="767.36" cy="846.46" r="0.6" fill="white" className="star-2" />
            <circle cx="720.38" cy="878.52" r="0.6" fill="white" className="star-3" />
            <circle cx="669.6" cy="904.24" r="0.6" fill="white" className="star-4" />
            <circle cx="615.86" cy="923.18" r="0.6" fill="white" className="star-0" />
            <circle cx="560.08" cy="935.0" r="0.6" fill="white" className="star-1" />
            <circle cx="503.18" cy="939.49" r="0.6" fill="white" className="star-2" />
            <circle cx="446.14" cy="936.56" r="0.6" fill="white" className="star-3" />
            <circle cx="389.91" cy="926.26" r="0.6" fill="white" className="star-4" />
            <circle cx="335.44" cy="908.74" r="0.6" fill="white" className="star-0" />
            <circle cx="283.65" cy="884.29" r="0.6" fill="white" className="star-1" />
            <circle cx="235.44" cy="853.3" r="0.6" fill="white" className="star-2" />
            <circle cx="191.61" cy="816.29" r="0.6" fill="white" className="star-3" />
            <circle cx="152.92" cy="773.87" r="0.6" fill="white" className="star-4" />
            <circle cx="120.02" cy="726.76" r="0.6" fill="white" className="star-0" />
            <circle cx="93.48" cy="675.74" r="0.6" fill="white" className="star-1" />
            <circle cx="73.77" cy="621.66" r="0.6" fill="white" className="star-2" />
            <circle cx="61.23" cy="565.43" r="0.6" fill="white" className="star-3" />
            <circle cx="56.07" cy="508.01" r="0.6" fill="white" className="star-4" />
            <circle cx="58.41" cy="450.35" r="0.6" fill="white" className="star-0" />
            <circle cx="68.21" cy="393.44" r="0.6" fill="white" className="star-1" />
            <circle cx="85.31" cy="338.22" r="0.6" fill="white" className="star-2" />
            <circle cx="109.46" cy="285.65" r="0.6" fill="white" className="star-3" />
            <circle cx="140.24" cy="236.61" r="0.6" fill="white" className="star-4" />
            <circle cx="177.15" cy="191.94" r="0.6" fill="white" className="star-0" />
            <circle cx="219.57" cy="152.39" r="0.6" fill="white" className="star-1" />
            <circle cx="266.8" cy="118.65" r="0.6" fill="white" className="star-2" />
            <circle cx="318.05" cy="91.29" r="0.6" fill="white" className="star-3" />
            <circle cx="372.46" cy="70.8" r="0.6" fill="white" className="star-4" />
            <circle cx="429.12" cy="57.52" r="0.6" fill="white" className="star-0" />
            <circle cx="487.07" cy="51.69" r="0.6" fill="white" className="star-1" />
            <circle cx="545.33" cy="53.42" r="0.6" fill="white" className="star-2" />
            <circle cx="602.93" cy="62.7" r="0.6" fill="white" className="star-3" />
            <circle cx="658.88" cy="79.38" r="0.6" fill="white" className="star-4" />
          </svg>
        </div>

        {/* Stage 3+: Geometric Aura Lattice Extraction */}
        <div className={`absolute inset-0 transition-all duration-[5000ms] ease-in-out ${
          stage < 3 ? "opacity-0 scale-50 rotate-y-[120deg] blur-xl" :
          stage === 3 ? "opacity-60 scale-100 rotate-y-0 blur-none" :
          "opacity-0 scale-[2.5] blur-[100px] rotate-y-[-45deg]"
        }`}>
          <svg viewBox="0 0 1000 1000" className="w-full h-full preserve-3d">
            <defs>
              <linearGradient id="aura-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--aura)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--aura)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--aura)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M 540.0,500.0 L 540.6,505.4 L 540.5,510.9 L 539.6,516.4 L 537.7,521.8 L 535.1,526.9 L 531.6,531.6 L 527.3,535.6 L 522.5,539.0 L 517.2,541.5 L 511.5,543.0 L 505.7,543.7 L 500.0,543.4 L 494.4,542.2 L 489.2,540.3 L 484.4,537.6 L 480.1,534.4 L 476.4,530.7 L 473.3,526.7 L 470.7,522.5 L 468.6,518.1 L 467.1,513.6 L 466.0,509.1 L 465.3,504.6 L 465.0,500.0 L 465.1,495.4 L 465.6,490.8 L 466.6,486.2 L 468.1,481.6 L 470.1,477.1 L 472.7,472.7 L 475.9,468.6 L 479.7,464.9 L 484.1,461.6 L 489.0,459.0 L 494.4,457.1 L 500.0,456.0 L 505.8,455.9 L 511.6,456.7 L 517.2,458.4 L 522.5,461.1 L 527.2,464.5 L 531.3,468.7 L 534.6,473.4 L 537.2,478.5 L 538.9,483.9 L 539.7,489.4 L 539.8,494.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.0s", opacity: 0.3 }} />
            <path d="M 567.4,500.0 L 567.6,508.9 L 566.6,517.8 L 564.2,526.6 L 560.5,534.9 L 555.5,542.6 L 549.5,549.5 L 542.4,555.3 L 534.7,560.0 L 526.3,563.5 L 517.6,565.7 L 508.8,566.6 L 500.0,566.2 L 491.5,564.7 L 483.4,562.0 L 475.8,558.4 L 468.8,554.0 L 462.5,548.8 L 456.9,543.1 L 452.1,536.8 L 447.9,530.1 L 444.6,523.0 L 442.0,515.6 L 440.1,507.9 L 439.2,500.0 L 439.1,492.0 L 439.9,483.9 L 441.7,475.8 L 444.5,468.0 L 448.4,460.4 L 453.3,453.3 L 459.2,446.8 L 466.1,441.2 L 473.7,436.6 L 482.1,433.1 L 490.9,430.9 L 500.0,430.1 L 509.1,430.6 L 518.1,432.5 L 526.6,435.8 L 534.5,440.3 L 541.6,445.8 L 547.7,452.3 L 552.8,459.5 L 556.8,467.2 L 559.7,475.3 L 561.5,483.5 L 562.2,491.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.08s", opacity: 0.298 }} />
            <path d="M 594.2,500.0 L 593.9,512.4 L 591.7,524.6 L 587.8,536.4 L 582.2,547.4 L 575.0,557.6 L 566.5,566.5 L 556.8,574.1 L 546.3,580.2 L 535.1,584.7 L 523.5,587.6 L 511.7,588.9 L 500.0,588.7 L 488.5,587.0 L 477.5,584.0 L 467.0,579.7 L 457.2,574.2 L 448.1,567.6 L 439.9,560.1 L 432.5,551.8 L 426.2,542.6 L 420.9,532.8 L 416.8,522.3 L 413.9,511.3 L 412.3,500.0 L 412.2,488.4 L 413.5,476.8 L 416.3,465.3 L 420.7,454.2 L 426.6,443.7 L 434.0,434.0 L 442.8,425.4 L 452.8,418.2 L 463.7,412.4 L 475.4,408.2 L 487.6,405.9 L 500.0,405.3 L 512.3,406.5 L 524.2,409.5 L 535.6,414.1 L 546.0,420.3 L 555.5,427.7 L 563.7,436.3 L 570.7,445.7 L 576.4,455.9 L 580.6,466.6 L 583.6,477.6 L 585.1,488.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.16s", opacity: 0.296 }} />
            <path d="M 620.0,500.0 L 618.9,515.7 L 615.7,531.0 L 610.2,545.7 L 602.8,559.4 L 593.6,571.8 L 582.8,582.8 L 570.7,592.2 L 557.6,599.8 L 543.7,605.5 L 529.3,609.4 L 514.7,611.4 L 500.0,611.6 L 485.5,610.0 L 471.4,606.7 L 457.9,601.7 L 445.0,595.3 L 433.0,587.3 L 422.0,578.0 L 412.1,567.5 L 403.5,555.7 L 396.3,543.0 L 390.7,529.3 L 386.9,514.9 L 384.9,500.0 L 384.9,484.8 L 387.0,469.7 L 391.1,454.9 L 397.3,440.7 L 405.4,427.4 L 415.4,415.4 L 427.0,404.8 L 440.0,396.1 L 454.1,389.3 L 469.1,384.6 L 484.5,382.0 L 500.0,381.7 L 515.3,383.5 L 530.2,387.4 L 544.2,393.2 L 557.3,400.7 L 569.2,409.8 L 579.7,420.3 L 588.8,431.9 L 596.3,444.4 L 602.2,457.7 L 606.5,471.5 L 609.1,485.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.24s", opacity: 0.294 }} />
            <path d="M 644.5,500.0 L 642.8,518.8 L 638.5,537.1 L 631.7,554.6 L 622.7,570.8 L 611.6,585.7 L 598.8,598.8 L 584.4,610.1 L 568.9,619.3 L 552.4,626.5 L 535.3,631.6 L 517.7,634.5 L 500.0,635.2 L 482.4,633.9 L 465.1,630.4 L 448.3,624.9 L 432.2,617.4 L 417.1,608.0 L 403.2,596.8 L 390.8,583.8 L 380.0,569.3 L 371.0,553.4 L 364.2,536.4 L 359.7,518.5 L 357.5,500.0 L 357.9,481.3 L 360.9,462.7 L 366.5,444.7 L 374.6,427.6 L 385.0,411.7 L 397.5,397.5 L 411.9,385.2 L 427.9,375.1 L 445.0,367.3 L 463.0,361.9 L 481.5,359.2 L 500.0,358.9 L 518.3,361.1 L 536.0,365.6 L 552.9,372.3 L 568.6,381.1 L 583.1,391.7 L 596.1,403.9 L 607.4,417.6 L 617.0,432.5 L 624.7,448.3 L 630.5,465.0 L 634.2,482.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.32s", opacity: 0.292 }} />
            <path d="M 668.0,500.0 L 665.7,521.8 L 660.5,543.0 L 652.6,563.2 L 642.2,582.1 L 629.5,599.4 L 614.8,614.8 L 598.4,628.2 L 580.5,639.4 L 561.4,648.2 L 541.4,654.7 L 520.9,658.6 L 500.0,660.1 L 479.1,659.0 L 458.4,655.4 L 438.2,649.2 L 418.9,640.5 L 400.7,629.4 L 384.0,616.0 L 369.0,600.5 L 356.2,583.0 L 345.7,563.9 L 337.8,543.5 L 332.8,522.0 L 330.7,500.0 L 331.8,477.9 L 335.8,456.0 L 342.9,434.9 L 352.9,415.1 L 365.5,396.8 L 380.5,380.5 L 397.5,366.5 L 416.2,354.9 L 436.2,346.1 L 457.1,340.0 L 478.5,336.8 L 500.0,336.4 L 521.2,338.7 L 541.9,343.6 L 561.7,351.1 L 580.3,360.9 L 597.5,372.9 L 613.2,386.8 L 627.0,402.6 L 638.8,419.9 L 648.4,438.5 L 655.7,458.3 L 660.5,478.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.4s", opacity: 0.29 }} />
            <path d="M 690.7,500.0 L 688.1,524.8 L 682.3,548.8 L 673.5,571.9 L 661.9,593.5 L 647.7,613.4 L 631.3,631.3 L 612.8,647.0 L 592.5,660.2 L 570.8,670.9 L 547.9,678.9 L 524.2,684.0 L 500.0,686.1 L 475.6,685.2 L 451.4,681.3 L 427.8,674.2 L 405.2,664.2 L 384.0,651.2 L 364.5,635.5 L 347.3,617.2 L 332.6,596.6 L 320.8,574.2 L 312.1,550.3 L 306.8,525.4 L 305.0,500.0 L 306.7,474.6 L 311.9,449.6 L 320.5,425.7 L 332.3,403.2 L 346.9,382.6 L 364.2,364.2 L 383.7,348.4 L 404.9,335.3 L 427.6,325.3 L 451.3,318.2 L 475.6,314.3 L 500.0,313.5 L 524.3,315.7 L 548.0,320.9 L 570.8,329.0 L 592.5,339.8 L 612.7,353.1 L 631.1,368.9 L 647.5,386.8 L 661.5,406.7 L 673.1,428.3 L 681.8,451.3 L 687.6,475.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.48s", opacity: 0.288 }} />
            <path d="M 713.2,500.0 L 710.5,527.7 L 704.4,554.8 L 694.9,580.7 L 682.2,605.2 L 666.7,627.9 L 648.5,648.5 L 627.9,666.7 L 605.2,682.2 L 580.7,694.8 L 554.7,704.3 L 527.7,710.4 L 500.0,713.1 L 472.1,712.3 L 444.3,707.8 L 417.3,699.6 L 391.5,687.9 L 367.4,672.9 L 345.4,654.6 L 326.1,633.5 L 309.7,609.8 L 296.8,584.2 L 287.5,556.9 L 282.0,528.7 L 280.5,500.0 L 282.9,471.4 L 289.1,443.5 L 299.1,416.8 L 312.4,391.7 L 328.9,368.7 L 348.2,348.2 L 369.9,330.5 L 393.6,315.8 L 418.9,304.3 L 445.3,296.0 L 472.5,291.2 L 500.0,289.8 L 527.4,291.8 L 554.4,297.1 L 580.5,305.8 L 605.3,317.6 L 628.6,332.5 L 649.8,350.2 L 668.8,370.5 L 685.1,393.2 L 698.3,417.8 L 708.3,444.2 L 714.8,471.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.56s", opacity: 0.286 }} />
            <path d="M 736.2,500.0 L 733.6,530.8 L 727.2,560.9 L 717.1,589.9 L 703.5,617.5 L 686.6,643.2 L 666.6,666.6 L 643.8,687.3 L 618.4,705.1 L 591.0,719.6 L 561.8,730.5 L 531.3,737.5 L 500.0,740.6 L 468.5,739.5 L 437.2,734.2 L 406.9,724.8 L 378.0,711.3 L 351.2,694.0 L 326.9,673.1 L 305.6,649.1 L 287.9,622.5 L 273.9,593.6 L 264.1,563.2 L 258.4,531.8 L 257.1,500.0 L 260.0,468.4 L 267.1,437.6 L 278.2,408.1 L 292.9,380.4 L 311.0,355.0 L 332.2,332.2 L 356.0,312.4 L 382.1,295.7 L 409.9,282.5 L 439.2,272.9 L 469.3,267.0 L 500.0,264.9 L 530.7,266.6 L 561.1,272.2 L 590.5,281.5 L 618.7,294.5 L 645.0,311.0 L 669.1,330.9 L 690.5,353.8 L 708.8,379.4 L 723.7,407.4 L 734.7,437.1 L 741.6,468.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.64s", opacity: 0.284 }} />
            <path d="M 760.1,500.0 L 757.8,533.9 L 751.2,567.3 L 740.6,599.6 L 725.9,630.4 L 707.4,659.2 L 685.4,685.4 L 660.2,708.8 L 632.0,728.7 L 601.4,744.9 L 568.9,757.0 L 534.9,764.7 L 500.0,767.9 L 464.9,766.3 L 430.3,760.1 L 396.8,749.2 L 365.0,733.8 L 335.6,714.2 L 309.2,690.8 L 286.2,664.1 L 267.0,634.5 L 252.1,602.7 L 241.6,569.2 L 235.7,534.8 L 234.4,500.0 L 237.6,465.5 L 245.3,431.8 L 257.3,399.5 L 273.2,369.1 L 292.8,341.0 L 315.7,315.7 L 341.6,293.6 L 370.0,274.8 L 400.5,259.8 L 432.6,248.6 L 466.0,241.6 L 500.0,238.8 L 534.2,240.3 L 568.0,246.2 L 600.9,256.4 L 632.3,270.8 L 661.7,289.2 L 688.5,311.5 L 712.3,337.1 L 732.4,365.8 L 748.5,397.1 L 760.3,430.2 L 767.6,464.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.72s", opacity: 0.282 }} />
            <path d="M 785.2,500.0 L 783.1,537.3 L 776.4,574.1 L 765.0,609.8 L 749.1,643.8 L 729.0,675.7 L 704.8,704.8 L 676.9,730.5 L 645.8,752.5 L 611.9,770.2 L 575.9,783.3 L 538.4,791.5 L 500.0,794.5 L 461.5,792.3 L 423.7,784.9 L 387.1,772.5 L 352.6,755.2 L 320.9,733.5 L 292.3,707.7 L 267.6,678.3 L 247.1,646.0 L 231.0,611.4 L 219.8,575.1 L 213.3,537.7 L 211.8,500.0 L 215.2,462.5 L 223.3,425.8 L 235.9,390.6 L 252.8,357.3 L 273.8,326.4 L 298.5,298.5 L 326.4,273.8 L 357.3,252.8 L 390.6,235.9 L 425.8,223.2 L 462.5,215.1 L 500.0,211.8 L 537.7,213.3 L 575.1,219.7 L 611.4,231.0 L 646.1,247.0 L 678.3,267.6 L 707.7,292.3 L 733.5,320.8 L 755.2,352.6 L 772.5,387.1 L 784.9,423.7 L 792.3,461.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.8s", opacity: 0.27999999999999997 }} />
            <path d="M 811.5,500.0 L 809.6,540.8 L 802.5,581.0 L 790.2,620.2 L 772.9,657.5 L 750.8,692.4 L 724.2,724.2 L 693.5,752.2 L 659.3,776.0 L 622.2,795.0 L 582.7,808.8 L 541.8,817.2 L 500.0,820.0 L 458.3,817.1 L 417.3,808.6 L 377.9,794.7 L 340.8,775.7 L 306.7,751.9 L 276.1,723.9 L 249.6,692.1 L 227.5,657.3 L 210.2,620.0 L 197.9,580.9 L 190.8,540.7 L 188.8,500.0 L 192.1,459.5 L 200.4,419.7 L 213.6,381.4 L 231.5,345.0 L 253.9,311.1 L 280.4,280.4 L 310.6,253.1 L 344.0,229.9 L 380.3,211.1 L 418.8,197.0 L 458.9,188.0 L 500.0,184.3 L 541.3,186.1 L 582.2,193.3 L 621.8,205.9 L 659.5,223.7 L 694.5,246.5 L 726.2,273.8 L 753.9,305.2 L 777.1,340.0 L 795.3,377.7 L 808.4,417.4 L 815.9,458.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.88s", opacity: 0.27799999999999997 }} />
            <path d="M 838.6,500.0 L 836.7,544.3 L 829.0,588.1 L 815.6,630.7 L 796.6,671.2 L 772.3,709.0 L 743.2,743.2 L 709.7,773.3 L 672.4,798.6 L 632.0,818.7 L 589.3,833.2 L 545.0,841.8 L 500.0,844.3 L 455.1,840.7 L 411.2,831.2 L 369.1,816.0 L 329.4,795.4 L 292.9,769.8 L 260.2,739.8 L 231.7,705.9 L 207.9,668.6 L 189.1,628.8 L 175.6,586.9 L 167.5,543.8 L 164.9,500.0 L 167.9,456.3 L 176.3,413.3 L 190.1,371.6 L 209.1,332.1 L 233.0,295.1 L 261.5,261.5 L 294.1,231.7 L 330.4,206.3 L 369.8,185.7 L 411.7,170.5 L 455.3,160.8 L 500.0,157.0 L 544.9,159.2 L 589.1,167.4 L 631.9,181.5 L 672.5,201.3 L 710.0,226.3 L 743.8,256.2 L 773.3,290.3 L 797.9,328.0 L 817.1,368.6 L 830.8,411.4 L 838.6,455.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "0.96s", opacity: 0.27599999999999997 }} />
            <path d="M 866.1,500.0 L 863.9,547.9 L 855.4,595.2 L 840.6,641.1 L 819.8,684.6 L 793.3,725.1 L 761.6,761.6 L 725.2,793.5 L 684.9,820.3 L 641.4,841.4 L 595.5,856.4 L 548.1,865.2 L 500.0,867.5 L 452.1,863.5 L 405.4,853.2 L 360.5,836.9 L 318.2,814.9 L 279.2,787.8 L 244.1,755.9 L 213.5,719.9 L 187.7,680.3 L 167.2,637.8 L 152.2,593.2 L 143.1,547.0 L 139.8,500.0 L 142.5,452.9 L 151.1,406.5 L 165.6,361.5 L 185.8,318.6 L 211.5,278.6 L 242.1,242.1 L 277.4,209.9 L 316.7,182.5 L 359.3,160.4 L 404.7,144.2 L 451.8,134.1 L 500.0,130.5 L 548.3,133.3 L 595.8,142.6 L 641.6,158.2 L 684.8,179.9 L 724.8,207.1 L 760.6,239.4 L 791.8,276.1 L 817.8,316.5 L 838.2,359.9 L 852.6,405.5 L 860.9,452.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.04s", opacity: 0.27399999999999997 }} />
            <path d="M 893.3,500.0 L 890.6,551.4 L 881.1,602.1 L 864.8,651.1 L 842.1,697.5 L 813.3,740.4 L 779.1,779.1 L 740.0,812.8 L 696.8,840.9 L 650.4,863.0 L 601.5,878.7 L 551.1,887.8 L 500.0,890.1 L 449.2,885.8 L 399.5,874.9 L 351.8,857.8 L 306.7,834.7 L 265.1,806.1 L 227.5,772.5 L 194.5,734.4 L 166.6,692.5 L 144.2,647.4 L 127.7,599.7 L 117.4,550.4 L 113.5,500.0 L 116.0,449.4 L 125.0,399.5 L 140.5,351.1 L 162.1,304.9 L 189.7,261.9 L 222.7,222.7 L 260.8,188.2 L 303.1,159.0 L 349.1,135.7 L 397.8,118.7 L 448.4,108.4 L 500.0,105.0 L 551.5,108.5 L 602.1,119.0 L 650.8,136.0 L 696.6,159.4 L 738.9,188.7 L 776.8,223.2 L 809.8,262.3 L 837.4,305.2 L 859.0,351.3 L 874.4,399.7 L 883.5,449.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.12s", opacity: 0.27199999999999996 }} />
            <path d="M 919.7,500.0 L 916.3,554.8 L 905.7,608.7 L 887.9,660.7 L 863.3,709.8 L 832.4,755.1 L 795.8,795.8 L 754.2,831.2 L 708.3,860.8 L 659.1,884.0 L 607.3,900.5 L 554.0,910.1 L 500.0,912.7 L 446.2,908.4 L 393.6,897.2 L 342.9,879.3 L 294.9,855.3 L 250.4,825.3 L 210.1,789.9 L 174.5,749.7 L 144.4,705.3 L 120.1,657.4 L 102.1,606.6 L 90.8,553.9 L 86.3,500.0 L 88.9,445.9 L 98.5,392.4 L 115.1,340.6 L 138.4,291.2 L 168.1,245.3 L 203.7,203.7 L 244.6,167.2 L 290.1,136.4 L 339.3,112.0 L 391.3,94.4 L 445.2,83.9 L 500.0,80.8 L 554.6,85.0 L 608.1,96.4 L 659.6,114.8 L 708.0,139.7 L 752.7,170.7 L 792.8,207.2 L 827.7,248.5 L 857.0,293.9 L 880.1,342.5 L 896.8,393.7 L 906.8,446.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.2s", opacity: 0.27 }} />
            <path d="M 944.9,500.0 L 940.9,558.0 L 929.1,615.0 L 909.9,669.8 L 883.6,721.5 L 850.7,769.1 L 811.9,811.9 L 767.9,849.2 L 719.6,880.3 L 667.7,904.8 L 613.2,922.4 L 557.0,932.8 L 500.0,935.9 L 443.2,931.7 L 387.4,920.3 L 333.5,901.9 L 282.4,876.8 L 234.9,845.4 L 191.8,808.2 L 153.7,765.7 L 121.3,718.7 L 95.1,667.7 L 75.8,613.7 L 63.6,557.5 L 58.8,500.0 L 61.7,442.3 L 72.1,385.4 L 90.1,330.2 L 115.2,277.9 L 147.2,229.3 L 185.4,185.4 L 229.1,147.0 L 277.6,114.8 L 329.9,89.4 L 385.1,71.2 L 442.1,60.5 L 500.0,57.6 L 557.6,62.3 L 614.0,74.5 L 668.2,93.9 L 719.3,120.2 L 766.4,152.8 L 808.9,191.1 L 846.0,234.5 L 877.2,282.2 L 902.1,333.5 L 920.2,387.4 L 931.3,443.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.28s", opacity: 0.268 }} />
            <path d="M 969.0,500.0 L 964.3,561.1 L 951.6,621.0 L 931.1,678.6 L 903.2,732.8 L 868.6,782.8 L 827.8,827.8 L 781.7,867.1 L 730.9,900.0 L 676.5,926.1 L 619.2,944.9 L 560.1,956.3 L 500.0,960.0 L 440.0,956.1 L 380.9,944.5 L 323.7,925.6 L 269.4,899.4 L 218.8,866.5 L 172.8,827.2 L 132.1,782.3 L 97.6,732.3 L 69.8,678.2 L 49.3,620.8 L 36.5,561.0 L 31.7,500.0 L 35.0,438.8 L 46.5,378.5 L 65.9,320.2 L 93.0,265.0 L 127.2,213.9 L 167.9,167.9 L 214.4,127.7 L 265.7,94.2 L 321.0,67.8 L 379.1,48.9 L 439.2,38.0 L 500.0,35.0 L 560.6,39.9 L 619.9,52.7 L 676.9,73.0 L 730.7,100.4 L 780.5,134.4 L 825.5,174.5 L 865.0,219.9 L 898.4,270.0 L 925.1,323.9 L 944.7,380.8 L 957.0,439.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.36s", opacity: 0.266 }} />
            <path d="M 992.1,500.0 L 986.9,564.1 L 973.4,626.9 L 951.9,687.2 L 922.8,744.1 L 886.6,796.6 L 844.0,844.0 L 795.8,885.5 L 742.7,920.4 L 685.6,948.2 L 625.5,968.5 L 563.3,981.0 L 500.0,985.4 L 436.6,981.7 L 374.1,970.0 L 313.5,950.2 L 255.9,922.8 L 202.2,888.1 L 153.4,846.6 L 110.3,799.0 L 73.8,746.1 L 44.6,688.6 L 23.1,627.8 L 9.9,564.5 L 5.3,500.0 L 9.3,435.4 L 21.9,371.9 L 42.8,310.6 L 71.8,252.8 L 108.1,199.3 L 151.2,151.2 L 200.2,109.3 L 254.2,74.3 L 312.3,46.8 L 373.3,27.1 L 436.2,15.6 L 500.0,12.4 L 563.5,17.4 L 625.8,30.5 L 685.8,51.4 L 742.6,79.8 L 795.3,115.2 L 843.0,157.0 L 885.0,204.6 L 920.6,257.2 L 949.2,313.9 L 970.4,374.0 L 983.7,436.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.44s", opacity: 0.264 }} />
            <path d="M 1014.6,500.0 L 1009.2,567.0 L 995.2,632.7 L 972.9,695.9 L 942.7,755.6 L 905.1,810.8 L 860.8,860.8 L 810.5,904.6 L 755.0,941.7 L 695.3,971.4 L 632.2,993.2 L 566.7,1006.8 L 500.0,1011.9 L 433.1,1008.4 L 367.0,996.2 L 303.0,975.5 L 242.2,946.6 L 185.5,909.9 L 134.0,866.0 L 88.8,815.6 L 50.5,759.5 L 20.0,698.8 L -2.1,634.5 L -15.5,567.9 L -19.9,500.0 L -15.2,432.2 L -1.5,365.6 L 20.9,301.5 L 51.5,241.1 L 89.8,185.3 L 135.1,135.1 L 186.5,91.4 L 243.0,54.8 L 303.6,26.0 L 367.4,5.2 L 433.2,-7.1 L 500.0,-10.8 L 566.6,-6.0 L 632.0,7.3 L 695.2,28.8 L 755.1,58.2 L 810.7,95.0 L 861.3,138.7 L 905.9,188.6 L 943.7,243.8 L 974.2,303.6 L 996.7,366.9 L 1010.8,432.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.52s", opacity: 0.262 }} />
            <path d="M 1037.3,500.0 L 1031.9,570.0 L 1017.6,638.7 L 994.6,704.9 L 963.4,767.5 L 924.4,825.7 L 878.4,878.4 L 825.9,924.8 L 767.9,964.1 L 705.3,995.7 L 639.1,1019.0 L 570.3,1033.6 L 500.0,1039.2 L 429.5,1035.5 L 359.9,1022.7 L 292.5,1000.8 L 228.5,970.2 L 169.0,931.3 L 115.1,884.9 L 67.8,831.6 L 28.1,772.5 L -3.5,708.6 L -26.3,641.0 L -39.8,571.1 L -43.9,500.0 L -38.6,429.1 L -23.9,359.6 L -0.3,292.8 L 31.9,229.7 L 72.0,171.5 L 119.2,119.2 L 172.7,73.5 L 231.6,35.1 L 294.8,4.7 L 361.4,-17.3 L 430.1,-30.6 L 500.0,-35.0 L 569.8,-30.5 L 638.5,-17.0 L 705.0,5.1 L 768.1,35.6 L 826.9,74.0 L 880.3,119.7 L 927.4,172.0 L 967.4,230.1 L 999.6,293.1 L 1023.3,359.8 L 1038.0,429.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.6s", opacity: 0.26 }} />
            <path d="M 1060.6,500.0 L 1055.4,573.1 L 1040.9,644.9 L 1017.4,714.3 L 985.2,780.1 L 944.8,841.3 L 896.8,896.8 L 842.1,945.8 L 781.4,987.4 L 715.7,1020.8 L 646.1,1045.4 L 573.8,1060.8 L 500.0,1066.6 L 425.9,1062.7 L 352.9,1049.0 L 282.2,1025.7 L 215.2,993.2 L 153.1,952.1 L 97.0,903.0 L 47.8,847.0 L 6.6,784.8 L -25.9,717.8 L -49.2,647.2 L -63.0,574.1 L -67.0,500.0 L -61.2,426.1 L -45.8,353.8 L -21.1,284.1 L 12.4,218.5 L 54.0,157.7 L 103.0,103.0 L 158.6,55.1 L 219.8,14.7 L 285.7,-17.4 L 355.1,-40.9 L 426.9,-55.3 L 500.0,-60.4 L 573.2,-56.1 L 645.4,-42.5 L 715.2,-19.6 L 781.6,12.2 L 843.5,52.3 L 899.7,100.3 L 949.2,155.3 L 991.2,216.4 L 1024.8,282.6 L 1049.4,352.8 L 1064.5,425.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.68s", opacity: 0.258 }} />
            <path d="M 1085.0,500.0 L 1080.1,576.4 L 1065.5,651.5 L 1041.3,724.2 L 1008.0,793.3 L 966.0,857.5 L 915.9,915.9 L 858.7,967.4 L 795.1,1011.1 L 726.2,1046.2 L 653.2,1071.9 L 577.4,1087.9 L 500.0,1093.7 L 422.4,1089.2 L 346.1,1074.5 L 272.3,1049.7 L 202.5,1015.3 L 137.9,971.9 L 79.6,920.4 L 28.8,861.6 L -13.8,796.6 L -47.3,726.7 L -71.4,653.1 L -85.5,577.1 L -89.5,500.0 L -83.5,423.2 L -67.6,347.9 L -42.1,275.4 L -7.6,206.9 L 35.4,143.5 L 86.2,86.2 L 143.9,35.9 L 207.5,-6.7 L 276.0,-40.7 L 348.4,-65.7 L 423.5,-81.2 L 500.0,-87.0 L 576.7,-82.8 L 652.4,-68.7 L 725.7,-44.9 L 795.4,-11.6 L 860.2,30.6 L 919.0,81.0 L 970.8,138.8 L 1014.5,203.0 L 1049.3,272.5 L 1074.6,346.0 L 1089.9,422.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.76s", opacity: 0.256 }} />
            <path d="M 1110.6,500.0 L 1106.0,579.8 L 1091.1,658.4 L 1066.1,734.5 L 1031.5,806.8 L 987.6,874.2 L 935.3,935.3 L 875.4,989.2 L 808.8,1034.8 L 736.6,1071.3 L 660.2,1097.9 L 580.9,1114.2 L 500.0,1119.9 L 419.1,1114.7 L 339.5,1098.8 L 262.9,1072.5 L 190.4,1036.3 L 123.4,990.8 L 63.1,936.9 L 10.5,875.6 L -33.5,808.0 L -68.2,735.4 L -93.1,658.9 L -107.8,580.0 L -112.2,500.0 L -106.2,420.2 L -90.0,341.9 L -63.9,266.4 L -28.3,195.0 L 16.1,128.7 L 68.6,68.6 L 128.4,15.7 L 194.5,-29.1 L 266.0,-65.0 L 341.5,-91.5 L 419.9,-108.0 L 500.0,-114.3 L 580.3,-110.0 L 659.5,-95.2 L 736.2,-70.2 L 809.0,-35.2 L 876.7,9.1 L 937.9,62.1 L 991.7,122.7 L 1036.9,190.0 L 1072.8,262.7 L 1098.7,339.6 L 1114.1,419.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.84s", opacity: 0.254 }} />
            <path d="M 1137.3,500.0 L 1132.7,583.3 L 1117.4,665.4 L 1091.4,745.0 L 1055.3,820.6 L 1009.4,890.9 L 954.6,954.6 L 891.9,1010.7 L 822.1,1058.0 L 746.7,1095.6 L 666.9,1123.0 L 584.2,1139.5 L 500.0,1144.8 L 415.9,1139.0 L 333.3,1122.0 L 253.8,1094.3 L 178.8,1056.4 L 109.5,1008.9 L 47.1,952.9 L -7.4,889.3 L -53.0,819.3 L -89.1,744.0 L -115.1,664.8 L -130.7,583.0 L -135.6,500.0 L -129.8,417.1 L -113.4,335.6 L -86.7,257.0 L -50.1,182.4 L -4.3,113.0 L 50.1,50.1 L 112.2,-5.3 L 181.1,-52.4 L 255.6,-90.1 L 334.4,-118.0 L 416.4,-135.3 L 500.0,-141.7 L 583.9,-137.1 L 666.5,-121.5 L 746.5,-95.0 L 822.3,-58.2 L 892.6,-11.6 L 956.1,43.9 L 1011.6,107.4 L 1058.3,177.7 L 1095.1,253.5 L 1121.6,333.4 L 1137.3,416.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "1.92s", opacity: 0.252 }} />
            <path d="M 1164.7,500.0 L 1160.0,586.9 L 1143.9,672.5 L 1116.7,755.5 L 1078.8,834.2 L 1030.8,907.3 L 973.4,973.4 L 907.8,1031.4 L 835.0,1080.2 L 756.4,1118.9 L 673.3,1146.9 L 587.4,1163.5 L 500.0,1168.6 L 412.8,1162.1 L 327.4,1144.3 L 245.1,1115.3 L 167.5,1075.9 L 95.8,1026.8 L 31.1,968.9 L -25.4,903.1 L -72.8,830.7 L -110.5,752.9 L -137.9,670.9 L -154.4,586.2 L -160.0,500.0 L -154.5,413.8 L -137.9,329.1 L -110.6,247.1 L -73.0,169.2 L -25.5,96.8 L 31.0,31.0 L 95.6,-27.0 L 167.4,-76.1 L 245.0,-115.5 L 327.3,-144.4 L 412.8,-162.3 L 500.0,-168.8 L 587.4,-163.6 L 673.3,-146.9 L 756.4,-119.0 L 835.0,-80.2 L 907.8,-31.4 L 973.4,26.6 L 1030.7,92.8 L 1078.7,165.9 L 1116.6,244.6 L 1143.7,327.5 L 1159.8,413.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.0s", opacity: 0.25 }} />
            <path d="M 1192.1,500.0 L 1187.0,590.4 L 1170.1,679.5 L 1141.4,765.7 L 1101.6,847.4 L 1051.3,923.1 L 991.4,991.4 L 923.0,1051.2 L 847.2,1101.4 L 765.6,1141.1 L 679.4,1169.6 L 590.4,1186.5 L 500.0,1191.5 L 409.9,1184.6 L 321.5,1166.0 L 236.5,1136.1 L 156.2,1095.5 L 81.9,1044.9 L 14.8,985.2 L -43.9,917.3 L -93.4,842.6 L -132.9,762.1 L -161.7,677.3 L -179.4,589.4 L -185.7,500.0 L -180.4,410.4 L -163.6,322.2 L -135.5,236.8 L -96.5,155.6 L -47.2,80.1 L 11.6,11.6 L 78.9,-48.8 L 153.7,-99.8 L 234.6,-140.6 L 320.4,-170.4 L 409.3,-188.6 L 500.0,-194.9 L 590.7,-189.1 L 679.9,-171.2 L 765.8,-141.8 L 847.1,-101.2 L 922.2,-50.2 L 989.9,10.1 L 1048.9,78.8 L 1098.4,154.5 L 1137.4,236.0 L 1165.5,321.7 L 1182.1,410.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.08s", opacity: 0.248 }} />
            <path d="M 1219.0,500.0 L 1213.4,593.9 L 1195.3,686.3 L 1165.2,775.5 L 1123.5,860.0 L 1071.0,938.1 L 1008.6,1008.6 L 937.5,1070.1 L 858.9,1121.7 L 774.4,1162.4 L 685.3,1191.6 L 593.3,1208.9 L 500.0,1214.0 L 406.9,1207.0 L 315.7,1187.9 L 227.7,1157.3 L 144.6,1115.6 L 67.6,1063.6 L -2.1,1002.1 L -63.3,932.2 L -115.0,855.1 L -156.4,771.9 L -186.7,684.0 L -205.5,592.9 L -212.4,500.0 L -207.2,406.9 L -189.9,315.1 L -160.8,226.3 L -120.3,141.9 L -69.0,63.4 L -7.7,-7.7 L 62.4,-70.2 L 140.3,-123.0 L 224.6,-165.0 L 313.7,-195.4 L 406.0,-213.8 L 500.0,-219.8 L 593.9,-213.3 L 686.1,-194.4 L 774.8,-163.5 L 858.7,-121.3 L 936.1,-68.4 L 1005.9,-5.9 L 1066.8,65.1 L 1117.9,143.3 L 1158.3,227.3 L 1187.5,315.8 L 1205.0,407.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.16s", opacity: 0.246 }} />
            <path d="M 1245.0,500.0 L 1238.6,597.2 L 1219.4,692.8 L 1187.8,784.9 L 1144.3,872.0 L 1089.7,952.5 L 1025.0,1025.0 L 951.4,1088.3 L 870.3,1141.3 L 783.0,1183.2 L 691.2,1213.4 L 596.3,1231.3 L 500.0,1236.8 L 403.9,1229.8 L 309.6,1210.5 L 218.7,1179.2 L 132.5,1136.5 L 52.5,1083.1 L -19.9,1019.9 L -83.6,947.8 L -137.6,868.1 L -180.9,782.0 L -212.7,691.0 L -232.4,596.4 L -239.8,500.0 L -234.4,403.3 L -216.4,308.0 L -186.1,215.8 L -143.8,128.3 L -90.3,47.0 L -26.5,-26.5 L 46.5,-91.0 L 127.5,-145.2 L 214.9,-188.2 L 307.3,-219.3 L 402.9,-237.8 L 500.0,-243.6 L 597.0,-236.4 L 692.0,-216.6 L 783.5,-184.5 L 870.0,-140.8 L 949.9,-86.3 L 1021.9,-21.9 L 1084.8,51.3 L 1137.7,131.8 L 1179.8,218.4 L 1210.3,309.7 L 1228.8,404.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.24s", opacity: 0.244 }} />
            <path d="M 1269.7,500.0 L 1262.6,600.4 L 1242.4,698.9 L 1209.4,793.8 L 1164.2,883.5 L 1107.7,966.3 L 1041.0,1041.0 L 965.1,1106.2 L 881.5,1160.9 L 791.7,1204.2 L 697.1,1235.5 L 599.3,1254.3 L 500.0,1260.4 L 400.8,1253.6 L 303.3,1234.1 L 209.1,1202.3 L 119.8,1158.6 L 36.8,1103.7 L -38.5,1038.5 L -104.8,964.1 L -161.0,881.6 L -206.1,792.5 L -239.2,698.1 L -259.7,600.0 L -267.2,500.0 L -261.5,399.8 L -242.6,301.0 L -210.8,205.6 L -166.6,115.1 L -110.9,31.3 L -44.5,-44.5 L 31.4,-110.7 L 115.3,-166.4 L 205.8,-210.4 L 301.2,-242.0 L 399.8,-260.8 L 500.0,-266.4 L 599.9,-258.9 L 697.9,-238.4 L 792.2,-205.4 L 881.3,-160.4 L 963.7,-104.3 L 1038.1,-38.1 L 1103.4,37.0 L 1158.3,119.9 L 1202.2,209.2 L 1234.1,303.3 L 1253.8,400.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.32s", opacity: 0.242 }} />
            <path d="M 1293.3,500.0 L 1285.7,603.4 L 1264.5,704.9 L 1230.4,802.5 L 1183.8,894.8 L 1125.6,980.0 L 1056.9,1056.9 L 979.0,1124.2 L 893.1,1180.8 L 800.6,1225.8 L 703.2,1258.4 L 602.5,1278.3 L 500.0,1285.0 L 397.5,1278.5 L 296.7,1258.9 L 199.1,1226.4 L 106.5,1181.5 L 20.4,1125.0 L -57.7,1057.7 L -126.6,980.8 L -184.8,895.4 L -231.5,803.0 L -265.6,705.1 L -286.6,603.6 L -294.1,500.0 L -287.8,396.3 L -267.8,294.3 L -234.5,195.8 L -188.4,102.5 L -130.4,16.3 L -61.6,-61.6 L 16.9,-129.6 L 103.6,-186.6 L 197.0,-231.6 L 295.3,-264.0 L 396.9,-283.2 L 500.0,-289.0 L 602.9,-281.3 L 703.7,-260.3 L 800.9,-226.5 L 892.9,-180.5 L 978.1,-123.0 L 1055.1,-55.1 L 1122.8,22.1 L 1180.0,107.4 L 1225.7,199.4 L 1259.2,296.6 L 1279.9,397.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.4s", opacity: 0.24 }} />
            <path d="M 1316.0,500.0 L 1308.1,606.4 L 1286.3,710.7 L 1251.2,811.2 L 1203.4,906.1 L 1143.8,994.0 L 1073.3,1073.3 L 993.3,1142.9 L 905.0,1201.5 L 810.0,1248.3 L 709.7,1282.5 L 605.8,1303.5 L 500.0,1310.9 L 394.1,1304.7 L 289.7,1284.7 L 188.8,1251.4 L 92.9,1205.2 L 3.7,1146.8 L -77.2,1077.2 L -148.3,997.5 L -208.4,909.0 L -256.4,813.3 L -291.4,712.1 L -312.7,607.0 L -320.0,500.0 L -313.0,393.0 L -291.9,287.8 L -257.1,186.4 L -209.2,90.6 L -149.1,1.9 L -78.0,-78.0 L 3.0,-147.7 L 92.3,-206.2 L 188.3,-252.5 L 289.5,-285.8 L 393.9,-305.6 L 500.0,-311.7 L 605.9,-304.1 L 709.8,-282.9 L 810.0,-248.5 L 905.0,-201.5 L 993.1,-142.7 L 1073.0,-73.0 L 1143.2,6.5 L 1202.6,94.3 L 1250.2,189.2 L 1285.2,289.6 L 1306.9,393.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.48s", opacity: 0.238 }} />
            <path d="M 1338.6,500.0 L 1330.5,609.3 L 1308.3,716.6 L 1272.5,820.0 L 1223.6,917.8 L 1162.6,1008.4 L 1090.4,1090.4 L 1008.3,1162.5 L 917.6,1223.4 L 819.8,1272.1 L 716.4,1307.8 L 609.2,1329.8 L 500.0,1337.8 L 390.5,1331.6 L 282.7,1311.1 L 178.3,1276.8 L 79.1,1228.9 L -13.0,1168.5 L -96.4,1096.4 L -169.6,1013.8 L -231.4,922.3 L -280.6,823.3 L -316.2,718.7 L -337.7,610.3 L -344.6,500.0 L -337.0,389.8 L -314.8,281.7 L -278.6,177.5 L -229.1,79.0 L -167.2,-11.9 L -93.9,-93.9 L -10.7,-165.6 L 81.0,-225.7 L 179.6,-273.4 L 283.5,-307.9 L 390.9,-328.6 L 500.0,-335.3 L 609.0,-327.9 L 716.1,-306.6 L 819.6,-271.6 L 917.7,-223.5 L 1008.9,-163.2 L 1091.6,-91.6 L 1164.4,-9.8 L 1226.0,80.8 L 1275.4,178.8 L 1311.7,282.5 L 1334.1,390.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.56s", opacity: 0.236 }} />
            <path d="M 1361.4,500.0 L 1353.4,612.4 L 1331.0,722.7 L 1294.6,829.1 L 1244.8,930.0 L 1182.4,1023.6 L 1108.4,1108.4 L 1024.1,1183.0 L 930.8,1246.2 L 830.0,1296.7 L 723.4,1333.9 L 612.8,1356.9 L 500.0,1365.3 L 386.9,1358.8 L 275.6,1337.6 L 167.8,1302.0 L 65.6,1252.4 L -29.2,1189.7 L -115.0,1115.0 L -190.2,1029.6 L -253.4,935.0 L -303.6,832.9 L -339.8,725.0 L -361.5,613.4 L -368.2,500.0 L -359.9,386.8 L -336.9,275.8 L -299.6,168.8 L -248.6,67.8 L -185.0,-25.7 L -109.9,-109.9 L -24.6,-183.7 L 69.5,-245.7 L 170.7,-295.0 L 277.4,-330.9 L 387.7,-352.7 L 500.0,-360.0 L 612.3,-352.9 L 722.8,-331.4 L 829.6,-295.7 L 931.0,-246.6 L 1025.3,-184.6 L 1110.8,-110.8 L 1186.1,-26.5 L 1249.8,67.1 L 1300.8,168.3 L 1338.1,275.4 L 1361.0,386.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.64s", opacity: 0.23399999999999999 }} />
            <path d="M 1385.2,500.0 L 1377.4,615.5 L 1354.9,729.1 L 1317.9,838.8 L 1267.0,942.8 L 1203.1,1039.5 L 1127.2,1127.2 L 1040.5,1204.4 L 944.4,1269.7 L 840.5,1322.0 L 730.5,1360.4 L 616.4,1384.1 L 500.0,1392.6 L 383.4,1385.8 L 268.6,1363.6 L 157.7,1326.5 L 52.6,1275.0 L -44.8,1210.1 L -132.8,1132.8 L -209.8,1044.6 L -274.4,947.1 L -325.5,841.9 L -362.4,731.1 L -384.3,616.4 L -390.9,500.0 L -382.3,383.8 L -358.7,269.9 L -320.4,160.2 L -268.3,56.4 L -203.2,-39.6 L -126.3,-126.3 L -39.0,-202.4 L 57.5,-266.5 L 161.3,-317.6 L 270.9,-355.0 L 384.4,-377.9 L 500.0,-386.0 L 615.7,-379.1 L 729.7,-357.2 L 840.0,-320.7 L 944.7,-270.2 L 1042.0,-206.4 L 1130.3,-130.3 L 1207.9,-43.2 L 1273.4,53.5 L 1325.8,158.0 L 1363.9,268.5 L 1387.1,383.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.72s", opacity: 0.23199999999999998 }} />
            <path d="M 1410.1,500.0 L 1402.6,618.8 L 1379.9,735.8 L 1342.2,848.9 L 1290.2,956.2 L 1224.6,1056.0 L 1146.5,1146.5 L 1057.2,1226.1 L 958.1,1293.5 L 851.0,1347.4 L 737.6,1386.7 L 619.9,1410.9 L 500.0,1419.3 L 379.9,1411.9 L 261.9,1388.6 L 147.9,1350.0 L 40.1,1296.6 L -59.7,1229.4 L -149.8,1149.8 L -228.4,1059.0 L -294.5,958.7 L -346.7,850.7 L -384.3,736.9 L -406.6,619.4 L -413.5,500.0 L -404.8,380.9 L -380.7,264.0 L -341.7,151.4 L -288.5,44.7 L -222.1,-54.1 L -143.5,-143.5 L -54.0,-222.0 L 44.9,-288.3 L 151.5,-341.4 L 264.1,-380.2 L 381.0,-404.2 L 500.0,-412.9 L 619.3,-406.0 L 736.8,-383.7 L 850.5,-346.1 L 958.4,-294.0 L 1058.7,-228.0 L 1149.5,-149.5 L 1229.2,-59.5 L 1296.4,40.2 L 1349.9,148.0 L 1388.7,261.9 L 1412.0,379.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.8000000000000003s", opacity: 0.22999999999999998 }} />
            <path d="M 1436.2,500.0 L 1429.0,622.3 L 1405.9,742.7 L 1367.3,859.2 L 1313.8,969.9 L 1246.3,1072.7 L 1165.9,1165.9 L 1073.8,1247.8 L 971.7,1317.0 L 861.3,1372.2 L 744.5,1412.4 L 623.3,1436.8 L 500.0,1445.0 L 376.7,1436.8 L 255.5,1412.5 L 138.7,1372.3 L 28.2,1317.1 L -73.9,1248.0 L -166.0,1166.0 L -246.5,1072.8 L -314.0,970.0 L -367.5,859.3 L -406.1,742.8 L -429.1,622.3 L -436.4,500.0 L -427.8,377.9 L -403.5,257.9 L -363.9,142.2 L -309.7,32.5 L -241.9,-69.3 L -161.5,-161.5 L -69.8,-242.6 L 31.7,-311.2 L 141.2,-366.1 L 257.1,-406.4 L 377.4,-431.3 L 500.0,-440.3 L 622.9,-433.3 L 743.9,-410.1 L 860.9,-371.3 L 971.9,-317.4 L 1074.9,-249.2 L 1168.1,-168.1 L 1249.7,-75.3 L 1318.4,27.5 L 1372.9,138.4 L 1412.2,255.6 L 1435.8,376.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.88s", opacity: 0.22799999999999998 }} />
            <path d="M 1463.3,500.0 L 1456.0,625.9 L 1432.4,749.8 L 1392.7,869.8 L 1337.6,983.6 L 1268.0,1089.3 L 1185.0,1185.0 L 1090.1,1269.0 L 984.9,1339.8 L 871.2,1396.1 L 751.1,1436.9 L 626.6,1461.5 L 500.0,1469.4 L 373.5,1460.6 L 249.4,1435.2 L 129.8,1393.7 L 16.8,1337.0 L -87.7,1265.9 L -182.0,1182.0 L -264.4,1086.5 L -333.6,981.3 L -388.5,868.0 L -428.3,748.7 L -452.3,625.4 L -460.2,500.0 L -451.8,374.7 L -427.3,251.5 L -387.2,132.5 L -332.0,19.6 L -262.7,-85.2 L -180.3,-180.3 L -86.2,-263.9 L 18.1,-334.7 L 130.8,-391.4 L 250.0,-432.9 L 373.8,-458.5 L 500.0,-467.7 L 626.4,-460.2 L 750.8,-436.1 L 871.0,-395.8 L 984.9,-340.0 L 1090.5,-269.6 L 1185.8,-185.8 L 1269.2,-90.3 L 1339.3,15.4 L 1394.8,129.4 L 1434.7,249.5 L 1458.6,373.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "2.96s", opacity: 0.22599999999999998 }} />
            <path d="M 1490.7,500.0 L 1483.2,629.4 L 1458.8,756.9 L 1417.8,880.2 L 1360.9,997.0 L 1289.0,1105.5 L 1203.5,1203.5 L 1105.7,1289.4 L 997.5,1361.6 L 880.6,1418.9 L 757.3,1460.3 L 629.7,1485.1 L 500.0,1492.8 L 370.5,1483.4 L 243.5,1457.2 L 121.2,1414.6 L 5.5,1356.5 L -101.5,1283.8 L -198.0,1198.0 L -282.5,1100.5 L -353.7,992.9 L -410.3,877.1 L -451.5,755.0 L -476.6,628.6 L -485.1,500.0 L -477.0,371.4 L -452.4,244.8 L -411.6,122.4 L -355.2,6.3 L -284.1,-101.7 L -199.6,-199.6 L -102.9,-285.7 L 4.3,-358.5 L 120.3,-416.7 L 243.0,-459.3 L 370.3,-485.3 L 500.0,-494.4 L 629.8,-486.3 L 757.5,-461.1 L 880.8,-419.2 L 997.4,-361.5 L 1105.4,-288.9 L 1202.7,-202.7 L 1287.9,-104.6 L 1359.3,3.9 L 1415.9,120.6 L 1456.6,243.7 L 1480.9,370.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.04s", opacity: 0.22399999999999998 }} />
            <path d="M 1518.0,500.0 L 1510.0,633.0 L 1484.6,763.8 L 1442.1,890.2 L 1383.3,1010.0 L 1309.2,1120.9 L 1221.1,1221.1 L 1120.6,1308.8 L 1009.4,1382.4 L 889.6,1440.7 L 763.3,1482.7 L 632.7,1507.7 L 500.0,1515.5 L 367.6,1505.8 L 237.7,1478.9 L 112.5,1435.5 L -5.9,1376.2 L -115.5,1302.1 L -214.5,1214.5 L -301.4,1115.0 L -374.7,1005.0 L -433.2,886.5 L -475.9,761.5 L -502.1,631.9 L -511.3,500.0 L -503.4,367.9 L -478.4,237.8 L -436.7,112.0 L -378.9,-7.4 L -305.9,-118.4 L -219.0,-219.0 L -119.5,-307.4 L -9.2,-382.0 L 110.0,-441.5 L 236.1,-484.9 L 366.9,-511.2 L 500.0,-520.0 L 633.1,-511.2 L 763.9,-484.9 L 890.0,-441.6 L 1009.2,-382.0 L 1119.5,-307.4 L 1219.0,-219.0 L 1305.9,-118.4 L 1378.9,-7.4 L 1436.7,112.0 L 1478.4,237.8 L 1503.4,367.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.12s", opacity: 0.22199999999999998 }} />
            <path d="M 1544.6,500.0 L 1535.9,636.4 L 1509.4,770.5 L 1465.4,899.9 L 1404.7,1022.3 L 1328.4,1135.7 L 1237.9,1237.9 L 1134.8,1327.3 L 1021.0,1402.3 L 898.4,1461.7 L 769.2,1504.5 L 635.6,1530.1 L 500.0,1538.0 L 364.6,1528.3 L 231.8,1501.1 L 103.6,1456.9 L -17.7,1396.6 L -130.1,1321.2 L -231.9,1231.9 L -321.2,1130.2 L -396.7,1017.7 L -457.1,896.5 L -501.3,768.3 L -528.6,635.4 L -538.4,500.0 L -530.4,364.3 L -504.9,230.7 L -462.1,101.5 L -402.6,-21.1 L -327.5,-135.0 L -238.1,-238.1 L -135.8,-328.6 L -22.4,-404.8 L 100.1,-465.4 L 229.5,-509.4 L 363.6,-535.8 L 500.0,-544.4 L 636.2,-534.9 L 770.0,-507.6 L 898.9,-462.9 L 1020.7,-401.8 L 1133.3,-325.4 L 1234.9,-234.9 L 1323.8,-132.1 L 1398.5,-18.7 L 1457.8,103.3 L 1500.7,231.9 L 1526.6,364.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.2s", opacity: 0.21999999999999997 }} />
            <path d="M 1570.0,500.0 L 1560.7,639.6 L 1533.0,776.8 L 1487.5,909.0 L 1425.1,1034.1 L 1346.8,1149.8 L 1254.1,1254.1 L 1148.6,1345.3 L 1032.2,1421.8 L 907.0,1482.5 L 775.0,1526.4 L 638.6,1552.7 L 500.0,1561.1 L 361.6,1551.5 L 225.6,1524.0 L 94.4,1479.3 L -30.0,1418.0 L -145.5,1341.2 L -250.0,1250.0 L -342.0,1146.1 L -419.8,1031.0 L -482.0,906.8 L -527.6,775.3 L -555.7,639.0 L -565.8,500.0 L -557.7,360.8 L -531.3,223.7 L -487.1,91.1 L -425.9,-34.6 L -348.6,-151.1 L -256.5,-256.5 L -151.4,-348.9 L -35.0,-426.6 L 90.7,-488.2 L 223.3,-532.7 L 360.5,-559.4 L 500.0,-567.7 L 639.2,-557.7 L 775.9,-529.5 L 907.5,-483.8 L 1031.9,-421.3 L 1147.1,-343.3 L 1251.0,-251.0 L 1342.0,-146.1 L 1418.6,-30.4 L 1479.6,94.2 L 1523.9,225.6 L 1550.9,361.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.2800000000000002s", opacity: 0.21799999999999997 }} />
            <path d="M 1594.2,500.0 L 1584.2,642.7 L 1555.6,782.8 L 1508.8,917.9 L 1444.8,1045.5 L 1364.7,1163.5 L 1270.0,1270.0 L 1162.3,1363.2 L 1043.6,1441.5 L 915.7,1503.7 L 781.0,1548.8 L 641.7,1576.0 L 500.0,1585.1 L 358.4,1575.7 L 219.1,1548.2 L 84.6,1502.8 L -43.0,1440.5 L -161.5,1362.1 L -269.0,1269.0 L -363.5,1162.6 L -443.4,1044.7 L -507.3,917.3 L -554.1,782.5 L -582.9,642.6 L -593.1,500.0 L -584.5,357.2 L -557.1,216.8 L -511.4,81.0 L -448.3,-47.5 L -368.7,-166.6 L -274.1,-274.1 L -166.2,-368.2 L -46.9,-447.3 L 81.7,-509.9 L 217.3,-555.1 L 357.5,-582.0 L 500.0,-590.4 L 642.2,-580.1 L 781.7,-551.3 L 916.2,-504.7 L 1043.3,-441.1 L 1161.1,-361.6 L 1267.6,-267.6 L 1360.9,-160.6 L 1439.6,-42.5 L 1502.5,84.8 L 1548.3,219.1 L 1576.5,358.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.36s", opacity: 0.21599999999999997 }} />
            <path d="M 1617.4,500.0 L 1606.9,645.7 L 1577.4,788.7 L 1529.6,926.5 L 1464.3,1056.7 L 1382.7,1177.3 L 1286.1,1286.1 L 1176.4,1381.5 L 1055.3,1461.7 L 924.8,1525.7 L 787.3,1572.2 L 644.9,1600.6 L 500.0,1610.3 L 355.0,1601.2 L 212.4,1573.4 L 74.4,1527.4 L -56.5,1463.8 L -178.1,1383.7 L -288.3,1288.3 L -385.2,1179.3 L -467.2,1058.4 L -532.6,927.7 L -580.4,789.5 L -609.5,646.1 L -619.6,500.0 L -610.3,353.8 L -581.8,210.1 L -534.7,71.4 L -469.6,-59.8 L -387.9,-181.3 L -290.9,-290.9 L -180.4,-386.7 L -58.4,-467.2 L 73.0,-530.9 L 211.4,-576.9 L 354.6,-604.4 L 500.0,-612.9 L 645.2,-602.6 L 787.6,-573.5 L 925.1,-526.2 L 1055.1,-461.5 L 1175.8,-380.7 L 1284.9,-284.9 L 1380.8,-175.8 L 1461.7,-55.3 L 1526.5,74.8 L 1573.8,212.3 L 1603.0,354.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.44s", opacity: 0.21399999999999997 }} />
            <path d="M 1640.0,500.0 L 1629.2,648.7 L 1599.2,794.5 L 1550.6,935.2 L 1484.1,1068.2 L 1401.1,1191.4 L 1302.8,1302.8 L 1191.0,1400.5 L 1067.5,1482.9 L 934.4,1548.7 L 793.9,1596.8 L 648.3,1626.3 L 500.0,1636.7 L 351.5,1627.7 L 205.4,1599.6 L 64.0,1552.6 L -70.2,1487.6 L -194.8,1405.5 L -307.7,1307.7 L -406.9,1195.9 L -490.6,1071.9 L -557.3,937.9 L -605.8,796.3 L -635.2,649.4 L -645.0,500.0 L -635.0,350.6 L -605.4,203.8 L -556.8,62.3 L -490.0,-71.6 L -406.2,-195.4 L -307.1,-307.1 L -194.2,-404.7 L -69.7,-486.7 L 64.4,-551.7 L 205.6,-598.7 L 351.6,-627.0 L 500.0,-636.0 L 648.2,-625.8 L 793.8,-596.5 L 934.3,-548.6 L 1067.5,-483.0 L 1191.1,-400.7 L 1303.1,-303.1 L 1401.5,-191.8 L 1484.8,-68.6 L 1551.4,64.5 L 1600.1,205.2 L 1630.2,351.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.52s", opacity: 0.212 }} />
            <path d="M 1662.6,500.0 L 1651.8,651.6 L 1621.5,800.5 L 1572.2,944.1 L 1504.7,1080.1 L 1420.3,1206.2 L 1320.3,1320.3 L 1206.3,1420.5 L 1080.4,1505.2 L 944.4,1572.9 L 800.8,1622.4 L 651.8,1653.0 L 500.0,1663.8 L 348.0,1654.9 L 198.3,1626.1 L 53.5,1578.0 L -83.8,1511.2 L -211.3,1427.0 L -326.7,1326.7 L -427.9,1212.0 L -513.2,1084.9 L -580.9,947.7 L -630.0,802.8 L -659.6,652.7 L -669.1,500.0 L -658.5,347.5 L -627.9,197.8 L -578.0,53.5 L -509.7,-82.9 L -424.2,-209.1 L -323.0,-323.0 L -208.0,-422.6 L -81.0,-506.4 L 55.6,-572.9 L 199.6,-621.2 L 348.6,-650.4 L 500.0,-660.1 L 651.4,-650.1 L 800.3,-620.6 L 944.1,-572.2 L 1080.5,-505.5 L 1207.2,-421.7 L 1322.0,-322.0 L 1423.0,-208.3 L 1508.4,-82.2 L 1576.7,54.0 L 1626.7,198.1 L 1657.3,347.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.6s", opacity: 0.21 }} />
            <path d="M 1685.8,500.0 L 1675.2,654.7 L 1644.7,806.7 L 1594.8,953.5 L 1526.4,1092.6 L 1440.5,1221.7 L 1338.6,1338.6 L 1222.4,1441.4 L 1093.7,1528.4 L 954.8,1597.9 L 807.8,1648.8 L 655.4,1680.2 L 500.0,1691.3 L 344.4,1682.1 L 191.2,1652.4 L 43.1,1602.9 L -97.2,1534.4 L -227.3,1447.9 L -345.0,1345.0 L -448.0,1227.5 L -534.7,1097.4 L -603.5,957.1 L -653.2,809.0 L -682.9,655.7 L -692.3,500.0 L -681.2,344.5 L -649.8,191.9 L -598.8,44.8 L -529.2,-94.2 L -442.1,-222.9 L -339.1,-339.1 L -222.0,-440.9 L -92.7,-526.7 L 46.5,-594.9 L 193.3,-644.6 L 345.3,-674.9 L 500.0,-685.3 L 654.8,-675.6 L 807.1,-645.9 L 954.3,-596.7 L 1094.0,-528.8 L 1223.8,-443.2 L 1341.4,-341.4 L 1444.8,-225.0 L 1532.2,-95.9 L 1602.0,43.6 L 1652.9,191.1 L 1683.9,344.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.68s", opacity: 0.208 }} />
            <path d="M 1710.0,500.0 L 1699.7,657.9 L 1669.0,813.2 L 1618.5,963.3 L 1549.0,1105.7 L 1461.6,1237.8 L 1357.7,1357.7 L 1238.9,1463.0 L 1107.4,1552.1 L 965.3,1623.3 L 814.9,1675.3 L 658.9,1707.3 L 500.0,1718.5 L 340.9,1708.7 L 184.3,1678.0 L 33.2,1627.0 L -110.0,1556.6 L -242.6,1467.8 L -362.4,1362.4 L -467.2,1242.2 L -555.2,1109.2 L -625.0,966.0 L -675.4,814.9 L -705.5,658.7 L -714.9,500.0 L -703.5,341.6 L -671.6,186.1 L -619.8,36.2 L -549.0,-105.7 L -460.5,-237.0 L -355.8,-355.8 L -236.6,-460.0 L -105.0,-547.9 L 36.9,-618.0 L 186.7,-669.3 L 341.9,-700.7 L 500.0,-711.7 L 658.3,-702.2 L 814.1,-672.1 L 964.7,-622.0 L 1107.7,-552.6 L 1240.5,-465.0 L 1360.8,-360.8 L 1466.4,-241.6 L 1555.6,-109.4 L 1626.6,33.3 L 1678.2,184.3 L 1709.5,340.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.7600000000000002s", opacity: 0.206 }} />
            <path d="M 1735.5,500.0 L 1725.4,661.3 L 1694.5,820.1 L 1643.3,973.6 L 1572.5,1119.2 L 1483.2,1254.5 L 1377.1,1377.1 L 1255.7,1484.8 L 1121.1,1575.8 L 975.7,1648.5 L 821.9,1701.4 L 662.4,1733.7 L 500.0,1744.8 L 337.5,1734.3 L 177.8,1702.6 L 23.6,1650.0 L -122.2,1577.7 L -257.2,1486.8 L -379.0,1379.0 L -485.6,1256.3 L -575.0,1120.7 L -646.0,974.7 L -697.1,820.8 L -727.8,661.6 L -737.5,500.0 L -726.1,338.6 L -693.9,180.1 L -641.4,27.2 L -569.7,-117.6 L -479.8,-251.8 L -373.3,-373.3 L -252.0,-480.0 L -117.9,-570.2 L 26.9,-642.2 L 179.8,-695.0 L 338.4,-727.4 L 500.0,-738.9 L 661.8,-729.3 L 821.2,-698.6 L 975.2,-647.3 L 1121.4,-576.3 L 1257.0,-486.6 L 1379.8,-379.8 L 1487.4,-257.7 L 1578.1,-122.5 L 1650.2,23.6 L 1702.5,177.8 L 1733.9,337.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.84s", opacity: 0.204 }} />
            <path d="M 1762.0,500.0 L 1752.1,664.8 L 1720.8,827.1 L 1668.6,984.0 L 1596.2,1132.9 L 1505.0,1271.2 L 1396.4,1396.4 L 1272.2,1506.3 L 1134.6,1599.1 L 985.9,1673.0 L 828.7,1726.6 L 665.8,1759.1 L 500.0,1769.9 L 334.3,1758.8 L 171.5,1725.9 L 14.6,1671.9 L -133.9,1597.9 L -271.2,1505.0 L -395.1,1395.1 L -503.5,1270.0 L -594.6,1131.9 L -666.8,983.3 L -719.1,826.6 L -750.5,664.6 L -760.7,500.0 L -749.5,335.5 L -717.1,173.9 L -664.1,17.8 L -591.3,-130.1 L -500.0,-267.3 L -391.7,-391.7 L -268.1,-501.0 L -131.3,-593.4 L 16.5,-667.3 L 172.7,-721.3 L 334.8,-754.6 L 500.0,-766.4 L 665.4,-756.5 L 828.2,-724.9 L 985.6,-672.3 L 1134.7,-599.3 L 1273.0,-507.4 L 1398.0,-398.0 L 1507.5,-273.1 L 1599.6,-134.9 L 1672.7,14.2 L 1725.5,171.6 L 1757.2,334.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "3.92s", opacity: 0.20199999999999999 }} />
            <path d="M 1789.3,500.0 L 1779.3,668.4 L 1747.3,834.2 L 1693.9,994.5 L 1619.9,1146.5 L 1526.5,1287.6 L 1415.3,1415.3 L 1288.2,1527.2 L 1147.5,1621.5 L 995.6,1696.4 L 835.1,1750.7 L 669.0,1783.3 L 500.0,1793.8 L 331.2,1782.1 L 165.5,1748.3 L 5.8,1693.1 L -145.2,1617.5 L -284.9,1522.9 L -411.0,1411.0 L -521.4,1283.8 L -614.3,1143.3 L -688.1,992.1 L -741.7,832.7 L -774.2,667.7 L -785.0,500.0 L -774.1,332.3 L -741.5,167.3 L -687.9,8.0 L -614.0,-143.2 L -521.1,-283.5 L -410.7,-410.7 L -284.7,-522.6 L -145.0,-617.1 L 6.0,-692.7 L 165.6,-747.9 L 331.3,-781.7 L 500.0,-793.5 L 668.9,-783.1 L 835.1,-750.5 L 995.5,-696.3 L 1147.5,-621.5 L 1288.3,-527.3 L 1415.4,-415.4 L 1526.7,-287.8 L 1620.1,-146.7 L 1694.2,5.3 L 1747.7,165.7 L 1779.7,331.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.0s", opacity: 0.19999999999999998 }} />
            <path d="M 1816.8,500.0 L 1806.4,672.0 L 1773.5,841.2 L 1718.7,1004.8 L 1642.8,1159.8 L 1547.1,1303.5 L 1433.4,1433.4 L 1303.5,1547.2 L 1159.8,1642.8 L 1004.8,1718.7 L 841.3,1773.6 L 672.0,1806.4 L 500.0,1816.8 L 328.2,1804.6 L 159.7,1770.1 L -2.8,1713.9 L -156.5,1637.0 L -298.7,1540.9 L -427.2,1427.2 L -539.9,1297.9 L -634.7,1155.1 L -710.3,1001.3 L -765.4,839.1 L -799.0,671.0 L -810.5,500.0 L -799.8,328.9 L -767.0,160.5 L -712.6,-2.3 L -637.5,-156.7 L -542.8,-300.2 L -430.1,-430.1 L -301.4,-544.4 L -158.7,-640.8 L -4.4,-717.8 L 158.7,-773.9 L 327.8,-808.1 L 500.0,-819.8 L 672.3,-808.7 L 841.6,-775.0 L 1005.0,-719.3 L 1159.7,-642.6 L 1302.8,-546.3 L 1432.0,-432.0 L 1545.0,-301.9 L 1639.9,-158.1 L 1715.2,-3.3 L 1769.5,159.8 L 1802.1,328.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.08s", opacity: 0.19799999999999998 }} />
            <path d="M 1843.8,500.0 L 1832.9,675.5 L 1798.9,848.1 L 1742.6,1014.7 L 1664.8,1172.5 L 1566.9,1318.7 L 1450.6,1450.6 L 1318.1,1566.1 L 1171.6,1663.2 L 1013.7,1740.1 L 847.2,1795.6 L 675.0,1828.9 L 500.0,1839.4 L 325.3,1827.0 L 153.8,1791.9 L -11.5,1734.9 L -168.0,1657.0 L -313.0,1559.5 L -444.1,1444.1 L -559.1,1312.7 L -656.2,1167.5 L -733.7,1011.0 L -790.2,845.7 L -824.9,674.4 L -837.1,500.0 L -826.5,325.4 L -793.3,153.5 L -737.9,-12.8 L -661.3,-170.5 L -564.6,-316.9 L -449.5,-449.5 L -317.9,-565.9 L -172.1,-664.1 L -14.6,-742.3 L 151.9,-799.1 L 324.4,-833.5 L 500.0,-844.9 L 675.5,-833.1 L 847.9,-798.3 L 1014.1,-741.2 L 1171.3,-662.8 L 1316.8,-564.5 L 1448.1,-448.1 L 1562.9,-315.6 L 1659.4,-169.4 L 1736.0,-12.0 L 1791.4,154.0 L 1824.8,325.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.16s", opacity: 0.19599999999999998 }} />
            <path d="M 1869.9,500.0 L 1858.3,678.8 L 1823.2,854.6 L 1765.4,1024.1 L 1685.7,1184.6 L 1585.7,1333.1 L 1467.1,1467.1 L 1332.1,1584.4 L 1182.9,1682.9 L 1022.3,1761.0 L 853.0,1817.4 L 677.9,1851.3 L 500.0,1862.1 L 322.3,1849.7 L 147.8,1814.4 L -20.6,1756.7 L -180.0,1677.8 L -327.9,1579.0 L -461.8,1461.8 L -579.4,1328.2 L -678.7,1180.5 L -758.1,1021.1 L -816.1,852.6 L -851.8,678.0 L -864.4,500.0 L -853.7,321.8 L -819.8,146.3 L -763.2,-23.3 L -684.9,-184.1 L -586.0,-333.3 L -468.3,-468.3 L -333.9,-586.7 L -185.0,-686.4 L -24.3,-765.7 L 145.5,-823.1 L 321.3,-857.6 L 500.0,-868.8 L 678.6,-856.4 L 853.9,-820.6 L 1022.9,-762.3 L 1182.6,-682.4 L 1330.5,-582.4 L 1464.0,-464.0 L 1580.9,-329.4 L 1679.2,-180.8 L 1757.4,-20.8 L 1814.1,147.9 L 1848.5,322.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.24s", opacity: 0.194 }} />
            <path d="M 1894.8,500.0 L 1882.5,682.0 L 1846.3,860.8 L 1787.1,1033.1 L 1705.8,1196.1 L 1603.8,1347.0 L 1483.1,1483.1 L 1345.8,1602.3 L 1194.2,1702.4 L 1031.0,1781.9 L 858.9,1839.4 L 680.9,1874.1 L 500.0,1885.5 L 319.2,1873.3 L 141.5,1837.8 L -30.0,1779.6 L -192.7,1699.7 L -343.6,1599.4 L -480.3,1480.3 L -600.5,1344.4 L -702.0,1194.0 L -783.2,1031.5 L -842.6,859.7 L -879.0,681.6 L -891.9,500.0 L -880.8,318.2 L -846.0,139.3 L -788.0,-33.5 L -707.8,-197.3 L -606.7,-349.2 L -486.4,-486.4 L -349.2,-606.6 L -197.3,-707.7 L -33.5,-788.0 L 139.4,-846.0 L 318.2,-880.7 L 500.0,-891.7 L 681.5,-878.9 L 859.7,-842.4 L 1031.5,-783.1 L 1193.9,-701.9 L 1344.4,-600.4 L 1480.2,-480.2 L 1599.3,-343.5 L 1699.7,-192.6 L 1779.6,-30.0 L 1837.8,141.5 L 1873.3,319.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.32s", opacity: 0.192 }} />
            <path d="M 1918.5,500.0 L 1905.6,685.0 L 1868.6,866.7 L 1808.1,1041.8 L 1725.3,1207.4 L 1621.7,1360.7 L 1499.1,1499.1 L 1359.6,1620.3 L 1205.7,1722.2 L 1039.9,1803.3 L 865.0,1862.2 L 684.0,1898.0 L 500.0,1910.0 L 315.9,1898.1 L 134.9,1862.4 L -40.0,1803.6 L -205.9,1722.6 L -359.9,1620.6 L -499.5,1499.5 L -622.1,1361.0 L -725.8,1207.7 L -808.6,1042.0 L -869.0,866.8 L -906.0,685.1 L -918.9,500.0 L -907.3,314.7 L -871.4,132.5 L -811.9,-43.4 L -729.7,-210.0 L -626.4,-364.3 L -503.6,-503.6 L -363.7,-625.6 L -209.0,-728.1 L -42.3,-809.3 L 133.4,-868.0 L 315.3,-903.2 L 500.0,-914.3 L 684.5,-901.2 L 865.6,-864.3 L 1040.2,-804.2 L 1205.5,-721.9 L 1358.6,-619.0 L 1497.1,-497.1 L 1618.6,-358.4 L 1721.2,-205.0 L 1803.0,-39.7 L 1862.7,134.9 L 1899.3,315.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.4s", opacity: 0.19 }} />
            <path d="M 1941.4,500.0 L 1928.0,688.0 L 1890.3,872.5 L 1828.9,1050.5 L 1744.9,1218.7 L 1639.8,1374.6 L 1515.4,1515.4 L 1373.9,1638.8 L 1217.6,1742.9 L 1049.2,1825.8 L 871.4,1886.2 L 687.3,1923.0 L 500.0,1935.8 L 312.5,1924.1 L 128.0,1888.1 L -50.3,1828.5 L -219.5,1746.1 L -376.6,1642.4 L -518.9,1518.9 L -643.9,1377.8 L -749.5,1221.4 L -833.6,1052.4 L -895.0,873.8 L -932.3,688.6 L -944.9,500.0 L -932.6,311.4 L -895.7,126.0 L -834.6,-52.8 L -750.6,-222.0 L -645.2,-378.7 L -520.1,-520.1 L -377.7,-643.8 L -220.4,-747.8 L -51.0,-830.2 L 127.6,-889.8 L 312.3,-925.6 L 500.0,-937.0 L 687.5,-924.0 L 871.6,-886.8 L 1049.3,-826.0 L 1217.5,-742.8 L 1373.6,-638.5 L 1514.8,-514.8 L 1638.9,-373.9 L 1743.7,-218.0 L 1827.4,-49.8 L 1888.6,127.9 L 1926.2,312.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.48s", opacity: 0.188 }} />
            <path d="M 1963.9,500.0 L 1950.4,691.0 L 1912.3,878.4 L 1850.1,1059.2 L 1765.0,1230.4 L 1658.5,1389.0 L 1532.4,1532.4 L 1388.8,1658.3 L 1230.1,1764.5 L 1058.9,1849.3 L 878.1,1911.3 L 690.8,1949.2 L 500.0,1962.5 L 309.0,1950.9 L 121.0,1914.5 L -60.8,1853.9 L -233.2,1769.9 L -393.3,1664.1 L -538.1,1538.1 L -665.3,1394.2 L -772.6,1234.7 L -857.9,1062.5 L -919.9,880.5 L -957.4,691.9 L -969.8,500.0 L -956.8,308.2 L -918.7,119.9 L -856.3,-61.8 L -770.6,-233.6 L -663.3,-392.6 L -536.1,-536.1 L -391.4,-661.7 L -231.7,-767.3 L -59.6,-851.1 L 121.7,-911.8 L 309.3,-948.5 L 500.0,-960.5 L 690.6,-947.6 L 877.9,-910.3 L 1058.7,-848.9 L 1230.2,-764.7 L 1389.3,-658.9 L 1533.4,-533.4 L 1660.0,-390.1 L 1767.0,-231.5 L 1852.6,-60.3 L 1915.1,120.8 L 1953.5,308.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.5600000000000005s", opacity: 0.186 }} />
            <path d="M 1986.7,500.0 L 1973.3,694.0 L 1934.9,884.5 L 1872.1,1068.3 L 1786.1,1242.5 L 1678.2,1404.0 L 1550.3,1550.3 L 1404.5,1678.7 L 1243.2,1787.2 L 1069.1,1873.9 L 885.1,1937.3 L 694.3,1976.2 L 500.0,1989.9 L 305.4,1978.2 L 113.9,1941.0 L -71.3,1879.1 L -246.8,1793.4 L -409.6,1685.4 L -556.9,1556.9 L -686.0,1410.0 L -794.7,1247.5 L -881.1,1072.1 L -943.7,886.8 L -981.3,695.0 L -993.4,500.0 L -979.9,305.2 L -940.9,113.9 L -877.3,-70.5 L -790.2,-244.9 L -681.1,-406.3 L -552.1,-552.1 L -405.2,-679.7 L -243.1,-787.1 L -68.5,-872.6 L 115.6,-934.7 L 306.2,-972.3 L 500.0,-985.0 L 693.9,-972.5 L 884.5,-934.9 L 1068.7,-873.0 L 1243.4,-787.6 L 1405.6,-680.2 L 1552.5,-552.5 L 1681.7,-406.8 L 1790.8,-245.3 L 1877.9,-70.8 L 1941.5,113.7 L 1980.4,305.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.64s", opacity: 0.184 }} />
            <path d="M 2010.3,500.0 L 1997.1,697.1 L 1958.6,890.8 L 1895.2,1077.9 L 1808.1,1255.3 L 1698.8,1419.9 L 1568.9,1568.9 L 1420.8,1700.0 L 1256.7,1810.7 L 1079.5,1899.1 L 892.2,1963.8 L 697.9,2003.4 L 500.0,2017.3 L 301.8,2005.2 L 106.9,1967.1 L -81.5,1903.8 L -259.9,1816.2 L -425.3,1705.9 L -574.8,1574.8 L -705.7,1425.2 L -815.8,1259.7 L -903.2,1081.2 L -966.3,892.9 L -1004.2,698.0 L -1016.3,500.0 L -1002.3,302.2 L -962.7,108.1 L -898.1,-79.1 L -809.8,-256.2 L -699.2,-420.2 L -568.4,-568.4 L -419.5,-698.3 L -255.1,-807.8 L -77.9,-895.1 L 109.2,-958.6 L 302.9,-997.4 L 500.0,-1010.8 L 697.3,-998.5 L 891.4,-960.7 L 1079.0,-897.9 L 1257.0,-811.2 L 1422.3,-701.9 L 1572.0,-572.0 L 1703.5,-423.5 L 1814.5,-258.9 L 1903.0,-81.1 L 1967.4,106.8 L 2006.7,301.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.72s", opacity: 0.182 }} />
            <path d="M 2035.1,500.0 L 2022.2,700.4 L 1983.4,897.5 L 1919.4,1087.9 L 1831.2,1268.6 L 1720.2,1436.3 L 1588.2,1588.2 L 1437.4,1721.7 L 1270.5,1834.5 L 1090.0,1924.5 L 899.3,1990.2 L 701.5,2030.3 L 500.0,2044.2 L 298.4,2031.4 L 100.1,1992.3 L -91.2,1927.4 L -272.4,1837.9 L -440.3,1725.4 L -591.8,1591.8 L -724.5,1439.6 L -836.0,1271.3 L -924.4,1090.0 L -988.3,898.8 L -1026.6,701.0 L -1038.8,500.0 L -1024.7,299.3 L -984.6,102.2 L -919.3,-87.9 L -829.9,-267.8 L -718.0,-434.6 L -585.4,-585.4 L -434.5,-717.8 L -267.6,-829.5 L -87.6,-918.7 L 102.4,-983.7 L 299.4,-1023.6 L 500.0,-1037.6 L 700.8,-1025.4 L 898.5,-987.0 L 1089.5,-923.2 L 1270.7,-835.0 L 1439.0,-723.7 L 1591.2,-591.2 L 1724.9,-439.9 L 1837.5,-272.2 L 1927.2,-91.2 L 1992.3,100.1 L 2031.7,298.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.8s", opacity: 0.18 }} />
            <path d="M 2061.0,500.0 L 2048.4,703.8 L 2009.3,904.4 L 1944.4,1098.3 L 1854.8,1282.2 L 1741.9,1453.0 L 1607.6,1607.6 L 1454.1,1743.4 L 1284.1,1858.1 L 1100.4,1949.4 L 906.2,2015.9 L 704.9,2056.4 L 500.0,2070.0 L 295.1,2056.5 L 93.7,2016.3 L -100.6,1949.9 L -284.4,1858.6 L -454.6,1744.0 L -608.2,1608.2 L -742.6,1453.5 L -855.6,1282.6 L -945.2,1098.6 L -1010.1,904.6 L -1049.1,703.9 L -1061.6,500.0 L -1047.6,296.3 L -1007.3,96.1 L -941.4,-97.0 L -851.0,-280.0 L -737.7,-449.7 L -603.3,-603.3 L -450.2,-738.3 L -280.7,-852.2 L -97.8,-943.3 L 95.5,-1009.8 L 295.9,-1050.6 L 500.0,-1065.0 L 704.4,-1052.6 L 905.6,-1013.6 L 1100.0,-948.5 L 1284.3,-858.4 L 1455.3,-744.9 L 1609.9,-609.9 L 1745.5,-455.7 L 1859.7,-285.0 L 1950.4,-100.8 L 2016.1,93.8 L 2055.6,295.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.88s", opacity: 0.178 }} />
            <path d="M 2088.0,500.0 L 2075.3,707.4 L 2035.7,911.5 L 1969.8,1108.8 L 1878.6,1295.9 L 1763.6,1469.6 L 1626.8,1626.8 L 1470.5,1764.7 L 1297.3,1881.0 L 1110.3,1973.5 L 912.8,2040.7 L 708.2,2081.2 L 500.0,2094.6 L 291.9,2080.5 L 87.6,2039.1 L -109.5,1971.4 L -295.9,1878.5 L -468.4,1762.1 L -624.1,1624.1 L -760.5,1467.2 L -875.1,1293.9 L -966.2,1107.3 L -1032.2,910.6 L -1072.1,707.0 L -1085.3,500.0 L -1071.5,293.1 L -1031.0,89.8 L -964.5,-106.6 L -873.1,-292.8 L -758.3,-465.5 L -622.0,-622.0 L -466.5,-759.5 L -294.3,-875.7 L -108.3,-968.5 L 88.3,-1036.3 L 292.3,-1077.9 L 500.0,-1092.4 L 708.0,-1079.6 L 912.5,-1039.6 L 1110.2,-973.1 L 1297.4,-881.2 L 1471.0,-765.4 L 1627.8,-627.8 L 1765.2,-470.8 L 1880.7,-297.2 L 1972.4,-109.9 L 2038.7,87.7 L 2078.5,292.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "4.96s", opacity: 0.176 }} />
            <path d="M 2115.4,500.0 L 2102.6,711.0 L 2062.2,918.6 L 1995.0,1119.2 L 1902.0,1309.4 L 1784.8,1485.8 L 1645.4,1645.4 L 1486.2,1785.2 L 1310.0,1902.9 L 1119.9,1996.5 L 919.1,2064.2 L 711.3,2104.9 L 500.0,2118.1 L 288.9,2103.4 L 81.7,2061.2 L -118.1,1992.3 L -307.1,1898.0 L -482.1,1779.9 L -640.2,1640.2 L -778.6,1481.1 L -895.1,1305.5 L -987.9,1116.3 L -1055.3,916.7 L -1096.2,710.1 L -1110.1,500.0 L -1096.6,289.8 L -1055.9,83.1 L -988.8,-116.7 L -896.2,-306.1 L -779.7,-482.0 L -641.3,-641.3 L -483.2,-781.3 L -308.0,-899.5 L -118.8,-993.9 L 81.3,-1062.7 L 288.7,-1104.7 L 500.0,-1119.2 L 711.4,-1105.8 L 919.3,-1064.7 L 1119.9,-996.7 L 1309.9,-902.8 L 1485.9,-784.9 L 1644.8,-644.8 L 1783.9,-485.2 L 1900.9,-308.8 L 1993.6,-118.7 L 2060.6,81.8 L 2100.9,289.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.04s", opacity: 0.174 }} />
            <path d="M 2142.8,500.0 L 2129.5,714.5 L 2088.1,925.5 L 2019.4,1129.4 L 1924.5,1322.5 L 1805.1,1501.4 L 1663.1,1663.1 L 1501.2,1804.7 L 1322.0,1923.8 L 1128.9,2018.3 L 925.1,2086.7 L 714.3,2127.7 L 500.0,2140.8 L 286.0,2125.8 L 75.8,2083.0 L -126.8,2013.2 L -318.5,1917.7 L -496.1,1798.1 L -656.6,1656.6 L -797.3,1495.5 L -916.0,1317.5 L -1010.6,1125.7 L -1079.5,923.2 L -1121.6,713.5 L -1136.1,500.0 L -1122.8,286.4 L -1081.8,76.2 L -1013.8,-127.0 L -919.9,-319.8 L -801.5,-498.7 L -660.7,-660.7 L -499.8,-803.0 L -321.6,-923.1 L -129.1,-1018.8 L 74.4,-1088.4 L 285.3,-1130.7 L 500.0,-1145.0 L 714.7,-1130.9 L 925.7,-1088.7 L 1129.3,-1019.1 L 1321.9,-923.5 L 1500.2,-803.5 L 1661.2,-661.2 L 1802.0,-499.1 L 1920.5,-320.1 L 2014.4,-127.3 L 2082.4,76.0 L 2123.3,286.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.12s", opacity: 0.172 }} />
            <path d="M 2169.4,500.0 L 2155.5,718.0 L 2113.1,932.2 L 2042.8,1139.1 L 1946.1,1334.9 L 1824.4,1516.2 L 1680.0,1680.0 L 1515.4,1823.4 L 1333.6,1943.8 L 1137.7,2039.4 L 931.0,2108.5 L 717.2,2150.1 L 500.0,2163.3 L 283.0,2148.2 L 69.9,2105.0 L -135.6,2034.5 L -330.2,1938.0 L -510.6,1817.1 L -673.8,1673.8 L -817.0,1510.6 L -937.9,1330.2 L -1034.4,1135.6 L -1104.8,930.0 L -1148.0,717.0 L -1163.1,500.0 L -1149.8,282.8 L -1108.3,69.1 L -1039.2,-137.5 L -943.6,-333.5 L -823.2,-515.3 L -679.9,-679.9 L -516.2,-824.3 L -334.8,-946.0 L -139.1,-1042.8 L 67.8,-1113.1 L 282.0,-1155.6 L 500.0,-1169.5 L 717.9,-1154.8 L 931.8,-1111.5 L 1138.2,-1040.6 L 1333.3,-943.4 L 1514.0,-821.5 L 1677.1,-677.1 L 1819.9,-512.8 L 1940.0,-331.4 L 2035.4,-136.0 L 2104.6,70.0 L 2146.4,283.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.2s", opacity: 0.16999999999999998 }} />
            <path d="M 2195.0,500.0 L 2180.4,721.2 L 2136.8,938.6 L 2065.1,1148.3 L 1966.6,1346.7 L 1842.9,1530.4 L 1696.2,1696.2 L 1529.3,1841.4 L 1344.9,1963.4 L 1146.3,2060.2 L 936.9,2130.3 L 720.2,2172.6 L 500.0,2186.3 L 280.0,2171.3 L 63.8,2127.8 L -144.8,2056.8 L -342.5,1959.3 L -525.9,1836.9 L -691.9,1691.9 L -837.7,1526.4 L -960.8,1343.4 L -1059.1,1145.8 L -1131.0,937.0 L -1175.1,720.5 L -1190.5,500.0 L -1177.0,279.2 L -1134.7,62.0 L -1064.3,-148.0 L -967.0,-347.0 L -844.3,-531.5 L -698.4,-698.4 L -531.8,-844.7 L -347.5,-967.9 L -148.5,-1065.7 L 61.5,-1136.6 L 278.9,-1179.2 L 500.0,-1193.0 L 720.9,-1177.7 L 937.7,-1133.6 L 1146.8,-1061.5 L 1344.6,-962.9 L 1527.7,-839.4 L 1693.1,-693.1 L 1838.0,-526.7 L 1960.0,-343.0 L 2057.1,-145.0 L 2127.7,63.9 L 2170.6,280.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.28s", opacity: 0.16799999999999998 }} />
            <path d="M 2219.4,500.0 L 2204.1,724.3 L 2159.5,944.7 L 2086.5,1157.1 L 1986.3,1358.1 L 1860.8,1544.2 L 1712.2,1712.2 L 1543.0,1859.3 L 1356.2,1983.0 L 1155.0,2081.3 L 942.8,2152.7 L 723.3,2195.8 L 500.0,2210.1 L 276.8,2195.4 L 57.4,2151.8 L -154.5,2080.1 L -355.4,1981.6 L -541.8,1857.8 L -710.7,1710.7 L -859.1,1542.8 L -984.4,1357.0 L -1084.5,1156.3 L -1157.5,944.1 L -1202.3,724.1 L -1217.8,500.0 L -1203.9,275.7 L -1160.6,55.0 L -1088.8,-158.1 L -989.5,-360.0 L -864.6,-547.1 L -716.1,-716.1 L -546.8,-864.2 L -359.5,-988.7 L -157.6,-1087.6 L 55.5,-1159.0 L 275.9,-1202.0 L 500.0,-1215.7 L 723.8,-1200.0 L 943.5,-1155.3 L 1155.5,-1082.4 L 1356.0,-982.6 L 1541.7,-857.6 L 1709.6,-709.6 L 1856.8,-541.1 L 1980.9,-355.0 L 2079.9,-154.4 L 2151.9,57.4 L 2196.0,276.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.36s", opacity: 0.16599999999999998 }} />
            <path d="M 2242.6,500.0 L 2226.8,727.3 L 2181.5,950.5 L 2107.4,1165.8 L 2005.8,1369.4 L 1878.7,1557.9 L 1728.2,1728.2 L 1557.0,1877.5 L 1367.8,2003.1 L 1164.1,2103.2 L 949.1,2175.9 L 726.5,2220.2 L 500.0,2235.2 L 273.5,2220.7 L 50.7,2176.9 L -164.6,2104.6 L -368.8,2004.8 L -558.3,1879.3 L -730.0,1730.0 L -880.8,1559.6 L -1008.2,1370.7 L -1109.8,1166.8 L -1183.8,951.2 L -1229.0,727.6 L -1244.5,500.0 L -1229.9,272.3 L -1185.5,48.4 L -1112.1,-167.8 L -1011.0,-372.4 L -883.9,-561.9 L -733.0,-733.0 L -561.1,-882.8 L -371.1,-1008.7 L -166.3,-1108.7 L 49.6,-1180.9 L 273.0,-1224.3 L 500.0,-1238.2 L 726.8,-1222.5 L 949.5,-1177.4 L 1164.3,-1103.8 L 1367.7,-1002.9 L 1556.3,-876.6 L 1726.8,-726.8 L 1876.5,-556.3 L 2002.9,-367.7 L 2103.7,-164.3 L 2177.3,50.6 L 2222.4,273.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.44s", opacity: 0.16399999999999998 }} />
            <path d="M 2265.3,500.0 L 2249.2,730.3 L 2203.2,956.4 L 2128.3,1174.4 L 2025.6,1380.8 L 1897.1,1572.0 L 1744.8,1744.8 L 1571.5,1896.4 L 1380.0,2024.2 L 1173.6,2126.1 L 955.6,2200.4 L 729.8,2245.7 L 500.0,2261.4 L 270.0,2247.1 L 43.7,2203.0 L -175.1,2129.7 L -382.5,2028.5 L -575.1,1901.1 L -749.4,1749.4 L -902.5,1576.2 L -1031.6,1384.3 L -1134.5,1177.0 L -1209.4,958.0 L -1254.8,731.0 L -1270.0,500.0 L -1254.7,269.0 L -1209.2,42.0 L -1134.4,-177.0 L -1031.5,-384.2 L -902.3,-576.0 L -749.2,-749.2 L -574.9,-900.8 L -382.4,-1028.3 L -174.9,-1129.5 L 43.8,-1202.7 L 270.0,-1246.9 L 500.0,-1261.2 L 729.8,-1245.6 L 955.6,-1200.3 L 1173.5,-1126.1 L 1380.0,-1024.2 L 1571.5,-896.5 L 1744.9,-744.9 L 1897.2,-572.1 L 2025.8,-380.9 L 2128.5,-174.5 L 2203.5,43.5 L 2249.5,269.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.5200000000000005s", opacity: 0.16199999999999998 }} />
            <path d="M 2287.9,500.0 L 2271.7,733.3 L 2225.4,962.3 L 2149.8,1183.4 L 2046.1,1392.6 L 1916.2,1586.7 L 1762.2,1762.2 L 1586.8,1916.3 L 1392.8,2046.3 L 1183.5,2150.1 L 962.5,2225.9 L 733.3,2272.3 L 500.0,2288.5 L 266.4,2274.2 L 36.6,2229.5 L -185.6,2155.1 L -396.2,2052.3 L -591.6,1922.7 L -768.5,1768.5 L -923.6,1592.4 L -1054.4,1397.4 L -1158.4,1186.9 L -1233.8,964.6 L -1279.4,734.3 L -1294.3,500.0 L -1278.4,265.9 L -1231.9,35.9 L -1155.7,-185.8 L -1051.2,-395.6 L -920.3,-589.8 L -765.2,-765.2 L -588.6,-918.7 L -393.7,-1047.9 L -183.7,-1150.6 L 37.8,-1225.1 L 267.0,-1270.1 L 500.0,-1285.1 L 733.0,-1269.7 L 962.0,-1224.3 L 1183.2,-1149.5 L 1392.9,-1046.6 L 1587.5,-917.3 L 1763.8,-763.8 L 1918.6,-588.5 L 2049.4,-394.5 L 2153.8,-185.0 L 2230.1,36.4 L 2276.7,266.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.6000000000000005s", opacity: 0.15999999999999998 }} />
            <path d="M 2311.0,500.0 L 2295.0,736.3 L 2248.5,968.5 L 2172.2,1192.7 L 2067.6,1405.0 L 1936.2,1602.1 L 1780.4,1780.4 L 1602.7,1937.1 L 1406.1,2069.4 L 1193.8,2175.0 L 969.5,2252.2 L 736.9,2299.5 L 500.0,2316.0 L 262.8,2301.4 L 29.5,2255.9 L -195.9,2180.2 L -409.6,2075.5 L -607.7,1943.6 L -786.9,1786.9 L -943.9,1607.9 L -1076.1,1409.9 L -1181.0,1196.3 L -1257.1,970.8 L -1302.8,737.3 L -1317.6,500.0 L -1301.1,262.9 L -1253.8,30.1 L -1176.6,-194.5 L -1070.7,-406.9 L -938.2,-603.6 L -781.2,-781.2 L -602.6,-936.9 L -405.3,-1068.1 L -192.7,-1172.4 L 31.5,-1248.4 L 263.7,-1294.5 L 500.0,-1310.2 L 736.3,-1295.1 L 968.8,-1249.4 L 1193.4,-1173.9 L 1406.3,-1069.8 L 1604.1,-938.8 L 1783.1,-783.1 L 1940.4,-605.3 L 2073.2,-408.3 L 2179.1,-195.5 L 2256.3,29.4 L 2303.4,262.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.68s", opacity: 0.15799999999999997 }} />
            <path d="M 2335.0,500.0 L 2319.3,739.5 L 2272.7,975.0 L 2195.8,1202.4 L 2090.1,1418.0 L 1957.2,1618.2 L 1799.4,1799.4 L 1619.2,1958.6 L 1419.8,2093.1 L 1204.3,2200.4 L 976.6,2278.7 L 740.5,2326.6 L 500.0,2343.2 L 259.3,2328.1 L 22.6,2281.6 L -206.0,2204.4 L -422.5,2097.8 L -623.1,1963.7 L -804.4,1804.4 L -963.2,1622.7 L -1096.7,1421.9 L -1202.7,1205.3 L -1279.4,976.8 L -1325.4,740.3 L -1340.2,500.0 L -1323.5,259.9 L -1275.6,24.2 L -1197.5,-203.1 L -1090.5,-418.3 L -956.5,-617.6 L -797.8,-797.8 L -617.1,-955.9 L -417.5,-1089.2 L -202.3,-1195.4 L 25.0,-1272.8 L 260.4,-1320.1 L 500.0,-1336.5 L 739.8,-1321.5 L 975.7,-1275.5 L 1203.8,-1199.1 L 1420.0,-1093.6 L 1620.8,-960.6 L 1802.5,-802.5 L 1962.1,-621.9 L 2096.6,-421.8 L 2203.9,-205.8 L 2281.8,22.6 L 2329.2,259.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.76s", opacity: 0.15599999999999997 }} />
            <path d="M 2360.3,500.0 L 2344.9,742.9 L 2298.0,981.8 L 2220.4,1212.6 L 2113.5,1431.5 L 1978.8,1634.7 L 1818.8,1818.8 L 1635.9,1980.4 L 1433.5,2116.8 L 1214.8,2225.6 L 983.6,2304.9 L 744.0,2353.2 L 500.0,2369.7 L 255.9,2353.9 L 16.0,2306.3 L -215.6,2227.5 L -434.8,2119.1 L -637.8,1982.8 L -821.1,1821.1 L -981.6,1636.9 L -1116.6,1433.3 L -1223.7,1214.0 L -1301.2,982.6 L -1347.8,743.3 L -1362.8,500.0 L -1346.0,257.0 L -1297.8,18.3 L -1219.0,-212.0 L -1111.0,-430.1 L -975.7,-632.3 L -815.2,-815.2 L -632.4,-975.8 L -430.3,-1111.3 L -212.2,-1219.5 L 18.1,-1298.4 L 256.9,-1346.7 L 500.0,-1363.6 L 743.4,-1348.6 L 982.8,-1302.0 L 1214.3,-1224.5 L 1433.7,-1117.3 L 1637.3,-982.2 L 1821.6,-821.6 L 1983.2,-638.1 L 2119.3,-434.9 L 2227.6,-215.6 L 2306.2,16.0 L 2353.7,256.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.84s", opacity: 0.154 }} />
            <path d="M 2386.8,500.0 L 2371.5,746.4 L 2324.2,988.8 L 2245.7,1223.1 L 2137.2,1445.3 L 2000.6,1651.5 L 1838.1,1838.1 L 1652.5,2002.0 L 1447.0,2140.2 L 1225.0,2250.3 L 990.4,2330.3 L 747.3,2378.8 L 500.0,2395.0 L 252.7,2378.5 L 9.7,2329.8 L -224.7,2249.6 L -446.5,2139.4 L -651.9,2001.1 L -837.3,1837.3 L -999.6,1650.7 L -1136.1,1444.6 L -1244.5,1222.6 L -1323.0,988.5 L -1370.4,746.2 L -1385.9,500.0 L -1369.3,253.9 L -1320.9,12.1 L -1241.5,-221.4 L -1132.5,-442.5 L -995.8,-647.7 L -833.5,-833.5 L -648.4,-996.6 L -443.6,-1134.4 L -222.6,-1244.4 L 11.1,-1324.7 L 253.3,-1373.9 L 500.0,-1391.1 L 747.0,-1375.8 L 989.9,-1328.4 L 1224.7,-1249.5 L 1447.1,-1140.5 L 1653.4,-1003.2 L 1839.9,-839.9 L 2003.4,-653.6 L 2141.0,-447.4 L 2250.3,-225.0 L 2329.5,9.8 L 2377.1,252.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "5.92s", opacity: 0.152 }} />
            <path d="M 2414.0,500.0 L 2398.6,750.0 L 2350.7,995.9 L 2271.0,1233.6 L 2160.9,1458.9 L 2022.1,1668.0 L 1857.1,1857.1 L 1668.6,2023.0 L 1460.0,2162.7 L 1234.8,2273.8 L 996.9,2354.5 L 750.6,2403.1 L 500.0,2419.0 L 249.6,2402.0 L 3.7,2352.2 L -233.5,2270.8 L -457.9,2159.0 L -665.6,2019.0 L -853.2,1853.2 L -1017.5,1664.4 L -1155.8,1456.0 L -1265.7,1231.4 L -1345.5,994.5 L -1393.9,749.3 L -1410.0,500.0 L -1393.7,250.7 L -1345.1,5.6 L -1265.2,-231.1 L -1155.1,-455.6 L -1016.8,-663.9 L -852.5,-852.5 L -664.9,-1018.2 L -457.3,-1158.1 L -233.1,-1269.8 L 4.0,-1351.3 L 249.7,-1401.1 L 500.0,-1418.3 L 750.5,-1402.6 L 996.8,-1354.1 L 1234.7,-1273.7 L 1460.0,-1162.8 L 1668.8,-1023.2 L 1857.4,-857.4 L 2022.7,-668.4 L 2161.6,-459.3 L 2271.9,-234.0 L 2351.7,3.8 L 2399.7,249.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.0s", opacity: 0.15 }} />
            <path d="M 2441.5,500.0 L 2425.8,753.5 L 2377.0,1002.9 L 2295.9,1243.9 L 2184.0,1472.2 L 2042.9,1683.9 L 1875.3,1875.3 L 1684.0,2043.0 L 1472.4,2184.2 L 1244.1,2296.3 L 1003.1,2377.5 L 753.6,2426.4 L 500.0,2442.1 L 246.6,2424.6 L -2.2,2374.1 L -242.1,2291.6 L -469.1,2178.6 L -679.4,2037.0 L -869.4,1869.4 L -1035.9,1678.5 L -1176.1,1467.7 L -1287.8,1240.5 L -1369.1,1000.8 L -1418.5,752.6 L -1435.4,500.0 L -1419.3,247.3 L -1370.5,-1.2 L -1289.8,-241.4 L -1178.5,-469.1 L -1038.4,-680.4 L -871.8,-871.8 L -681.7,-1040.0 L -471.0,-1181.8 L -243.5,-1295.0 L -3.1,-1377.4 L 246.2,-1427.6 L 500.0,-1444.7 L 753.9,-1428.3 L 1003.4,-1378.7 L 1244.3,-1296.8 L 1472.3,-1184.0 L 1683.4,-1042.3 L 1874.1,-874.1 L 2041.1,-682.5 L 2181.5,-470.8 L 2292.9,-242.6 L 2373.5,-2.0 L 2422.1,247.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.08s", opacity: 0.148 }} />
            <path d="M 2468.6,500.0 L 2452.4,757.0 L 2402.5,1009.8 L 2320.0,1253.9 L 2206.1,1485.0 L 2062.8,1699.2 L 1892.7,1892.7 L 1698.7,2062.1 L 1484.2,2204.7 L 1253.0,2317.8 L 1009.0,2399.7 L 756.6,2448.9 L 500.0,2464.7 L 243.7,2446.9 L -8.0,2395.9 L -250.8,2312.6 L -480.6,2198.5 L -693.6,2055.5 L -886.1,1886.1 L -1055.0,1693.2 L -1197.4,1480.0 L -1311.0,1250.1 L -1393.8,1007.4 L -1444.4,756.0 L -1461.8,500.0 L -1445.9,243.8 L -1396.7,-8.2 L -1315.0,-251.8 L -1202.2,-482.8 L -1060.2,-697.2 L -891.2,-891.2 L -698.2,-1061.5 L -484.5,-1205.2 L -253.7,-1319.6 L -9.8,-1402.7 L 242.9,-1453.1 L 500.0,-1469.9 L 757.1,-1452.9 L 1009.7,-1402.2 L 1253.4,-1318.8 L 1484.0,-1204.3 L 1697.5,-1060.6 L 1890.2,-890.2 L 2059.0,-696.3 L 2201.0,-482.1 L 2313.7,-251.3 L 2395.4,-7.9 L 2444.7,244.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.16s", opacity: 0.146 }} />
            <path d="M 2494.8,500.0 L 2477.9,760.4 L 2427.0,1016.3 L 2342.9,1263.4 L 2227.1,1497.2 L 2081.7,1713.7 L 1909.3,1909.3 L 1712.7,2080.5 L 1495.6,2224.4 L 1261.6,2338.7 L 1014.8,2421.4 L 759.5,2471.2 L 500.0,2487.3 L 240.7,2469.6 L -14.0,2418.2 L -259.8,2334.3 L -492.6,2219.2 L -708.4,2074.8 L -903.7,1903.7 L -1075.1,1708.6 L -1219.8,1492.9 L -1335.3,1260.2 L -1419.5,1014.3 L -1471.1,759.5 L -1489.1,500.0 L -1473.1,240.2 L -1423.2,-15.3 L -1340.4,-262.3 L -1225.9,-496.4 L -1081.7,-713.7 L -910.2,-910.2 L -714.3,-1082.5 L -497.5,-1227.7 L -263.5,-1343.1 L -16.3,-1426.9 L 239.7,-1477.4 L 500.0,-1494.0 L 760.2,-1476.3 L 1015.7,-1424.6 L 1262.1,-1340.0 L 1495.3,-1223.9 L 1711.2,-1078.5 L 1906.2,-906.2 L 2077.0,-710.0 L 2220.7,-493.4 L 2335.0,-260.1 L 2417.9,-13.9 L 2468.2,240.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.24s", opacity: 0.144 }} />
            <path d="M 2519.9,500.0 L 2502.3,763.6 L 2450.2,1022.6 L 2364.7,1272.4 L 2247.3,1508.8 L 2099.9,1727.7 L 1925.3,1925.3 L 1726.5,2098.4 L 1506.9,2243.9 L 1270.3,2359.6 L 1020.7,2443.4 L 762.5,2494.0 L 500.0,2510.6 L 237.6,2493.0 L -20.2,2441.5 L -269.2,2357.0 L -505.1,2240.9 L -724.0,2095.1 L -922.1,1922.1 L -1096.1,1724.7 L -1243.0,1506.3 L -1360.3,1270.6 L -1445.9,1021.4 L -1498.3,763.1 L -1516.6,500.0 L -1500.2,236.7 L -1449.5,-22.4 L -1365.3,-272.6 L -1248.9,-509.7 L -1102.4,-729.6 L -928.4,-928.4 L -729.7,-1102.5 L -509.9,-1249.1 L -272.7,-1365.6 L -22.5,-1449.9 L 236.6,-1500.7 L 500.0,-1517.1 L 763.2,-1498.9 L 1021.6,-1446.5 L 1270.8,-1360.8 L 1506.6,-1243.5 L 1725.0,-1096.4 L 1922.3,-922.3 L 2095.3,-724.1 L 2241.0,-505.2 L 2357.1,-269.2 L 2441.5,-20.2 L 2492.9,237.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.32s", opacity: 0.142 }} />
            <path d="M 2543.7,500.0 L 2525.5,766.7 L 2472.5,1028.5 L 2385.8,1281.1 L 2266.9,1520.1 L 2117.8,1741.4 L 1941.3,1941.3 L 1740.3,2116.3 L 1518.3,2263.7 L 1279.1,2380.9 L 1026.8,2466.1 L 765.6,2517.7 L 500.0,2535.0 L 234.4,2517.7 L -26.8,2466.0 L -279.1,2380.9 L -518.2,2263.6 L -740.2,2116.3 L -941.2,1941.2 L -1117.7,1741.3 L -1266.8,1520.0 L -1385.7,1281.1 L -1472.4,1028.5 L -1525.4,766.7 L -1543.6,500.0 L -1526.8,233.2 L -1475.0,-29.2 L -1389.3,-282.6 L -1271.0,-522.5 L -1122.3,-744.8 L -945.7,-945.7 L -744.3,-1121.6 L -521.7,-1269.6 L -281.6,-1387.0 L -28.4,-1472.0 L 233.6,-1523.2 L 500.0,-1539.6 L 766.1,-1521.2 L 1027.4,-1468.3 L 1279.5,-1381.8 L 1518.1,-1263.4 L 1739.2,-1114.9 L 1939.1,-939.1 L 2114.5,-738.8 L 2262.4,-517.5 L 2380.3,-278.8 L 2466.3,-26.9 L 2518.8,234.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.4s", opacity: 0.13999999999999999 }} />
            <path d="M 2566.7,500.0 L 2548.0,769.6 L 2494.4,1034.4 L 2406.6,1289.8 L 2286.4,1531.4 L 2135.8,1755.2 L 1957.5,1957.5 L 1754.4,2134.8 L 1530.1,2284.2 L 1288.3,2403.2 L 1033.2,2489.8 L 768.9,2542.6 L 500.0,2560.6 L 231.0,2543.5 L -33.6,2491.6 L -289.4,2405.7 L -531.8,2287.1 L -756.8,2137.9 L -960.6,1960.6 L -1139.5,1758.0 L -1290.5,1533.7 L -1410.8,1291.5 L -1498.5,1035.5 L -1551.8,770.1 L -1569.8,500.0 L -1552.3,229.8 L -1499.4,-35.7 L -1412.2,-292.0 L -1292.0,-534.6 L -1141.2,-759.3 L -962.2,-962.2 L -758.3,-1139.9 L -533.1,-1289.3 L -290.3,-1407.9 L -34.2,-1493.8 L 230.7,-1545.5 L 500.0,-1562.3 L 769.1,-1543.9 L 1033.4,-1490.6 L 1288.5,-1403.5 L 1530.0,-1284.1 L 1754.0,-1134.3 L 1956.7,-956.7 L 2134.6,-754.3 L 2284.8,-530.4 L 2404.6,-288.9 L 2492.0,-33.8 L 2545.6,230.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.48s", opacity: 0.13799999999999998 }} />
            <path d="M 2589.2,500.0 L 2570.4,772.6 L 2516.2,1040.2 L 2427.7,1298.5 L 2306.4,1543.0 L 2154.5,1769.5 L 1974.4,1974.4 L 1769.3,2154.1 L 1542.5,2305.7 L 1298.0,2426.6 L 1039.9,2514.8 L 772.3,2568.6 L 500.0,2587.3 L 227.4,2570.3 L -40.7,2517.9 L -299.8,2431.0 L -545.5,2310.9 L -773.5,2159.7 L -979.9,1979.9 L -1161.0,1774.5 L -1313.7,1547.1 L -1435.2,1301.6 L -1523.6,1042.2 L -1577.1,773.5 L -1594.8,500.0 L -1576.6,226.6 L -1522.6,-42.0 L -1434.0,-301.1 L -1312.2,-546.3 L -1159.4,-773.3 L -978.3,-978.3 L -772.1,-1157.8 L -544.3,-1308.8 L -298.9,-1428.8 L -40.1,-1515.8 L 227.7,-1568.3 L 500.0,-1585.6 L 772.2,-1567.4 L 1039.6,-1514.0 L 1297.9,-1426.3 L 1542.6,-1305.9 L 1769.6,-1154.6 L 1975.2,-975.2 L 2155.7,-770.4 L 2308.0,-543.9 L 2429.7,-299.3 L 2518.5,-40.8 L 2572.8,227.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.5600000000000005s", opacity: 0.13599999999999998 }} />
            <path d="M 2611.9,500.0 L 2593.2,775.6 L 2538.7,1046.3 L 2449.6,1307.6 L 2327.3,1555.0 L 2174.0,1784.5 L 1992.1,1992.1 L 1784.8,2174.4 L 1555.6,2328.3 L 1308.2,2451.1 L 1046.8,2540.7 L 775.9,2595.5 L 500.0,2614.6 L 223.9,2597.5 L -47.8,2544.4 L -310.3,2456.3 L -559.1,2334.5 L -789.9,2181.1 L -998.7,1998.7 L -1181.8,1790.5 L -1336.0,1560.0 L -1458.6,1311.3 L -1547.5,1048.6 L -1601.1,776.6 L -1618.7,500.0 L -1599.8,223.6 L -1544.9,-47.9 L -1455.0,-309.8 L -1331.7,-557.6 L -1177.2,-787.0 L -994.2,-994.2 L -785.9,-1175.8 L -555.7,-1328.6 L -307.8,-1450.2 L -46.2,-1538.5 L 224.6,-1592.0 L 500.0,-1610.0 L 775.4,-1592.1 L 1046.2,-1538.5 L 1307.8,-1450.2 L 1555.8,-1328.6 L 1785.9,-1175.8 L 1994.3,-994.3 L 2177.3,-787.0 L 2331.8,-557.6 L 2455.1,-309.8 L 2545.0,-47.9 L 2599.8,223.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.640000000000001s", opacity: 0.13399999999999998 }} />
            <path d="M 2635.4,500.0 L 2616.8,778.7 L 2562.3,1052.6 L 2472.6,1317.1 L 2349.3,1567.7 L 2194.5,1800.2 L 2010.7,2010.7 L 1801.1,2195.6 L 1569.1,2351.7 L 1318.6,2476.3 L 1053.9,2567.2 L 779.5,2622.8 L 500.0,2642.0 L 220.3,2624.6 L -54.8,2570.6 L -320.6,2481.0 L -572.3,2357.4 L -805.8,2201.7 L -1016.7,2016.7 L -1201.6,1805.7 L -1357.2,1572.3 L -1480.8,1320.5 L -1570.3,1054.7 L -1624.2,779.7 L -1641.6,500.0 L -1622.3,220.6 L -1566.7,-53.8 L -1475.8,-318.4 L -1351.3,-568.9 L -1195.3,-800.8 L -1010.5,-1010.5 L -800.1,-1194.3 L -567.6,-1349.2 L -317.0,-1472.5 L -52.6,-1562.3 L 221.3,-1617.0 L 500.0,-1635.6 L 778.8,-1617.9 L 1053.1,-1564.1 L 1318.1,-1475.0 L 1569.3,-1352.2 L 1802.6,-1197.5 L 2013.7,-1013.7 L 2199.1,-803.7 L 2355.5,-571.3 L 2480.2,-320.2 L 2571.0,-54.9 L 2626.2,220.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.72s", opacity: 0.13199999999999998 }} />
            <path d="M 2660.0,500.0 L 2641.7,782.0 L 2587.0,1059.2 L 2496.6,1327.0 L 2372.2,1580.9 L 2215.8,1816.6 L 2029.9,2029.9 L 1817.7,2217.3 L 1582.8,2375.5 L 1329.1,2501.6 L 1061.0,2593.6 L 783.0,2649.7 L 500.0,2669.0 L 216.8,2650.9 L -61.6,2595.9 L -330.4,2504.8 L -585.0,2379.2 L -820.8,2221.3 L -1033.9,2033.9 L -1220.5,1820.2 L -1377.5,1584.0 L -1502.1,1329.3 L -1592.3,1060.6 L -1646.6,782.6 L -1664.1,500.0 L -1644.7,217.7 L -1588.6,-59.6 L -1497.0,-327.2 L -1371.4,-580.4 L -1213.9,-815.2 L -1027.4,-1027.4 L -814.9,-1213.6 L -580.1,-1370.7 L -326.8,-1496.0 L -59.3,-1587.3 L 217.9,-1643.0 L 500.0,-1662.3 L 782.4,-1644.7 L 1060.1,-1590.4 L 1328.6,-1500.4 L 1583.1,-1376.0 L 1819.2,-1219.3 L 2033.0,-1033.0 L 2220.5,-820.2 L 2378.7,-584.6 L 2504.6,-330.3 L 2596.0,-61.6 L 2651.4,216.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.8s", opacity: 0.12999999999999998 }} />
            <path d="M 2685.8,500.0 L 2667.8,785.4 L 2612.7,1066.1 L 2521.6,1337.4 L 2395.8,1594.5 L 2237.5,1833.2 L 2049.3,2049.3 L 1834.4,2239.1 L 1596.4,2399.1 L 1339.5,2526.7 L 1067.9,2619.5 L 786.5,2675.9 L 500.0,2694.9 L 213.5,2676.2 L -68.1,2620.1 L -339.8,2527.5 L -597.0,2400.1 L -835.2,2240.1 L -1050.3,2050.3 L -1238.7,1834.2 L -1397.1,1595.3 L -1522.9,1337.9 L -1614.1,1066.5 L -1669.0,785.6 L -1686.9,500.0 L -1667.5,214.6 L -1611.1,-65.7 L -1518.9,-336.2 L -1392.3,-592.5 L -1233.5,-830.2 L -1045.2,-1045.2 L -830.5,-1234.0 L -593.1,-1393.3 L -336.9,-1520.4 L -66.2,-1613.2 L 214.3,-1670.0 L 500.0,-1689.7 L 785.9,-1671.9 L 1067.2,-1617.0 L 1339.1,-1525.6 L 1596.7,-1399.5 L 1835.6,-1240.6 L 2051.8,-1051.8 L 2241.3,-836.1 L 2400.9,-597.5 L 2527.9,-340.0 L 2619.9,-68.0 L 2675.5,213.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.88s", opacity: 0.12799999999999997 }} />
            <path d="M 2712.7,500.0 L 2694.7,788.9 L 2639.1,1073.2 L 2546.9,1347.9 L 2419.6,1608.3 L 2259.2,1849.9 L 2068.6,2068.6 L 1850.8,2260.4 L 1609.7,2422.1 L 1349.5,2550.9 L 1074.6,2644.3 L 789.8,2701.0 L 500.0,2719.7 L 210.3,2700.3 L -74.2,2643.1 L -348.8,2549.1 L -608.5,2420.0 L -849.1,2258.2 L -1066.3,2066.3 L -1256.6,1847.9 L -1416.7,1606.6 L -1543.9,1346.6 L -1636.1,1072.4 L -1691.9,788.6 L -1710.4,500.0 L -1691.2,211.5 L -1634.7,-72.0 L -1541.9,-345.8 L -1414.3,-605.2 L -1254.0,-845.9 L -1063.8,-1063.8 L -846.8,-1255.2 L -606.6,-1416.7 L -347.3,-1545.6 L -73.3,-1639.7 L 210.7,-1697.2 L 500.0,-1717.1 L 789.5,-1699.0 L 1074.2,-1643.1 L 1349.3,-1550.4 L 1609.9,-1422.3 L 1851.4,-1261.2 L 2069.8,-1069.8 L 2261.1,-851.3 L 2422.1,-609.7 L 2550.0,-349.2 L 2642.7,-74.1 L 2698.5,210.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "6.96s", opacity: 0.12599999999999997 }} />
            <path d="M 2740.1,500.0 L 2721.9,792.5 L 2665.6,1080.3 L 2572.2,1358.3 L 2443.1,1621.8 L 2280.5,1866.2 L 2087.2,2087.2 L 1866.6,2281.0 L 1622.5,2444.2 L 1359.1,2574.0 L 1080.9,2668.0 L 792.9,2724.8 L 500.0,2743.3 L 207.3,2723.3 L -80.2,2665.2 L -357.4,2570.1 L -619.8,2439.6 L -862.8,2276.0 L -1082.3,2082.3 L -1274.6,1861.7 L -1436.6,1618.1 L -1565.4,1355.5 L -1659.1,1078.5 L -1715.9,791.7 L -1735.0,500.0 L -1716.1,208.2 L -1659.4,-78.6 L -1566.0,-355.8 L -1437.2,-618.5 L -1275.3,-862.3 L -1083.0,-1083.0 L -863.4,-1276.9 L -620.3,-1440.5 L -357.8,-1571.0 L -80.4,-1666.1 L 207.2,-1724.2 L 500.0,-1744.0 L 793.0,-1725.3 L 1081.0,-1668.4 L 1359.1,-1574.1 L 1622.5,-1444.2 L 1866.5,-1280.8 L 2086.9,-1086.9 L 2280.0,-865.8 L 2442.4,-621.4 L 2571.3,-358.0 L 2664.7,-80.0 L 2720.9,207.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.04s", opacity: 0.124 }} />
            <path d="M 2767.5,500.0 L 2748.9,796.1 L 2691.7,1087.3 L 2596.7,1368.5 L 2465.7,1634.9 L 2300.9,1881.9 L 2105.1,2105.1 L 1881.7,2300.7 L 1634.6,2465.2 L 1368.2,2596.0 L 1087.0,2690.6 L 795.9,2747.7 L 500.0,2766.1 L 204.3,2745.7 L -86.0,2687.0 L -366.1,2590.9 L -631.1,2459.2 L -876.7,2294.2 L -1098.7,2098.7 L -1293.3,1876.0 L -1457.3,1630.0 L -1588.0,1364.9 L -1683.1,1085.0 L -1741.1,795.0 L -1760.9,500.0 L -1742.2,204.8 L -1685.2,-85.5 L -1590.9,-366.1 L -1460.8,-632.1 L -1297.1,-878.9 L -1102.4,-1102.4 L -880.1,-1298.6 L -634.0,-1464.1 L -368.2,-1596.0 L -87.3,-1692.0 L 203.7,-1750.3 L 500.0,-1770.0 L 796.3,-1750.6 L 1087.5,-1692.5 L 1368.5,-1596.7 L 1634.5,-1465.0 L 1880.8,-1299.5 L 2103.3,-1103.3 L 2298.1,-879.8 L 2462.0,-632.8 L 2592.2,-366.6 L 2686.4,-85.9 L 2743.3,204.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.12s", opacity: 0.122 }} />
            <path d="M 2794.3,500.0 L 2775.1,799.5 L 2716.7,1094.0 L 2620.3,1378.3 L 2487.4,1647.4 L 2320.4,1896.8 L 2122.1,2122.1 L 1896.1,2319.4 L 1646.3,2485.4 L 1377.0,2617.2 L 1092.9,2712.6 L 798.9,2770.0 L 500.0,2788.6 L 201.4,2768.1 L -91.9,2708.9 L -374.9,2612.1 L -642.8,2479.4 L -891.2,2313.0 L -1115.8,2115.8 L -1312.8,1891.0 L -1479.1,1642.6 L -1611.6,1374.7 L -1708.3,1091.7 L -1767.3,798.5 L -1787.8,500.0 L -1769.1,201.3 L -1711.7,-92.6 L -1616.3,-376.6 L -1484.6,-645.8 L -1318.8,-895.6 L -1121.6,-1121.6 L -896.5,-1320.0 L -647.3,-1487.1 L -378.2,-1620.2 L -94.0,-1716.8 L 200.5,-1775.3 L 500.0,-1794.7 L 799.5,-1774.6 L 1093.6,-1715.5 L 1377.4,-1618.3 L 1646.0,-1484.9 L 1894.7,-1317.6 L 2119.3,-1119.3 L 2316.0,-893.5 L 2481.5,-644.0 L 2613.1,-375.3 L 2708.5,-91.8 L 2766.3,201.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.2s", opacity: 0.12 }} />
            <path d="M 2820.0,500.0 L 2800.1,802.8 L 2740.7,1100.4 L 2642.7,1387.5 L 2508.0,1659.3 L 2338.9,1911.1 L 2138.4,2138.4 L 1910.0,2337.5 L 1657.6,2505.0 L 1385.6,2638.0 L 1098.7,2734.3 L 801.8,2792.5 L 500.0,2811.5 L 198.4,2791.1 L -98.0,2731.7 L -384.0,2634.2 L -655.0,2500.5 L -906.3,2332.7 L -1133.7,2133.7 L -1333.4,1906.8 L -1501.8,1655.8 L -1636.3,1384.9 L -1734.4,1098.7 L -1794.4,802.1 L -1815.2,500.0 L -1796.3,197.7 L -1738.2,-99.7 L -1641.5,-387.0 L -1508.1,-659.4 L -1340.0,-911.9 L -1140.3,-1140.3 L -912.3,-1340.5 L -660.0,-1509.2 L -387.8,-1643.2 L -100.3,-1740.4 L 197.3,-1799.1 L 500.0,-1818.2 L 802.5,-1797.6 L 1099.6,-1737.6 L 1386.1,-1639.3 L 1657.3,-1504.4 L 1908.4,-1335.5 L 2135.3,-1135.3 L 2334.1,-907.3 L 2501.5,-655.6 L 2634.7,-384.2 L 2731.5,-97.9 L 2790.3,198.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.28s", opacity: 0.118 }} />
            <path d="M 2844.5,500.0 L 2823.9,806.0 L 2763.5,1106.5 L 2664.2,1396.4 L 2527.9,1670.8 L 2356.9,1924.9 L 2154.4,2154.4 L 1923.7,2355.4 L 1668.9,2524.5 L 1394.3,2659.0 L 1104.6,2756.6 L 804.9,2815.6 L 500.0,2835.2 L 195.2,2815.0 L -104.3,2755.5 L -393.7,2657.5 L -667.8,2522.7 L -922.2,2353.4 L -1152.4,2152.4 L -1354.7,1923.1 L -1525.4,1669.3 L -1661.6,1395.4 L -1760.9,1105.8 L -1821.6,805.6 L -1842.5,500.0 L -1823.3,194.1 L -1764.2,-106.7 L -1666.1,-397.2 L -1530.7,-672.4 L -1360.4,-927.5 L -1158.1,-1158.1 L -927.3,-1360.2 L -672.1,-1530.2 L -396.9,-1665.2 L -106.4,-1763.0 L 194.3,-1821.9 L 500.0,-1841.0 L 805.4,-1820.0 L 1105.4,-1759.3 L 1394.7,-1660.1 L 1668.6,-1524.1 L 1922.3,-1353.6 L 2151.7,-1151.7 L 2352.8,-921.7 L 2522.2,-667.5 L 2657.3,-393.6 L 2755.6,-104.4 L 2815.5,195.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.36s", opacity: 0.11599999999999999 }} />
            <path d="M 2867.9,500.0 L 2846.8,809.0 L 2785.5,1112.4 L 2685.1,1405.1 L 2547.4,1682.1 L 2374.8,1938.6 L 2170.4,2170.4 L 1937.6,2373.5 L 1680.4,2544.6 L 1403.3,2680.7 L 1110.8,2779.7 L 808.0,2839.8 L 500.0,2860.1 L 191.9,2840.2 L -111.0,2780.4 L -403.7,2681.8 L -681.2,2545.8 L -938.6,2374.9 L -1171.7,2171.7 L -1376.4,1939.8 L -1549.2,1683.1 L -1686.9,1405.9 L -1787.3,1112.9 L -1848.4,809.2 L -1869.3,500.0 L -1849.4,190.7 L -1789.2,-113.4 L -1689.6,-407.0 L -1552.3,-684.9 L -1379.8,-942.4 L -1175.1,-1175.1 L -941.7,-1378.9 L -683.7,-1550.3 L -405.6,-1686.4 L -112.2,-1784.9 L 191.4,-1844.3 L 500.0,-1863.6 L 808.4,-1842.4 L 1111.3,-1781.3 L 1403.6,-1681.4 L 1680.3,-1544.3 L 1936.8,-1372.5 L 2168.8,-1168.8 L 2372.3,-936.7 L 2544.0,-680.1 L 2681.0,-403.4 L 2780.8,-111.1 L 2841.8,191.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.44s", opacity: 0.11399999999999999 }} />
            <path d="M 2890.6,500.0 L 2869.2,811.9 L 2807.2,1118.2 L 2706.0,1413.7 L 2567.1,1693.4 L 2393.1,1952.6 L 2186.9,2186.9 L 1952.0,2392.3 L 1692.5,2565.5 L 1412.7,2703.5 L 1117.3,2804.0 L 811.4,2865.2 L 500.0,2886.2 L 188.4,2866.5 L -118.0,2806.4 L -414.1,2706.9 L -694.8,2569.5 L -955.3,2396.6 L -1191.1,2191.1 L -1398.1,1956.5 L -1572.7,1696.7 L -1711.8,1416.2 L -1812.9,1119.8 L -1874.4,812.6 L -1895.0,500.0 L -1874.4,187.4 L -1813.1,-119.8 L -1712.0,-416.2 L -1572.9,-696.8 L -1398.4,-956.7 L -1191.4,-1191.4 L -955.6,-1396.9 L -695.0,-1569.8 L -414.2,-1707.2 L -118.1,-1806.7 L 188.4,-1866.8 L 500.0,-1886.4 L 811.4,-1865.4 L 1117.4,-1804.1 L 1412.7,-1703.5 L 1692.5,-1565.5 L 1952.0,-1392.2 L 2186.8,-1186.8 L 2392.9,-952.5 L 2566.9,-693.3 L 2705.7,-413.6 L 2806.9,-118.1 L 2868.8,188.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.5200000000000005s", opacity: 0.11199999999999999 }} />
            <path d="M 2913.2,500.0 L 2891.6,814.9 L 2829.3,1124.1 L 2727.3,1422.6 L 2587.5,1705.2 L 2412.1,1967.2 L 2204.1,2204.1 L 1967.2,2412.1 L 1705.2,2587.5 L 1422.6,2727.4 L 1124.2,2829.4 L 814.9,2891.7 L 500.0,2913.2 L 184.9,2893.5 L -125.1,2832.9 L -424.6,2732.2 L -708.6,2593.3 L -972.0,2418.3 L -1210.3,2210.3 L -1419.4,1972.8 L -1595.5,1709.9 L -1735.7,1426.1 L -1837.5,1126.3 L -1899.1,815.9 L -1919.5,500.0 L -1898.2,184.3 L -1835.8,-125.9 L -1733.4,-425.1 L -1592.8,-708.3 L -1416.4,-970.5 L -1207.3,-1207.3 L -969.3,-1414.8 L -706.3,-1589.4 L -423.0,-1728.2 L -124.0,-1828.9 L 185.4,-1889.9 L 500.0,-1910.2 L 814.6,-1889.4 L 1123.8,-1827.9 L 1422.4,-1726.8 L 1705.3,-1587.7 L 1967.9,-1413.0 L 2205.5,-1205.5 L 2414.2,-968.8 L 2590.4,-706.9 L 2730.9,-424.1 L 2833.4,-125.2 L 2896.0,184.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.6000000000000005s", opacity: 0.10999999999999999 }} />
            <path d="M 2936.2,500.0 L 2914.8,817.9 L 2852.2,1130.3 L 2749.7,1431.8 L 2608.8,1717.5 L 2432.0,1982.5 L 2222.2,2222.2 L 1983.1,2432.8 L 1718.5,2610.4 L 1432.9,2752.2 L 1131.2,2855.6 L 818.4,2918.8 L 500.0,2940.7 L 181.3,2920.8 L -132.2,2859.3 L -435.0,2757.4 L -722.0,2616.6 L -988.1,2439.4 L -1228.8,2228.8 L -1439.7,1988.4 L -1617.4,1722.5 L -1758.6,1435.5 L -1860.9,1132.6 L -1922.7,819.0 L -1942.9,500.0 L -1921.1,181.3 L -1857.9,-131.8 L -1754.3,-433.8 L -1612.3,-719.5 L -1434.3,-984.2 L -1223.4,-1223.4 L -983.2,-1433.0 L -717.9,-1609.5 L -432.0,-1750.0 L -130.2,-1852.1 L 182.2,-1914.2 L 500.0,-1935.1 L 817.9,-1914.6 L 1130.5,-1852.9 L 1432.4,-1751.1 L 1718.7,-1610.8 L 1984.3,-1434.4 L 2224.8,-1224.8 L 2436.0,-985.5 L 2614.2,-720.6 L 2756.3,-434.6 L 2859.8,-132.3 L 2922.9,181.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.68s", opacity: 0.10799999999999998 }} />
            <path d="M 2960.1,500.0 L 2939.0,821.1 L 2876.3,1136.7 L 2773.1,1441.6 L 2631.2,1730.4 L 2452.9,1998.5 L 2241.1,2241.1 L 1999.5,2454.2 L 1732.1,2634.0 L 1443.4,2777.5 L 1138.3,2882.1 L 822.0,2946.0 L 500.0,2968.0 L 177.8,2947.6 L -139.1,2885.2 L -445.1,2781.7 L -735.0,2639.0 L -1003.6,2459.6 L -1246.4,2246.4 L -1459.2,2003.3 L -1638.2,1734.5 L -1780.4,1444.6 L -1883.4,1138.6 L -1945.4,821.9 L -1965.5,500.0 L -1943.5,178.3 L -1879.6,-137.6 L -1775.2,-442.4 L -1632.0,-730.9 L -1452.5,-998.2 L -1239.9,-1239.9 L -997.7,-1451.8 L -730.0,-1630.4 L -441.4,-1772.8 L -136.8,-1876.4 L 178.8,-1939.6 L 500.0,-1961.2 L 821.4,-1940.9 L 1137.4,-1878.9 L 1442.8,-1776.2 L 1732.4,-1634.5 L 2001.1,-1456.2 L 2244.2,-1244.2 L 2457.7,-1002.2 L 2637.7,-734.2 L 2781.1,-444.9 L 2885.4,-139.2 L 2948.7,177.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.76s", opacity: 0.10599999999999998 }} />
            <path d="M 2985.2,500.0 L 2964.4,824.4 L 2901.5,1143.5 L 2797.6,1451.7 L 2654.5,1743.9 L 2474.4,2015.0 L 2260.5,2260.5 L 2016.2,2476.0 L 1745.8,2657.8 L 1453.9,2802.8 L 1145.3,2908.4 L 825.5,2972.7 L 500.0,2994.5 L 174.4,2973.5 L -145.8,2910.0 L -454.8,2805.0 L -747.3,2660.5 L -1018.4,2478.8 L -1263.2,2263.2 L -1477.7,2017.6 L -1658.1,1746.0 L -1801.4,1453.3 L -1905.2,1144.5 L -1967.7,824.9 L -1988.1,500.0 L -1965.9,175.4 L -1901.7,-143.5 L -1796.6,-451.3 L -1652.4,-742.7 L -1471.5,-1012.8 L -1257.2,-1257.2 L -1012.8,-1471.6 L -742.7,-1652.5 L -451.3,-1796.7 L -143.6,-1901.9 L 175.3,-1966.1 L 500.0,-1988.3 L 824.9,-1968.0 L 1144.5,-1905.4 L 1453.4,-1801.6 L 1746.1,-1658.3 L 2017.7,-1477.9 L 2263.4,-1263.4 L 2478.9,-1018.5 L 2660.5,-747.4 L 2805.0,-454.8 L 2910.0,-145.7 L 2973.5,174.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.84s", opacity: 0.10399999999999998 }} />
            <path d="M 3011.5,500.0 L 2990.8,827.9 L 2927.6,1150.5 L 2822.8,1462.1 L 2678.2,1757.6 L 2496.2,2031.7 L 2279.9,2279.9 L 2032.8,2497.6 L 1759.4,2681.3 L 1464.1,2827.5 L 1152.2,2933.9 L 828.9,2998.4 L 500.0,3020.0 L 171.1,2998.3 L -152.1,2933.6 L -464.0,2827.2 L -759.1,2680.9 L -1032.5,2497.2 L -1279.4,2279.4 L -1495.7,2031.4 L -1677.7,1757.3 L -1822.2,1461.9 L -1927.0,1150.3 L -1990.3,827.9 L -2011.1,500.0 L -1989.1,172.3 L -1924.7,-149.7 L -1819.0,-460.5 L -1673.8,-755.0 L -1491.5,-1028.1 L -1275.3,-1275.3 L -1028.8,-1492.3 L -756.0,-1675.4 L -461.6,-1821.6 L -150.6,-1928.1 L 171.8,-1993.2 L 500.0,-2015.8 L 828.5,-1995.2 L 1151.6,-1931.8 L 1463.8,-1826.7 L 1759.5,-1681.6 L 2033.8,-1498.9 L 2281.8,-1281.8 L 2499.2,-1034.1 L 2682.3,-760.0 L 2827.8,-464.2 L 2933.3,-152.0 L 2997.0,171.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "7.92s", opacity: 0.10199999999999998 }} />
            <path d="M 3038.7,500.0 L 3017.9,831.5 L 2954.1,1157.6 L 2848.2,1472.6 L 2701.9,1771.3 L 2517.8,2048.3 L 2298.9,2298.9 L 2049.0,2518.7 L 1772.4,2703.9 L 1473.9,2851.3 L 1158.7,2958.2 L 832.1,3022.9 L 500.0,3044.2 L 168.0,3021.9 L -158.1,2956.2 L -472.8,2848.5 L -770.5,2700.6 L -1046.3,2515.1 L -1295.4,2295.4 L -1513.6,2045.1 L -1697.3,1768.6 L -1843.4,1470.7 L -1949.4,1156.3 L -2013.7,830.9 L -2035.1,500.0 L -2013.3,169.1 L -1948.7,-156.1 L -1842.4,-470.3 L -1696.2,-768.0 L -1512.4,-1044.2 L -1294.2,-1294.2 L -1045.2,-1513.8 L -769.6,-1699.1 L -472.1,-1846.9 L -157.7,-1954.7 L 168.2,-2020.4 L 500.0,-2043.0 L 832.0,-2022.0 L 1158.5,-1957.6 L 1473.8,-1851.0 L 1772.5,-1704.0 L 2049.3,-1519.1 L 2299.4,-1299.4 L 2518.6,-1049.0 L 2703.1,-771.9 L 2849.6,-473.2 L 2955.7,-158.0 L 3019.7,168.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.0s", opacity: 0.09999999999999998 }} />
            <path d="M 3066.2,500.0 L 3045.1,835.1 L 2980.5,1164.6 L 2873.2,1483.0 L 2725.1,1784.6 L 2538.7,2064.3 L 2317.2,2317.2 L 2064.5,2538.9 L 1784.9,2725.5 L 1483.3,2873.9 L 1164.9,2981.4 L 835.2,3046.3 L 500.0,3067.4 L 165.0,3044.6 L -164.0,2978.1 L -481.4,2869.3 L -781.8,2720.1 L -1060.0,2533.1 L -1311.5,2311.5 L -1531.9,2059.1 L -1717.5,1780.3 L -1865.3,1479.7 L -1972.8,1162.6 L -2038.1,834.2 L -2060.3,500.0 L -2038.8,165.8 L -1974.0,-162.9 L -1867.0,-480.4 L -1719.5,-781.4 L -1534.0,-1060.7 L -1313.6,-1313.6 L -1061.9,-1535.5 L -783.4,-1722.8 L -482.6,-1872.2 L -164.8,-1980.9 L 164.7,-2047.1 L 500.0,-2069.6 L 835.4,-2047.9 L 1165.2,-1982.4 L 1483.5,-1874.3 L 1784.8,-1725.4 L 2064.0,-1538.3 L 2316.2,-1316.2 L 2537.2,-1063.2 L 2723.0,-783.5 L 2870.6,-481.9 L 2977.6,-163.9 L 3042.0,165.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.08s", opacity: 0.09799999999999998 }} />
            <path d="M 3093.4,500.0 L 3071.8,838.6 L 3006.1,1171.5 L 2897.3,1493.0 L 2747.3,1797.5 L 2558.7,2079.7 L 2334.7,2334.7 L 2079.3,2558.1 L 1796.8,2746.1 L 1492.2,2895.5 L 1170.9,3003.7 L 838.2,3068.9 L 500.0,3090.0 L 162.1,3066.9 L -169.8,2999.9 L -490.1,2890.3 L -793.2,2739.9 L -1074.1,2551.5 L -1328.1,2328.1 L -1550.9,2073.7 L -1738.7,1792.5 L -1888.3,1489.3 L -1997.3,1169.2 L -2063.8,837.5 L -2086.6,500.0 L -2065.3,162.3 L -2000.1,-169.9 L -1892.2,-490.9 L -1743.2,-795.1 L -1555.8,-1077.4 L -1332.9,-1332.9 L -1078.5,-1557.2 L -796.9,-1746.3 L -492.8,-1896.9 L -171.6,-2006.3 L 161.3,-2072.8 L 500.0,-2095.0 L 838.7,-2072.6 L 1171.5,-2006.0 L 1492.6,-1896.4 L 1796.6,-1745.8 L 2078.1,-1556.7 L 2332.4,-1332.4 L 2555.1,-1077.0 L 2742.5,-794.7 L 2891.4,-490.6 L 2999.4,-169.7 L 3064.6,162.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.16s", opacity: 0.09599999999999997 }} />
            <path d="M 3119.7,500.0 L 3097.5,842.0 L 3030.7,1178.1 L 2920.4,1502.6 L 2768.5,1809.7 L 2577.7,2094.3 L 2351.4,2351.4 L 2093.4,2576.5 L 1808.3,2766.0 L 1500.9,2916.4 L 1176.7,3025.4 L 841.1,3091.2 L 500.0,3112.6 L 159.1,3089.5 L -175.8,3022.1 L -499.0,2911.8 L -805.1,2760.5 L -1088.9,2570.7 L -1345.6,2345.6 L -1570.9,2089.0 L -1760.9,1805.3 L -1912.5,1499.3 L -2023.0,1176.0 L -2090.5,841.0 L -2113.8,500.0 L -2092.4,158.7 L -2026.6,-177.0 L -1917.5,-501.4 L -1766.9,-808.8 L -1577.3,-1094.0 L -1352.0,-1352.0 L -1094.7,-1578.2 L -809.9,-1768.9 L -502.6,-1920.6 L -178.1,-2030.6 L 158.1,-2097.2 L 500.0,-2119.2 L 841.8,-2096.2 L 1177.5,-2028.6 L 1501.4,-1917.7 L 1808.0,-1765.5 L 2091.9,-1574.6 L 2348.3,-1348.3 L 2573.0,-1090.7 L 2762.2,-806.1 L 2912.6,-499.3 L 3021.8,-175.7 L 3088.0,159.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.24s", opacity: 0.09399999999999997 }} />
            <path d="M 3144.9,500.0 L 3122.0,845.2 L 3054.1,1184.4 L 2942.4,1511.7 L 2788.8,1821.4 L 2596.0,2108.3 L 2367.5,2367.5 L 2107.2,2594.5 L 1819.5,2785.5 L 1509.6,2937.3 L 1182.6,3047.3 L 844.1,3113.9 L 500.0,3135.8 L 156.0,3112.8 L -182.0,3045.3 L -508.4,2934.4 L -817.6,2782.1 L -1104.4,2590.8 L -1363.9,2363.9 L -1591.8,2105.1 L -1784.0,1818.7 L -1937.5,1509.6 L -2049.3,1183.1 L -2117.7,844.6 L -2141.2,500.0 L -2119.6,155.1 L -2053.0,-184.1 L -1942.5,-511.7 L -1790.1,-822.2 L -1598.2,-1110.0 L -1370.3,-1370.3 L -1110.2,-1598.4 L -822.4,-1790.5 L -512.0,-1943.1 L -184.3,-2053.8 L 155.0,-2120.6 L 500.0,-2142.4 L 844.8,-2118.8 L 1183.4,-2050.5 L 1510.1,-1938.5 L 1819.2,-1785.0 L 2105.6,-1592.5 L 2364.5,-1364.5 L 2591.3,-1104.7 L 2782.4,-817.8 L 2934.6,-508.4 L 3045.2,-182.0 L 3112.5,156.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.32s", opacity: 0.09199999999999997 }} />
            <path d="M 3168.9,500.0 L 3145.4,848.3 L 3076.5,1190.4 L 2963.5,1520.4 L 2808.4,1832.8 L 2613.9,2122.1 L 2383.4,2383.4 L 2120.9,2612.4 L 1830.9,2805.2 L 1518.4,2958.5 L 1188.6,3069.9 L 847.2,3137.4 L 500.0,3160.0 L 152.8,3137.3 L -188.5,3069.6 L -518.2,2958.1 L -830.6,2804.7 L -1120.5,2611.9 L -1382.9,2382.9 L -1613.3,2121.6 L -1807.7,1832.4 L -1962.8,1520.1 L -2075.9,1190.2 L -2144.8,848.2 L -2168.4,500.0 L -2146.2,151.6 L -2078.6,-190.9 L -1966.6,-521.7 L -1812.3,-835.0 L -1618.2,-1125.3 L -1387.7,-1387.7 L -1124.9,-1617.6 L -834.3,-1811.0 L -520.9,-1964.7 L -190.2,-2076.0 L 152.0,-2143.1 L 500.0,-2165.0 L 847.7,-2141.2 L 1189.2,-2072.3 L 1518.8,-1959.5 L 1830.7,-1804.8 L 2119.8,-1610.9 L 2381.1,-1381.1 L 2610.4,-1119.3 L 2803.6,-830.0 L 2957.7,-518.0 L 3069.8,-188.6 L 3138.2,152.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.4s", opacity: 0.09 }} />
            <path d="M 3192.0,500.0 L 3168.0,851.2 L 3098.4,1196.2 L 2984.4,1529.1 L 2828.0,1844.0 L 2631.9,2135.9 L 2399.6,2399.6 L 2135.0,2630.8 L 1842.7,2825.6 L 1527.5,2980.7 L 1194.9,3093.5 L 850.5,3162.2 L 500.0,3185.4 L 149.4,3163.0 L -195.3,3095.1 L -528.4,2982.8 L -844.1,2828.1 L -1137.1,2633.5 L -1402.3,2402.3 L -1635.1,2138.3 L -1831.5,1846.1 L -1988.0,1530.6 L -2102.0,1197.2 L -2171.3,851.7 L -2194.7,500.0 L -2171.9,148.2 L -2103.2,-197.5 L -1989.7,-531.3 L -1833.4,-847.2 L -1637.2,-1139.9 L -1404.4,-1404.4 L -1139.0,-1636.0 L -845.7,-1830.8 L -529.6,-1985.7 L -196.1,-2097.8 L 149.1,-2165.5 L 500.0,-2187.6 L 850.7,-2163.8 L 1195.2,-2094.5 L 1527.7,-1981.1 L 1842.6,-1825.4 L 2134.5,-1630.2 L 2398.6,-1398.6 L 2630.4,-1134.7 L 2825.9,-842.9 L 2981.8,-528.0 L 3095.5,-195.5 L 3164.9,149.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.48s", opacity: 0.088 }} />
            <path d="M 3214.5,500.0 L 3190.3,854.2 L 3120.2,1202.1 L 3005.4,1537.8 L 2847.9,1855.6 L 2650.4,2150.1 L 2416.4,2416.4 L 2149.8,2650.0 L 1855.0,2847.0 L 1537.2,3004.0 L 1201.6,3118.3 L 853.9,3188.1 L 500.0,3212.0 L 145.9,3189.6 L -202.4,3121.3 L -538.9,3008.1 L -857.9,2851.9 L -1153.8,2655.3 L -1421.6,2421.6 L -1656.7,2154.9 L -1854.8,1859.5 L -2012.6,1540.7 L -2127.2,1204.0 L -2196.7,855.0 L -2219.9,500.0 L -2196.4,145.0 L -2126.5,-203.8 L -2011.6,-540.3 L -1853.7,-858.9 L -1655.5,-1153.9 L -1420.5,-1420.5 L -1152.8,-1653.9 L -857.0,-1850.4 L -538.2,-2006.5 L -202.0,-2119.7 L 146.1,-2188.2 L 500.0,-2210.8 L 853.8,-2187.1 L 1201.4,-2117.7 L 1537.1,-2003.7 L 1855.1,-1847.1 L 2150.0,-1650.4 L 2417.0,-1417.0 L 2651.3,-1150.8 L 2849.1,-856.2 L 3006.8,-538.4 L 3121.9,-202.5 L 3192.1,145.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.56s", opacity: 0.086 }} />
            <path d="M 3237.2,500.0 L 3213.0,857.2 L 3142.6,1208.1 L 3027.1,1546.8 L 2868.6,1867.5 L 2669.8,2165.0 L 2434.0,2434.0 L 2165.2,2670.2 L 1868.0,2869.4 L 1547.3,3028.3 L 1208.5,3144.1 L 857.4,3214.9 L 500.0,3239.3 L 142.3,3216.8 L -209.5,3147.8 L -549.4,3033.4 L -871.5,2875.5 L -1170.3,2676.8 L -1440.5,2440.5 L -1677.6,2170.9 L -1877.2,1872.5 L -2036.0,1550.5 L -2151.3,1210.4 L -2221.0,858.2 L -2243.9,500.0 L -2219.7,141.9 L -2148.9,-209.8 L -2032.8,-549.1 L -1873.3,-870.2 L -1673.4,-1167.7 L -1436.4,-1436.4 L -1166.5,-1671.9 L -868.4,-1870.1 L -547.0,-2027.8 L -208.0,-2142.3 L 143.0,-2211.8 L 500.0,-2235.0 L 857.0,-2211.6 L 1207.9,-2142.1 L 1546.9,-2027.5 L 1868.2,-1869.7 L 2166.2,-1671.4 L 2436.0,-1436.0 L 2672.9,-1167.3 L 2872.8,-869.9 L 3032.2,-548.9 L 3148.4,-209.6 L 3219.2,142.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.64s", opacity: 0.08399999999999999 }} />
            <path d="M 3260.6,500.0 L 3236.6,860.3 L 3166.0,1214.3 L 3049.9,1556.2 L 2890.5,1880.1 L 2690.2,2180.6 L 2452.5,2452.5 L 2181.4,2691.2 L 1881.4,2892.7 L 1557.6,3053.4 L 1215.6,3170.5 L 861.0,3242.1 L 500.0,3266.7 L 138.8,3243.9 L -216.5,3174.1 L -559.7,3058.3 L -884.8,2898.5 L -1186.2,2697.5 L -1458.7,2458.7 L -1697.5,2186.2 L -1898.6,1884.8 L -2058.4,1559.7 L -2174.2,1216.6 L -2244.1,861.3 L -2266.9,500.0 L -2242.3,139.0 L -2170.7,-215.6 L -2053.6,-557.7 L -1892.8,-881.5 L -1691.4,-1181.5 L -1452.6,-1452.6 L -1180.6,-1690.3 L -880.2,-1890.5 L -556.2,-2050.0 L -214.3,-2166.0 L 139.7,-2236.5 L 500.0,-2260.5 L 860.4,-2237.4 L 1214.8,-2167.6 L 1557.1,-2052.2 L 1881.7,-1893.1 L 2182.8,-1693.1 L 2455.4,-1455.4 L 2694.7,-1184.0 L 2896.5,-883.6 L 3057.4,-559.3 L 3174.5,-216.6 L 3245.7,138.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.72s", opacity: 0.08199999999999999 }} />
            <path d="M 3285.0,500.0 L 3261.3,863.5 L 3190.5,1220.9 L 3073.9,1566.1 L 2913.3,1893.3 L 2711.4,2196.9 L 2471.6,2471.6 L 2198.0,2712.9 L 1895.1,2916.4 L 1568.2,3078.8 L 1222.7,3197.0 L 864.6,3269.1 L 500.0,3293.8 L 135.3,3270.4 L -223.3,3199.5 L -569.6,3082.2 L -897.5,2920.5 L -1201.4,2717.3 L -1476.0,2476.0 L -1716.5,2200.8 L -1919.0,1896.6 L -2079.8,1568.6 L -2196.3,1222.5 L -2266.6,864.2 L -2289.5,500.0 L -2264.6,136.0 L -2192.6,-221.5 L -2074.6,-566.4 L -1912.8,-893.0 L -1709.9,-1195.7 L -1469.4,-1469.4 L -1195.4,-1709.5 L -892.5,-1911.9 L -565.9,-2073.3 L -221.0,-2190.8 L 136.3,-2262.5 L 500.0,-2287.0 L 863.9,-2264.1 L 1221.8,-2193.8 L 1567.6,-2077.5 L 1895.4,-1916.9 L 2199.5,-1714.9 L 2474.7,-1474.7 L 2716.2,-1200.6 L 2919.8,-897.1 L 3081.9,-569.4 L 3199.7,-223.4 L 3271.1,135.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.8s", opacity: 0.07999999999999999 }} />
            <path d="M 3310.7,500.0 L 3287.2,866.9 L 3216.2,1227.8 L 3098.7,1576.4 L 2936.8,1906.9 L 2733.1,2213.5 L 2491.0,2491.0 L 2214.7,2734.7 L 1908.8,2940.1 L 1578.6,3103.9 L 1229.6,3223.0 L 868.0,3295.4 L 500.0,3319.9 L 131.9,3295.9 L -229.8,3223.8 L -579.0,3105.0 L -909.6,2941.5 L -1215.8,2736.1 L -1492.5,2492.5 L -1734.8,2214.8 L -1938.7,1908.0 L -2100.7,1577.2 L -2218.1,1228.3 L -2288.9,867.2 L -2312.1,500.0 L -2287.3,133.0 L -2215.0,-227.5 L -2096.4,-575.5 L -1933.6,-905.0 L -1729.3,-1210.6 L -1487.1,-1487.1 L -1210.9,-1729.7 L -905.5,-1934.4 L -576.0,-2097.6 L -227.9,-2216.6 L 132.8,-2289.3 L 500.0,-2314.3 L 867.5,-2291.3 L 1228.9,-2220.4 L 1578.1,-2102.8 L 1909.0,-1940.5 L 2216.0,-1736.3 L 2493.6,-1493.6 L 2737.1,-1216.6 L 2942.2,-910.0 L 3105.3,-579.2 L 3223.7,-229.8 L 3295.3,132.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.88s", opacity: 0.07799999999999999 }} />
            <path d="M 3337.4,500.0 L 3314.0,870.5 L 3242.5,1234.9 L 3124.1,1586.9 L 2960.6,1920.6 L 2754.9,2230.2 L 2510.3,2510.3 L 2231.2,2756.1 L 1922.2,2963.3 L 1588.6,3128.2 L 1236.3,3248.0 L 871.3,3320.6 L 500.0,3344.8 L 128.7,3320.1 L -236.1,3247.0 L -588.0,3126.8 L -921.2,2961.6 L -1229.8,2754.3 L -1508.5,2508.5 L -1752.7,2228.5 L -1958.2,1919.2 L -2121.6,1585.9 L -2240.1,1234.2 L -2311.8,870.2 L -2335.5,500.0 L -2310.9,129.9 L -2238.4,-233.8 L -2119.2,-584.9 L -1955.4,-917.6 L -1749.7,-1226.3 L -1505.6,-1505.6 L -1227.1,-1750.8 L -919.0,-1957.7 L -586.4,-2122.8 L -235.0,-2243.1 L 129.2,-2316.5 L 500.0,-2341.8 L 871.0,-2318.4 L 1235.9,-2246.6 L 1588.4,-2127.6 L 1922.3,-1963.5 L 2231.9,-1757.0 L 2511.7,-1511.7 L 2757.0,-1231.9 L 2963.5,-922.3 L 3127.6,-588.4 L 3246.6,-236.0 L 3318.4,129.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "8.96s", opacity: 0.07599999999999998 }} />
            <path d="M 3364.8,500.0 L 3341.2,874.1 L 3269.0,1242.0 L 3149.3,1597.4 L 2984.1,1934.2 L 2776.2,2246.6 L 2529.1,2529.1 L 2247.1,2776.8 L 1935.0,2985.5 L 1598.3,3151.5 L 1242.7,3271.9 L 874.5,3344.6 L 500.0,3368.6 L 125.7,3343.2 L -242.0,3269.2 L -596.7,3147.8 L -932.5,2981.1 L -1243.5,2772.1 L -1524.5,2524.5 L -1770.7,2242.4 L -1978.0,1930.7 L -2143.0,1594.8 L -2262.9,1240.3 L -2335.6,873.3 L -2360.0,500.0 L -2335.7,126.7 L -2263.0,-240.3 L -2143.2,-594.9 L -1978.3,-930.8 L -1770.9,-1242.6 L -1524.7,-1524.7 L -1243.7,-1772.4 L -932.7,-1981.5 L -596.9,-2148.1 L -242.1,-2269.6 L 125.6,-2343.6 L 500.0,-2368.8 L 874.5,-2344.8 L 1242.8,-2272.0 L 1598.3,-2151.5 L 1935.0,-1985.5 L 2247.0,-1776.8 L 2529.0,-1529.0 L 2776.0,-1246.4 L 2983.9,-934.1 L 3149.0,-597.3 L 3268.7,-241.9 L 3340.9,126.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.040000000000001s", opacity: 0.07399999999999998 }} />
            <path d="M 3392.2,500.0 L 3368.3,877.6 L 3295.2,1249.0 L 3174.0,1607.6 L 3006.9,1947.4 L 2796.7,2262.3 L 2547.1,2547.1 L 2262.2,2796.6 L 1947.2,3006.7 L 1607.4,3173.6 L 1248.8,3294.6 L 877.5,3367.6 L 500.0,3391.4 L 122.7,3365.7 L -247.8,3291.0 L -605.4,3168.6 L -943.8,3000.7 L -1257.3,2790.2 L -1540.7,2540.7 L -1789.2,2256.6 L -1998.6,1942.6 L -2165.4,1604.0 L -2286.7,1246.7 L -2360.6,876.6 L -2385.7,500.0 L -2361.6,123.3 L -2288.7,-247.2 L -2168.1,-605.2 L -2001.8,-944.4 L -1792.7,-1259.2 L -1544.1,-1544.1 L -1260.4,-1794.2 L -946.3,-2005.1 L -607.3,-2173.2 L -249.1,-2295.5 L 122.2,-2369.8 L 500.0,-2394.9 L 877.9,-2370.2 L 1249.3,-2296.3 L 1607.7,-2174.3 L 1947.1,-2006.4 L 2261.4,-1795.6 L 2545.5,-1545.5 L 2794.2,-1260.4 L 3003.6,-945.4 L 3169.9,-605.9 L 3290.4,-247.7 L 3363.2,123.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.120000000000001s", opacity: 0.07199999999999998 }} />
            <path d="M 3419.1,500.0 L 3394.6,881.1 L 3320.4,1255.7 L 3197.7,1617.4 L 3028.7,1960.0 L 2816.3,2277.4 L 2564.2,2564.2 L 2276.7,2815.4 L 1958.9,3026.9 L 1616.3,3194.9 L 1254.7,3316.6 L 880.5,3390.0 L 500.0,3414.0 L 119.8,3388.1 L -253.7,3312.9 L -614.1,3189.8 L -955.4,3020.8 L -1271.7,2808.9 L -1557.7,2557.7 L -1808.7,2271.5 L -2020.3,1955.1 L -2188.9,1613.8 L -2311.8,1253.4 L -2386.7,880.0 L -2412.5,500.0 L -2388.4,119.7 L -2315.0,-254.3 L -2193.4,-615.7 L -2025.6,-958.2 L -1814.4,-1275.9 L -1563.4,-1563.4 L -1276.9,-1815.7 L -959.7,-2028.3 L -617.3,-2197.5 L -255.7,-2320.5 L 118.9,-2395.0 L 500.0,-2419.8 L 881.1,-2394.4 L 1255.4,-2319.4 L 1616.7,-2196.0 L 1958.6,-2026.4 L 2275.4,-1813.7 L 2561.5,-1561.5 L 2812.1,-1274.2 L 3023.1,-956.7 L 3190.8,-614.6 L 3312.5,-253.6 L 3386.1,120.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.200000000000001s", opacity: 0.06999999999999998 }} />
            <path d="M 3445.0,500.0 L 3419.8,884.4 L 3344.5,1262.2 L 3220.3,1626.8 L 3049.5,1971.9 L 2835.0,2291.7 L 2580.6,2580.6 L 2290.6,2833.6 L 1970.2,3046.5 L 1624.9,3215.7 L 1260.5,3338.3 L 883.4,3412.4 L 500.0,3436.7 L 116.8,3410.9 L -259.8,3335.5 L -623.2,3211.7 L -967.5,3041.8 L -1286.7,2828.5 L -1575.6,2575.6 L -1829.1,2287.1 L -2042.9,1968.2 L -2213.5,1624.0 L -2337.8,1260.4 L -2413.7,883.6 L -2439.8,500.0 L -2415.7,116.1 L -2341.6,-261.4 L -2218.7,-626.1 L -2049.1,-971.7 L -1835.7,-1292.3 L -1582.1,-1582.1 L -1292.7,-1836.3 L -972.5,-2050.4 L -627.0,-2220.7 L -262.1,-2344.3 L 115.7,-2418.9 L 500.0,-2443.5 L 884.1,-2417.5 L 1261.4,-2341.6 L 1625.4,-2217.0 L 1969.9,-2046.0 L 2289.1,-1831.6 L 2577.4,-1577.4 L 2830.1,-1288.0 L 3042.9,-968.2 L 3212.3,-623.5 L 3335.3,-259.7 L 3409.9,116.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.28s", opacity: 0.06799999999999998 }} />
            <path d="M 3469.6,500.0 L 3443.8,887.6 L 3367.4,1268.3 L 3241.9,1635.7 L 3069.4,1983.5 L 2853.0,2305.6 L 2596.5,2596.5 L 2304.3,2851.5 L 1981.5,3066.0 L 1633.6,3236.7 L 1266.5,3360.5 L 886.5,3435.4 L 500.0,3460.3 L 113.6,3434.7 L -266.1,3359.1 L -632.8,3234.8 L -980.2,3063.8 L -1302.5,2849.1 L -1594.2,2594.2 L -1850.3,2303.4 L -2066.4,1981.7 L -2238.7,1634.4 L -2364.3,1267.5 L -2440.9,887.2 L -2467.3,500.0 L -2442.7,112.6 L -2367.7,-268.4 L -2243.4,-636.3 L -2071.9,-984.9 L -1856.2,-1308.0 L -1600.1,-1600.1 L -1307.9,-1856.1 L -984.7,-2071.6 L -636.1,-2242.8 L -268.2,-2367.0 L 112.7,-2441.9 L 500.0,-2466.4 L 887.1,-2440.0 L 1267.2,-2363.4 L 1634.0,-2237.8 L 1981.2,-2065.6 L 2303.0,-1849.7 L 2593.7,-1593.7 L 2848.7,-1302.2 L 3063.6,-980.1 L 3234.7,-632.7 L 3359.2,-266.1 L 3435.0,113.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.36s", opacity: 0.06599999999999998 }} />
            <path d="M 3493.2,500.0 L 3466.8,890.6 L 3389.5,1274.2 L 3262.8,1644.4 L 3088.9,1994.7 L 2870.9,2319.3 L 2612.5,2612.5 L 2318.2,2869.5 L 1993.0,3086.0 L 1642.5,3258.3 L 1272.6,3383.5 L 889.6,3459.5 L 500.0,3485.0 L 110.3,3459.7 L -272.8,3384.0 L -642.8,3259.0 L -993.5,3086.9 L -1318.9,2870.5 L -1613.4,2613.4 L -1872.0,2320.1 L -2090.1,1995.4 L -2264.1,1644.9 L -2390.7,1274.6 L -2467.9,890.7 L -2494.1,500.0 L -2469.0,109.1 L -2392.8,-275.1 L -2267.0,-646.1 L -2093.7,-997.5 L -1875.8,-1323.0 L -1617.2,-1617.2 L -1322.3,-1874.9 L -996.4,-2091.8 L -644.9,-2264.1 L -274.1,-2389.0 L 109.7,-2464.3 L 500.0,-2488.9 L 890.0,-2462.4 L 1273.1,-2385.3 L 1642.8,-2259.0 L 1992.9,-2085.7 L 2317.3,-1868.4 L 2610.8,-1610.8 L 2868.2,-1317.2 L 3085.2,-992.6 L 3258.3,-642.5 L 3384.3,-272.8 L 3461.2,110.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.44s", opacity: 0.06399999999999997 }} />
            <path d="M 3515.9,500.0 L 3489.2,893.5 L 3411.3,1280.1 L 3283.7,1653.0 L 3108.6,2006.1 L 2889.1,2333.2 L 2628.9,2628.9 L 2332.6,2888.2 L 2005.0,3106.8 L 1651.9,3280.9 L 1279.1,3407.6 L 892.9,3484.7 L 500.0,3511.0 L 106.9,3485.9 L -279.7,3409.8 L -653.2,3284.0 L -1007.2,3110.5 L -1335.6,2892.2 L -1632.9,2632.9 L -1893.8,2336.8 L -2113.7,2009.0 L -2289.0,1655.3 L -2416.5,1281.5 L -2493.9,894.2 L -2520.0,500.0 L -2494.1,105.8 L -2416.9,-281.6 L -2289.6,-655.5 L -2114.4,-1009.4 L -1894.4,-1337.3 L -1633.5,-1633.5 L -1336.2,-1893.0 L -1007.7,-2111.4 L -653.5,-2284.9 L -279.9,-2410.7 L 106.8,-2486.7 L 500.0,-2511.7 L 893.0,-2485.2 L 1279.2,-2407.9 L 1651.9,-2281.0 L 2005.0,-2106.7 L 2332.4,-1888.0 L 2628.6,-1628.6 L 2888.6,-1332.8 L 3107.9,-1005.7 L 3282.8,-652.7 L 3410.3,-279.8 L 3488.1,106.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.52s", opacity: 0.06199999999999997 }} />
            <path d="M 3538.5,500.0 L 3511.6,896.5 L 3433.3,1286.0 L 3304.9,1661.8 L 3128.8,2017.8 L 2908.0,2347.7 L 2646.1,2646.1 L 2347.6,2907.9 L 2017.6,3128.6 L 1661.7,3304.6 L 1285.9,3432.8 L 896.4,3511.1 L 500.0,3537.9 L 103.4,3512.9 L -286.8,3436.3 L -663.7,3309.4 L -1020.9,3134.3 L -1352.3,2913.9 L -1652.1,2652.1 L -1915.1,2353.1 L -2136.7,2022.3 L -2313.1,1665.2 L -2441.2,1288.1 L -2518.9,897.4 L -2544.6,500.0 L -2518.1,102.7 L -2439.8,-287.7 L -2311.1,-664.4 L -2134.3,-1020.9 L -1912.5,-1351.2 L -1649.5,-1649.5 L -1350.0,-1910.9 L -1019.0,-2130.9 L -662.2,-2305.9 L -285.9,-2432.9 L 103.8,-2509.8 L 500.0,-2535.3 L 896.2,-2509.1 L 1285.5,-2431.6 L 1661.5,-2304.1 L 2017.8,-2128.8 L 2348.2,-1908.7 L 2647.3,-1647.3 L 2909.8,-1349.1 L 3131.4,-1019.2 L 3308.1,-663.1 L 3436.8,-286.9 L 3515.4,103.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.6s", opacity: 0.06 }} />
            <path d="M 3561.4,500.0 L 3534.6,899.5 L 3456.0,1292.1 L 3327.1,1671.0 L 3150.0,2030.0 L 2927.8,2362.9 L 2664.1,2664.1 L 2363.4,2928.4 L 2030.8,3151.5 L 1672.0,3329.3 L 1292.9,3459.0 L 900.0,3538.1 L 500.0,3565.3 L 99.8,3540.1 L -293.9,3462.7 L -674.1,3334.6 L -1034.4,3157.7 L -1368.5,2935.1 L -1670.7,2670.7 L -1935.6,2368.9 L -2158.7,2035.0 L -2336.1,1674.8 L -2464.8,1294.4 L -2542.6,900.6 L -2568.1,500.0 L -2541.0,99.6 L -2461.9,-293.6 L -2332.0,-673.1 L -2153.8,-1032.2 L -1930.4,-1364.9 L -1665.5,-1665.5 L -1363.8,-1929.0 L -1030.5,-2150.9 L -671.2,-2327.5 L -292.0,-2455.9 L 100.6,-2533.8 L 500.0,-2560.1 L 899.5,-2534.1 L 1292.2,-2456.5 L 1671.5,-2328.3 L 2031.1,-2151.9 L 2364.6,-1930.0 L 2666.5,-1666.5 L 2931.6,-1365.8 L 3155.2,-1033.0 L 3333.4,-673.6 L 3463.2,-294.0 L 3542.3,99.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.68s", opacity: 0.057999999999999996 }} />
            <path d="M 3585.2,500.0 L 3558.6,902.7 L 3479.9,1298.5 L 3350.4,1680.7 L 3172.3,2042.9 L 2948.5,2378.8 L 2682.9,2682.9 L 2379.8,2949.8 L 2044.4,3175.0 L 1682.4,3354.6 L 1300.0,3485.5 L 903.6,3565.3 L 500.0,3592.7 L 96.2,3567.0 L -300.8,3488.7 L -684.3,3359.0 L -1047.4,3180.3 L -1384.1,2955.4 L -1688.4,2688.4 L -1955.1,2383.9 L -2179.6,2047.1 L -2358.0,1683.8 L -2487.3,1300.5 L -2565.4,903.6 L -2590.9,500.0 L -2563.4,96.7 L -2483.6,-299.5 L -2352.9,-681.7 L -2173.5,-1043.5 L -1948.5,-1378.8 L -1681.9,-1681.9 L -1378.2,-1947.7 L -1042.5,-2171.7 L -680.6,-2350.2 L -298.5,-2480.0 L 97.3,-2559.1 L 500.0,-2586.0 L 902.9,-2560.3 L 1299.1,-2482.3 L 1681.9,-2353.4 L 2044.7,-2175.5 L 2381.3,-1951.8 L 2686.0,-1686.0 L 2953.3,-1382.5 L 3178.8,-1046.6 L 3358.4,-684.0 L 3489.0,-300.9 L 3568.3,96.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.76s", opacity: 0.055999999999999994 }} />
            <path d="M 3610.1,500.0 L 3583.9,906.0 L 3505.0,1305.2 L 3374.8,1690.8 L 3195.5,2056.2 L 2970.0,2395.3 L 2702.2,2702.2 L 2396.5,2971.6 L 2058.2,3198.8 L 1692.9,3380.0 L 1307.0,3511.9 L 907.1,3592.1 L 500.0,3619.4 L 92.8,3593.1 L -307.5,3513.7 L -694.0,3382.5 L -1059.9,3201.8 L -1399.0,2974.8 L -1705.3,2705.3 L -1973.8,2398.2 L -2199.6,2058.6 L -2379.1,1692.6 L -2509.2,1306.3 L -2587.7,906.5 L -2613.4,500.0 L -2585.9,93.7 L -2505.7,-305.4 L -2374.2,-690.5 L -2193.8,-1055.2 L -1967.4,-1393.3 L -1699.1,-1699.1 L -1393.3,-1967.4 L -1055.2,-2193.6 L -690.4,-2374.0 L -305.3,-2505.3 L 93.8,-2585.5 L 500.0,-2613.0 L 906.4,-2587.3 L 1306.2,-2508.8 L 1692.4,-2378.7 L 2058.4,-2199.3 L 2398.0,-1973.5 L 2705.1,-1705.1 L 2974.6,-1398.8 L 3201.7,-1059.8 L 3382.4,-693.9 L 3513.7,-307.5 L 3593.2,92.8 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.84s", opacity: 0.05399999999999999 }} />
            <path d="M 3636.3,500.0 L 3610.2,909.5 L 3531.0,1312.2 L 3399.9,1701.2 L 3219.2,2069.9 L 2991.8,2412.0 L 2721.6,2721.6 L 2413.1,2993.3 L 2071.7,3222.3 L 1703.2,3404.8 L 1313.9,3537.5 L 910.5,3618.0 L 500.0,3645.0 L 89.5,3618.0 L -313.9,3537.5 L -703.2,3404.8 L -1071.7,3222.3 L -1413.2,2993.3 L -1721.6,2721.6 L -1991.8,2412.0 L -2219.2,2069.9 L -2399.9,1701.2 L -2531.0,1312.2 L -2610.2,909.5 L -2636.3,500.0 L -2608.9,90.7 L -2528.5,-311.5 L -2396.4,-699.7 L -2215.0,-1067.5 L -1987.3,-1408.6 L -1717.1,-1717.1 L -1409.1,-1988.0 L -1068.4,-2216.5 L -700.7,-2398.7 L -312.3,-2531.5 L 90.2,-2612.6 L 500.0,-2640.4 L 910.0,-2614.5 L 1313.3,-2535.3 L 1702.8,-2403.9 L 2071.9,-2222.7 L 2414.2,-1994.6 L 2723.7,-1723.7 L 2995.1,-1414.5 L 3223.6,-1072.5 L 3405.4,-703.4 L 3537.2,-313.8 L 3616.9,89.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "9.92s", opacity: 0.05199999999999999 }} />
            <path d="M 3663.4,500.0 L 3637.3,913.0 L 3557.5,1319.3 L 3425.3,1711.7 L 3242.9,2083.6 L 3013.4,2428.6 L 2740.7,2740.7 L 2429.4,3014.4 L 2084.9,3245.1 L 1713.1,3428.7 L 1320.5,3562.0 L 913.7,3642.7 L 500.0,3669.4 L 86.4,3641.7 L -320.0,3560.2 L -712.1,3426.2 L -1083.2,3242.1 L -1427.0,3011.3 L -1737.5,2737.5 L -2009.7,2425.8 L -2238.8,2081.2 L -2421.0,1709.9 L -2553.3,1318.1 L -2633.4,912.5 L -2660.1,500.0 L -2633.0,87.5 L -2552.4,-317.9 L -2419.7,-709.4 L -2237.3,-1080.4 L -2008.1,-1424.5 L -1736.0,-1736.0 L -1425.5,-2009.4 L -1082.0,-2240.0 L -711.2,-2424.0 L -319.4,-2558.0 L 86.6,-2639.8 L 500.0,-2667.8 L 913.6,-2641.4 L 1320.2,-2561.2 L 1713.0,-2428.4 L 2085.0,-2245.2 L 2429.8,-2014.9 L 2741.4,-1741.4 L 3014.6,-1429.5 L 3244.5,-1084.5 L 3427.2,-712.5 L 3559.7,-319.8 L 3639.7,86.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.0s", opacity: 0.05 }} />
            <path d="M 3690.8,500.0 L 3664.5,916.6 L 3583.9,1326.3 L 3450.4,1722.1 L 3266.2,2097.1 L 3034.4,2444.7 L 2759.1,2759.1 L 2445.0,3034.8 L 2097.5,3266.9 L 1722.5,3451.4 L 1326.7,3585.3 L 916.8,3666.2 L 500.0,3692.7 L 83.4,3664.5 L -325.9,3582.1 L -720.7,3447.1 L -1094.4,3261.6 L -1440.7,3029.2 L -1753.6,2753.6 L -2027.9,2439.7 L -2258.9,2092.9 L -2442.8,1719.0 L -2576.5,1324.4 L -2657.8,915.7 L -2685.2,500.0 L -2658.3,84.2 L -2577.5,-324.6 L -2444.1,-719.5 L -2260.5,-1093.8 L -2029.6,-1441.0 L -1755.3,-1755.3 L -1442.2,-2031.1 L -1095.7,-2263.8 L -721.7,-2449.3 L -326.5,-2584.4 L 83.1,-2666.5 L 500.0,-2694.4 L 917.0,-2667.5 L 1326.9,-2586.1 L 1722.7,-2451.8 L 2097.4,-2266.7 L 2444.6,-2034.3 L 2758.3,-1758.3 L 3033.2,-1443.8 L 3264.5,-1096.1 L 3448.3,-721.2 L 3581.6,-325.7 L 3662.0,83.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.08s", opacity: 0.05 }} />
            <path d="M 3718.1,500.0 L 3691.3,920.1 L 3609.7,1333.2 L 3474.7,1732.2 L 3288.6,2110.0 L 3054.6,2460.2 L 2776.7,2776.7 L 2459.8,3054.1 L 2109.4,3287.6 L 1731.5,3473.2 L 1332.7,3607.7 L 919.8,3688.8 L 500.0,3715.4 L 80.4,3686.9 L -331.7,3603.9 L -729.4,3468.0 L -1105.8,3281.4 L -1454.7,3047.5 L -1770.2,2770.2 L -2046.8,2454.2 L -2279.9,2105.0 L -2465.7,1728.4 L -2600.9,1330.9 L -2683.3,919.1 L -2711.4,500.0 L -2684.6,80.7 L -2603.5,-331.6 L -2469.3,-729.9 L -2284.2,-1107.5 L -2051.4,-1457.7 L -1774.7,-1774.7 L -1458.8,-2052.8 L -1109.3,-2287.3 L -731.9,-2474.1 L -333.3,-2609.9 L 79.7,-2692.4 L 500.0,-2720.0 L 920.3,-2692.3 L 1333.3,-2609.9 L 1731.9,-2474.0 L 2109.2,-2287.2 L 2458.8,-2052.7 L 2774.6,-1774.6 L 3051.2,-1457.6 L 3284.1,-1107.4 L 3469.2,-729.9 L 3603.4,-331.5 L 3684.5,80.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.16s", opacity: 0.05 }} />
            <path d="M 3744.6,500.0 L 3717.1,923.5 L 3634.4,1339.9 L 3497.9,1741.8 L 3309.9,2122.3 L 3073.7,2474.9 L 2793.5,2793.5 L 2474.0,3072.6 L 2120.9,3307.5 L 1740.2,3494.2 L 1338.5,3629.5 L 922.8,3711.2 L 500.0,3737.9 L 77.5,3709.4 L -337.6,3626.0 L -738.3,3489.4 L -1117.6,3301.8 L -1469.4,3066.5 L -1787.5,2787.5 L -2066.6,2469.4 L -2302.0,2117.8 L -2489.7,1738.4 L -2626.4,1337.7 L -2709.8,922.6 L -2738.5,500.0 L -2711.7,77.2 L -2630.0,-338.7 L -2494.7,-740.4 L -2307.9,-1121.2 L -2073.0,-1474.3 L -1793.8,-1793.8 L -1475.1,-2074.0 L -1122.4,-2310.1 L -741.8,-2498.0 L -339.9,-2634.4 L 76.5,-2717.0 L 500.0,-2744.4 L 923.4,-2716.0 L 1339.4,-2632.5 L 1740.7,-2495.4 L 2120.6,-2307.0 L 2472.6,-2070.7 L 2790.5,-1790.5 L 3069.1,-1471.4 L 3303.7,-1118.7 L 3490.2,-738.6 L 3625.7,-337.5 L 3707.8,77.7 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.24s", opacity: 0.05 }} />
            <path d="M 3770.0,500.0 L 3741.8,926.8 L 3658.0,1346.2 L 3520.0,1750.9 L 3330.3,2134.1 L 3092.1,2489.0 L 2809.7,2809.7 L 2487.8,3090.6 L 2132.2,3327.0 L 1748.8,3515.0 L 1344.4,3651.3 L 925.7,3733.8 L 500.0,3761.0 L 74.4,3732.6 L -343.8,3649.1 L -747.5,3511.9 L -1130.0,3323.3 L -1484.8,3086.6 L -1805.7,2805.7 L -2087.4,2485.4 L -2325.1,2131.1 L -2514.6,1748.7 L -2652.7,1344.8 L -2737.0,926.2 L -2765.9,500.0 L -2738.9,73.6 L -2656.4,-345.8 L -2519.7,-750.8 L -2331.2,-1134.6 L -2094.0,-1490.4 L -1812.2,-1812.2 L -1490.6,-2094.3 L -1134.9,-2331.8 L -751.2,-2520.7 L -346.1,-2657.7 L 73.4,-2740.5 L 500.0,-2767.6 L 926.4,-2738.8 L 1345.2,-2654.5 L 1749.4,-2516.3 L 2131.9,-2326.5 L 2486.3,-2088.6 L 2806.6,-1806.6 L 3087.3,-1485.3 L 3323.8,-1130.3 L 3512.1,-747.6 L 3649.0,-343.8 L 3732.1,74.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.32s", opacity: 0.05 }} />
            <path d="M 3794.1,500.0 L 3765.3,929.9 L 3680.5,1352.2 L 3541.2,1759.7 L 3350.0,2145.4 L 3110.0,2502.7 L 2825.6,2825.6 L 2501.6,3108.5 L 2143.5,3346.7 L 1757.6,3536.2 L 1350.4,3673.8 L 928.8,3757.2 L 500.0,3785.1 L 71.2,3756.9 L -350.3,3673.2 L -757.3,3535.4 L -1143.0,3345.8 L -1500.8,3107.5 L -1824.6,2824.6 L -2108.9,2501.9 L -2348.7,2144.7 L -2540.0,1759.2 L -2679.3,1351.9 L -2764.2,929.7 L -2793.2,500.0 L -2765.7,70.1 L -2682.2,-352.7 L -2544.0,-760.9 L -2353.5,-1147.5 L -2114.1,-1505.8 L -1829.7,-1829.7 L -1505.5,-2113.6 L -1146.9,-2352.5 L -760.2,-2542.4 L -352.1,-2680.0 L 70.4,-2763.1 L 500.0,-2790.3 L 929.3,-2761.1 L 1351.1,-2676.3 L 1758.0,-2537.2 L 2143.3,-2346.3 L 2500.4,-2106.9 L 2823.2,-1823.2 L 3106.3,-1499.9 L 3344.9,-1142.5 L 3535.0,-757.1 L 3673.4,-350.3 L 3757.7,71.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.4s", opacity: 0.05 }} />
            <path d="M 3817.3,500.0 L 3788.0,932.9 L 3702.4,1358.1 L 3562.1,1768.4 L 3369.5,2156.7 L 3128.0,2516.5 L 2841.7,2841.7 L 2515.6,3126.8 L 2155.2,3367.0 L 1766.7,3558.2 L 1356.7,3697.2 L 932.0,3781.7 L 500.0,3810.3 L 67.9,3782.4 L -357.0,3698.5 L -767.5,3560.0 L -1156.5,3369.1 L -1517.4,3129.1 L -1844.0,2844.0 L -2130.7,2518.6 L -2372.5,2158.4 L -2565.2,1769.7 L -2705.5,1358.9 L -2790.8,933.2 L -2819.6,500.0 L -2791.5,66.7 L -2706.9,-359.3 L -2567.2,-770.5 L -2374.8,-1159.8 L -2133.2,-1520.5 L -1846.5,-1846.5 L -1519.7,-2132.1 L -1158.4,-2372.4 L -768.9,-2563.4 L -357.9,-2701.8 L 67.5,-2785.4 L 500.0,-2812.9 L 932.3,-2783.7 L 1357.0,-2698.4 L 1766.9,-2558.7 L 2155.1,-2366.8 L 2515.0,-2126.0 L 2840.5,-1840.5 L 3126.1,-1515.1 L 3367.0,-1155.3 L 3559.0,-767.1 L 3698.9,-357.2 L 3784.3,67.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.48s", opacity: 0.05 }} />
            <path d="M 3839.9,500.0 L 3810.3,935.8 L 3724.2,1363.9 L 3583.0,1777.0 L 3389.3,2168.2 L 3146.4,2530.7 L 2858.4,2858.4 L 2530.3,3145.9 L 2167.5,3388.2 L 1776.3,3581.3 L 1363.3,3721.9 L 935.4,3807.5 L 500.0,3836.7 L 64.4,3809.0 L -364.1,3724.7 L -777.9,3585.2 L -1170.2,3392.9 L -1534.1,3150.9 L -1863.4,2863.4 L -2152.3,2535.2 L -2395.9,2171.9 L -2589.8,1779.9 L -2730.8,1365.7 L -2816.4,936.6 L -2845.0,500.0 L -2816.1,63.4 L -2730.4,-365.6 L -2589.2,-779.6 L -2395.2,-1171.5 L -2151.5,-1534.6 L -1862.6,-1862.6 L -1533.4,-2150.0 L -1169.6,-2391.9 L -777.5,-2584.2 L -363.8,-2723.7 L 64.5,-2808.1 L 500.0,-2836.0 L 935.4,-2806.9 L 1363.2,-2721.5 L 1776.2,-2581.1 L 2167.5,-2388.3 L 2530.4,-2146.1 L 2858.8,-1858.8 L 3147.0,-1531.1 L 3390.1,-1168.6 L 3584.0,-777.4 L 3725.2,-364.2 L 3811.4,64.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.56s", opacity: 0.05 }} />
            <path d="M 3862.5,500.0 L 3832.9,938.8 L 3746.5,1369.9 L 3604.7,1786.0 L 3410.0,2180.1 L 3165.7,2545.4 L 2875.9,2875.9 L 2545.6,3165.9 L 2180.4,3410.5 L 1786.3,3605.5 L 1370.2,3747.6 L 939.0,3834.2 L 500.0,3863.9 L 60.8,3836.1 L -371.2,3751.2 L -788.4,3610.6 L -1183.9,3416.6 L -1550.6,3172.4 L -1882.4,2882.4 L -2173.3,2551.3 L -2418.4,2185.0 L -2613.5,1789.6 L -2755.1,1372.2 L -2840.8,939.8 L -2869.1,500.0 L -2839.6,60.3 L -2752.9,-371.6 L -2610.5,-788.4 L -2414.9,-1182.9 L -2169.5,-1548.4 L -1878.6,-1878.6 L -1547.2,-2167.9 L -1181.0,-2411.6 L -786.3,-2605.4 L -369.8,-2746.2 L 61.4,-2831.5 L 500.0,-2860.0 L 938.6,-2831.3 L 1369.7,-2745.7 L 1786.0,-2604.7 L 2180.5,-2410.8 L 2546.5,-2167.1 L 2877.7,-1877.7 L 3168.5,-1547.6 L 3413.8,-1182.3 L 3609.3,-787.9 L 3751.8,-371.3 L 3838.6,60.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.64s", opacity: 0.05 }} />
            <path d="M 3885.7,500.0 L 3856.3,941.9 L 3769.7,1376.1 L 3627.3,1795.4 L 3431.6,2192.6 L 3185.9,2561.0 L 2894.3,2894.3 L 2561.7,3186.9 L 2193.8,3433.7 L 1796.7,3630.5 L 1377.2,3773.9 L 942.5,3861.4 L 500.0,3891.4 L 57.2,3863.3 L -378.2,3777.5 L -798.8,3635.5 L -1197.2,3439.7 L -1566.6,3193.3 L -1900.6,2900.6 L -2193.4,2566.7 L -2439.9,2197.4 L -2636.0,1799.0 L -2778.1,1378.4 L -2864.0,942.9 L -2892.2,500.0 L -2862.3,57.4 L -2774.8,-377.5 L -2631.3,-797.0 L -2434.4,-1194.2 L -2187.4,-1562.1 L -1894.7,-1894.7 L -1561.2,-2186.3 L -1192.7,-2431.9 L -795.4,-2627.5 L -376.1,-2769.7 L 58.2,-2856.1 L 500.0,-2885.3 L 941.9,-2856.8 L 1376.5,-2771.0 L 1796.2,-2629.4 L 2194.0,-2434.1 L 2563.1,-2188.7 L 2897.1,-1897.1 L 3190.3,-1564.3 L 3437.5,-1196.0 L 3634.6,-798.4 L 3778.0,-378.3 L 3865.2,57.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.72s", opacity: 0.05 }} />
            <path d="M 3910.0,500.0 L 3880.9,945.1 L 3794.1,1382.7 L 3651.1,1805.2 L 3454.3,2205.7 L 3207.0,2577.2 L 2913.3,2913.3 L 2578.3,3208.5 L 2207.5,3457.4 L 1807.2,3655.9 L 1384.4,3800.5 L 946.1,3888.5 L 500.0,3918.5 L 53.7,3889.9 L -385.1,3803.1 L -808.7,3659.6 L -1210.0,3461.8 L -1581.9,3213.2 L -1918.0,2918.0 L -2212.5,2581.4 L -2460.4,2209.2 L -2657.5,1807.9 L -2800.3,1384.3 L -2886.6,945.8 L -2914.8,500.0 L -2884.6,54.4 L -2796.6,-383.3 L -2652.3,-805.7 L -2454.2,-1205.6 L -2205.9,-1576.3 L -1911.4,-1911.4 L -1575.9,-2205.4 L -1205.0,-2453.2 L -805.0,-2650.6 L -382.7,-2794.3 L 54.8,-2881.9 L 500.0,-2911.8 L 945.4,-2883.4 L 1383.5,-2797.2 L 1806.7,-2654.6 L 2207.8,-2457.9 L 2579.8,-2210.5 L 2916.5,-1916.5 L 3211.9,-1580.9 L 3460.9,-1209.5 L 3659.2,-808.6 L 3803.3,-385.1 L 3890.7,53.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.8s", opacity: 0.05 }} />
            <path d="M 3935.5,500.0 L 3906.6,948.5 L 3819.6,1389.5 L 3675.9,1815.5 L 3477.8,2219.2 L 3228.7,2593.8 L 2932.7,2932.7 L 2595.0,3230.3 L 2221.2,3481.1 L 1817.6,3681.1 L 1391.3,3826.5 L 949.6,3915.0 L 500.0,3944.8 L 50.3,3915.5 L -391.6,3827.6 L -818.3,3682.5 L -1222.2,3482.9 L -1596.4,3232.1 L -1934.6,2934.6 L -2230.9,2595.5 L -2480.2,2220.6 L -2678.4,1816.5 L -2822.1,1390.2 L -2908.9,948.8 L -2937.4,500.0 L -2907.2,51.4 L -2818.9,-389.3 L -2673.9,-814.7 L -2474.9,-1217.6 L -2225.2,-1591.1 L -1929.0,-1929.0 L -1591.3,-2225.4 L -1217.9,-2475.5 L -815.1,-2674.8 L -389.6,-2820.1 L 51.2,-2908.6 L 500.0,-2939.0 L 949.0,-2910.6 L 1390.6,-2823.8 L 1817.2,-2680.0 L 2221.4,-2481.6 L 2596.3,-2232.0 L 2935.4,-1935.4 L 3232.8,-1597.0 L 3483.4,-1222.5 L 3682.8,-818.3 L 3827.5,-391.6 L 3915.1,50.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.88s", opacity: 0.05 }} />
            <path d="M 3962.1,500.0 L 3933.4,952.0 L 3845.9,1396.5 L 3701.2,1826.0 L 3501.6,2233.0 L 3250.5,2610.5 L 2952.1,2952.1 L 2611.5,3251.8 L 2234.6,3504.4 L 1827.8,3705.5 L 1398.1,3851.7 L 952.9,3940.3 L 500.0,3969.9 L 47.1,3939.9 L -397.9,3850.9 L -827.3,3704.4 L -1233.8,3503.1 L -1610.4,3250.4 L -1950.7,2950.7 L -2248.8,2609.2 L -2499.7,2231.9 L -2699.3,1825.2 L -2844.0,1396.0 L -2931.7,951.8 L -2960.7,500.0 L -2930.7,48.3 L -2842.1,-395.5 L -2696.6,-824.1 L -2496.6,-1230.1 L -2245.4,-1606.6 L -1947.4,-1947.4 L -1607.4,-2246.4 L -1231.3,-2498.7 L -825.4,-2699.9 L -396.7,-2846.5 L 47.7,-2935.9 L 500.0,-2966.5 L 952.6,-2937.7 L 1397.6,-2850.1 L 1827.5,-2704.9 L 2234.7,-2504.6 L 2612.3,-2252.8 L 2953.7,-1953.7 L 3252.9,-1612.4 L 3504.9,-1234.9 L 3705.2,-827.6 L 3850.5,-397.8 L 3938.3,47.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "10.96s", opacity: 0.05 }} />
            <path d="M 3989.4,500.0 L 3960.6,955.6 L 3872.4,1403.6 L 3726.5,1836.5 L 3525.2,2246.6 L 3271.9,2626.9 L 2970.9,2970.9 L 2627.5,3272.6 L 2247.5,3526.7 L 1837.5,3728.9 L 1404.5,3875.7 L 956.1,3964.5 L 500.0,3993.8 L 44.1,3963.2 L -403.8,3873.2 L -836.1,3725.5 L -1245.1,3522.7 L -1624.1,3268.2 L -1966.6,2966.6 L -2266.8,2623.0 L -2519.5,2243.3 L -2720.6,1834.0 L -2866.7,1402.1 L -2955.3,954.9 L -2985.0,500.0 L -2955.3,45.1 L -2866.6,-402.1 L -2720.5,-834.0 L -2519.3,-1243.2 L -2266.6,-1622.9 L -1966.4,-1966.4 L -1624.0,-2268.0 L -1245.0,-2522.4 L -835.9,-2725.3 L -403.8,-2873.0 L 44.1,-2962.9 L 500.0,-2993.6 L 956.1,-2964.3 L 1404.5,-2875.6 L 1837.5,-2728.9 L 2247.5,-2526.8 L 2627.5,-2272.7 L 2971.0,-1971.0 L 3272.0,-1627.0 L 3525.3,-1246.7 L 3726.7,-836.5 L 3872.7,-403.7 L 3960.8,44.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.040000000000001s", opacity: 0.05 }} />
            <path d="M 4016.9,500.0 L 3987.7,959.2 L 3898.6,1410.7 L 3751.3,1846.7 L 3548.1,2259.8 L 3292.5,2642.8 L 2989.0,2989.0 L 2642.8,3292.5 L 2259.8,3548.0 L 1846.7,3751.2 L 1410.6,3898.5 L 959.1,3987.5 L 500.0,4016.7 L 41.1,3985.7 L -409.7,3895.0 L -844.7,3746.3 L -1256.4,3542.2 L -1638.0,3286.3 L -1982.8,2982.8 L -2285.2,2637.2 L -2540.0,2255.1 L -2742.9,1843.2 L -2890.4,1408.5 L -2980.2,958.2 L -3010.5,500.0 L -2981.1,41.7 L -2892.1,-408.9 L -2745.2,-844.2 L -2542.8,-1256.8 L -2288.2,-1639.5 L -1985.8,-1985.8 L -1640.7,-2289.8 L -1258.7,-2546.2 L -846.4,-2750.4 L -410.8,-2899.0 L 40.6,-2989.4 L 500.0,-3019.8 L 959.5,-2989.9 L 1411.0,-2900.0 L 1846.9,-2751.8 L 2259.7,-2547.8 L 2642.1,-2291.6 L 2987.6,-1987.6 L 3290.3,-1641.1 L 3545.1,-1258.1 L 3747.6,-845.2 L 3894.5,-409.5 L 3983.2,41.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.120000000000001s", opacity: 0.05 }} />
            <path d="M 4043.9,500.0 L 4014.1,962.6 L 3924.0,1417.5 L 3775.1,1856.6 L 3570.0,2272.5 L 3312.2,2657.9 L 3006.2,3006.2 L 2657.3,3311.5 L 2271.5,3568.4 L 1855.5,3772.6 L 1416.5,3920.6 L 962.1,4010.0 L 500.0,4039.3 L 38.2,4008.0 L -415.6,3916.9 L -853.4,3767.4 L -1268.0,3562.2 L -1652.2,3304.9 L -1999.7,2999.7 L -2304.5,2652.0 L -2561.5,2267.5 L -2766.2,1852.9 L -2915.3,1415.1 L -3006.2,961.6 L -3037.2,500.0 L -3007.8,38.2 L -2918.4,-416.0 L -2770.5,-854.7 L -2566.6,-1270.5 L -2310.0,-1656.2 L -2005.2,-2005.2 L -1657.2,-2311.3 L -1272.1,-2569.4 L -856.5,-2774.8 L -417.5,-2924.1 L 37.3,-3014.7 L 500.0,-3044.9 L 962.7,-3014.2 L 1417.3,-2923.3 L 1856.0,-2773.6 L 2271.3,-2568.0 L 2656.0,-2309.8 L 3003.7,-2003.7 L 3308.2,-1654.8 L 3564.6,-1269.4 L 3768.5,-853.8 L 3916.4,-415.4 L 4006.0,38.4 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.200000000000001s", opacity: 0.05 }} />
            <path d="M 4069.9,500.0 L 4039.5,966.0 L 3948.2,1424.0 L 3797.9,1866.0 L 3590.9,2284.5 L 3331.0,2672.3 L 3022.7,3022.7 L 2671.3,3329.7 L 2282.9,3588.1 L 1864.2,3793.4 L 1422.4,3942.4 L 965.0,4032.4 L 500.0,4062.0 L 35.2,4030.8 L -421.6,3939.4 L -862.5,3789.3 L -1280.0,3583.1 L -1667.2,3324.3 L -2017.4,3017.4 L -2324.8,2667.5 L -2584.0,2280.5 L -2790.7,1863.0 L -2941.2,1422.1 L -3033.0,965.1 L -3064.5,500.0 L -3035.0,34.6 L -2945.0,-423.1 L -2795.9,-865.2 L -2590.2,-1284.1 L -2331.4,-1672.6 L -2024.0,-2024.0 L -1673.2,-2332.1 L -1285.0,-2591.7 L -866.2,-2798.2 L -423.9,-2948.1 L 34.1,-3038.8 L 500.0,-3068.7 L 965.7,-3037.5 L 1423.2,-2945.6 L 1864.7,-2794.7 L 2282.6,-2587.6 L 2669.7,-2327.7 L 3019.6,-2019.6 L 3326.2,-1668.6 L 3584.4,-1280.8 L 3789.8,-862.7 L 3939.1,-421.5 L 4029.7,35.3 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.28s", opacity: 0.05 }} />
            <path d="M 4094.8,500.0 L 4063.6,969.2 L 3971.3,1430.1 L 3819.5,1875.0 L 3610.9,2296.1 L 3349.1,2686.2 L 3038.7,3038.7 L 2685.0,3347.6 L 2294.2,3607.6 L 1872.8,3814.3 L 1428.3,3964.4 L 968.1,4055.3 L 500.0,4085.4 L 32.0,4054.5 L -427.9,3962.8 L -871.9,3812.2 L -1292.7,3605.0 L -1682.9,3344.8 L -2036.0,3036.0 L -2345.9,2683.7 L -2607.4,2294.0 L -2815.8,1873.5 L -2967.7,1429.2 L -3060.3,968.7 L -3092.0,500.0 L -3062.1,31.0 L -2971.1,-430.1 L -2820.6,-875.4 L -2613.1,-1297.3 L -2352.0,-1688.5 L -2042.0,-2042.0 L -1688.4,-2352.0 L -1297.3,-2613.0 L -875.4,-2820.5 L -430.0,-2970.9 L 31.1,-3061.8 L 500.0,-3091.7 L 968.7,-3060.0 L 1429.1,-2967.4 L 1873.3,-2815.5 L 2293.9,-2607.1 L 2683.6,-2345.7 L 3035.8,-2035.8 L 3344.7,-1682.8 L 3604.9,-1292.6 L 3812.1,-871.9 L 3962.9,-427.9 L 4054.5,32.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.36s", opacity: 0.05 }} />
            <path d="M 4118.4,500.0 L 4086.7,972.2 L 3993.5,1436.1 L 3840.5,1883.7 L 3630.5,2307.4 L 3367.0,2699.9 L 3054.7,3054.7 L 2698.8,3365.6 L 2305.6,3627.4 L 1881.7,3835.8 L 1434.4,3987.2 L 971.2,4079.2 L 500.0,4110.0 L 28.8,4079.3 L -434.5,3987.5 L -881.9,3836.2 L -1305.9,3627.9 L -1699.2,3366.1 L -2055.2,3055.2 L -2367.6,2700.4 L -2631.1,2307.8 L -2841.2,1884.0 L -2994.1,1436.3 L -3087.3,972.3 L -3118.9,500.0 L -3088.5,27.6 L -2996.5,-436.9 L -2844.4,-885.3 L -2635.0,-1310.0 L -2371.7,-1703.6 L -2059.2,-2059.2 L -1702.9,-2370.9 L -1309.0,-2633.3 L -884.2,-2841.8 L -435.9,-2993.0 L 28.1,-3084.3 L 500.0,-3114.2 L 971.6,-3082.3 L 1434.9,-2989.3 L 1882.1,-2836.6 L 2305.5,-2627.1 L 2697.9,-2364.3 L 3052.7,-2052.7 L 3364.0,-1697.6 L 3626.4,-1305.0 L 3835.6,-881.6 L 3987.8,-434.6 L 4080.6,28.6 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.44s", opacity: 0.05 }} />
            <path d="M 4141.3,500.0 L 4109.1,975.2 L 4015.3,1441.9 L 3861.4,1892.3 L 3650.1,2318.7 L 3385.1,2713.8 L 3071.0,3071.0 L 2713.1,3384.2 L 2317.6,3648.1 L 1891.1,3858.3 L 1440.8,4011.2 L 974.5,4104.2 L 500.0,4135.8 L 25.4,4105.3 L -441.4,4013.3 L -892.2,3861.1 L -1319.5,3651.5 L -1715.9,3387.8 L -2074.6,3074.6 L -2389.4,2717.1 L -2654.8,2321.4 L -2866.2,1894.3 L -3020.0,1443.2 L -3113.5,975.7 L -3144.9,500.0 L -3113.8,24.2 L -3020.7,-443.4 L -2867.1,-894.7 L -2655.8,-1322.0 L -2390.5,-1717.9 L -2075.7,-2075.7 L -1716.9,-2389.1 L -1320.3,-2652.9 L -892.9,-2862.6 L -441.8,-3014.7 L 25.2,-3106.7 L 500.0,-3136.9 L 974.6,-3105.1 L 1441.0,-3011.8 L 1891.1,-2858.5 L 2317.5,-2648.0 L 2712.9,-2383.9 L 3070.5,-2070.5 L 3384.3,-1713.2 L 3649.0,-1318.1 L 3860.0,-891.8 L 4013.7,-441.5 L 4107.5,25.1 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.52s", opacity: 0.05 }} />
            <path d="M 4163.8,500.0 L 4131.5,978.1 L 4037.2,1447.8 L 3882.6,1901.1 L 3670.2,2330.3 L 3403.9,2728.2 L 3088.0,3088.0 L 2728.1,3403.7 L 2330.1,3669.8 L 1900.8,3881.9 L 1447.6,4036.3 L 978.0,4130.5 L 500.0,4162.6 L 21.8,4132.2 L -448.4,4039.6 L -902.7,3886.5 L -1333.2,3675.3 L -1732.6,3409.5 L -2093.8,3093.8 L -2410.8,2733.5 L -2677.8,2334.7 L -2890.5,1904.4 L -3044.9,1449.9 L -3138.6,979.0 L -3169.7,500.0 L -3137.9,21.1 L -3043.7,-449.5 L -2888.8,-903.7 L -2675.8,-1333.6 L -2408.6,-1731.8 L -2091.7,-2091.7 L -1730.6,-2407.0 L -1331.6,-2672.5 L -901.5,-2883.6 L -447.7,-3036.8 L 22.2,-3129.6 L 500.0,-3160.4 L 977.7,-3128.8 L 1447.3,-3035.3 L 1900.7,-2881.5 L 2330.2,-2670.0 L 2728.6,-2404.3 L 3089.1,-2089.1 L 3405.5,-1729.4 L 3672.4,-1331.6 L 3885.2,-902.2 L 4040.2,-448.6 L 4134.7,21.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.6s", opacity: 0.05 }} />
            <path d="M 4186.6,500.0 L 4154.4,981.1 L 4059.9,1453.9 L 3904.6,1910.2 L 3691.3,2342.5 L 3423.6,2743.3 L 3105.9,3105.9 L 2743.8,3424.1 L 2343.2,3692.5 L 1911.0,3906.5 L 1454.5,4062.4 L 981.5,4157.5 L 500.0,4190.0 L 18.2,4159.4 L -455.5,4066.2 L -913.2,3911.7 L -1346.8,3698.7 L -1748.9,3430.8 L -2112.5,3112.5 L -2431.4,2749.3 L -2700.0,2347.5 L -2913.6,1914.0 L -3068.7,1456.2 L -3162.4,982.2 L -3193.4,500.0 L -3161.0,18.0 L -3065.9,-455.5 L -2909.8,-912.4 L -2695.4,-1344.8 L -2426.5,-1745.5 L -2107.7,-2107.7 L -1744.5,-2425.0 L -1343.1,-2692.4 L -910.4,-2905.1 L -453.8,-3059.7 L 19.0,-3153.5 L 500.0,-3185.0 L 981.0,-3153.7 L 1453.9,-3060.0 L 1910.6,-2905.6 L 2343.4,-2692.9 L 2744.9,-2425.6 L 3108.2,-2108.2 L 3427.2,-1746.1 L 3696.1,-1345.3 L 3910.6,-912.7 L 4066.7,-455.7 L 4161.7,17.9 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.68s", opacity: 0.05 }} />
            <path d="M 4210.3,500.0 L 4178.3,984.3 L 4083.6,1460.2 L 3927.8,1919.8 L 3713.4,2355.3 L 3444.2,2759.2 L 3124.6,3124.6 L 2760.1,3445.4 L 2356.8,3716.0 L 1921.5,3931.8 L 1461.6,4088.9 L 985.1,4184.7 L 500.0,4217.4 L 14.7,4186.4 L -462.5,4092.2 L -923.4,3936.3 L -1359.9,3721.5 L -1764.6,3451.3 L -2130.4,3130.4 L -2451.1,2764.4 L -2721.0,2359.7 L -2935.7,1923.1 L -3091.3,1462.3 L -3185.3,985.2 L -3216.2,500.0 L -3183.4,15.1 L -3087.6,-461.3 L -2930.6,-921.0 L -2715.0,-1356.2 L -2444.6,-1759.5 L -2124.0,-2124.0 L -1758.8,-2443.7 L -1355.1,-2713.0 L -919.8,-2927.6 L -460.2,-3083.7 L 15.7,-3178.6 L 500.0,-3210.8 L 984.4,-3179.7 L 1460.8,-3085.8 L 1921.0,-2930.5 L 2357.0,-2716.5 L 2761.6,-2447.4 L 3127.7,-2127.7 L 3448.9,-1762.8 L 3719.8,-1358.9 L 3935.6,-923.1 L 4092.5,-462.6 L 4187.9,14.5 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.76s", opacity: 0.05 }} />
            <path d="M 4235.1,500.0 L 4203.4,987.6 L 4108.5,1466.9 L 3952.0,1929.9 L 3736.5,2368.6 L 3465.6,2775.6 L 3143.9,3143.9 L 2776.8,3467.1 L 2370.5,3739.8 L 1932.0,3957.1 L 1468.7,4115.3 L 988.6,4211.6 L 500.0,4244.2 L 11.2,4212.6 L -469.3,4117.3 L -933.1,3959.9 L -1372.4,3743.2 L -1779.5,3470.7 L -2147.4,3147.4 L -2469.8,2778.8 L -2741.2,2371.3 L -2956.8,1931.9 L -3113.2,1468.2 L -3207.7,988.1 L -3238.7,500.0 L -3205.8,12.1 L -3109.6,-467.2 L -2951.8,-929.8 L -2735.2,-1367.8 L -2463.4,-1773.9 L -2141.1,-2141.1 L -1773.7,-2463.2 L -1367.6,-2734.8 L -929.5,-2951.2 L -467.0,-3108.8 L 12.2,-3204.9 L 500.0,-3237.7 L 988.0,-3206.6 L 1467.9,-3112.2 L 1931.5,-2955.9 L 2370.8,-2740.3 L 2778.3,-2469.1 L 3146.9,-2146.9 L 3470.3,-1779.2 L 3742.8,-1372.2 L 3959.8,-933.1 L 4117.4,-469.3 L 4212.9,11.2 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.84s", opacity: 0.05 }} />
            <path d="M 4261.1,500.0 L 4229.6,991.0 L 4134.4,1473.8 L 3977.0,1940.2 L 3760.2,2382.3 L 3487.4,2792.3 L 3163.3,3163.3 L 2793.5,3488.9 L 2384.1,3763.4 L 1942.3,3982.0 L 1475.6,4141.0 L 992.1,4237.6 L 500.0,4270.0 L 7.9,4237.7 L -475.7,4141.3 L -942.5,3982.4 L -1384.4,3763.8 L -1793.8,3489.3 L -2163.8,3163.8 L -2487.9,2792.7 L -2760.8,2382.6 L -2977.7,1940.5 L -3135.0,1474.0 L -3230.2,991.1 L -3261.6,500.0 L -3228.7,9.1 L -3132.3,-473.3 L -2973.9,-938.9 L -2756.3,-1380.0 L -2483.1,-1789.0 L -2159.0,-2159.0 L -1789.5,-2483.7 L -1380.7,-2757.5 L -939.8,-2975.9 L -474.0,-3134.9 L 8.7,-3231.9 L 500.0,-3265.1 L 991.6,-3233.9 L 1475.0,-3138.7 L 1941.9,-2981.1 L 2384.3,-2763.7 L 2794.6,-2490.4 L 3165.6,-2165.6 L 3490.9,-1795.0 L 3764.9,-1385.0 L 3982.9,-942.7 L 4141.1,-475.6 L 4236.7,8.0 Z" stroke="var(--aura)" strokeWidth="0.15" fill="none" className="mesh-layer" style={{ animationDelay: "11.92s", opacity: 0.05 }} />
          </svg>
        </div>

        {/* Stage 4: High-Velocity Resonance Particles */}
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${ stage === 4 ? "opacity-100" : "opacity-0" }`}>
           <svg viewBox="0 0 1000 1000" className="w-full h-full">
             {Array.from({ length: 500 }).map((_, i) => (
               <circle key={i} cx="500" cy="500" r="1.2" fill="var(--aura)" className={`aura-p-${i}`} />
             ))}
           </svg>
        </div>

        {/* Stage 5: Core Branding Realization */}
        <div className={`relative transition-all duration-[3000ms] ease-out preserve-3d ${
          stage < 5 ? "opacity-0 translate-z-[-1500px] blur-[120px] scale-50" :
          "opacity-100 translate-z-0 blur-none scale-100"
        }`}>
          <div className="flex flex-col items-center">
             <div className="relative mb-10 group">
                <div className="absolute -inset-20 bg-aura/30 blur-[150px] animate-pulse rounded-full" />
                <h1 className="relative z-10 text-9xl md:text-[14rem] font-display italic tracking-tighter text-white leading-none selection:bg-aura/40">
                  MVMAURA
                </h1>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-white/20 rotate-[-5deg] blur-sm" />
             </div>
             <div className="h-[2px] w-96 bg-gradient-to-r from-transparent via-aura to-transparent opacity-40 shadow-[0_0_20px_var(--aura)]" />
             <p className="mt-12 font-mono text-[11px] uppercase tracking-[1.5em] text-aura font-bold opacity-90 animate-[aura-pulse_4s_infinite]">
               Protocol V3 · The Aura Awakens
             </p>
          </div>
        </div>

        {/* Dynamic Lens Overlays */}
        <div className={`fixed inset-0 bg-white transition-opacity duration-[2000ms] pointer-events-none ${
          stage === 5 ? "opacity-5" : "opacity-0"
        }`} />

        <div className="fixed inset-0 pointer-events-none mix-blend-overlay">
           <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black via-black/80 to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Noise Texture */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none noise-overlay" />

      </div>

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }

        @keyframes aura-particle-0 {
          0% { transform: rotate(0deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(180deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(360deg) translateX(500px) scale(0); opacity: 0; }
        }
        .aura-p-0 { animation: aura-particle-0 4s infinite ease-in-out; animation-delay: 0.0s; }
        @keyframes aura-particle-1 {
          0% { transform: rotate(7deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(187deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(367deg) translateX(501px) scale(0); opacity: 0; }
        }
        .aura-p-1 { animation: aura-particle-1 5s infinite ease-in-out; animation-delay: 0.02s; }
        @keyframes aura-particle-2 {
          0% { transform: rotate(14deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(194deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(374deg) translateX(502px) scale(0); opacity: 0; }
        }
        .aura-p-2 { animation: aura-particle-2 6s infinite ease-in-out; animation-delay: 0.04s; }
        @keyframes aura-particle-3 {
          0% { transform: rotate(21deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(201deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(381deg) translateX(503px) scale(0); opacity: 0; }
        }
        .aura-p-3 { animation: aura-particle-3 7s infinite ease-in-out; animation-delay: 0.06s; }
        @keyframes aura-particle-4 {
          0% { transform: rotate(28deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(208deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(388deg) translateX(504px) scale(0); opacity: 0; }
        }
        .aura-p-4 { animation: aura-particle-4 8s infinite ease-in-out; animation-delay: 0.08s; }
        @keyframes aura-particle-5 {
          0% { transform: rotate(35deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(215deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(395deg) translateX(505px) scale(0); opacity: 0; }
        }
        .aura-p-5 { animation: aura-particle-5 4s infinite ease-in-out; animation-delay: 0.1s; }
        @keyframes aura-particle-6 {
          0% { transform: rotate(42deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(222deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(402deg) translateX(506px) scale(0); opacity: 0; }
        }
        .aura-p-6 { animation: aura-particle-6 5s infinite ease-in-out; animation-delay: 0.12s; }
        @keyframes aura-particle-7 {
          0% { transform: rotate(49deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(229deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(409deg) translateX(507px) scale(0); opacity: 0; }
        }
        .aura-p-7 { animation: aura-particle-7 6s infinite ease-in-out; animation-delay: 0.14s; }
        @keyframes aura-particle-8 {
          0% { transform: rotate(56deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(236deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(416deg) translateX(508px) scale(0); opacity: 0; }
        }
        .aura-p-8 { animation: aura-particle-8 7s infinite ease-in-out; animation-delay: 0.16s; }
        @keyframes aura-particle-9 {
          0% { transform: rotate(63deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(243deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(423deg) translateX(509px) scale(0); opacity: 0; }
        }
        .aura-p-9 { animation: aura-particle-9 8s infinite ease-in-out; animation-delay: 0.18s; }
        @keyframes aura-particle-10 {
          0% { transform: rotate(70deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(250deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(430deg) translateX(510px) scale(0); opacity: 0; }
        }
        .aura-p-10 { animation: aura-particle-10 4s infinite ease-in-out; animation-delay: 0.2s; }
        @keyframes aura-particle-11 {
          0% { transform: rotate(77deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(257deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(437deg) translateX(511px) scale(0); opacity: 0; }
        }
        .aura-p-11 { animation: aura-particle-11 5s infinite ease-in-out; animation-delay: 0.22s; }
        @keyframes aura-particle-12 {
          0% { transform: rotate(84deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(264deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(444deg) translateX(512px) scale(0); opacity: 0; }
        }
        .aura-p-12 { animation: aura-particle-12 6s infinite ease-in-out; animation-delay: 0.24s; }
        @keyframes aura-particle-13 {
          0% { transform: rotate(91deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(271deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(451deg) translateX(513px) scale(0); opacity: 0; }
        }
        .aura-p-13 { animation: aura-particle-13 7s infinite ease-in-out; animation-delay: 0.26s; }
        @keyframes aura-particle-14 {
          0% { transform: rotate(98deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(278deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(458deg) translateX(514px) scale(0); opacity: 0; }
        }
        .aura-p-14 { animation: aura-particle-14 8s infinite ease-in-out; animation-delay: 0.28s; }
        @keyframes aura-particle-15 {
          0% { transform: rotate(105deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(285deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(465deg) translateX(515px) scale(0); opacity: 0; }
        }
        .aura-p-15 { animation: aura-particle-15 4s infinite ease-in-out; animation-delay: 0.3s; }
        @keyframes aura-particle-16 {
          0% { transform: rotate(112deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(292deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(472deg) translateX(516px) scale(0); opacity: 0; }
        }
        .aura-p-16 { animation: aura-particle-16 5s infinite ease-in-out; animation-delay: 0.32s; }
        @keyframes aura-particle-17 {
          0% { transform: rotate(119deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(299deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(479deg) translateX(517px) scale(0); opacity: 0; }
        }
        .aura-p-17 { animation: aura-particle-17 6s infinite ease-in-out; animation-delay: 0.34s; }
        @keyframes aura-particle-18 {
          0% { transform: rotate(126deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(306deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(486deg) translateX(518px) scale(0); opacity: 0; }
        }
        .aura-p-18 { animation: aura-particle-18 7s infinite ease-in-out; animation-delay: 0.36s; }
        @keyframes aura-particle-19 {
          0% { transform: rotate(133deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(313deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(493deg) translateX(519px) scale(0); opacity: 0; }
        }
        .aura-p-19 { animation: aura-particle-19 8s infinite ease-in-out; animation-delay: 0.38s; }
        @keyframes aura-particle-20 {
          0% { transform: rotate(140deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(320deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(500deg) translateX(520px) scale(0); opacity: 0; }
        }
        .aura-p-20 { animation: aura-particle-20 4s infinite ease-in-out; animation-delay: 0.4s; }
        @keyframes aura-particle-21 {
          0% { transform: rotate(147deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(327deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(507deg) translateX(521px) scale(0); opacity: 0; }
        }
        .aura-p-21 { animation: aura-particle-21 5s infinite ease-in-out; animation-delay: 0.42s; }
        @keyframes aura-particle-22 {
          0% { transform: rotate(154deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(334deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(514deg) translateX(522px) scale(0); opacity: 0; }
        }
        .aura-p-22 { animation: aura-particle-22 6s infinite ease-in-out; animation-delay: 0.44s; }
        @keyframes aura-particle-23 {
          0% { transform: rotate(161deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(341deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(521deg) translateX(523px) scale(0); opacity: 0; }
        }
        .aura-p-23 { animation: aura-particle-23 7s infinite ease-in-out; animation-delay: 0.46s; }
        @keyframes aura-particle-24 {
          0% { transform: rotate(168deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(348deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(528deg) translateX(524px) scale(0); opacity: 0; }
        }
        .aura-p-24 { animation: aura-particle-24 8s infinite ease-in-out; animation-delay: 0.48s; }
        @keyframes aura-particle-25 {
          0% { transform: rotate(175deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(355deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(535deg) translateX(525px) scale(0); opacity: 0; }
        }
        .aura-p-25 { animation: aura-particle-25 4s infinite ease-in-out; animation-delay: 0.5s; }
        @keyframes aura-particle-26 {
          0% { transform: rotate(182deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(362deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(542deg) translateX(526px) scale(0); opacity: 0; }
        }
        .aura-p-26 { animation: aura-particle-26 5s infinite ease-in-out; animation-delay: 0.52s; }
        @keyframes aura-particle-27 {
          0% { transform: rotate(189deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(369deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(549deg) translateX(527px) scale(0); opacity: 0; }
        }
        .aura-p-27 { animation: aura-particle-27 6s infinite ease-in-out; animation-delay: 0.54s; }
        @keyframes aura-particle-28 {
          0% { transform: rotate(196deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(376deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(556deg) translateX(528px) scale(0); opacity: 0; }
        }
        .aura-p-28 { animation: aura-particle-28 7s infinite ease-in-out; animation-delay: 0.56s; }
        @keyframes aura-particle-29 {
          0% { transform: rotate(203deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(383deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(563deg) translateX(529px) scale(0); opacity: 0; }
        }
        .aura-p-29 { animation: aura-particle-29 8s infinite ease-in-out; animation-delay: 0.58s; }
        @keyframes aura-particle-30 {
          0% { transform: rotate(210deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(390deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(570deg) translateX(530px) scale(0); opacity: 0; }
        }
        .aura-p-30 { animation: aura-particle-30 4s infinite ease-in-out; animation-delay: 0.6s; }
        @keyframes aura-particle-31 {
          0% { transform: rotate(217deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(397deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(577deg) translateX(531px) scale(0); opacity: 0; }
        }
        .aura-p-31 { animation: aura-particle-31 5s infinite ease-in-out; animation-delay: 0.62s; }
        @keyframes aura-particle-32 {
          0% { transform: rotate(224deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(404deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(584deg) translateX(532px) scale(0); opacity: 0; }
        }
        .aura-p-32 { animation: aura-particle-32 6s infinite ease-in-out; animation-delay: 0.64s; }
        @keyframes aura-particle-33 {
          0% { transform: rotate(231deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(411deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(591deg) translateX(533px) scale(0); opacity: 0; }
        }
        .aura-p-33 { animation: aura-particle-33 7s infinite ease-in-out; animation-delay: 0.66s; }
        @keyframes aura-particle-34 {
          0% { transform: rotate(238deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(418deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(598deg) translateX(534px) scale(0); opacity: 0; }
        }
        .aura-p-34 { animation: aura-particle-34 8s infinite ease-in-out; animation-delay: 0.68s; }
        @keyframes aura-particle-35 {
          0% { transform: rotate(245deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(425deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(605deg) translateX(535px) scale(0); opacity: 0; }
        }
        .aura-p-35 { animation: aura-particle-35 4s infinite ease-in-out; animation-delay: 0.7000000000000001s; }
        @keyframes aura-particle-36 {
          0% { transform: rotate(252deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(432deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(612deg) translateX(536px) scale(0); opacity: 0; }
        }
        .aura-p-36 { animation: aura-particle-36 5s infinite ease-in-out; animation-delay: 0.72s; }
        @keyframes aura-particle-37 {
          0% { transform: rotate(259deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(439deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(619deg) translateX(537px) scale(0); opacity: 0; }
        }
        .aura-p-37 { animation: aura-particle-37 6s infinite ease-in-out; animation-delay: 0.74s; }
        @keyframes aura-particle-38 {
          0% { transform: rotate(266deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(446deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(626deg) translateX(538px) scale(0); opacity: 0; }
        }
        .aura-p-38 { animation: aura-particle-38 7s infinite ease-in-out; animation-delay: 0.76s; }
        @keyframes aura-particle-39 {
          0% { transform: rotate(273deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(453deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(633deg) translateX(539px) scale(0); opacity: 0; }
        }
        .aura-p-39 { animation: aura-particle-39 8s infinite ease-in-out; animation-delay: 0.78s; }
        @keyframes aura-particle-40 {
          0% { transform: rotate(280deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(460deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(640deg) translateX(540px) scale(0); opacity: 0; }
        }
        .aura-p-40 { animation: aura-particle-40 4s infinite ease-in-out; animation-delay: 0.8s; }
        @keyframes aura-particle-41 {
          0% { transform: rotate(287deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(467deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(647deg) translateX(541px) scale(0); opacity: 0; }
        }
        .aura-p-41 { animation: aura-particle-41 5s infinite ease-in-out; animation-delay: 0.8200000000000001s; }
        @keyframes aura-particle-42 {
          0% { transform: rotate(294deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(474deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(654deg) translateX(542px) scale(0); opacity: 0; }
        }
        .aura-p-42 { animation: aura-particle-42 6s infinite ease-in-out; animation-delay: 0.84s; }
        @keyframes aura-particle-43 {
          0% { transform: rotate(301deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(481deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(661deg) translateX(543px) scale(0); opacity: 0; }
        }
        .aura-p-43 { animation: aura-particle-43 7s infinite ease-in-out; animation-delay: 0.86s; }
        @keyframes aura-particle-44 {
          0% { transform: rotate(308deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(488deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(668deg) translateX(544px) scale(0); opacity: 0; }
        }
        .aura-p-44 { animation: aura-particle-44 8s infinite ease-in-out; animation-delay: 0.88s; }
        @keyframes aura-particle-45 {
          0% { transform: rotate(315deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(495deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(675deg) translateX(545px) scale(0); opacity: 0; }
        }
        .aura-p-45 { animation: aura-particle-45 4s infinite ease-in-out; animation-delay: 0.9s; }
        @keyframes aura-particle-46 {
          0% { transform: rotate(322deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(502deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(682deg) translateX(546px) scale(0); opacity: 0; }
        }
        .aura-p-46 { animation: aura-particle-46 5s infinite ease-in-out; animation-delay: 0.92s; }
        @keyframes aura-particle-47 {
          0% { transform: rotate(329deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(509deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(689deg) translateX(547px) scale(0); opacity: 0; }
        }
        .aura-p-47 { animation: aura-particle-47 6s infinite ease-in-out; animation-delay: 0.9400000000000001s; }
        @keyframes aura-particle-48 {
          0% { transform: rotate(336deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(516deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(696deg) translateX(548px) scale(0); opacity: 0; }
        }
        .aura-p-48 { animation: aura-particle-48 7s infinite ease-in-out; animation-delay: 0.96s; }
        @keyframes aura-particle-49 {
          0% { transform: rotate(343deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(523deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(703deg) translateX(549px) scale(0); opacity: 0; }
        }
        .aura-p-49 { animation: aura-particle-49 8s infinite ease-in-out; animation-delay: 0.98s; }
        @keyframes aura-particle-50 {
          0% { transform: rotate(350deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(530deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(710deg) translateX(550px) scale(0); opacity: 0; }
        }
        .aura-p-50 { animation: aura-particle-50 4s infinite ease-in-out; animation-delay: 1.0s; }
        @keyframes aura-particle-51 {
          0% { transform: rotate(357deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(537deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(717deg) translateX(551px) scale(0); opacity: 0; }
        }
        .aura-p-51 { animation: aura-particle-51 5s infinite ease-in-out; animation-delay: 1.02s; }
        @keyframes aura-particle-52 {
          0% { transform: rotate(364deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(544deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(724deg) translateX(552px) scale(0); opacity: 0; }
        }
        .aura-p-52 { animation: aura-particle-52 6s infinite ease-in-out; animation-delay: 1.04s; }
        @keyframes aura-particle-53 {
          0% { transform: rotate(371deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(551deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(731deg) translateX(553px) scale(0); opacity: 0; }
        }
        .aura-p-53 { animation: aura-particle-53 7s infinite ease-in-out; animation-delay: 1.06s; }
        @keyframes aura-particle-54 {
          0% { transform: rotate(378deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(558deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(738deg) translateX(554px) scale(0); opacity: 0; }
        }
        .aura-p-54 { animation: aura-particle-54 8s infinite ease-in-out; animation-delay: 1.08s; }
        @keyframes aura-particle-55 {
          0% { transform: rotate(385deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(565deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(745deg) translateX(555px) scale(0); opacity: 0; }
        }
        .aura-p-55 { animation: aura-particle-55 4s infinite ease-in-out; animation-delay: 1.1s; }
        @keyframes aura-particle-56 {
          0% { transform: rotate(392deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(572deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(752deg) translateX(556px) scale(0); opacity: 0; }
        }
        .aura-p-56 { animation: aura-particle-56 5s infinite ease-in-out; animation-delay: 1.12s; }
        @keyframes aura-particle-57 {
          0% { transform: rotate(399deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(579deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(759deg) translateX(557px) scale(0); opacity: 0; }
        }
        .aura-p-57 { animation: aura-particle-57 6s infinite ease-in-out; animation-delay: 1.1400000000000001s; }
        @keyframes aura-particle-58 {
          0% { transform: rotate(406deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(586deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(766deg) translateX(558px) scale(0); opacity: 0; }
        }
        .aura-p-58 { animation: aura-particle-58 7s infinite ease-in-out; animation-delay: 1.16s; }
        @keyframes aura-particle-59 {
          0% { transform: rotate(413deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(593deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(773deg) translateX(559px) scale(0); opacity: 0; }
        }
        .aura-p-59 { animation: aura-particle-59 8s infinite ease-in-out; animation-delay: 1.18s; }
        @keyframes aura-particle-60 {
          0% { transform: rotate(420deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(600deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(780deg) translateX(560px) scale(0); opacity: 0; }
        }
        .aura-p-60 { animation: aura-particle-60 4s infinite ease-in-out; animation-delay: 1.2s; }
        @keyframes aura-particle-61 {
          0% { transform: rotate(427deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(607deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(787deg) translateX(561px) scale(0); opacity: 0; }
        }
        .aura-p-61 { animation: aura-particle-61 5s infinite ease-in-out; animation-delay: 1.22s; }
        @keyframes aura-particle-62 {
          0% { transform: rotate(434deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(614deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(794deg) translateX(562px) scale(0); opacity: 0; }
        }
        .aura-p-62 { animation: aura-particle-62 6s infinite ease-in-out; animation-delay: 1.24s; }
        @keyframes aura-particle-63 {
          0% { transform: rotate(441deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(621deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(801deg) translateX(563px) scale(0); opacity: 0; }
        }
        .aura-p-63 { animation: aura-particle-63 7s infinite ease-in-out; animation-delay: 1.26s; }
        @keyframes aura-particle-64 {
          0% { transform: rotate(448deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(628deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(808deg) translateX(564px) scale(0); opacity: 0; }
        }
        .aura-p-64 { animation: aura-particle-64 8s infinite ease-in-out; animation-delay: 1.28s; }
        @keyframes aura-particle-65 {
          0% { transform: rotate(455deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(635deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(815deg) translateX(565px) scale(0); opacity: 0; }
        }
        .aura-p-65 { animation: aura-particle-65 4s infinite ease-in-out; animation-delay: 1.3s; }
        @keyframes aura-particle-66 {
          0% { transform: rotate(462deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(642deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(822deg) translateX(566px) scale(0); opacity: 0; }
        }
        .aura-p-66 { animation: aura-particle-66 5s infinite ease-in-out; animation-delay: 1.32s; }
        @keyframes aura-particle-67 {
          0% { transform: rotate(469deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(649deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(829deg) translateX(567px) scale(0); opacity: 0; }
        }
        .aura-p-67 { animation: aura-particle-67 6s infinite ease-in-out; animation-delay: 1.34s; }
        @keyframes aura-particle-68 {
          0% { transform: rotate(476deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(656deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(836deg) translateX(568px) scale(0); opacity: 0; }
        }
        .aura-p-68 { animation: aura-particle-68 7s infinite ease-in-out; animation-delay: 1.36s; }
        @keyframes aura-particle-69 {
          0% { transform: rotate(483deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(663deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(843deg) translateX(569px) scale(0); opacity: 0; }
        }
        .aura-p-69 { animation: aura-particle-69 8s infinite ease-in-out; animation-delay: 1.3800000000000001s; }
        @keyframes aura-particle-70 {
          0% { transform: rotate(490deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(670deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(850deg) translateX(570px) scale(0); opacity: 0; }
        }
        .aura-p-70 { animation: aura-particle-70 4s infinite ease-in-out; animation-delay: 1.4000000000000001s; }
        @keyframes aura-particle-71 {
          0% { transform: rotate(497deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(677deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(857deg) translateX(571px) scale(0); opacity: 0; }
        }
        .aura-p-71 { animation: aura-particle-71 5s infinite ease-in-out; animation-delay: 1.42s; }
        @keyframes aura-particle-72 {
          0% { transform: rotate(504deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(684deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(864deg) translateX(572px) scale(0); opacity: 0; }
        }
        .aura-p-72 { animation: aura-particle-72 6s infinite ease-in-out; animation-delay: 1.44s; }
        @keyframes aura-particle-73 {
          0% { transform: rotate(511deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(691deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(871deg) translateX(573px) scale(0); opacity: 0; }
        }
        .aura-p-73 { animation: aura-particle-73 7s infinite ease-in-out; animation-delay: 1.46s; }
        @keyframes aura-particle-74 {
          0% { transform: rotate(518deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(698deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(878deg) translateX(574px) scale(0); opacity: 0; }
        }
        .aura-p-74 { animation: aura-particle-74 8s infinite ease-in-out; animation-delay: 1.48s; }
        @keyframes aura-particle-75 {
          0% { transform: rotate(525deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(705deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(885deg) translateX(575px) scale(0); opacity: 0; }
        }
        .aura-p-75 { animation: aura-particle-75 4s infinite ease-in-out; animation-delay: 1.5s; }
        @keyframes aura-particle-76 {
          0% { transform: rotate(532deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(712deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(892deg) translateX(576px) scale(0); opacity: 0; }
        }
        .aura-p-76 { animation: aura-particle-76 5s infinite ease-in-out; animation-delay: 1.52s; }
        @keyframes aura-particle-77 {
          0% { transform: rotate(539deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(719deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(899deg) translateX(577px) scale(0); opacity: 0; }
        }
        .aura-p-77 { animation: aura-particle-77 6s infinite ease-in-out; animation-delay: 1.54s; }
        @keyframes aura-particle-78 {
          0% { transform: rotate(546deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(726deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(906deg) translateX(578px) scale(0); opacity: 0; }
        }
        .aura-p-78 { animation: aura-particle-78 7s infinite ease-in-out; animation-delay: 1.56s; }
        @keyframes aura-particle-79 {
          0% { transform: rotate(553deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(733deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(913deg) translateX(579px) scale(0); opacity: 0; }
        }
        .aura-p-79 { animation: aura-particle-79 8s infinite ease-in-out; animation-delay: 1.58s; }
        @keyframes aura-particle-80 {
          0% { transform: rotate(560deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(740deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(920deg) translateX(580px) scale(0); opacity: 0; }
        }
        .aura-p-80 { animation: aura-particle-80 4s infinite ease-in-out; animation-delay: 1.6s; }
        @keyframes aura-particle-81 {
          0% { transform: rotate(567deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(747deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(927deg) translateX(581px) scale(0); opacity: 0; }
        }
        .aura-p-81 { animation: aura-particle-81 5s infinite ease-in-out; animation-delay: 1.62s; }
        @keyframes aura-particle-82 {
          0% { transform: rotate(574deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(754deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(934deg) translateX(582px) scale(0); opacity: 0; }
        }
        .aura-p-82 { animation: aura-particle-82 6s infinite ease-in-out; animation-delay: 1.6400000000000001s; }
        @keyframes aura-particle-83 {
          0% { transform: rotate(581deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(761deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(941deg) translateX(583px) scale(0); opacity: 0; }
        }
        .aura-p-83 { animation: aura-particle-83 7s infinite ease-in-out; animation-delay: 1.6600000000000001s; }
        @keyframes aura-particle-84 {
          0% { transform: rotate(588deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(768deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(948deg) translateX(584px) scale(0); opacity: 0; }
        }
        .aura-p-84 { animation: aura-particle-84 8s infinite ease-in-out; animation-delay: 1.68s; }
        @keyframes aura-particle-85 {
          0% { transform: rotate(595deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(775deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(955deg) translateX(585px) scale(0); opacity: 0; }
        }
        .aura-p-85 { animation: aura-particle-85 4s infinite ease-in-out; animation-delay: 1.7s; }
        @keyframes aura-particle-86 {
          0% { transform: rotate(602deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(782deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(962deg) translateX(586px) scale(0); opacity: 0; }
        }
        .aura-p-86 { animation: aura-particle-86 5s infinite ease-in-out; animation-delay: 1.72s; }
        @keyframes aura-particle-87 {
          0% { transform: rotate(609deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(789deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(969deg) translateX(587px) scale(0); opacity: 0; }
        }
        .aura-p-87 { animation: aura-particle-87 6s infinite ease-in-out; animation-delay: 1.74s; }
        @keyframes aura-particle-88 {
          0% { transform: rotate(616deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(796deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(976deg) translateX(588px) scale(0); opacity: 0; }
        }
        .aura-p-88 { animation: aura-particle-88 7s infinite ease-in-out; animation-delay: 1.76s; }
        @keyframes aura-particle-89 {
          0% { transform: rotate(623deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(803deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(983deg) translateX(589px) scale(0); opacity: 0; }
        }
        .aura-p-89 { animation: aura-particle-89 8s infinite ease-in-out; animation-delay: 1.78s; }
        @keyframes aura-particle-90 {
          0% { transform: rotate(630deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(810deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(990deg) translateX(590px) scale(0); opacity: 0; }
        }
        .aura-p-90 { animation: aura-particle-90 4s infinite ease-in-out; animation-delay: 1.8s; }
        @keyframes aura-particle-91 {
          0% { transform: rotate(637deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(817deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(997deg) translateX(591px) scale(0); opacity: 0; }
        }
        .aura-p-91 { animation: aura-particle-91 5s infinite ease-in-out; animation-delay: 1.82s; }
        @keyframes aura-particle-92 {
          0% { transform: rotate(644deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(824deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1004deg) translateX(592px) scale(0); opacity: 0; }
        }
        .aura-p-92 { animation: aura-particle-92 6s infinite ease-in-out; animation-delay: 1.84s; }
        @keyframes aura-particle-93 {
          0% { transform: rotate(651deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(831deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1011deg) translateX(593px) scale(0); opacity: 0; }
        }
        .aura-p-93 { animation: aura-particle-93 7s infinite ease-in-out; animation-delay: 1.86s; }
        @keyframes aura-particle-94 {
          0% { transform: rotate(658deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(838deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1018deg) translateX(594px) scale(0); opacity: 0; }
        }
        .aura-p-94 { animation: aura-particle-94 8s infinite ease-in-out; animation-delay: 1.8800000000000001s; }
        @keyframes aura-particle-95 {
          0% { transform: rotate(665deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(845deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1025deg) translateX(595px) scale(0); opacity: 0; }
        }
        .aura-p-95 { animation: aura-particle-95 4s infinite ease-in-out; animation-delay: 1.9000000000000001s; }
        @keyframes aura-particle-96 {
          0% { transform: rotate(672deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(852deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1032deg) translateX(596px) scale(0); opacity: 0; }
        }
        .aura-p-96 { animation: aura-particle-96 5s infinite ease-in-out; animation-delay: 1.92s; }
        @keyframes aura-particle-97 {
          0% { transform: rotate(679deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(859deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1039deg) translateX(597px) scale(0); opacity: 0; }
        }
        .aura-p-97 { animation: aura-particle-97 6s infinite ease-in-out; animation-delay: 1.94s; }
        @keyframes aura-particle-98 {
          0% { transform: rotate(686deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(866deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1046deg) translateX(598px) scale(0); opacity: 0; }
        }
        .aura-p-98 { animation: aura-particle-98 7s infinite ease-in-out; animation-delay: 1.96s; }
        @keyframes aura-particle-99 {
          0% { transform: rotate(693deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(873deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1053deg) translateX(599px) scale(0); opacity: 0; }
        }
        .aura-p-99 { animation: aura-particle-99 8s infinite ease-in-out; animation-delay: 1.98s; }
        @keyframes aura-particle-100 {
          0% { transform: rotate(700deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(880deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1060deg) translateX(600px) scale(0); opacity: 0; }
        }
        .aura-p-100 { animation: aura-particle-100 4s infinite ease-in-out; animation-delay: 2.0s; }
        @keyframes aura-particle-101 {
          0% { transform: rotate(707deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(887deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1067deg) translateX(601px) scale(0); opacity: 0; }
        }
        .aura-p-101 { animation: aura-particle-101 5s infinite ease-in-out; animation-delay: 2.02s; }
        @keyframes aura-particle-102 {
          0% { transform: rotate(714deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(894deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1074deg) translateX(602px) scale(0); opacity: 0; }
        }
        .aura-p-102 { animation: aura-particle-102 6s infinite ease-in-out; animation-delay: 2.04s; }
        @keyframes aura-particle-103 {
          0% { transform: rotate(721deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(901deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1081deg) translateX(603px) scale(0); opacity: 0; }
        }
        .aura-p-103 { animation: aura-particle-103 7s infinite ease-in-out; animation-delay: 2.06s; }
        @keyframes aura-particle-104 {
          0% { transform: rotate(728deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(908deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1088deg) translateX(604px) scale(0); opacity: 0; }
        }
        .aura-p-104 { animation: aura-particle-104 8s infinite ease-in-out; animation-delay: 2.08s; }
        @keyframes aura-particle-105 {
          0% { transform: rotate(735deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(915deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1095deg) translateX(605px) scale(0); opacity: 0; }
        }
        .aura-p-105 { animation: aura-particle-105 4s infinite ease-in-out; animation-delay: 2.1s; }
        @keyframes aura-particle-106 {
          0% { transform: rotate(742deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(922deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1102deg) translateX(606px) scale(0); opacity: 0; }
        }
        .aura-p-106 { animation: aura-particle-106 5s infinite ease-in-out; animation-delay: 2.12s; }
        @keyframes aura-particle-107 {
          0% { transform: rotate(749deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(929deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1109deg) translateX(607px) scale(0); opacity: 0; }
        }
        .aura-p-107 { animation: aura-particle-107 6s infinite ease-in-out; animation-delay: 2.14s; }
        @keyframes aura-particle-108 {
          0% { transform: rotate(756deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(936deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1116deg) translateX(608px) scale(0); opacity: 0; }
        }
        .aura-p-108 { animation: aura-particle-108 7s infinite ease-in-out; animation-delay: 2.16s; }
        @keyframes aura-particle-109 {
          0% { transform: rotate(763deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(943deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1123deg) translateX(609px) scale(0); opacity: 0; }
        }
        .aura-p-109 { animation: aura-particle-109 8s infinite ease-in-out; animation-delay: 2.18s; }
        @keyframes aura-particle-110 {
          0% { transform: rotate(770deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(950deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1130deg) translateX(610px) scale(0); opacity: 0; }
        }
        .aura-p-110 { animation: aura-particle-110 4s infinite ease-in-out; animation-delay: 2.2s; }
        @keyframes aura-particle-111 {
          0% { transform: rotate(777deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(957deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1137deg) translateX(611px) scale(0); opacity: 0; }
        }
        .aura-p-111 { animation: aura-particle-111 5s infinite ease-in-out; animation-delay: 2.22s; }
        @keyframes aura-particle-112 {
          0% { transform: rotate(784deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(964deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1144deg) translateX(612px) scale(0); opacity: 0; }
        }
        .aura-p-112 { animation: aura-particle-112 6s infinite ease-in-out; animation-delay: 2.24s; }
        @keyframes aura-particle-113 {
          0% { transform: rotate(791deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(971deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1151deg) translateX(613px) scale(0); opacity: 0; }
        }
        .aura-p-113 { animation: aura-particle-113 7s infinite ease-in-out; animation-delay: 2.2600000000000002s; }
        @keyframes aura-particle-114 {
          0% { transform: rotate(798deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(978deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1158deg) translateX(614px) scale(0); opacity: 0; }
        }
        .aura-p-114 { animation: aura-particle-114 8s infinite ease-in-out; animation-delay: 2.2800000000000002s; }
        @keyframes aura-particle-115 {
          0% { transform: rotate(805deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(985deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1165deg) translateX(615px) scale(0); opacity: 0; }
        }
        .aura-p-115 { animation: aura-particle-115 4s infinite ease-in-out; animation-delay: 2.3000000000000003s; }
        @keyframes aura-particle-116 {
          0% { transform: rotate(812deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(992deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1172deg) translateX(616px) scale(0); opacity: 0; }
        }
        .aura-p-116 { animation: aura-particle-116 5s infinite ease-in-out; animation-delay: 2.32s; }
        @keyframes aura-particle-117 {
          0% { transform: rotate(819deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(999deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1179deg) translateX(617px) scale(0); opacity: 0; }
        }
        .aura-p-117 { animation: aura-particle-117 6s infinite ease-in-out; animation-delay: 2.34s; }
        @keyframes aura-particle-118 {
          0% { transform: rotate(826deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1006deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1186deg) translateX(618px) scale(0); opacity: 0; }
        }
        .aura-p-118 { animation: aura-particle-118 7s infinite ease-in-out; animation-delay: 2.36s; }
        @keyframes aura-particle-119 {
          0% { transform: rotate(833deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1013deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1193deg) translateX(619px) scale(0); opacity: 0; }
        }
        .aura-p-119 { animation: aura-particle-119 8s infinite ease-in-out; animation-delay: 2.38s; }
        @keyframes aura-particle-120 {
          0% { transform: rotate(840deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1020deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1200deg) translateX(500px) scale(0); opacity: 0; }
        }
        .aura-p-120 { animation: aura-particle-120 4s infinite ease-in-out; animation-delay: 2.4s; }
        @keyframes aura-particle-121 {
          0% { transform: rotate(847deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1027deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1207deg) translateX(501px) scale(0); opacity: 0; }
        }
        .aura-p-121 { animation: aura-particle-121 5s infinite ease-in-out; animation-delay: 2.42s; }
        @keyframes aura-particle-122 {
          0% { transform: rotate(854deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1034deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1214deg) translateX(502px) scale(0); opacity: 0; }
        }
        .aura-p-122 { animation: aura-particle-122 6s infinite ease-in-out; animation-delay: 2.44s; }
        @keyframes aura-particle-123 {
          0% { transform: rotate(861deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1041deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1221deg) translateX(503px) scale(0); opacity: 0; }
        }
        .aura-p-123 { animation: aura-particle-123 7s infinite ease-in-out; animation-delay: 2.46s; }
        @keyframes aura-particle-124 {
          0% { transform: rotate(868deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1048deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1228deg) translateX(504px) scale(0); opacity: 0; }
        }
        .aura-p-124 { animation: aura-particle-124 8s infinite ease-in-out; animation-delay: 2.48s; }
        @keyframes aura-particle-125 {
          0% { transform: rotate(875deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1055deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1235deg) translateX(505px) scale(0); opacity: 0; }
        }
        .aura-p-125 { animation: aura-particle-125 4s infinite ease-in-out; animation-delay: 2.5s; }
        @keyframes aura-particle-126 {
          0% { transform: rotate(882deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1062deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1242deg) translateX(506px) scale(0); opacity: 0; }
        }
        .aura-p-126 { animation: aura-particle-126 5s infinite ease-in-out; animation-delay: 2.52s; }
        @keyframes aura-particle-127 {
          0% { transform: rotate(889deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1069deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1249deg) translateX(507px) scale(0); opacity: 0; }
        }
        .aura-p-127 { animation: aura-particle-127 6s infinite ease-in-out; animation-delay: 2.54s; }
        @keyframes aura-particle-128 {
          0% { transform: rotate(896deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1076deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1256deg) translateX(508px) scale(0); opacity: 0; }
        }
        .aura-p-128 { animation: aura-particle-128 7s infinite ease-in-out; animation-delay: 2.56s; }
        @keyframes aura-particle-129 {
          0% { transform: rotate(903deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1083deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1263deg) translateX(509px) scale(0); opacity: 0; }
        }
        .aura-p-129 { animation: aura-particle-129 8s infinite ease-in-out; animation-delay: 2.58s; }
        @keyframes aura-particle-130 {
          0% { transform: rotate(910deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1090deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1270deg) translateX(510px) scale(0); opacity: 0; }
        }
        .aura-p-130 { animation: aura-particle-130 4s infinite ease-in-out; animation-delay: 2.6s; }
        @keyframes aura-particle-131 {
          0% { transform: rotate(917deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1097deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1277deg) translateX(511px) scale(0); opacity: 0; }
        }
        .aura-p-131 { animation: aura-particle-131 5s infinite ease-in-out; animation-delay: 2.62s; }
        @keyframes aura-particle-132 {
          0% { transform: rotate(924deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1104deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1284deg) translateX(512px) scale(0); opacity: 0; }
        }
        .aura-p-132 { animation: aura-particle-132 6s infinite ease-in-out; animation-delay: 2.64s; }
        @keyframes aura-particle-133 {
          0% { transform: rotate(931deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1111deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1291deg) translateX(513px) scale(0); opacity: 0; }
        }
        .aura-p-133 { animation: aura-particle-133 7s infinite ease-in-out; animation-delay: 2.66s; }
        @keyframes aura-particle-134 {
          0% { transform: rotate(938deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1118deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1298deg) translateX(514px) scale(0); opacity: 0; }
        }
        .aura-p-134 { animation: aura-particle-134 8s infinite ease-in-out; animation-delay: 2.68s; }
        @keyframes aura-particle-135 {
          0% { transform: rotate(945deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1125deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1305deg) translateX(515px) scale(0); opacity: 0; }
        }
        .aura-p-135 { animation: aura-particle-135 4s infinite ease-in-out; animation-delay: 2.7s; }
        @keyframes aura-particle-136 {
          0% { transform: rotate(952deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1132deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1312deg) translateX(516px) scale(0); opacity: 0; }
        }
        .aura-p-136 { animation: aura-particle-136 5s infinite ease-in-out; animation-delay: 2.72s; }
        @keyframes aura-particle-137 {
          0% { transform: rotate(959deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1139deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1319deg) translateX(517px) scale(0); opacity: 0; }
        }
        .aura-p-137 { animation: aura-particle-137 6s infinite ease-in-out; animation-delay: 2.74s; }
        @keyframes aura-particle-138 {
          0% { transform: rotate(966deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1146deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1326deg) translateX(518px) scale(0); opacity: 0; }
        }
        .aura-p-138 { animation: aura-particle-138 7s infinite ease-in-out; animation-delay: 2.7600000000000002s; }
        @keyframes aura-particle-139 {
          0% { transform: rotate(973deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1153deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1333deg) translateX(519px) scale(0); opacity: 0; }
        }
        .aura-p-139 { animation: aura-particle-139 8s infinite ease-in-out; animation-delay: 2.7800000000000002s; }
        @keyframes aura-particle-140 {
          0% { transform: rotate(980deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1160deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1340deg) translateX(520px) scale(0); opacity: 0; }
        }
        .aura-p-140 { animation: aura-particle-140 4s infinite ease-in-out; animation-delay: 2.8000000000000003s; }
        @keyframes aura-particle-141 {
          0% { transform: rotate(987deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1167deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1347deg) translateX(521px) scale(0); opacity: 0; }
        }
        .aura-p-141 { animation: aura-particle-141 5s infinite ease-in-out; animation-delay: 2.82s; }
        @keyframes aura-particle-142 {
          0% { transform: rotate(994deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1174deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1354deg) translateX(522px) scale(0); opacity: 0; }
        }
        .aura-p-142 { animation: aura-particle-142 6s infinite ease-in-out; animation-delay: 2.84s; }
        @keyframes aura-particle-143 {
          0% { transform: rotate(1001deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1181deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1361deg) translateX(523px) scale(0); opacity: 0; }
        }
        .aura-p-143 { animation: aura-particle-143 7s infinite ease-in-out; animation-delay: 2.86s; }
        @keyframes aura-particle-144 {
          0% { transform: rotate(1008deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1188deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1368deg) translateX(524px) scale(0); opacity: 0; }
        }
        .aura-p-144 { animation: aura-particle-144 8s infinite ease-in-out; animation-delay: 2.88s; }
        @keyframes aura-particle-145 {
          0% { transform: rotate(1015deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1195deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1375deg) translateX(525px) scale(0); opacity: 0; }
        }
        .aura-p-145 { animation: aura-particle-145 4s infinite ease-in-out; animation-delay: 2.9s; }
        @keyframes aura-particle-146 {
          0% { transform: rotate(1022deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1202deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1382deg) translateX(526px) scale(0); opacity: 0; }
        }
        .aura-p-146 { animation: aura-particle-146 5s infinite ease-in-out; animation-delay: 2.92s; }
        @keyframes aura-particle-147 {
          0% { transform: rotate(1029deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1209deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1389deg) translateX(527px) scale(0); opacity: 0; }
        }
        .aura-p-147 { animation: aura-particle-147 6s infinite ease-in-out; animation-delay: 2.94s; }
        @keyframes aura-particle-148 {
          0% { transform: rotate(1036deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1216deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1396deg) translateX(528px) scale(0); opacity: 0; }
        }
        .aura-p-148 { animation: aura-particle-148 7s infinite ease-in-out; animation-delay: 2.96s; }
        @keyframes aura-particle-149 {
          0% { transform: rotate(1043deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1223deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1403deg) translateX(529px) scale(0); opacity: 0; }
        }
        .aura-p-149 { animation: aura-particle-149 8s infinite ease-in-out; animation-delay: 2.98s; }
        @keyframes aura-particle-150 {
          0% { transform: rotate(1050deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1230deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1410deg) translateX(530px) scale(0); opacity: 0; }
        }
        .aura-p-150 { animation: aura-particle-150 4s infinite ease-in-out; animation-delay: 3.0s; }
        @keyframes aura-particle-151 {
          0% { transform: rotate(1057deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1237deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1417deg) translateX(531px) scale(0); opacity: 0; }
        }
        .aura-p-151 { animation: aura-particle-151 5s infinite ease-in-out; animation-delay: 3.02s; }
        @keyframes aura-particle-152 {
          0% { transform: rotate(1064deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1244deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1424deg) translateX(532px) scale(0); opacity: 0; }
        }
        .aura-p-152 { animation: aura-particle-152 6s infinite ease-in-out; animation-delay: 3.04s; }
        @keyframes aura-particle-153 {
          0% { transform: rotate(1071deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1251deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1431deg) translateX(533px) scale(0); opacity: 0; }
        }
        .aura-p-153 { animation: aura-particle-153 7s infinite ease-in-out; animation-delay: 3.06s; }
        @keyframes aura-particle-154 {
          0% { transform: rotate(1078deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1258deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1438deg) translateX(534px) scale(0); opacity: 0; }
        }
        .aura-p-154 { animation: aura-particle-154 8s infinite ease-in-out; animation-delay: 3.08s; }
        @keyframes aura-particle-155 {
          0% { transform: rotate(1085deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1265deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1445deg) translateX(535px) scale(0); opacity: 0; }
        }
        .aura-p-155 { animation: aura-particle-155 4s infinite ease-in-out; animation-delay: 3.1s; }
        @keyframes aura-particle-156 {
          0% { transform: rotate(1092deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1272deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1452deg) translateX(536px) scale(0); opacity: 0; }
        }
        .aura-p-156 { animation: aura-particle-156 5s infinite ease-in-out; animation-delay: 3.12s; }
        @keyframes aura-particle-157 {
          0% { transform: rotate(1099deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1279deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1459deg) translateX(537px) scale(0); opacity: 0; }
        }
        .aura-p-157 { animation: aura-particle-157 6s infinite ease-in-out; animation-delay: 3.14s; }
        @keyframes aura-particle-158 {
          0% { transform: rotate(1106deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1286deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1466deg) translateX(538px) scale(0); opacity: 0; }
        }
        .aura-p-158 { animation: aura-particle-158 7s infinite ease-in-out; animation-delay: 3.16s; }
        @keyframes aura-particle-159 {
          0% { transform: rotate(1113deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1293deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1473deg) translateX(539px) scale(0); opacity: 0; }
        }
        .aura-p-159 { animation: aura-particle-159 8s infinite ease-in-out; animation-delay: 3.18s; }
        @keyframes aura-particle-160 {
          0% { transform: rotate(1120deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1300deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1480deg) translateX(540px) scale(0); opacity: 0; }
        }
        .aura-p-160 { animation: aura-particle-160 4s infinite ease-in-out; animation-delay: 3.2s; }
        @keyframes aura-particle-161 {
          0% { transform: rotate(1127deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1307deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1487deg) translateX(541px) scale(0); opacity: 0; }
        }
        .aura-p-161 { animation: aura-particle-161 5s infinite ease-in-out; animation-delay: 3.22s; }
        @keyframes aura-particle-162 {
          0% { transform: rotate(1134deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1314deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1494deg) translateX(542px) scale(0); opacity: 0; }
        }
        .aura-p-162 { animation: aura-particle-162 6s infinite ease-in-out; animation-delay: 3.24s; }
        @keyframes aura-particle-163 {
          0% { transform: rotate(1141deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1321deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1501deg) translateX(543px) scale(0); opacity: 0; }
        }
        .aura-p-163 { animation: aura-particle-163 7s infinite ease-in-out; animation-delay: 3.2600000000000002s; }
        @keyframes aura-particle-164 {
          0% { transform: rotate(1148deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1328deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1508deg) translateX(544px) scale(0); opacity: 0; }
        }
        .aura-p-164 { animation: aura-particle-164 8s infinite ease-in-out; animation-delay: 3.2800000000000002s; }
        @keyframes aura-particle-165 {
          0% { transform: rotate(1155deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1335deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1515deg) translateX(545px) scale(0); opacity: 0; }
        }
        .aura-p-165 { animation: aura-particle-165 4s infinite ease-in-out; animation-delay: 3.3000000000000003s; }
        @keyframes aura-particle-166 {
          0% { transform: rotate(1162deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1342deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1522deg) translateX(546px) scale(0); opacity: 0; }
        }
        .aura-p-166 { animation: aura-particle-166 5s infinite ease-in-out; animation-delay: 3.3200000000000003s; }
        @keyframes aura-particle-167 {
          0% { transform: rotate(1169deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1349deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1529deg) translateX(547px) scale(0); opacity: 0; }
        }
        .aura-p-167 { animation: aura-particle-167 6s infinite ease-in-out; animation-delay: 3.34s; }
        @keyframes aura-particle-168 {
          0% { transform: rotate(1176deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1356deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1536deg) translateX(548px) scale(0); opacity: 0; }
        }
        .aura-p-168 { animation: aura-particle-168 7s infinite ease-in-out; animation-delay: 3.36s; }
        @keyframes aura-particle-169 {
          0% { transform: rotate(1183deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1363deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1543deg) translateX(549px) scale(0); opacity: 0; }
        }
        .aura-p-169 { animation: aura-particle-169 8s infinite ease-in-out; animation-delay: 3.38s; }
        @keyframes aura-particle-170 {
          0% { transform: rotate(1190deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1370deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1550deg) translateX(550px) scale(0); opacity: 0; }
        }
        .aura-p-170 { animation: aura-particle-170 4s infinite ease-in-out; animation-delay: 3.4s; }
        @keyframes aura-particle-171 {
          0% { transform: rotate(1197deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1377deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1557deg) translateX(551px) scale(0); opacity: 0; }
        }
        .aura-p-171 { animation: aura-particle-171 5s infinite ease-in-out; animation-delay: 3.42s; }
        @keyframes aura-particle-172 {
          0% { transform: rotate(1204deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1384deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1564deg) translateX(552px) scale(0); opacity: 0; }
        }
        .aura-p-172 { animation: aura-particle-172 6s infinite ease-in-out; animation-delay: 3.44s; }
        @keyframes aura-particle-173 {
          0% { transform: rotate(1211deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1391deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1571deg) translateX(553px) scale(0); opacity: 0; }
        }
        .aura-p-173 { animation: aura-particle-173 7s infinite ease-in-out; animation-delay: 3.46s; }
        @keyframes aura-particle-174 {
          0% { transform: rotate(1218deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1398deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1578deg) translateX(554px) scale(0); opacity: 0; }
        }
        .aura-p-174 { animation: aura-particle-174 8s infinite ease-in-out; animation-delay: 3.48s; }
        @keyframes aura-particle-175 {
          0% { transform: rotate(1225deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1405deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1585deg) translateX(555px) scale(0); opacity: 0; }
        }
        .aura-p-175 { animation: aura-particle-175 4s infinite ease-in-out; animation-delay: 3.5s; }
        @keyframes aura-particle-176 {
          0% { transform: rotate(1232deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1412deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1592deg) translateX(556px) scale(0); opacity: 0; }
        }
        .aura-p-176 { animation: aura-particle-176 5s infinite ease-in-out; animation-delay: 3.52s; }
        @keyframes aura-particle-177 {
          0% { transform: rotate(1239deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1419deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1599deg) translateX(557px) scale(0); opacity: 0; }
        }
        .aura-p-177 { animation: aura-particle-177 6s infinite ease-in-out; animation-delay: 3.54s; }
        @keyframes aura-particle-178 {
          0% { transform: rotate(1246deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1426deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1606deg) translateX(558px) scale(0); opacity: 0; }
        }
        .aura-p-178 { animation: aura-particle-178 7s infinite ease-in-out; animation-delay: 3.56s; }
        @keyframes aura-particle-179 {
          0% { transform: rotate(1253deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1433deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1613deg) translateX(559px) scale(0); opacity: 0; }
        }
        .aura-p-179 { animation: aura-particle-179 8s infinite ease-in-out; animation-delay: 3.58s; }
        @keyframes aura-particle-180 {
          0% { transform: rotate(1260deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1440deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1620deg) translateX(560px) scale(0); opacity: 0; }
        }
        .aura-p-180 { animation: aura-particle-180 4s infinite ease-in-out; animation-delay: 3.6s; }
        @keyframes aura-particle-181 {
          0% { transform: rotate(1267deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1447deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1627deg) translateX(561px) scale(0); opacity: 0; }
        }
        .aura-p-181 { animation: aura-particle-181 5s infinite ease-in-out; animation-delay: 3.62s; }
        @keyframes aura-particle-182 {
          0% { transform: rotate(1274deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1454deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1634deg) translateX(562px) scale(0); opacity: 0; }
        }
        .aura-p-182 { animation: aura-particle-182 6s infinite ease-in-out; animation-delay: 3.64s; }
        @keyframes aura-particle-183 {
          0% { transform: rotate(1281deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1461deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1641deg) translateX(563px) scale(0); opacity: 0; }
        }
        .aura-p-183 { animation: aura-particle-183 7s infinite ease-in-out; animation-delay: 3.66s; }
        @keyframes aura-particle-184 {
          0% { transform: rotate(1288deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1468deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1648deg) translateX(564px) scale(0); opacity: 0; }
        }
        .aura-p-184 { animation: aura-particle-184 8s infinite ease-in-out; animation-delay: 3.68s; }
        @keyframes aura-particle-185 {
          0% { transform: rotate(1295deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1475deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1655deg) translateX(565px) scale(0); opacity: 0; }
        }
        .aura-p-185 { animation: aura-particle-185 4s infinite ease-in-out; animation-delay: 3.7s; }
        @keyframes aura-particle-186 {
          0% { transform: rotate(1302deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1482deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1662deg) translateX(566px) scale(0); opacity: 0; }
        }
        .aura-p-186 { animation: aura-particle-186 5s infinite ease-in-out; animation-delay: 3.72s; }
        @keyframes aura-particle-187 {
          0% { transform: rotate(1309deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1489deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1669deg) translateX(567px) scale(0); opacity: 0; }
        }
        .aura-p-187 { animation: aura-particle-187 6s infinite ease-in-out; animation-delay: 3.74s; }
        @keyframes aura-particle-188 {
          0% { transform: rotate(1316deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1496deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1676deg) translateX(568px) scale(0); opacity: 0; }
        }
        .aura-p-188 { animation: aura-particle-188 7s infinite ease-in-out; animation-delay: 3.7600000000000002s; }
        @keyframes aura-particle-189 {
          0% { transform: rotate(1323deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1503deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1683deg) translateX(569px) scale(0); opacity: 0; }
        }
        .aura-p-189 { animation: aura-particle-189 8s infinite ease-in-out; animation-delay: 3.7800000000000002s; }
        @keyframes aura-particle-190 {
          0% { transform: rotate(1330deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1510deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1690deg) translateX(570px) scale(0); opacity: 0; }
        }
        .aura-p-190 { animation: aura-particle-190 4s infinite ease-in-out; animation-delay: 3.8000000000000003s; }
        @keyframes aura-particle-191 {
          0% { transform: rotate(1337deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1517deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1697deg) translateX(571px) scale(0); opacity: 0; }
        }
        .aura-p-191 { animation: aura-particle-191 5s infinite ease-in-out; animation-delay: 3.8200000000000003s; }
        @keyframes aura-particle-192 {
          0% { transform: rotate(1344deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1524deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1704deg) translateX(572px) scale(0); opacity: 0; }
        }
        .aura-p-192 { animation: aura-particle-192 6s infinite ease-in-out; animation-delay: 3.84s; }
        @keyframes aura-particle-193 {
          0% { transform: rotate(1351deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1531deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1711deg) translateX(573px) scale(0); opacity: 0; }
        }
        .aura-p-193 { animation: aura-particle-193 7s infinite ease-in-out; animation-delay: 3.86s; }
        @keyframes aura-particle-194 {
          0% { transform: rotate(1358deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1538deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1718deg) translateX(574px) scale(0); opacity: 0; }
        }
        .aura-p-194 { animation: aura-particle-194 8s infinite ease-in-out; animation-delay: 3.88s; }
        @keyframes aura-particle-195 {
          0% { transform: rotate(1365deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1545deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1725deg) translateX(575px) scale(0); opacity: 0; }
        }
        .aura-p-195 { animation: aura-particle-195 4s infinite ease-in-out; animation-delay: 3.9s; }
        @keyframes aura-particle-196 {
          0% { transform: rotate(1372deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1552deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1732deg) translateX(576px) scale(0); opacity: 0; }
        }
        .aura-p-196 { animation: aura-particle-196 5s infinite ease-in-out; animation-delay: 3.92s; }
        @keyframes aura-particle-197 {
          0% { transform: rotate(1379deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1559deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1739deg) translateX(577px) scale(0); opacity: 0; }
        }
        .aura-p-197 { animation: aura-particle-197 6s infinite ease-in-out; animation-delay: 3.94s; }
        @keyframes aura-particle-198 {
          0% { transform: rotate(1386deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1566deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1746deg) translateX(578px) scale(0); opacity: 0; }
        }
        .aura-p-198 { animation: aura-particle-198 7s infinite ease-in-out; animation-delay: 3.96s; }
        @keyframes aura-particle-199 {
          0% { transform: rotate(1393deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1573deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1753deg) translateX(579px) scale(0); opacity: 0; }
        }
        .aura-p-199 { animation: aura-particle-199 8s infinite ease-in-out; animation-delay: 3.98s; }
        @keyframes aura-particle-200 {
          0% { transform: rotate(1400deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1580deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1760deg) translateX(580px) scale(0); opacity: 0; }
        }
        .aura-p-200 { animation: aura-particle-200 4s infinite ease-in-out; animation-delay: 4.0s; }
        @keyframes aura-particle-201 {
          0% { transform: rotate(1407deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1587deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1767deg) translateX(581px) scale(0); opacity: 0; }
        }
        .aura-p-201 { animation: aura-particle-201 5s infinite ease-in-out; animation-delay: 4.0200000000000005s; }
        @keyframes aura-particle-202 {
          0% { transform: rotate(1414deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1594deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1774deg) translateX(582px) scale(0); opacity: 0; }
        }
        .aura-p-202 { animation: aura-particle-202 6s infinite ease-in-out; animation-delay: 4.04s; }
        @keyframes aura-particle-203 {
          0% { transform: rotate(1421deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1601deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1781deg) translateX(583px) scale(0); opacity: 0; }
        }
        .aura-p-203 { animation: aura-particle-203 7s infinite ease-in-out; animation-delay: 4.0600000000000005s; }
        @keyframes aura-particle-204 {
          0% { transform: rotate(1428deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1608deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1788deg) translateX(584px) scale(0); opacity: 0; }
        }
        .aura-p-204 { animation: aura-particle-204 8s infinite ease-in-out; animation-delay: 4.08s; }
        @keyframes aura-particle-205 {
          0% { transform: rotate(1435deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1615deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1795deg) translateX(585px) scale(0); opacity: 0; }
        }
        .aura-p-205 { animation: aura-particle-205 4s infinite ease-in-out; animation-delay: 4.1s; }
        @keyframes aura-particle-206 {
          0% { transform: rotate(1442deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1622deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1802deg) translateX(586px) scale(0); opacity: 0; }
        }
        .aura-p-206 { animation: aura-particle-206 5s infinite ease-in-out; animation-delay: 4.12s; }
        @keyframes aura-particle-207 {
          0% { transform: rotate(1449deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1629deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1809deg) translateX(587px) scale(0); opacity: 0; }
        }
        .aura-p-207 { animation: aura-particle-207 6s infinite ease-in-out; animation-delay: 4.14s; }
        @keyframes aura-particle-208 {
          0% { transform: rotate(1456deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1636deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1816deg) translateX(588px) scale(0); opacity: 0; }
        }
        .aura-p-208 { animation: aura-particle-208 7s infinite ease-in-out; animation-delay: 4.16s; }
        @keyframes aura-particle-209 {
          0% { transform: rotate(1463deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1643deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1823deg) translateX(589px) scale(0); opacity: 0; }
        }
        .aura-p-209 { animation: aura-particle-209 8s infinite ease-in-out; animation-delay: 4.18s; }
        @keyframes aura-particle-210 {
          0% { transform: rotate(1470deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1650deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1830deg) translateX(590px) scale(0); opacity: 0; }
        }
        .aura-p-210 { animation: aura-particle-210 4s infinite ease-in-out; animation-delay: 4.2s; }
        @keyframes aura-particle-211 {
          0% { transform: rotate(1477deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1657deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1837deg) translateX(591px) scale(0); opacity: 0; }
        }
        .aura-p-211 { animation: aura-particle-211 5s infinite ease-in-out; animation-delay: 4.22s; }
        @keyframes aura-particle-212 {
          0% { transform: rotate(1484deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1664deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1844deg) translateX(592px) scale(0); opacity: 0; }
        }
        .aura-p-212 { animation: aura-particle-212 6s infinite ease-in-out; animation-delay: 4.24s; }
        @keyframes aura-particle-213 {
          0% { transform: rotate(1491deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1671deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1851deg) translateX(593px) scale(0); opacity: 0; }
        }
        .aura-p-213 { animation: aura-particle-213 7s infinite ease-in-out; animation-delay: 4.26s; }
        @keyframes aura-particle-214 {
          0% { transform: rotate(1498deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1678deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1858deg) translateX(594px) scale(0); opacity: 0; }
        }
        .aura-p-214 { animation: aura-particle-214 8s infinite ease-in-out; animation-delay: 4.28s; }
        @keyframes aura-particle-215 {
          0% { transform: rotate(1505deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1685deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1865deg) translateX(595px) scale(0); opacity: 0; }
        }
        .aura-p-215 { animation: aura-particle-215 4s infinite ease-in-out; animation-delay: 4.3s; }
        @keyframes aura-particle-216 {
          0% { transform: rotate(1512deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1692deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1872deg) translateX(596px) scale(0); opacity: 0; }
        }
        .aura-p-216 { animation: aura-particle-216 5s infinite ease-in-out; animation-delay: 4.32s; }
        @keyframes aura-particle-217 {
          0% { transform: rotate(1519deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1699deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1879deg) translateX(597px) scale(0); opacity: 0; }
        }
        .aura-p-217 { animation: aura-particle-217 6s infinite ease-in-out; animation-delay: 4.34s; }
        @keyframes aura-particle-218 {
          0% { transform: rotate(1526deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1706deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1886deg) translateX(598px) scale(0); opacity: 0; }
        }
        .aura-p-218 { animation: aura-particle-218 7s infinite ease-in-out; animation-delay: 4.36s; }
        @keyframes aura-particle-219 {
          0% { transform: rotate(1533deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1713deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1893deg) translateX(599px) scale(0); opacity: 0; }
        }
        .aura-p-219 { animation: aura-particle-219 8s infinite ease-in-out; animation-delay: 4.38s; }
        @keyframes aura-particle-220 {
          0% { transform: rotate(1540deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1720deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1900deg) translateX(600px) scale(0); opacity: 0; }
        }
        .aura-p-220 { animation: aura-particle-220 4s infinite ease-in-out; animation-delay: 4.4s; }
        @keyframes aura-particle-221 {
          0% { transform: rotate(1547deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1727deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1907deg) translateX(601px) scale(0); opacity: 0; }
        }
        .aura-p-221 { animation: aura-particle-221 5s infinite ease-in-out; animation-delay: 4.42s; }
        @keyframes aura-particle-222 {
          0% { transform: rotate(1554deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1734deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1914deg) translateX(602px) scale(0); opacity: 0; }
        }
        .aura-p-222 { animation: aura-particle-222 6s infinite ease-in-out; animation-delay: 4.44s; }
        @keyframes aura-particle-223 {
          0% { transform: rotate(1561deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1741deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1921deg) translateX(603px) scale(0); opacity: 0; }
        }
        .aura-p-223 { animation: aura-particle-223 7s infinite ease-in-out; animation-delay: 4.46s; }
        @keyframes aura-particle-224 {
          0% { transform: rotate(1568deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1748deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1928deg) translateX(604px) scale(0); opacity: 0; }
        }
        .aura-p-224 { animation: aura-particle-224 8s infinite ease-in-out; animation-delay: 4.48s; }
        @keyframes aura-particle-225 {
          0% { transform: rotate(1575deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1755deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1935deg) translateX(605px) scale(0); opacity: 0; }
        }
        .aura-p-225 { animation: aura-particle-225 4s infinite ease-in-out; animation-delay: 4.5s; }
        @keyframes aura-particle-226 {
          0% { transform: rotate(1582deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1762deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1942deg) translateX(606px) scale(0); opacity: 0; }
        }
        .aura-p-226 { animation: aura-particle-226 5s infinite ease-in-out; animation-delay: 4.5200000000000005s; }
        @keyframes aura-particle-227 {
          0% { transform: rotate(1589deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1769deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1949deg) translateX(607px) scale(0); opacity: 0; }
        }
        .aura-p-227 { animation: aura-particle-227 6s infinite ease-in-out; animation-delay: 4.54s; }
        @keyframes aura-particle-228 {
          0% { transform: rotate(1596deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1776deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1956deg) translateX(608px) scale(0); opacity: 0; }
        }
        .aura-p-228 { animation: aura-particle-228 7s infinite ease-in-out; animation-delay: 4.5600000000000005s; }
        @keyframes aura-particle-229 {
          0% { transform: rotate(1603deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1783deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1963deg) translateX(609px) scale(0); opacity: 0; }
        }
        .aura-p-229 { animation: aura-particle-229 8s infinite ease-in-out; animation-delay: 4.58s; }
        @keyframes aura-particle-230 {
          0% { transform: rotate(1610deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1790deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1970deg) translateX(610px) scale(0); opacity: 0; }
        }
        .aura-p-230 { animation: aura-particle-230 4s infinite ease-in-out; animation-delay: 4.6000000000000005s; }
        @keyframes aura-particle-231 {
          0% { transform: rotate(1617deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1797deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1977deg) translateX(611px) scale(0); opacity: 0; }
        }
        .aura-p-231 { animation: aura-particle-231 5s infinite ease-in-out; animation-delay: 4.62s; }
        @keyframes aura-particle-232 {
          0% { transform: rotate(1624deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1804deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1984deg) translateX(612px) scale(0); opacity: 0; }
        }
        .aura-p-232 { animation: aura-particle-232 6s infinite ease-in-out; animation-delay: 4.64s; }
        @keyframes aura-particle-233 {
          0% { transform: rotate(1631deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1811deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1991deg) translateX(613px) scale(0); opacity: 0; }
        }
        .aura-p-233 { animation: aura-particle-233 7s infinite ease-in-out; animation-delay: 4.66s; }
        @keyframes aura-particle-234 {
          0% { transform: rotate(1638deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1818deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(1998deg) translateX(614px) scale(0); opacity: 0; }
        }
        .aura-p-234 { animation: aura-particle-234 8s infinite ease-in-out; animation-delay: 4.68s; }
        @keyframes aura-particle-235 {
          0% { transform: rotate(1645deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1825deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2005deg) translateX(615px) scale(0); opacity: 0; }
        }
        .aura-p-235 { animation: aura-particle-235 4s infinite ease-in-out; animation-delay: 4.7s; }
        @keyframes aura-particle-236 {
          0% { transform: rotate(1652deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1832deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2012deg) translateX(616px) scale(0); opacity: 0; }
        }
        .aura-p-236 { animation: aura-particle-236 5s infinite ease-in-out; animation-delay: 4.72s; }
        @keyframes aura-particle-237 {
          0% { transform: rotate(1659deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1839deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2019deg) translateX(617px) scale(0); opacity: 0; }
        }
        .aura-p-237 { animation: aura-particle-237 6s infinite ease-in-out; animation-delay: 4.74s; }
        @keyframes aura-particle-238 {
          0% { transform: rotate(1666deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1846deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2026deg) translateX(618px) scale(0); opacity: 0; }
        }
        .aura-p-238 { animation: aura-particle-238 7s infinite ease-in-out; animation-delay: 4.76s; }
        @keyframes aura-particle-239 {
          0% { transform: rotate(1673deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1853deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2033deg) translateX(619px) scale(0); opacity: 0; }
        }
        .aura-p-239 { animation: aura-particle-239 8s infinite ease-in-out; animation-delay: 4.78s; }
        @keyframes aura-particle-240 {
          0% { transform: rotate(1680deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1860deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2040deg) translateX(500px) scale(0); opacity: 0; }
        }
        .aura-p-240 { animation: aura-particle-240 4s infinite ease-in-out; animation-delay: 4.8s; }
        @keyframes aura-particle-241 {
          0% { transform: rotate(1687deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1867deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2047deg) translateX(501px) scale(0); opacity: 0; }
        }
        .aura-p-241 { animation: aura-particle-241 5s infinite ease-in-out; animation-delay: 4.82s; }
        @keyframes aura-particle-242 {
          0% { transform: rotate(1694deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1874deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2054deg) translateX(502px) scale(0); opacity: 0; }
        }
        .aura-p-242 { animation: aura-particle-242 6s infinite ease-in-out; animation-delay: 4.84s; }
        @keyframes aura-particle-243 {
          0% { transform: rotate(1701deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1881deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2061deg) translateX(503px) scale(0); opacity: 0; }
        }
        .aura-p-243 { animation: aura-particle-243 7s infinite ease-in-out; animation-delay: 4.86s; }
        @keyframes aura-particle-244 {
          0% { transform: rotate(1708deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1888deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2068deg) translateX(504px) scale(0); opacity: 0; }
        }
        .aura-p-244 { animation: aura-particle-244 8s infinite ease-in-out; animation-delay: 4.88s; }
        @keyframes aura-particle-245 {
          0% { transform: rotate(1715deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1895deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2075deg) translateX(505px) scale(0); opacity: 0; }
        }
        .aura-p-245 { animation: aura-particle-245 4s infinite ease-in-out; animation-delay: 4.9s; }
        @keyframes aura-particle-246 {
          0% { transform: rotate(1722deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1902deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2082deg) translateX(506px) scale(0); opacity: 0; }
        }
        .aura-p-246 { animation: aura-particle-246 5s infinite ease-in-out; animation-delay: 4.92s; }
        @keyframes aura-particle-247 {
          0% { transform: rotate(1729deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1909deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2089deg) translateX(507px) scale(0); opacity: 0; }
        }
        .aura-p-247 { animation: aura-particle-247 6s infinite ease-in-out; animation-delay: 4.94s; }
        @keyframes aura-particle-248 {
          0% { transform: rotate(1736deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1916deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2096deg) translateX(508px) scale(0); opacity: 0; }
        }
        .aura-p-248 { animation: aura-particle-248 7s infinite ease-in-out; animation-delay: 4.96s; }
        @keyframes aura-particle-249 {
          0% { transform: rotate(1743deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1923deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2103deg) translateX(509px) scale(0); opacity: 0; }
        }
        .aura-p-249 { animation: aura-particle-249 8s infinite ease-in-out; animation-delay: 4.98s; }
        @keyframes aura-particle-250 {
          0% { transform: rotate(1750deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1930deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2110deg) translateX(510px) scale(0); opacity: 0; }
        }
        .aura-p-250 { animation: aura-particle-250 4s infinite ease-in-out; animation-delay: 5.0s; }
        @keyframes aura-particle-251 {
          0% { transform: rotate(1757deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1937deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2117deg) translateX(511px) scale(0); opacity: 0; }
        }
        .aura-p-251 { animation: aura-particle-251 5s infinite ease-in-out; animation-delay: 5.0200000000000005s; }
        @keyframes aura-particle-252 {
          0% { transform: rotate(1764deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1944deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2124deg) translateX(512px) scale(0); opacity: 0; }
        }
        .aura-p-252 { animation: aura-particle-252 6s infinite ease-in-out; animation-delay: 5.04s; }
        @keyframes aura-particle-253 {
          0% { transform: rotate(1771deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1951deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2131deg) translateX(513px) scale(0); opacity: 0; }
        }
        .aura-p-253 { animation: aura-particle-253 7s infinite ease-in-out; animation-delay: 5.0600000000000005s; }
        @keyframes aura-particle-254 {
          0% { transform: rotate(1778deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1958deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2138deg) translateX(514px) scale(0); opacity: 0; }
        }
        .aura-p-254 { animation: aura-particle-254 8s infinite ease-in-out; animation-delay: 5.08s; }
        @keyframes aura-particle-255 {
          0% { transform: rotate(1785deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1965deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2145deg) translateX(515px) scale(0); opacity: 0; }
        }
        .aura-p-255 { animation: aura-particle-255 4s infinite ease-in-out; animation-delay: 5.1000000000000005s; }
        @keyframes aura-particle-256 {
          0% { transform: rotate(1792deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1972deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2152deg) translateX(516px) scale(0); opacity: 0; }
        }
        .aura-p-256 { animation: aura-particle-256 5s infinite ease-in-out; animation-delay: 5.12s; }
        @keyframes aura-particle-257 {
          0% { transform: rotate(1799deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1979deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2159deg) translateX(517px) scale(0); opacity: 0; }
        }
        .aura-p-257 { animation: aura-particle-257 6s infinite ease-in-out; animation-delay: 5.14s; }
        @keyframes aura-particle-258 {
          0% { transform: rotate(1806deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1986deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2166deg) translateX(518px) scale(0); opacity: 0; }
        }
        .aura-p-258 { animation: aura-particle-258 7s infinite ease-in-out; animation-delay: 5.16s; }
        @keyframes aura-particle-259 {
          0% { transform: rotate(1813deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(1993deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2173deg) translateX(519px) scale(0); opacity: 0; }
        }
        .aura-p-259 { animation: aura-particle-259 8s infinite ease-in-out; animation-delay: 5.18s; }
        @keyframes aura-particle-260 {
          0% { transform: rotate(1820deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2000deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2180deg) translateX(520px) scale(0); opacity: 0; }
        }
        .aura-p-260 { animation: aura-particle-260 4s infinite ease-in-out; animation-delay: 5.2s; }
        @keyframes aura-particle-261 {
          0% { transform: rotate(1827deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2007deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2187deg) translateX(521px) scale(0); opacity: 0; }
        }
        .aura-p-261 { animation: aura-particle-261 5s infinite ease-in-out; animation-delay: 5.22s; }
        @keyframes aura-particle-262 {
          0% { transform: rotate(1834deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2014deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2194deg) translateX(522px) scale(0); opacity: 0; }
        }
        .aura-p-262 { animation: aura-particle-262 6s infinite ease-in-out; animation-delay: 5.24s; }
        @keyframes aura-particle-263 {
          0% { transform: rotate(1841deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2021deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2201deg) translateX(523px) scale(0); opacity: 0; }
        }
        .aura-p-263 { animation: aura-particle-263 7s infinite ease-in-out; animation-delay: 5.26s; }
        @keyframes aura-particle-264 {
          0% { transform: rotate(1848deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2028deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2208deg) translateX(524px) scale(0); opacity: 0; }
        }
        .aura-p-264 { animation: aura-particle-264 8s infinite ease-in-out; animation-delay: 5.28s; }
        @keyframes aura-particle-265 {
          0% { transform: rotate(1855deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2035deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2215deg) translateX(525px) scale(0); opacity: 0; }
        }
        .aura-p-265 { animation: aura-particle-265 4s infinite ease-in-out; animation-delay: 5.3s; }
        @keyframes aura-particle-266 {
          0% { transform: rotate(1862deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2042deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2222deg) translateX(526px) scale(0); opacity: 0; }
        }
        .aura-p-266 { animation: aura-particle-266 5s infinite ease-in-out; animation-delay: 5.32s; }
        @keyframes aura-particle-267 {
          0% { transform: rotate(1869deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2049deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2229deg) translateX(527px) scale(0); opacity: 0; }
        }
        .aura-p-267 { animation: aura-particle-267 6s infinite ease-in-out; animation-delay: 5.34s; }
        @keyframes aura-particle-268 {
          0% { transform: rotate(1876deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2056deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2236deg) translateX(528px) scale(0); opacity: 0; }
        }
        .aura-p-268 { animation: aura-particle-268 7s infinite ease-in-out; animation-delay: 5.36s; }
        @keyframes aura-particle-269 {
          0% { transform: rotate(1883deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2063deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2243deg) translateX(529px) scale(0); opacity: 0; }
        }
        .aura-p-269 { animation: aura-particle-269 8s infinite ease-in-out; animation-delay: 5.38s; }
        @keyframes aura-particle-270 {
          0% { transform: rotate(1890deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2070deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2250deg) translateX(530px) scale(0); opacity: 0; }
        }
        .aura-p-270 { animation: aura-particle-270 4s infinite ease-in-out; animation-delay: 5.4s; }
        @keyframes aura-particle-271 {
          0% { transform: rotate(1897deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2077deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2257deg) translateX(531px) scale(0); opacity: 0; }
        }
        .aura-p-271 { animation: aura-particle-271 5s infinite ease-in-out; animation-delay: 5.42s; }
        @keyframes aura-particle-272 {
          0% { transform: rotate(1904deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2084deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2264deg) translateX(532px) scale(0); opacity: 0; }
        }
        .aura-p-272 { animation: aura-particle-272 6s infinite ease-in-out; animation-delay: 5.44s; }
        @keyframes aura-particle-273 {
          0% { transform: rotate(1911deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2091deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2271deg) translateX(533px) scale(0); opacity: 0; }
        }
        .aura-p-273 { animation: aura-particle-273 7s infinite ease-in-out; animation-delay: 5.46s; }
        @keyframes aura-particle-274 {
          0% { transform: rotate(1918deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2098deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2278deg) translateX(534px) scale(0); opacity: 0; }
        }
        .aura-p-274 { animation: aura-particle-274 8s infinite ease-in-out; animation-delay: 5.48s; }
        @keyframes aura-particle-275 {
          0% { transform: rotate(1925deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2105deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2285deg) translateX(535px) scale(0); opacity: 0; }
        }
        .aura-p-275 { animation: aura-particle-275 4s infinite ease-in-out; animation-delay: 5.5s; }
        @keyframes aura-particle-276 {
          0% { transform: rotate(1932deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2112deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2292deg) translateX(536px) scale(0); opacity: 0; }
        }
        .aura-p-276 { animation: aura-particle-276 5s infinite ease-in-out; animation-delay: 5.5200000000000005s; }
        @keyframes aura-particle-277 {
          0% { transform: rotate(1939deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2119deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2299deg) translateX(537px) scale(0); opacity: 0; }
        }
        .aura-p-277 { animation: aura-particle-277 6s infinite ease-in-out; animation-delay: 5.54s; }
        @keyframes aura-particle-278 {
          0% { transform: rotate(1946deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2126deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2306deg) translateX(538px) scale(0); opacity: 0; }
        }
        .aura-p-278 { animation: aura-particle-278 7s infinite ease-in-out; animation-delay: 5.5600000000000005s; }
        @keyframes aura-particle-279 {
          0% { transform: rotate(1953deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2133deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2313deg) translateX(539px) scale(0); opacity: 0; }
        }
        .aura-p-279 { animation: aura-particle-279 8s infinite ease-in-out; animation-delay: 5.58s; }
        @keyframes aura-particle-280 {
          0% { transform: rotate(1960deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2140deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2320deg) translateX(540px) scale(0); opacity: 0; }
        }
        .aura-p-280 { animation: aura-particle-280 4s infinite ease-in-out; animation-delay: 5.6000000000000005s; }
        @keyframes aura-particle-281 {
          0% { transform: rotate(1967deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2147deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2327deg) translateX(541px) scale(0); opacity: 0; }
        }
        .aura-p-281 { animation: aura-particle-281 5s infinite ease-in-out; animation-delay: 5.62s; }
        @keyframes aura-particle-282 {
          0% { transform: rotate(1974deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2154deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2334deg) translateX(542px) scale(0); opacity: 0; }
        }
        .aura-p-282 { animation: aura-particle-282 6s infinite ease-in-out; animation-delay: 5.64s; }
        @keyframes aura-particle-283 {
          0% { transform: rotate(1981deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2161deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2341deg) translateX(543px) scale(0); opacity: 0; }
        }
        .aura-p-283 { animation: aura-particle-283 7s infinite ease-in-out; animation-delay: 5.66s; }
        @keyframes aura-particle-284 {
          0% { transform: rotate(1988deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2168deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2348deg) translateX(544px) scale(0); opacity: 0; }
        }
        .aura-p-284 { animation: aura-particle-284 8s infinite ease-in-out; animation-delay: 5.68s; }
        @keyframes aura-particle-285 {
          0% { transform: rotate(1995deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2175deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2355deg) translateX(545px) scale(0); opacity: 0; }
        }
        .aura-p-285 { animation: aura-particle-285 4s infinite ease-in-out; animation-delay: 5.7s; }
        @keyframes aura-particle-286 {
          0% { transform: rotate(2002deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2182deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2362deg) translateX(546px) scale(0); opacity: 0; }
        }
        .aura-p-286 { animation: aura-particle-286 5s infinite ease-in-out; animation-delay: 5.72s; }
        @keyframes aura-particle-287 {
          0% { transform: rotate(2009deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2189deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2369deg) translateX(547px) scale(0); opacity: 0; }
        }
        .aura-p-287 { animation: aura-particle-287 6s infinite ease-in-out; animation-delay: 5.74s; }
        @keyframes aura-particle-288 {
          0% { transform: rotate(2016deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2196deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2376deg) translateX(548px) scale(0); opacity: 0; }
        }
        .aura-p-288 { animation: aura-particle-288 7s infinite ease-in-out; animation-delay: 5.76s; }
        @keyframes aura-particle-289 {
          0% { transform: rotate(2023deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2203deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2383deg) translateX(549px) scale(0); opacity: 0; }
        }
        .aura-p-289 { animation: aura-particle-289 8s infinite ease-in-out; animation-delay: 5.78s; }
        @keyframes aura-particle-290 {
          0% { transform: rotate(2030deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2210deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2390deg) translateX(550px) scale(0); opacity: 0; }
        }
        .aura-p-290 { animation: aura-particle-290 4s infinite ease-in-out; animation-delay: 5.8s; }
        @keyframes aura-particle-291 {
          0% { transform: rotate(2037deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2217deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2397deg) translateX(551px) scale(0); opacity: 0; }
        }
        .aura-p-291 { animation: aura-particle-291 5s infinite ease-in-out; animation-delay: 5.82s; }
        @keyframes aura-particle-292 {
          0% { transform: rotate(2044deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2224deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2404deg) translateX(552px) scale(0); opacity: 0; }
        }
        .aura-p-292 { animation: aura-particle-292 6s infinite ease-in-out; animation-delay: 5.84s; }
        @keyframes aura-particle-293 {
          0% { transform: rotate(2051deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2231deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2411deg) translateX(553px) scale(0); opacity: 0; }
        }
        .aura-p-293 { animation: aura-particle-293 7s infinite ease-in-out; animation-delay: 5.86s; }
        @keyframes aura-particle-294 {
          0% { transform: rotate(2058deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2238deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2418deg) translateX(554px) scale(0); opacity: 0; }
        }
        .aura-p-294 { animation: aura-particle-294 8s infinite ease-in-out; animation-delay: 5.88s; }
        @keyframes aura-particle-295 {
          0% { transform: rotate(2065deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2245deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2425deg) translateX(555px) scale(0); opacity: 0; }
        }
        .aura-p-295 { animation: aura-particle-295 4s infinite ease-in-out; animation-delay: 5.9s; }
        @keyframes aura-particle-296 {
          0% { transform: rotate(2072deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2252deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2432deg) translateX(556px) scale(0); opacity: 0; }
        }
        .aura-p-296 { animation: aura-particle-296 5s infinite ease-in-out; animation-delay: 5.92s; }
        @keyframes aura-particle-297 {
          0% { transform: rotate(2079deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2259deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2439deg) translateX(557px) scale(0); opacity: 0; }
        }
        .aura-p-297 { animation: aura-particle-297 6s infinite ease-in-out; animation-delay: 5.94s; }
        @keyframes aura-particle-298 {
          0% { transform: rotate(2086deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2266deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2446deg) translateX(558px) scale(0); opacity: 0; }
        }
        .aura-p-298 { animation: aura-particle-298 7s infinite ease-in-out; animation-delay: 5.96s; }
        @keyframes aura-particle-299 {
          0% { transform: rotate(2093deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2273deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2453deg) translateX(559px) scale(0); opacity: 0; }
        }
        .aura-p-299 { animation: aura-particle-299 8s infinite ease-in-out; animation-delay: 5.98s; }
        @keyframes aura-particle-300 {
          0% { transform: rotate(2100deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2280deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2460deg) translateX(560px) scale(0); opacity: 0; }
        }
        .aura-p-300 { animation: aura-particle-300 4s infinite ease-in-out; animation-delay: 6.0s; }
        @keyframes aura-particle-301 {
          0% { transform: rotate(2107deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2287deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2467deg) translateX(561px) scale(0); opacity: 0; }
        }
        .aura-p-301 { animation: aura-particle-301 5s infinite ease-in-out; animation-delay: 6.0200000000000005s; }
        @keyframes aura-particle-302 {
          0% { transform: rotate(2114deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2294deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2474deg) translateX(562px) scale(0); opacity: 0; }
        }
        .aura-p-302 { animation: aura-particle-302 6s infinite ease-in-out; animation-delay: 6.04s; }
        @keyframes aura-particle-303 {
          0% { transform: rotate(2121deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2301deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2481deg) translateX(563px) scale(0); opacity: 0; }
        }
        .aura-p-303 { animation: aura-particle-303 7s infinite ease-in-out; animation-delay: 6.0600000000000005s; }
        @keyframes aura-particle-304 {
          0% { transform: rotate(2128deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2308deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2488deg) translateX(564px) scale(0); opacity: 0; }
        }
        .aura-p-304 { animation: aura-particle-304 8s infinite ease-in-out; animation-delay: 6.08s; }
        @keyframes aura-particle-305 {
          0% { transform: rotate(2135deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2315deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2495deg) translateX(565px) scale(0); opacity: 0; }
        }
        .aura-p-305 { animation: aura-particle-305 4s infinite ease-in-out; animation-delay: 6.1000000000000005s; }
        @keyframes aura-particle-306 {
          0% { transform: rotate(2142deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2322deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2502deg) translateX(566px) scale(0); opacity: 0; }
        }
        .aura-p-306 { animation: aura-particle-306 5s infinite ease-in-out; animation-delay: 6.12s; }
        @keyframes aura-particle-307 {
          0% { transform: rotate(2149deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2329deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2509deg) translateX(567px) scale(0); opacity: 0; }
        }
        .aura-p-307 { animation: aura-particle-307 6s infinite ease-in-out; animation-delay: 6.140000000000001s; }
        @keyframes aura-particle-308 {
          0% { transform: rotate(2156deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2336deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2516deg) translateX(568px) scale(0); opacity: 0; }
        }
        .aura-p-308 { animation: aura-particle-308 7s infinite ease-in-out; animation-delay: 6.16s; }
        @keyframes aura-particle-309 {
          0% { transform: rotate(2163deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2343deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2523deg) translateX(569px) scale(0); opacity: 0; }
        }
        .aura-p-309 { animation: aura-particle-309 8s infinite ease-in-out; animation-delay: 6.18s; }
        @keyframes aura-particle-310 {
          0% { transform: rotate(2170deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2350deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2530deg) translateX(570px) scale(0); opacity: 0; }
        }
        .aura-p-310 { animation: aura-particle-310 4s infinite ease-in-out; animation-delay: 6.2s; }
        @keyframes aura-particle-311 {
          0% { transform: rotate(2177deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2357deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2537deg) translateX(571px) scale(0); opacity: 0; }
        }
        .aura-p-311 { animation: aura-particle-311 5s infinite ease-in-out; animation-delay: 6.22s; }
        @keyframes aura-particle-312 {
          0% { transform: rotate(2184deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2364deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2544deg) translateX(572px) scale(0); opacity: 0; }
        }
        .aura-p-312 { animation: aura-particle-312 6s infinite ease-in-out; animation-delay: 6.24s; }
        @keyframes aura-particle-313 {
          0% { transform: rotate(2191deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2371deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2551deg) translateX(573px) scale(0); opacity: 0; }
        }
        .aura-p-313 { animation: aura-particle-313 7s infinite ease-in-out; animation-delay: 6.26s; }
        @keyframes aura-particle-314 {
          0% { transform: rotate(2198deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2378deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2558deg) translateX(574px) scale(0); opacity: 0; }
        }
        .aura-p-314 { animation: aura-particle-314 8s infinite ease-in-out; animation-delay: 6.28s; }
        @keyframes aura-particle-315 {
          0% { transform: rotate(2205deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2385deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2565deg) translateX(575px) scale(0); opacity: 0; }
        }
        .aura-p-315 { animation: aura-particle-315 4s infinite ease-in-out; animation-delay: 6.3s; }
        @keyframes aura-particle-316 {
          0% { transform: rotate(2212deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2392deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2572deg) translateX(576px) scale(0); opacity: 0; }
        }
        .aura-p-316 { animation: aura-particle-316 5s infinite ease-in-out; animation-delay: 6.32s; }
        @keyframes aura-particle-317 {
          0% { transform: rotate(2219deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2399deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2579deg) translateX(577px) scale(0); opacity: 0; }
        }
        .aura-p-317 { animation: aura-particle-317 6s infinite ease-in-out; animation-delay: 6.34s; }
        @keyframes aura-particle-318 {
          0% { transform: rotate(2226deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2406deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2586deg) translateX(578px) scale(0); opacity: 0; }
        }
        .aura-p-318 { animation: aura-particle-318 7s infinite ease-in-out; animation-delay: 6.36s; }
        @keyframes aura-particle-319 {
          0% { transform: rotate(2233deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2413deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2593deg) translateX(579px) scale(0); opacity: 0; }
        }
        .aura-p-319 { animation: aura-particle-319 8s infinite ease-in-out; animation-delay: 6.38s; }
        @keyframes aura-particle-320 {
          0% { transform: rotate(2240deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2420deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2600deg) translateX(580px) scale(0); opacity: 0; }
        }
        .aura-p-320 { animation: aura-particle-320 4s infinite ease-in-out; animation-delay: 6.4s; }
        @keyframes aura-particle-321 {
          0% { transform: rotate(2247deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2427deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2607deg) translateX(581px) scale(0); opacity: 0; }
        }
        .aura-p-321 { animation: aura-particle-321 5s infinite ease-in-out; animation-delay: 6.42s; }
        @keyframes aura-particle-322 {
          0% { transform: rotate(2254deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2434deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2614deg) translateX(582px) scale(0); opacity: 0; }
        }
        .aura-p-322 { animation: aura-particle-322 6s infinite ease-in-out; animation-delay: 6.44s; }
        @keyframes aura-particle-323 {
          0% { transform: rotate(2261deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2441deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2621deg) translateX(583px) scale(0); opacity: 0; }
        }
        .aura-p-323 { animation: aura-particle-323 7s infinite ease-in-out; animation-delay: 6.46s; }
        @keyframes aura-particle-324 {
          0% { transform: rotate(2268deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2448deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2628deg) translateX(584px) scale(0); opacity: 0; }
        }
        .aura-p-324 { animation: aura-particle-324 8s infinite ease-in-out; animation-delay: 6.48s; }
        @keyframes aura-particle-325 {
          0% { transform: rotate(2275deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2455deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2635deg) translateX(585px) scale(0); opacity: 0; }
        }
        .aura-p-325 { animation: aura-particle-325 4s infinite ease-in-out; animation-delay: 6.5s; }
        @keyframes aura-particle-326 {
          0% { transform: rotate(2282deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2462deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2642deg) translateX(586px) scale(0); opacity: 0; }
        }
        .aura-p-326 { animation: aura-particle-326 5s infinite ease-in-out; animation-delay: 6.5200000000000005s; }
        @keyframes aura-particle-327 {
          0% { transform: rotate(2289deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2469deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2649deg) translateX(587px) scale(0); opacity: 0; }
        }
        .aura-p-327 { animation: aura-particle-327 6s infinite ease-in-out; animation-delay: 6.54s; }
        @keyframes aura-particle-328 {
          0% { transform: rotate(2296deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2476deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2656deg) translateX(588px) scale(0); opacity: 0; }
        }
        .aura-p-328 { animation: aura-particle-328 7s infinite ease-in-out; animation-delay: 6.5600000000000005s; }
        @keyframes aura-particle-329 {
          0% { transform: rotate(2303deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2483deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2663deg) translateX(589px) scale(0); opacity: 0; }
        }
        .aura-p-329 { animation: aura-particle-329 8s infinite ease-in-out; animation-delay: 6.58s; }
        @keyframes aura-particle-330 {
          0% { transform: rotate(2310deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2490deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2670deg) translateX(590px) scale(0); opacity: 0; }
        }
        .aura-p-330 { animation: aura-particle-330 4s infinite ease-in-out; animation-delay: 6.6000000000000005s; }
        @keyframes aura-particle-331 {
          0% { transform: rotate(2317deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2497deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2677deg) translateX(591px) scale(0); opacity: 0; }
        }
        .aura-p-331 { animation: aura-particle-331 5s infinite ease-in-out; animation-delay: 6.62s; }
        @keyframes aura-particle-332 {
          0% { transform: rotate(2324deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2504deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2684deg) translateX(592px) scale(0); opacity: 0; }
        }
        .aura-p-332 { animation: aura-particle-332 6s infinite ease-in-out; animation-delay: 6.640000000000001s; }
        @keyframes aura-particle-333 {
          0% { transform: rotate(2331deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2511deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2691deg) translateX(593px) scale(0); opacity: 0; }
        }
        .aura-p-333 { animation: aura-particle-333 7s infinite ease-in-out; animation-delay: 6.66s; }
        @keyframes aura-particle-334 {
          0% { transform: rotate(2338deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2518deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2698deg) translateX(594px) scale(0); opacity: 0; }
        }
        .aura-p-334 { animation: aura-particle-334 8s infinite ease-in-out; animation-delay: 6.68s; }
        @keyframes aura-particle-335 {
          0% { transform: rotate(2345deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2525deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2705deg) translateX(595px) scale(0); opacity: 0; }
        }
        .aura-p-335 { animation: aura-particle-335 4s infinite ease-in-out; animation-delay: 6.7s; }
        @keyframes aura-particle-336 {
          0% { transform: rotate(2352deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2532deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2712deg) translateX(596px) scale(0); opacity: 0; }
        }
        .aura-p-336 { animation: aura-particle-336 5s infinite ease-in-out; animation-delay: 6.72s; }
        @keyframes aura-particle-337 {
          0% { transform: rotate(2359deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2539deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2719deg) translateX(597px) scale(0); opacity: 0; }
        }
        .aura-p-337 { animation: aura-particle-337 6s infinite ease-in-out; animation-delay: 6.74s; }
        @keyframes aura-particle-338 {
          0% { transform: rotate(2366deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2546deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2726deg) translateX(598px) scale(0); opacity: 0; }
        }
        .aura-p-338 { animation: aura-particle-338 7s infinite ease-in-out; animation-delay: 6.76s; }
        @keyframes aura-particle-339 {
          0% { transform: rotate(2373deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2553deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2733deg) translateX(599px) scale(0); opacity: 0; }
        }
        .aura-p-339 { animation: aura-particle-339 8s infinite ease-in-out; animation-delay: 6.78s; }
        @keyframes aura-particle-340 {
          0% { transform: rotate(2380deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2560deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2740deg) translateX(600px) scale(0); opacity: 0; }
        }
        .aura-p-340 { animation: aura-particle-340 4s infinite ease-in-out; animation-delay: 6.8s; }
        @keyframes aura-particle-341 {
          0% { transform: rotate(2387deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2567deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2747deg) translateX(601px) scale(0); opacity: 0; }
        }
        .aura-p-341 { animation: aura-particle-341 5s infinite ease-in-out; animation-delay: 6.82s; }
        @keyframes aura-particle-342 {
          0% { transform: rotate(2394deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2574deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2754deg) translateX(602px) scale(0); opacity: 0; }
        }
        .aura-p-342 { animation: aura-particle-342 6s infinite ease-in-out; animation-delay: 6.84s; }
        @keyframes aura-particle-343 {
          0% { transform: rotate(2401deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2581deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2761deg) translateX(603px) scale(0); opacity: 0; }
        }
        .aura-p-343 { animation: aura-particle-343 7s infinite ease-in-out; animation-delay: 6.86s; }
        @keyframes aura-particle-344 {
          0% { transform: rotate(2408deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2588deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2768deg) translateX(604px) scale(0); opacity: 0; }
        }
        .aura-p-344 { animation: aura-particle-344 8s infinite ease-in-out; animation-delay: 6.88s; }
        @keyframes aura-particle-345 {
          0% { transform: rotate(2415deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2595deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2775deg) translateX(605px) scale(0); opacity: 0; }
        }
        .aura-p-345 { animation: aura-particle-345 4s infinite ease-in-out; animation-delay: 6.9s; }
        @keyframes aura-particle-346 {
          0% { transform: rotate(2422deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2602deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2782deg) translateX(606px) scale(0); opacity: 0; }
        }
        .aura-p-346 { animation: aura-particle-346 5s infinite ease-in-out; animation-delay: 6.92s; }
        @keyframes aura-particle-347 {
          0% { transform: rotate(2429deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2609deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2789deg) translateX(607px) scale(0); opacity: 0; }
        }
        .aura-p-347 { animation: aura-particle-347 6s infinite ease-in-out; animation-delay: 6.94s; }
        @keyframes aura-particle-348 {
          0% { transform: rotate(2436deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2616deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2796deg) translateX(608px) scale(0); opacity: 0; }
        }
        .aura-p-348 { animation: aura-particle-348 7s infinite ease-in-out; animation-delay: 6.96s; }
        @keyframes aura-particle-349 {
          0% { transform: rotate(2443deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2623deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2803deg) translateX(609px) scale(0); opacity: 0; }
        }
        .aura-p-349 { animation: aura-particle-349 8s infinite ease-in-out; animation-delay: 6.98s; }
        @keyframes aura-particle-350 {
          0% { transform: rotate(2450deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2630deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2810deg) translateX(610px) scale(0); opacity: 0; }
        }
        .aura-p-350 { animation: aura-particle-350 4s infinite ease-in-out; animation-delay: 7.0s; }
        @keyframes aura-particle-351 {
          0% { transform: rotate(2457deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2637deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2817deg) translateX(611px) scale(0); opacity: 0; }
        }
        .aura-p-351 { animation: aura-particle-351 5s infinite ease-in-out; animation-delay: 7.0200000000000005s; }
        @keyframes aura-particle-352 {
          0% { transform: rotate(2464deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2644deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2824deg) translateX(612px) scale(0); opacity: 0; }
        }
        .aura-p-352 { animation: aura-particle-352 6s infinite ease-in-out; animation-delay: 7.04s; }
        @keyframes aura-particle-353 {
          0% { transform: rotate(2471deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2651deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2831deg) translateX(613px) scale(0); opacity: 0; }
        }
        .aura-p-353 { animation: aura-particle-353 7s infinite ease-in-out; animation-delay: 7.0600000000000005s; }
        @keyframes aura-particle-354 {
          0% { transform: rotate(2478deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2658deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2838deg) translateX(614px) scale(0); opacity: 0; }
        }
        .aura-p-354 { animation: aura-particle-354 8s infinite ease-in-out; animation-delay: 7.08s; }
        @keyframes aura-particle-355 {
          0% { transform: rotate(2485deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2665deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2845deg) translateX(615px) scale(0); opacity: 0; }
        }
        .aura-p-355 { animation: aura-particle-355 4s infinite ease-in-out; animation-delay: 7.1000000000000005s; }
        @keyframes aura-particle-356 {
          0% { transform: rotate(2492deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2672deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2852deg) translateX(616px) scale(0); opacity: 0; }
        }
        .aura-p-356 { animation: aura-particle-356 5s infinite ease-in-out; animation-delay: 7.12s; }
        @keyframes aura-particle-357 {
          0% { transform: rotate(2499deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2679deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2859deg) translateX(617px) scale(0); opacity: 0; }
        }
        .aura-p-357 { animation: aura-particle-357 6s infinite ease-in-out; animation-delay: 7.140000000000001s; }
        @keyframes aura-particle-358 {
          0% { transform: rotate(2506deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2686deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2866deg) translateX(618px) scale(0); opacity: 0; }
        }
        .aura-p-358 { animation: aura-particle-358 7s infinite ease-in-out; animation-delay: 7.16s; }
        @keyframes aura-particle-359 {
          0% { transform: rotate(2513deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2693deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2873deg) translateX(619px) scale(0); opacity: 0; }
        }
        .aura-p-359 { animation: aura-particle-359 8s infinite ease-in-out; animation-delay: 7.18s; }
        @keyframes aura-particle-360 {
          0% { transform: rotate(2520deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2700deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2880deg) translateX(500px) scale(0); opacity: 0; }
        }
        .aura-p-360 { animation: aura-particle-360 4s infinite ease-in-out; animation-delay: 7.2s; }
        @keyframes aura-particle-361 {
          0% { transform: rotate(2527deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2707deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2887deg) translateX(501px) scale(0); opacity: 0; }
        }
        .aura-p-361 { animation: aura-particle-361 5s infinite ease-in-out; animation-delay: 7.22s; }
        @keyframes aura-particle-362 {
          0% { transform: rotate(2534deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2714deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2894deg) translateX(502px) scale(0); opacity: 0; }
        }
        .aura-p-362 { animation: aura-particle-362 6s infinite ease-in-out; animation-delay: 7.24s; }
        @keyframes aura-particle-363 {
          0% { transform: rotate(2541deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2721deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2901deg) translateX(503px) scale(0); opacity: 0; }
        }
        .aura-p-363 { animation: aura-particle-363 7s infinite ease-in-out; animation-delay: 7.26s; }
        @keyframes aura-particle-364 {
          0% { transform: rotate(2548deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2728deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2908deg) translateX(504px) scale(0); opacity: 0; }
        }
        .aura-p-364 { animation: aura-particle-364 8s infinite ease-in-out; animation-delay: 7.28s; }
        @keyframes aura-particle-365 {
          0% { transform: rotate(2555deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2735deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2915deg) translateX(505px) scale(0); opacity: 0; }
        }
        .aura-p-365 { animation: aura-particle-365 4s infinite ease-in-out; animation-delay: 7.3s; }
        @keyframes aura-particle-366 {
          0% { transform: rotate(2562deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2742deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2922deg) translateX(506px) scale(0); opacity: 0; }
        }
        .aura-p-366 { animation: aura-particle-366 5s infinite ease-in-out; animation-delay: 7.32s; }
        @keyframes aura-particle-367 {
          0% { transform: rotate(2569deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2749deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2929deg) translateX(507px) scale(0); opacity: 0; }
        }
        .aura-p-367 { animation: aura-particle-367 6s infinite ease-in-out; animation-delay: 7.34s; }
        @keyframes aura-particle-368 {
          0% { transform: rotate(2576deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2756deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2936deg) translateX(508px) scale(0); opacity: 0; }
        }
        .aura-p-368 { animation: aura-particle-368 7s infinite ease-in-out; animation-delay: 7.36s; }
        @keyframes aura-particle-369 {
          0% { transform: rotate(2583deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2763deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2943deg) translateX(509px) scale(0); opacity: 0; }
        }
        .aura-p-369 { animation: aura-particle-369 8s infinite ease-in-out; animation-delay: 7.38s; }
        @keyframes aura-particle-370 {
          0% { transform: rotate(2590deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2770deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2950deg) translateX(510px) scale(0); opacity: 0; }
        }
        .aura-p-370 { animation: aura-particle-370 4s infinite ease-in-out; animation-delay: 7.4s; }
        @keyframes aura-particle-371 {
          0% { transform: rotate(2597deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2777deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2957deg) translateX(511px) scale(0); opacity: 0; }
        }
        .aura-p-371 { animation: aura-particle-371 5s infinite ease-in-out; animation-delay: 7.42s; }
        @keyframes aura-particle-372 {
          0% { transform: rotate(2604deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2784deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2964deg) translateX(512px) scale(0); opacity: 0; }
        }
        .aura-p-372 { animation: aura-particle-372 6s infinite ease-in-out; animation-delay: 7.44s; }
        @keyframes aura-particle-373 {
          0% { transform: rotate(2611deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2791deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2971deg) translateX(513px) scale(0); opacity: 0; }
        }
        .aura-p-373 { animation: aura-particle-373 7s infinite ease-in-out; animation-delay: 7.46s; }
        @keyframes aura-particle-374 {
          0% { transform: rotate(2618deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2798deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2978deg) translateX(514px) scale(0); opacity: 0; }
        }
        .aura-p-374 { animation: aura-particle-374 8s infinite ease-in-out; animation-delay: 7.48s; }
        @keyframes aura-particle-375 {
          0% { transform: rotate(2625deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2805deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2985deg) translateX(515px) scale(0); opacity: 0; }
        }
        .aura-p-375 { animation: aura-particle-375 4s infinite ease-in-out; animation-delay: 7.5s; }
        @keyframes aura-particle-376 {
          0% { transform: rotate(2632deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2812deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2992deg) translateX(516px) scale(0); opacity: 0; }
        }
        .aura-p-376 { animation: aura-particle-376 5s infinite ease-in-out; animation-delay: 7.5200000000000005s; }
        @keyframes aura-particle-377 {
          0% { transform: rotate(2639deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2819deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(2999deg) translateX(517px) scale(0); opacity: 0; }
        }
        .aura-p-377 { animation: aura-particle-377 6s infinite ease-in-out; animation-delay: 7.54s; }
        @keyframes aura-particle-378 {
          0% { transform: rotate(2646deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2826deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3006deg) translateX(518px) scale(0); opacity: 0; }
        }
        .aura-p-378 { animation: aura-particle-378 7s infinite ease-in-out; animation-delay: 7.5600000000000005s; }
        @keyframes aura-particle-379 {
          0% { transform: rotate(2653deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2833deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3013deg) translateX(519px) scale(0); opacity: 0; }
        }
        .aura-p-379 { animation: aura-particle-379 8s infinite ease-in-out; animation-delay: 7.58s; }
        @keyframes aura-particle-380 {
          0% { transform: rotate(2660deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2840deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3020deg) translateX(520px) scale(0); opacity: 0; }
        }
        .aura-p-380 { animation: aura-particle-380 4s infinite ease-in-out; animation-delay: 7.6000000000000005s; }
        @keyframes aura-particle-381 {
          0% { transform: rotate(2667deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2847deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3027deg) translateX(521px) scale(0); opacity: 0; }
        }
        .aura-p-381 { animation: aura-particle-381 5s infinite ease-in-out; animation-delay: 7.62s; }
        @keyframes aura-particle-382 {
          0% { transform: rotate(2674deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2854deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3034deg) translateX(522px) scale(0); opacity: 0; }
        }
        .aura-p-382 { animation: aura-particle-382 6s infinite ease-in-out; animation-delay: 7.640000000000001s; }
        @keyframes aura-particle-383 {
          0% { transform: rotate(2681deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2861deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3041deg) translateX(523px) scale(0); opacity: 0; }
        }
        .aura-p-383 { animation: aura-particle-383 7s infinite ease-in-out; animation-delay: 7.66s; }
        @keyframes aura-particle-384 {
          0% { transform: rotate(2688deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2868deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3048deg) translateX(524px) scale(0); opacity: 0; }
        }
        .aura-p-384 { animation: aura-particle-384 8s infinite ease-in-out; animation-delay: 7.68s; }
        @keyframes aura-particle-385 {
          0% { transform: rotate(2695deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2875deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3055deg) translateX(525px) scale(0); opacity: 0; }
        }
        .aura-p-385 { animation: aura-particle-385 4s infinite ease-in-out; animation-delay: 7.7s; }
        @keyframes aura-particle-386 {
          0% { transform: rotate(2702deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2882deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3062deg) translateX(526px) scale(0); opacity: 0; }
        }
        .aura-p-386 { animation: aura-particle-386 5s infinite ease-in-out; animation-delay: 7.72s; }
        @keyframes aura-particle-387 {
          0% { transform: rotate(2709deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2889deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3069deg) translateX(527px) scale(0); opacity: 0; }
        }
        .aura-p-387 { animation: aura-particle-387 6s infinite ease-in-out; animation-delay: 7.74s; }
        @keyframes aura-particle-388 {
          0% { transform: rotate(2716deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2896deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3076deg) translateX(528px) scale(0); opacity: 0; }
        }
        .aura-p-388 { animation: aura-particle-388 7s infinite ease-in-out; animation-delay: 7.76s; }
        @keyframes aura-particle-389 {
          0% { transform: rotate(2723deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2903deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3083deg) translateX(529px) scale(0); opacity: 0; }
        }
        .aura-p-389 { animation: aura-particle-389 8s infinite ease-in-out; animation-delay: 7.78s; }
        @keyframes aura-particle-390 {
          0% { transform: rotate(2730deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2910deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3090deg) translateX(530px) scale(0); opacity: 0; }
        }
        .aura-p-390 { animation: aura-particle-390 4s infinite ease-in-out; animation-delay: 7.8s; }
        @keyframes aura-particle-391 {
          0% { transform: rotate(2737deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2917deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3097deg) translateX(531px) scale(0); opacity: 0; }
        }
        .aura-p-391 { animation: aura-particle-391 5s infinite ease-in-out; animation-delay: 7.82s; }
        @keyframes aura-particle-392 {
          0% { transform: rotate(2744deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2924deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3104deg) translateX(532px) scale(0); opacity: 0; }
        }
        .aura-p-392 { animation: aura-particle-392 6s infinite ease-in-out; animation-delay: 7.84s; }
        @keyframes aura-particle-393 {
          0% { transform: rotate(2751deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2931deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3111deg) translateX(533px) scale(0); opacity: 0; }
        }
        .aura-p-393 { animation: aura-particle-393 7s infinite ease-in-out; animation-delay: 7.86s; }
        @keyframes aura-particle-394 {
          0% { transform: rotate(2758deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2938deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3118deg) translateX(534px) scale(0); opacity: 0; }
        }
        .aura-p-394 { animation: aura-particle-394 8s infinite ease-in-out; animation-delay: 7.88s; }
        @keyframes aura-particle-395 {
          0% { transform: rotate(2765deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2945deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3125deg) translateX(535px) scale(0); opacity: 0; }
        }
        .aura-p-395 { animation: aura-particle-395 4s infinite ease-in-out; animation-delay: 7.9s; }
        @keyframes aura-particle-396 {
          0% { transform: rotate(2772deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2952deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3132deg) translateX(536px) scale(0); opacity: 0; }
        }
        .aura-p-396 { animation: aura-particle-396 5s infinite ease-in-out; animation-delay: 7.92s; }
        @keyframes aura-particle-397 {
          0% { transform: rotate(2779deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2959deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3139deg) translateX(537px) scale(0); opacity: 0; }
        }
        .aura-p-397 { animation: aura-particle-397 6s infinite ease-in-out; animation-delay: 7.94s; }
        @keyframes aura-particle-398 {
          0% { transform: rotate(2786deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2966deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3146deg) translateX(538px) scale(0); opacity: 0; }
        }
        .aura-p-398 { animation: aura-particle-398 7s infinite ease-in-out; animation-delay: 7.96s; }
        @keyframes aura-particle-399 {
          0% { transform: rotate(2793deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2973deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3153deg) translateX(539px) scale(0); opacity: 0; }
        }
        .aura-p-399 { animation: aura-particle-399 8s infinite ease-in-out; animation-delay: 7.98s; }
        @keyframes aura-particle-400 {
          0% { transform: rotate(2800deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2980deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3160deg) translateX(540px) scale(0); opacity: 0; }
        }
        .aura-p-400 { animation: aura-particle-400 4s infinite ease-in-out; animation-delay: 8.0s; }
        @keyframes aura-particle-401 {
          0% { transform: rotate(2807deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2987deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3167deg) translateX(541px) scale(0); opacity: 0; }
        }
        .aura-p-401 { animation: aura-particle-401 5s infinite ease-in-out; animation-delay: 8.02s; }
        @keyframes aura-particle-402 {
          0% { transform: rotate(2814deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(2994deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3174deg) translateX(542px) scale(0); opacity: 0; }
        }
        .aura-p-402 { animation: aura-particle-402 6s infinite ease-in-out; animation-delay: 8.040000000000001s; }
        @keyframes aura-particle-403 {
          0% { transform: rotate(2821deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3001deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3181deg) translateX(543px) scale(0); opacity: 0; }
        }
        .aura-p-403 { animation: aura-particle-403 7s infinite ease-in-out; animation-delay: 8.06s; }
        @keyframes aura-particle-404 {
          0% { transform: rotate(2828deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3008deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3188deg) translateX(544px) scale(0); opacity: 0; }
        }
        .aura-p-404 { animation: aura-particle-404 8s infinite ease-in-out; animation-delay: 8.08s; }
        @keyframes aura-particle-405 {
          0% { transform: rotate(2835deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3015deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3195deg) translateX(545px) scale(0); opacity: 0; }
        }
        .aura-p-405 { animation: aura-particle-405 4s infinite ease-in-out; animation-delay: 8.1s; }
        @keyframes aura-particle-406 {
          0% { transform: rotate(2842deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3022deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3202deg) translateX(546px) scale(0); opacity: 0; }
        }
        .aura-p-406 { animation: aura-particle-406 5s infinite ease-in-out; animation-delay: 8.120000000000001s; }
        @keyframes aura-particle-407 {
          0% { transform: rotate(2849deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3029deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3209deg) translateX(547px) scale(0); opacity: 0; }
        }
        .aura-p-407 { animation: aura-particle-407 6s infinite ease-in-out; animation-delay: 8.14s; }
        @keyframes aura-particle-408 {
          0% { transform: rotate(2856deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3036deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3216deg) translateX(548px) scale(0); opacity: 0; }
        }
        .aura-p-408 { animation: aura-particle-408 7s infinite ease-in-out; animation-delay: 8.16s; }
        @keyframes aura-particle-409 {
          0% { transform: rotate(2863deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3043deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3223deg) translateX(549px) scale(0); opacity: 0; }
        }
        .aura-p-409 { animation: aura-particle-409 8s infinite ease-in-out; animation-delay: 8.18s; }
        @keyframes aura-particle-410 {
          0% { transform: rotate(2870deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3050deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3230deg) translateX(550px) scale(0); opacity: 0; }
        }
        .aura-p-410 { animation: aura-particle-410 4s infinite ease-in-out; animation-delay: 8.2s; }
        @keyframes aura-particle-411 {
          0% { transform: rotate(2877deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3057deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3237deg) translateX(551px) scale(0); opacity: 0; }
        }
        .aura-p-411 { animation: aura-particle-411 5s infinite ease-in-out; animation-delay: 8.22s; }
        @keyframes aura-particle-412 {
          0% { transform: rotate(2884deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3064deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3244deg) translateX(552px) scale(0); opacity: 0; }
        }
        .aura-p-412 { animation: aura-particle-412 6s infinite ease-in-out; animation-delay: 8.24s; }
        @keyframes aura-particle-413 {
          0% { transform: rotate(2891deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3071deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3251deg) translateX(553px) scale(0); opacity: 0; }
        }
        .aura-p-413 { animation: aura-particle-413 7s infinite ease-in-out; animation-delay: 8.26s; }
        @keyframes aura-particle-414 {
          0% { transform: rotate(2898deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3078deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3258deg) translateX(554px) scale(0); opacity: 0; }
        }
        .aura-p-414 { animation: aura-particle-414 8s infinite ease-in-out; animation-delay: 8.28s; }
        @keyframes aura-particle-415 {
          0% { transform: rotate(2905deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3085deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3265deg) translateX(555px) scale(0); opacity: 0; }
        }
        .aura-p-415 { animation: aura-particle-415 4s infinite ease-in-out; animation-delay: 8.3s; }
        @keyframes aura-particle-416 {
          0% { transform: rotate(2912deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3092deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3272deg) translateX(556px) scale(0); opacity: 0; }
        }
        .aura-p-416 { animation: aura-particle-416 5s infinite ease-in-out; animation-delay: 8.32s; }
        @keyframes aura-particle-417 {
          0% { transform: rotate(2919deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3099deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3279deg) translateX(557px) scale(0); opacity: 0; }
        }
        .aura-p-417 { animation: aura-particle-417 6s infinite ease-in-out; animation-delay: 8.34s; }
        @keyframes aura-particle-418 {
          0% { transform: rotate(2926deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3106deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3286deg) translateX(558px) scale(0); opacity: 0; }
        }
        .aura-p-418 { animation: aura-particle-418 7s infinite ease-in-out; animation-delay: 8.36s; }
        @keyframes aura-particle-419 {
          0% { transform: rotate(2933deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3113deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3293deg) translateX(559px) scale(0); opacity: 0; }
        }
        .aura-p-419 { animation: aura-particle-419 8s infinite ease-in-out; animation-delay: 8.38s; }
        @keyframes aura-particle-420 {
          0% { transform: rotate(2940deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3120deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3300deg) translateX(560px) scale(0); opacity: 0; }
        }
        .aura-p-420 { animation: aura-particle-420 4s infinite ease-in-out; animation-delay: 8.4s; }
        @keyframes aura-particle-421 {
          0% { transform: rotate(2947deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3127deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3307deg) translateX(561px) scale(0); opacity: 0; }
        }
        .aura-p-421 { animation: aura-particle-421 5s infinite ease-in-out; animation-delay: 8.42s; }
        @keyframes aura-particle-422 {
          0% { transform: rotate(2954deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3134deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3314deg) translateX(562px) scale(0); opacity: 0; }
        }
        .aura-p-422 { animation: aura-particle-422 6s infinite ease-in-out; animation-delay: 8.44s; }
        @keyframes aura-particle-423 {
          0% { transform: rotate(2961deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3141deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3321deg) translateX(563px) scale(0); opacity: 0; }
        }
        .aura-p-423 { animation: aura-particle-423 7s infinite ease-in-out; animation-delay: 8.46s; }
        @keyframes aura-particle-424 {
          0% { transform: rotate(2968deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3148deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3328deg) translateX(564px) scale(0); opacity: 0; }
        }
        .aura-p-424 { animation: aura-particle-424 8s infinite ease-in-out; animation-delay: 8.48s; }
        @keyframes aura-particle-425 {
          0% { transform: rotate(2975deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3155deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3335deg) translateX(565px) scale(0); opacity: 0; }
        }
        .aura-p-425 { animation: aura-particle-425 4s infinite ease-in-out; animation-delay: 8.5s; }
        @keyframes aura-particle-426 {
          0% { transform: rotate(2982deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3162deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3342deg) translateX(566px) scale(0); opacity: 0; }
        }
        .aura-p-426 { animation: aura-particle-426 5s infinite ease-in-out; animation-delay: 8.52s; }
        @keyframes aura-particle-427 {
          0% { transform: rotate(2989deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3169deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3349deg) translateX(567px) scale(0); opacity: 0; }
        }
        .aura-p-427 { animation: aura-particle-427 6s infinite ease-in-out; animation-delay: 8.540000000000001s; }
        @keyframes aura-particle-428 {
          0% { transform: rotate(2996deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3176deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3356deg) translateX(568px) scale(0); opacity: 0; }
        }
        .aura-p-428 { animation: aura-particle-428 7s infinite ease-in-out; animation-delay: 8.56s; }
        @keyframes aura-particle-429 {
          0% { transform: rotate(3003deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3183deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3363deg) translateX(569px) scale(0); opacity: 0; }
        }
        .aura-p-429 { animation: aura-particle-429 8s infinite ease-in-out; animation-delay: 8.58s; }
        @keyframes aura-particle-430 {
          0% { transform: rotate(3010deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3190deg) translateX(260px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3370deg) translateX(570px) scale(0); opacity: 0; }
        }
        .aura-p-430 { animation: aura-particle-430 4s infinite ease-in-out; animation-delay: 8.6s; }
        @keyframes aura-particle-431 {
          0% { transform: rotate(3017deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3197deg) translateX(261px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3377deg) translateX(571px) scale(0); opacity: 0; }
        }
        .aura-p-431 { animation: aura-particle-431 5s infinite ease-in-out; animation-delay: 8.620000000000001s; }
        @keyframes aura-particle-432 {
          0% { transform: rotate(3024deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3204deg) translateX(262px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3384deg) translateX(572px) scale(0); opacity: 0; }
        }
        .aura-p-432 { animation: aura-particle-432 6s infinite ease-in-out; animation-delay: 8.64s; }
        @keyframes aura-particle-433 {
          0% { transform: rotate(3031deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3211deg) translateX(263px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3391deg) translateX(573px) scale(0); opacity: 0; }
        }
        .aura-p-433 { animation: aura-particle-433 7s infinite ease-in-out; animation-delay: 8.66s; }
        @keyframes aura-particle-434 {
          0% { transform: rotate(3038deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3218deg) translateX(264px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3398deg) translateX(574px) scale(0); opacity: 0; }
        }
        .aura-p-434 { animation: aura-particle-434 8s infinite ease-in-out; animation-delay: 8.68s; }
        @keyframes aura-particle-435 {
          0% { transform: rotate(3045deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3225deg) translateX(265px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3405deg) translateX(575px) scale(0); opacity: 0; }
        }
        .aura-p-435 { animation: aura-particle-435 4s infinite ease-in-out; animation-delay: 8.700000000000001s; }
        @keyframes aura-particle-436 {
          0% { transform: rotate(3052deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3232deg) translateX(266px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3412deg) translateX(576px) scale(0); opacity: 0; }
        }
        .aura-p-436 { animation: aura-particle-436 5s infinite ease-in-out; animation-delay: 8.72s; }
        @keyframes aura-particle-437 {
          0% { transform: rotate(3059deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3239deg) translateX(267px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3419deg) translateX(577px) scale(0); opacity: 0; }
        }
        .aura-p-437 { animation: aura-particle-437 6s infinite ease-in-out; animation-delay: 8.74s; }
        @keyframes aura-particle-438 {
          0% { transform: rotate(3066deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3246deg) translateX(268px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3426deg) translateX(578px) scale(0); opacity: 0; }
        }
        .aura-p-438 { animation: aura-particle-438 7s infinite ease-in-out; animation-delay: 8.76s; }
        @keyframes aura-particle-439 {
          0% { transform: rotate(3073deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3253deg) translateX(269px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3433deg) translateX(579px) scale(0); opacity: 0; }
        }
        .aura-p-439 { animation: aura-particle-439 8s infinite ease-in-out; animation-delay: 8.78s; }
        @keyframes aura-particle-440 {
          0% { transform: rotate(3080deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3260deg) translateX(270px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3440deg) translateX(580px) scale(0); opacity: 0; }
        }
        .aura-p-440 { animation: aura-particle-440 4s infinite ease-in-out; animation-delay: 8.8s; }
        @keyframes aura-particle-441 {
          0% { transform: rotate(3087deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3267deg) translateX(271px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3447deg) translateX(581px) scale(0); opacity: 0; }
        }
        .aura-p-441 { animation: aura-particle-441 5s infinite ease-in-out; animation-delay: 8.82s; }
        @keyframes aura-particle-442 {
          0% { transform: rotate(3094deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3274deg) translateX(272px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3454deg) translateX(582px) scale(0); opacity: 0; }
        }
        .aura-p-442 { animation: aura-particle-442 6s infinite ease-in-out; animation-delay: 8.84s; }
        @keyframes aura-particle-443 {
          0% { transform: rotate(3101deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3281deg) translateX(273px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3461deg) translateX(583px) scale(0); opacity: 0; }
        }
        .aura-p-443 { animation: aura-particle-443 7s infinite ease-in-out; animation-delay: 8.86s; }
        @keyframes aura-particle-444 {
          0% { transform: rotate(3108deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3288deg) translateX(274px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3468deg) translateX(584px) scale(0); opacity: 0; }
        }
        .aura-p-444 { animation: aura-particle-444 8s infinite ease-in-out; animation-delay: 8.88s; }
        @keyframes aura-particle-445 {
          0% { transform: rotate(3115deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3295deg) translateX(275px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3475deg) translateX(585px) scale(0); opacity: 0; }
        }
        .aura-p-445 { animation: aura-particle-445 4s infinite ease-in-out; animation-delay: 8.9s; }
        @keyframes aura-particle-446 {
          0% { transform: rotate(3122deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3302deg) translateX(276px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3482deg) translateX(586px) scale(0); opacity: 0; }
        }
        .aura-p-446 { animation: aura-particle-446 5s infinite ease-in-out; animation-delay: 8.92s; }
        @keyframes aura-particle-447 {
          0% { transform: rotate(3129deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3309deg) translateX(277px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3489deg) translateX(587px) scale(0); opacity: 0; }
        }
        .aura-p-447 { animation: aura-particle-447 6s infinite ease-in-out; animation-delay: 8.94s; }
        @keyframes aura-particle-448 {
          0% { transform: rotate(3136deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3316deg) translateX(278px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3496deg) translateX(588px) scale(0); opacity: 0; }
        }
        .aura-p-448 { animation: aura-particle-448 7s infinite ease-in-out; animation-delay: 8.96s; }
        @keyframes aura-particle-449 {
          0% { transform: rotate(3143deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3323deg) translateX(279px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3503deg) translateX(589px) scale(0); opacity: 0; }
        }
        .aura-p-449 { animation: aura-particle-449 8s infinite ease-in-out; animation-delay: 8.98s; }
        @keyframes aura-particle-450 {
          0% { transform: rotate(3150deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3330deg) translateX(280px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3510deg) translateX(590px) scale(0); opacity: 0; }
        }
        .aura-p-450 { animation: aura-particle-450 4s infinite ease-in-out; animation-delay: 9.0s; }
        @keyframes aura-particle-451 {
          0% { transform: rotate(3157deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3337deg) translateX(281px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3517deg) translateX(591px) scale(0); opacity: 0; }
        }
        .aura-p-451 { animation: aura-particle-451 5s infinite ease-in-out; animation-delay: 9.02s; }
        @keyframes aura-particle-452 {
          0% { transform: rotate(3164deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3344deg) translateX(282px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3524deg) translateX(592px) scale(0); opacity: 0; }
        }
        .aura-p-452 { animation: aura-particle-452 6s infinite ease-in-out; animation-delay: 9.040000000000001s; }
        @keyframes aura-particle-453 {
          0% { transform: rotate(3171deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3351deg) translateX(283px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3531deg) translateX(593px) scale(0); opacity: 0; }
        }
        .aura-p-453 { animation: aura-particle-453 7s infinite ease-in-out; animation-delay: 9.06s; }
        @keyframes aura-particle-454 {
          0% { transform: rotate(3178deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3358deg) translateX(284px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3538deg) translateX(594px) scale(0); opacity: 0; }
        }
        .aura-p-454 { animation: aura-particle-454 8s infinite ease-in-out; animation-delay: 9.08s; }
        @keyframes aura-particle-455 {
          0% { transform: rotate(3185deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3365deg) translateX(285px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3545deg) translateX(595px) scale(0); opacity: 0; }
        }
        .aura-p-455 { animation: aura-particle-455 4s infinite ease-in-out; animation-delay: 9.1s; }
        @keyframes aura-particle-456 {
          0% { transform: rotate(3192deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3372deg) translateX(286px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3552deg) translateX(596px) scale(0); opacity: 0; }
        }
        .aura-p-456 { animation: aura-particle-456 5s infinite ease-in-out; animation-delay: 9.120000000000001s; }
        @keyframes aura-particle-457 {
          0% { transform: rotate(3199deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3379deg) translateX(287px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3559deg) translateX(597px) scale(0); opacity: 0; }
        }
        .aura-p-457 { animation: aura-particle-457 6s infinite ease-in-out; animation-delay: 9.14s; }
        @keyframes aura-particle-458 {
          0% { transform: rotate(3206deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3386deg) translateX(288px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3566deg) translateX(598px) scale(0); opacity: 0; }
        }
        .aura-p-458 { animation: aura-particle-458 7s infinite ease-in-out; animation-delay: 9.16s; }
        @keyframes aura-particle-459 {
          0% { transform: rotate(3213deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3393deg) translateX(289px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3573deg) translateX(599px) scale(0); opacity: 0; }
        }
        .aura-p-459 { animation: aura-particle-459 8s infinite ease-in-out; animation-delay: 9.18s; }
        @keyframes aura-particle-460 {
          0% { transform: rotate(3220deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3400deg) translateX(290px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3580deg) translateX(600px) scale(0); opacity: 0; }
        }
        .aura-p-460 { animation: aura-particle-460 4s infinite ease-in-out; animation-delay: 9.200000000000001s; }
        @keyframes aura-particle-461 {
          0% { transform: rotate(3227deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3407deg) translateX(291px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3587deg) translateX(601px) scale(0); opacity: 0; }
        }
        .aura-p-461 { animation: aura-particle-461 5s infinite ease-in-out; animation-delay: 9.22s; }
        @keyframes aura-particle-462 {
          0% { transform: rotate(3234deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3414deg) translateX(292px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3594deg) translateX(602px) scale(0); opacity: 0; }
        }
        .aura-p-462 { animation: aura-particle-462 6s infinite ease-in-out; animation-delay: 9.24s; }
        @keyframes aura-particle-463 {
          0% { transform: rotate(3241deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3421deg) translateX(293px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3601deg) translateX(603px) scale(0); opacity: 0; }
        }
        .aura-p-463 { animation: aura-particle-463 7s infinite ease-in-out; animation-delay: 9.26s; }
        @keyframes aura-particle-464 {
          0% { transform: rotate(3248deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3428deg) translateX(294px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3608deg) translateX(604px) scale(0); opacity: 0; }
        }
        .aura-p-464 { animation: aura-particle-464 8s infinite ease-in-out; animation-delay: 9.28s; }
        @keyframes aura-particle-465 {
          0% { transform: rotate(3255deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3435deg) translateX(295px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3615deg) translateX(605px) scale(0); opacity: 0; }
        }
        .aura-p-465 { animation: aura-particle-465 4s infinite ease-in-out; animation-delay: 9.3s; }
        @keyframes aura-particle-466 {
          0% { transform: rotate(3262deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3442deg) translateX(296px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3622deg) translateX(606px) scale(0); opacity: 0; }
        }
        .aura-p-466 { animation: aura-particle-466 5s infinite ease-in-out; animation-delay: 9.32s; }
        @keyframes aura-particle-467 {
          0% { transform: rotate(3269deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3449deg) translateX(297px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3629deg) translateX(607px) scale(0); opacity: 0; }
        }
        .aura-p-467 { animation: aura-particle-467 6s infinite ease-in-out; animation-delay: 9.34s; }
        @keyframes aura-particle-468 {
          0% { transform: rotate(3276deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3456deg) translateX(298px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3636deg) translateX(608px) scale(0); opacity: 0; }
        }
        .aura-p-468 { animation: aura-particle-468 7s infinite ease-in-out; animation-delay: 9.36s; }
        @keyframes aura-particle-469 {
          0% { transform: rotate(3283deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3463deg) translateX(299px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3643deg) translateX(609px) scale(0); opacity: 0; }
        }
        .aura-p-469 { animation: aura-particle-469 8s infinite ease-in-out; animation-delay: 9.38s; }
        @keyframes aura-particle-470 {
          0% { transform: rotate(3290deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3470deg) translateX(300px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3650deg) translateX(610px) scale(0); opacity: 0; }
        }
        .aura-p-470 { animation: aura-particle-470 4s infinite ease-in-out; animation-delay: 9.4s; }
        @keyframes aura-particle-471 {
          0% { transform: rotate(3297deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3477deg) translateX(301px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3657deg) translateX(611px) scale(0); opacity: 0; }
        }
        .aura-p-471 { animation: aura-particle-471 5s infinite ease-in-out; animation-delay: 9.42s; }
        @keyframes aura-particle-472 {
          0% { transform: rotate(3304deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3484deg) translateX(302px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3664deg) translateX(612px) scale(0); opacity: 0; }
        }
        .aura-p-472 { animation: aura-particle-472 6s infinite ease-in-out; animation-delay: 9.44s; }
        @keyframes aura-particle-473 {
          0% { transform: rotate(3311deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3491deg) translateX(303px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3671deg) translateX(613px) scale(0); opacity: 0; }
        }
        .aura-p-473 { animation: aura-particle-473 7s infinite ease-in-out; animation-delay: 9.46s; }
        @keyframes aura-particle-474 {
          0% { transform: rotate(3318deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3498deg) translateX(304px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3678deg) translateX(614px) scale(0); opacity: 0; }
        }
        .aura-p-474 { animation: aura-particle-474 8s infinite ease-in-out; animation-delay: 9.48s; }
        @keyframes aura-particle-475 {
          0% { transform: rotate(3325deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3505deg) translateX(305px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3685deg) translateX(615px) scale(0); opacity: 0; }
        }
        .aura-p-475 { animation: aura-particle-475 4s infinite ease-in-out; animation-delay: 9.5s; }
        @keyframes aura-particle-476 {
          0% { transform: rotate(3332deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3512deg) translateX(306px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3692deg) translateX(616px) scale(0); opacity: 0; }
        }
        .aura-p-476 { animation: aura-particle-476 5s infinite ease-in-out; animation-delay: 9.52s; }
        @keyframes aura-particle-477 {
          0% { transform: rotate(3339deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3519deg) translateX(307px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3699deg) translateX(617px) scale(0); opacity: 0; }
        }
        .aura-p-477 { animation: aura-particle-477 6s infinite ease-in-out; animation-delay: 9.540000000000001s; }
        @keyframes aura-particle-478 {
          0% { transform: rotate(3346deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3526deg) translateX(308px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3706deg) translateX(618px) scale(0); opacity: 0; }
        }
        .aura-p-478 { animation: aura-particle-478 7s infinite ease-in-out; animation-delay: 9.56s; }
        @keyframes aura-particle-479 {
          0% { transform: rotate(3353deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3533deg) translateX(309px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3713deg) translateX(619px) scale(0); opacity: 0; }
        }
        .aura-p-479 { animation: aura-particle-479 8s infinite ease-in-out; animation-delay: 9.58s; }
        @keyframes aura-particle-480 {
          0% { transform: rotate(3360deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3540deg) translateX(310px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3720deg) translateX(500px) scale(0); opacity: 0; }
        }
        .aura-p-480 { animation: aura-particle-480 4s infinite ease-in-out; animation-delay: 9.6s; }
        @keyframes aura-particle-481 {
          0% { transform: rotate(3367deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3547deg) translateX(311px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3727deg) translateX(501px) scale(0); opacity: 0; }
        }
        .aura-p-481 { animation: aura-particle-481 5s infinite ease-in-out; animation-delay: 9.620000000000001s; }
        @keyframes aura-particle-482 {
          0% { transform: rotate(3374deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3554deg) translateX(312px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3734deg) translateX(502px) scale(0); opacity: 0; }
        }
        .aura-p-482 { animation: aura-particle-482 6s infinite ease-in-out; animation-delay: 9.64s; }
        @keyframes aura-particle-483 {
          0% { transform: rotate(3381deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3561deg) translateX(313px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3741deg) translateX(503px) scale(0); opacity: 0; }
        }
        .aura-p-483 { animation: aura-particle-483 7s infinite ease-in-out; animation-delay: 9.66s; }
        @keyframes aura-particle-484 {
          0% { transform: rotate(3388deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3568deg) translateX(314px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3748deg) translateX(504px) scale(0); opacity: 0; }
        }
        .aura-p-484 { animation: aura-particle-484 8s infinite ease-in-out; animation-delay: 9.68s; }
        @keyframes aura-particle-485 {
          0% { transform: rotate(3395deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3575deg) translateX(315px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3755deg) translateX(505px) scale(0); opacity: 0; }
        }
        .aura-p-485 { animation: aura-particle-485 4s infinite ease-in-out; animation-delay: 9.700000000000001s; }
        @keyframes aura-particle-486 {
          0% { transform: rotate(3402deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3582deg) translateX(316px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3762deg) translateX(506px) scale(0); opacity: 0; }
        }
        .aura-p-486 { animation: aura-particle-486 5s infinite ease-in-out; animation-delay: 9.72s; }
        @keyframes aura-particle-487 {
          0% { transform: rotate(3409deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3589deg) translateX(317px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3769deg) translateX(507px) scale(0); opacity: 0; }
        }
        .aura-p-487 { animation: aura-particle-487 6s infinite ease-in-out; animation-delay: 9.74s; }
        @keyframes aura-particle-488 {
          0% { transform: rotate(3416deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3596deg) translateX(318px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3776deg) translateX(508px) scale(0); opacity: 0; }
        }
        .aura-p-488 { animation: aura-particle-488 7s infinite ease-in-out; animation-delay: 9.76s; }
        @keyframes aura-particle-489 {
          0% { transform: rotate(3423deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3603deg) translateX(319px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3783deg) translateX(509px) scale(0); opacity: 0; }
        }
        .aura-p-489 { animation: aura-particle-489 8s infinite ease-in-out; animation-delay: 9.78s; }
        @keyframes aura-particle-490 {
          0% { transform: rotate(3430deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3610deg) translateX(250px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3790deg) translateX(510px) scale(0); opacity: 0; }
        }
        .aura-p-490 { animation: aura-particle-490 4s infinite ease-in-out; animation-delay: 9.8s; }
        @keyframes aura-particle-491 {
          0% { transform: rotate(3437deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3617deg) translateX(251px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3797deg) translateX(511px) scale(0); opacity: 0; }
        }
        .aura-p-491 { animation: aura-particle-491 5s infinite ease-in-out; animation-delay: 9.82s; }
        @keyframes aura-particle-492 {
          0% { transform: rotate(3444deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3624deg) translateX(252px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3804deg) translateX(512px) scale(0); opacity: 0; }
        }
        .aura-p-492 { animation: aura-particle-492 6s infinite ease-in-out; animation-delay: 9.84s; }
        @keyframes aura-particle-493 {
          0% { transform: rotate(3451deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3631deg) translateX(253px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3811deg) translateX(513px) scale(0); opacity: 0; }
        }
        .aura-p-493 { animation: aura-particle-493 7s infinite ease-in-out; animation-delay: 9.86s; }
        @keyframes aura-particle-494 {
          0% { transform: rotate(3458deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3638deg) translateX(254px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3818deg) translateX(514px) scale(0); opacity: 0; }
        }
        .aura-p-494 { animation: aura-particle-494 8s infinite ease-in-out; animation-delay: 9.88s; }
        @keyframes aura-particle-495 {
          0% { transform: rotate(3465deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3645deg) translateX(255px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3825deg) translateX(515px) scale(0); opacity: 0; }
        }
        .aura-p-495 { animation: aura-particle-495 4s infinite ease-in-out; animation-delay: 9.9s; }
        @keyframes aura-particle-496 {
          0% { transform: rotate(3472deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3652deg) translateX(256px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3832deg) translateX(516px) scale(0); opacity: 0; }
        }
        .aura-p-496 { animation: aura-particle-496 5s infinite ease-in-out; animation-delay: 9.92s; }
        @keyframes aura-particle-497 {
          0% { transform: rotate(3479deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3659deg) translateX(257px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3839deg) translateX(517px) scale(0); opacity: 0; }
        }
        .aura-p-497 { animation: aura-particle-497 6s infinite ease-in-out; animation-delay: 9.94s; }
        @keyframes aura-particle-498 {
          0% { transform: rotate(3486deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3666deg) translateX(258px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3846deg) translateX(518px) scale(0); opacity: 0; }
        }
        .aura-p-498 { animation: aura-particle-498 7s infinite ease-in-out; animation-delay: 9.96s; }
        @keyframes aura-particle-499 {
          0% { transform: rotate(3493deg) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: rotate(3673deg) translateX(259px) scale(2.5); }
          80% { opacity: 0.8; }
          100% { transform: rotate(3853deg) translateX(519px) scale(0); opacity: 0; }
        }
        .aura-p-499 { animation: aura-particle-499 8s infinite ease-in-out; animation-delay: 9.98s; }
        @keyframes star-blink {
           0%, 100% { opacity: 0.1; transform: scale(0.8) translateZ(0); }
           50% { opacity: 1; transform: scale(1.6) translateZ(100px); }
        }
        .star-0 { animation: star-blink 3.5s infinite; }
        .star-1 { animation: star-blink 4.5s infinite 1.2s; }
        .star-2 { animation: star-blink 5.5s infinite 2.2s; }
        .star-3 { animation: star-blink 4.0s infinite 0.7s; }
        .star-4 { animation: star-blink 5.0s infinite 1.7s; }

        .mesh-layer {
           stroke-dasharray: 2000;
           stroke-dashoffset: 2000;
           animation: mesh-draw 12s forwards ease-in-out;
           filter: drop-shadow(0 0 5px var(--aura));
        }
        @keyframes mesh-draw {
           0% { stroke-dashoffset: 2000; opacity: 0; }
           20% { opacity: 0.4; }
           100% { stroke-dashoffset: 0; opacity: 0.15; }
        }
        @keyframes aura-pulse {
           0%, 100% { opacity: 0.6; filter: blur(0px); letter-spacing: 1.5em; }
           50% { opacity: 1; filter: blur(1px); letter-spacing: 1.6em; }
        }
      `}</style>
    </div>
  );
}
