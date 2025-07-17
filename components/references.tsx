export function References() {
  return (
    <div className="w-full flex justify-content justify-center">
      <div className="w-[50%] pl-8 flex flex-col gap-4">
        <Chatbots />
        <Edtech />
        <Conisoft />
      </div>
    </div>
  );
}

export function Conisoft() {
  return (
    <p className="-indent-8">
      Tona, C., Juárez-Ramírez, R., Jiménez, S., & Durán, M. (2024). Exploring
      LLM tools through the eyes of industry experts and novice
      programmers.&nbsp;
      <span className="italic">
        Proceedings of the International Conference in Software Engineering
        Research and Innovation (CONISOFT), 12,&nbsp;
      </span>
      313-321&nbsp;
      <a
        className="ref-link"
        target="_blank"
        href="http://dx.doi.org.revproxy.ecpi.edu/10.1109/CONISOFT63288.2024.00048"
      >
        http://dx.doi.org.revproxy.ecpi.edu/10.1109/CONISOFT63288.2024.00048
      </a>
    </p>
  );
}

export function ConisoftIntext({ children }: { children: string }) {
  return `"${children}" (Tona et al., 2024)`;
}

export function Edtech() {
  return (
    <p className="-indent-8">
      Huang, H. (2024). Promoting students&apos; creative and design thinking
      with generative AI-supported co-regulated learning: Evidence from digital
      game development projects in healthcare courses.&nbsp;
      <span className="italic">Educational Technology & Society, 27</span>(4),
      487+&nbsp;
      <a
        className="ref-link"
        target="_blank"
        // href="http://dx.doi.org.revproxy.ecpi.edu/10.30191/ETS.202410_27(4).TP04"
        href="https://drive.google.com/file/d/1fo_-X1H6deO2AZ5KchAioYvr4gGzRqLo/view"
      >
        https://drive.google.com/file/d/1fo_-X1H6deO2AZ5KchAioYvr4gGzRqLo/view
        {/* http://dx.doi.org.revproxy.ecpi.edu/10.30191/ETS.202410_27(4).TP04 */}
      </a>
    </p>
  );
}

export function EdTechIntext({ children }: { children: string }) {
  return `"${children}" (Huang, 2024)`;
}

export function Chatbots() {
  return (
    <p className="-indent-8">
      Davar, N. F., Dewan, M. A. A., & Zhang, X. (2025). AI Chatbots in
      Education: Challenges and Opportunities.&nbsp;
      <span className="italic">
        Information&nbsp;<span className="not-italic">[Basel],&nbsp;</span>16
      </span>
      (3).&nbsp;
      <a
        className="ref-link"
        target="_blank"
        href="http://dx.doi.org.revproxy.ecpi.edu/10.3390/info16030235"
      >
        http://dx.doi.org.revproxy.ecpi.edu/10.3390/info16030235
      </a>
    </p>
  );
}

export function ChatbotsIntext({ children }: { children: string }) {
  return `"${children}" (Davar et al., 2025)`;
}
