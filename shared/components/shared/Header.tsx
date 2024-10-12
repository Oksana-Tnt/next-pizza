"use client";
import { cn } from "@/shared/lib/utils";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { CartButton } from "./CartButton";
import { ProfileButton } from "./ProfileButton";
import { AuthModal } from "./modals";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}
export const Header: FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.has("verified")) {
      setTimeout(() => {
        router.replace("/");
        toast.success("Mail verified!");
      }, 500);
    }
  }, []);
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/*LEFT*/}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1 ">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
