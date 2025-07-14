import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CONTATTI",
    description: "Pagina dei contatti",
  };

export default function Contatti() : React.ReactNode {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold">PAGINA DEI CONTATTI</h1>
        </div>
    ) 
}   