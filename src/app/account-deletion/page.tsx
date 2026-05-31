"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/Container";

export default function AccountDeletionAliasPage() {
  useEffect(() => {
    window.location.replace("/hesap-silme/");
  }, []);

  return (
    <div className="bg-white text-slate-800">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl font-sans text-center">
          <p className="text-base text-slate-700">Hesap ve veri silme sayfasına yönlendiriliyorsunuz…</p>
          <p className="mt-4">
            <Link href="/hesap-silme" className="font-semibold text-trust-blue hover:underline">
              Hesap ve Veri Silme sayfasına gidin
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
