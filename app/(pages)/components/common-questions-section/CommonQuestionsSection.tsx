import { Card } from "@/app/shared/components/card";
import { Container } from "@/app/shared/components/container";
import { SectionTitleWithChip } from "@/app/shared/components/section-title-with-chip";
import { ChevronDown } from "lucide-react";
import { questions } from "./CommonQuestionsSection.utils";

export function CommonQuestionsSection() {
  return (
    <Container>
      <SectionTitleWithChip
        title="Common Questions"
        subtitle="Everything you need to know about the platform and our methodology."
        chipColor="green"
        chipLabel="FAQ"
      />

      <div className="flex flex-col gap-[20px]">
        {questions.map((question) => (
          <Card key={question.id} disableTransition>
            <details className="group" open={question.isOpen}>
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <h3 className="font-semibold">{question.title}</h3>

                <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="pt-4 text-sm text-zinc-400">{question.content}</div>
            </details>
          </Card>
        ))}
      </div>
    </Container>
  );
}
