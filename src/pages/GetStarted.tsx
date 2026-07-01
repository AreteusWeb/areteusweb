import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const checklist = [
  "Have your Areteus Patch nearby.",
  "Enable Bluetooth on your phone, tablet, or computer.",
  "Have the QR code that came with your device, or your Device ID."
];

export default function GetStarted() {
  return (
    <main className="pt-40 pb-24 overflow-hidden">
      <section className="relative px-6">
        {/* Ambient Grid Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />

        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full inline-block mb-5">
              GET STARTED
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 font-display mb-6">
              Set Up Your <br />
              <span className="text-gradient">Areteus Patch</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Setting up your Patch only takes a few minutes. Before you begin,
              make sure everything is ready.
            </p>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto mt-16"
          >
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Before you begin
              </h2>

              <div className="space-y-6">
                {checklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-center mt-16"
          >
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4 font-display">
              Ready to begin?
            </h2>

            <p className="text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
              Continue to setup to connect your Patch and complete the installation.
            </p>

            <a
              href="https://setup.areteus.com"
              target="_self"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-3.5 text-white font-semibold hover:bg-slate-800 transition shadow-sm active:scale-[0.99]"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </section>
    </main>
  );
}