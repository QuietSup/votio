"use client";

import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Navbar() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <header className="w-full flex flex-row p-2 justify-between">
        <div className="flex flex-row gap-8 align-baseline">
          <div className="text-3xl ">votio</div>
          <div className="flex flex-row">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Home</Button>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-row gap-2">
            <Button variant={"outline"} onClick={navigateToLogin}>
              Log in
            </Button>
            <Button variant={"default"} onClick={navigateToRegister}>
              Sign up
            </Button>
          </div>

          <ModeToggle />
        </div>
      </header>
      <Separator />
    </>
  );
}
