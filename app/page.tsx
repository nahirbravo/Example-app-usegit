import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black

       dark:bg-black sm:items-start"
      >
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-white dark:text-zinc-50">
            Hola, soy Nahir y estoy practicando el uso de git y github
          </h1>

          <h6 className="max-w-xs text-2xl items-center gap-6 text-white">
            Probando manejo de ramas
          </h6>
        </div>
      </main>
    </div>
  );
}
