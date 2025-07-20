import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default function Manage_Unknowns(){

    const session = getServerSession(authOptions)
    
    if(!session){
        redirect("/auth/login")
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Manage Unknows Faces</h1>
            <p className="text-lg">This page is under construction.</p>
            <p className="text-lg">Please check back later.</p>
        </div>

    );
}