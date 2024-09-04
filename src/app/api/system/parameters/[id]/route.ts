import { firebaseDB } from "@/firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: any) {
    const { id } = params;

    try {
        const docRef = doc(firebaseDB, "system-params", id);

        await deleteDoc(docRef);

        return NextResponse.json({ message: "Document successfully deleted" });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
