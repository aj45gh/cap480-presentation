import { Button } from "@/components/ui/button";

export function NextButton({ link }: { link: string }) {
  return (
    <div className="flex justify-content justify-center mt-5">
      <Button>
        <a href={link}>Next</a>
      </Button>
    </div>
  );
}
